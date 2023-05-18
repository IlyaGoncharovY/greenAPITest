import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authAPI} from "../../api/authAPI";
import {AppThunk} from "../store/store";
import {setIsLoggedIn} from "./auth-slice";

interface initialStateType {
    isInitialized: boolean
}

const initialState: initialStateType = {
    isInitialized: false
}

const authorizedSlice = createSlice({
    name: "APP/authorized",
    initialState,
    reducers: {
        MeStateInstance(state, action: PayloadAction<{ value: boolean }>) {
            state.isInitialized = action.payload.value
        }
    }
})

export const {MeStateInstance} = authorizedSlice.actions

export const initializedAppTC = (idInstance:string, apiTokenInstance: string): AppThunk => async dispatch => {
    try {
        const res = await authAPI.authorized(idInstance, apiTokenInstance)
        if (res.data.stateInstance === 'authorized') {
            dispatch(setIsLoggedIn({value: true}))
        }
    } catch (e) {
        console.log({e})
    } finally {
        dispatch(MeStateInstance({value: true}))
    }
}

export default authorizedSlice.reducer