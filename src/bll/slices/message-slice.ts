import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {messageAPI, RequestSendMessageType, ResponseGetMessageType} from "../../api/messageAPI";
import {AppThunk} from "../store/store";

interface initialStateType {
    messages: RequestSendMessageType[]
    guestMessages: ResponseGetMessageType[]
}

const initialState: initialStateType = {
    messages: [],
    guestMessages: []
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

export const getMessageTC = (idInstance: string, apiTokenInstance: string, receiptId: number): AppThunk =>
    async (dispatch) => {
    try {
            const res = await messageAPI.GetMessageBody(idInstance, apiTokenInstance);
            if (res.data) {
                dispatch(getMessage(res.data));
                await messageAPI.DeleteNotification(idInstance, apiTokenInstance, receiptId);
                console.log("Notification deleted successfully");
            }
        } catch (e) {
            console.log(e);
        }
    };


export default MessageSlice.reducer