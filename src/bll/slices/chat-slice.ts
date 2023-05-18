import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppThunk} from "../store/store";
import {chatAPI, RequestContactInfoType, ResponseContactInfoType} from "../../api/chatAPI";

interface initialStateType {
    users: ResponseContactInfoType[]
    activateChatId: string
}

const initialState: initialStateType = {
    users: [],
    activateChatId: ""
}

const ChatSlice = createSlice({
    name: "CHAT/chat",
    initialState,
    reducers: {
        addUser(state, action: PayloadAction<ResponseContactInfoType>) {
            state.users.push(action.payload)
        },
        removeUser(state, action: PayloadAction<string>) {
            state.users = state.users.filter((el) => el.chatId !== action.payload)
        },
        setActiveChat: (state, action: PayloadAction<string>) => {
            state.activateChatId = action.payload;
        },
    }
})
export const {addUser, removeUser, setActiveChat} = ChatSlice.actions

export const addUserTC = (idInstance: string, apiTokenInstance: string, data: RequestContactInfoType): AppThunk =>
    async (dispatch) => {
        try {
            const res = await chatAPI.getContactsInfo(idInstance, apiTokenInstance, data)
            if (res.data.chatId) {
                dispatch(addUser(res.data))
            }
        } catch (e) {
            alert("not user!")
        }
    }


export default ChatSlice.reducer