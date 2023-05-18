import React, {useEffect} from 'react';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from "../../../bll/store/hook";
import {PATH} from "../../../utils/path/PATH";
import {DisplayContainer} from "./DsplayChatContaner/DisplayContainer";
import {AddChat} from "./AddChatContaner/AddChat/AddChat";

export const ChatPage = () => {

    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    const users = useAppSelector(state => state.chat.users)
    const activateChatId = useAppSelector(state => state.chat.activateChatId)

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
            <div style={{display: "flex", justifyContent: "space-between", border:"1px solid blue"}}>
                <AddChat users={users}/>
                <DisplayContainer users={users} activateChatId={activateChatId}/>
            </div>
        </div>
    );
};

