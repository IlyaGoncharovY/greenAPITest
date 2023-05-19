import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authAPI} from "../../api/authAPI";
import {AppThunk} from "../config/store";

interface initialStateType {
    isLoggedIn: boolean
    idInstance: string
    apiTokenInstance: string
}

const initialState: initialStateType = {
    isLoggedIn: false,
    idInstance: "",
    apiTokenInstance: ""
}

const AuthSlice = createSlice({
    name: "AUTH/auth",
    initialState,
    reducers: {
        setIsLoggedIn(state, action: PayloadAction<{ value: boolean }>) {
            state.isLoggedIn = action.payload.value
        },
        setIdInstance(state, action: PayloadAction<{ idInstance: string }>) {
            state.idInstance = action.payload.idInstance
        },
        setApiTokenInstance(state, action: PayloadAction<{ apiTokenInstance: string }>) {
            state.apiTokenInstance = action.payload.apiTokenInstance
        }
    }
})

export const {setIsLoggedIn, setIdInstance, setApiTokenInstance} = AuthSlice.actions


export const loginTC = (idInstance: string, apiTokenInstance: string): AppThunk =>
    async (dispatch) => {
    try {
        const res = await authAPI.login(idInstance, apiTokenInstance);
        if (res.data.wid.length) {
            dispatch(setIsLoggedIn({value: true}));
            dispatch(setIdInstance({ idInstance }));
            dispatch(setApiTokenInstance({ apiTokenInstance }));
        }
    } catch (e) {
        console.log({e});
    }
};

export const logOutTC = (idInstance: string, apiTokenInstance: string): AppThunk =>
    async (dispatch) => {
    try {
        const res = await authAPI.logout(idInstance, apiTokenInstance);
        if (res.data.isLogout) {
            dispatch(setIsLoggedIn({value: false}));
            dispatch(setIdInstance({ idInstance: '' }));
            dispatch(setApiTokenInstance({ apiTokenInstance: '' }));
        }
    } catch (e) {
        console.log({e});
    }
};

export default AuthSlice.reducer;