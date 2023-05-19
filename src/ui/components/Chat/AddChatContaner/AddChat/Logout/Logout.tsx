import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../../../../store/config/hook";
import {logOutTC} from "../../../../../../store/slices/auth-slice";
import {Button} from "react-bootstrap";



export const Logout = () => {
    const idInstance = useAppSelector(state => state.auth.idInstance)
    const apiTokenInstance = useAppSelector(state => state.auth.apiTokenInstance)


    const dispatch = useAppDispatch()

    const LogOutHandler = () => {
        dispatch(logOutTC(idInstance, apiTokenInstance))
    }

    return (
        <div>
            <Button variant={"warning"} onClick={LogOutHandler}>LogOut</Button>
        </div>
    );
};

