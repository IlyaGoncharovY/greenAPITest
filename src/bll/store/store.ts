import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import authorizedReducer from "../slices/app-slice"
import AuthReducer from "../slices/auth-slice";


export const store = configureStore({
    reducer: {
        app: authorizedReducer,
        auth: AuthReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;