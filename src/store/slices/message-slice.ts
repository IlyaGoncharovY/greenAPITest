import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
    messageAPI,
    RequestSendMessageType,
    ResponseGetMessageType,
    ResponseGetMessageTypeBodySenderData
} from "../../api/messageAPI";
import {AppThunk} from "../config/store";

interface initialStateType {
    messages: RequestSendMessageType[]
    guestMessages: ResponseGetMessageType[]
}

const initialState: initialStateType = {
    messages: [],
    guestMessages: []
}

export interface ExtendedResponseGetMessageType extends ResponseGetMessageType {
    idMessage: string;
    senderData: ResponseGetMessageTypeBodySenderData;
}

const MessageSlice = createSlice({
    name: "MESSAGE/message",
    initialState,
    reducers: {
        sendMessage(state, action: PayloadAction<RequestSendMessageType>) {
            state.messages.push(action.payload)
        },
        getMessage(state, action: PayloadAction<ResponseGetMessageType>) {
            state.guestMessages.push(action.payload)
        }
    }
})

export const {sendMessage, getMessage} = MessageSlice.actions

export const sendMessageTC = (idInstance: string, apiTokenInstance: string, data: RequestSendMessageType): AppThunk =>
    async (dispatch) => {
        try {
            const res = await messageAPI.SendMessage(idInstance, apiTokenInstance, data)
            if (res.data.idMessage) {
                dispatch(sendMessage(data))
            }
        } catch (e) {
            console.log(e)
        }
    }

export const getMessageTC = (idInstance: string, apiTokenInstance: string): AppThunk =>
    async (dispatch) => {
        try {
            const res = await messageAPI.GetMessageBody(idInstance, apiTokenInstance);
            if (res.data) {
                const {idMessage, messageData, senderData, typeWebhook} = res.data.body
                if (typeWebhook === "incomingMessageReceived"
                    && messageData.typeMessage === "textMessage") {
                  const extendedResponse: ExtendedResponseGetMessageType = {
                      ...res.data,
                      idMessage,
                      senderData
                  }
                  dispatch(getMessage(extendedResponse))
                }
            }
            const receiptId = res.data.receiptId
            if (res.data.receiptId) {
               await messageAPI.DeleteNotification(idInstance, apiTokenInstance, receiptId)
            }

        } catch (e) {
            console.log(e);
        }
    };


export default MessageSlice.reducer