import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import authorizedReducer from "../slices/app-slice"
import AuthReducer from "../slices/auth-slice";
import ChatSlice from "../slices/chat-slice";
import MessageSlice from "../slices/message-slice";


export const store = configureStore({
    reducer: {
        app: authorizedReducer,
        auth: AuthReducer,
        chat: ChatSlice,
        message: MessageSlice
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;