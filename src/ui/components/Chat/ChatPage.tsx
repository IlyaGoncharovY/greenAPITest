import React, {useEffect} from 'react';
import {Navigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "../../../bll/store/hook";
import {PATH} from "../../../utils/path/PATH";
import {logOutTC} from "../../../bll/slices/auth-slice";

export const ChatPage = () => {

    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    const idInstance = useAppSelector(state => state.auth.idInstance)
    const apiTokenInstance = useAppSelector(state => state.auth.apiTokenInstance)


    const dispatch = useAppDispatch()

    const LogOutHandler = () => {
        dispatch(logOutTC(idInstance, apiTokenInstance))
    }


    useEffect(() => {
        if (!isLoggedIn) {
            return;
        }
    }, [isLoggedIn])

    if (!isLoggedIn) {
        return <Navigate to={PATH.LOGIN}/>
    }

    return (
        <div>
            ChatPage
            <button onClick={LogOutHandler}>LogOut</button>
        </div>
    );
};

