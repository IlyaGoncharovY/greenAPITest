import React, {useRef} from 'react';
import {useAppDispatch, useAppSelector} from "../../../../../bll/store/hook";
import {sendMessageTC} from "../../../../../bll/slices/message-slice";


export const InputForMessage = () => {

    const idInstance = useAppSelector(state => state.auth.idInstance)
    const apiTokenInstance = useAppSelector(state => state.auth.apiTokenInstance)
    const chatId = useAppSelector(state => state.chat.activateChatId)

    const dispatch = useAppDispatch()

    const inputSendRef = useRef<HTMLInputElement>(null)

    const onClickHandler = () => {
        const messageOfUser = inputSendRef.current!.value
        if (messageOfUser) {
            const data = {chatId, message: messageOfUser}
            dispatch(sendMessageTC(idInstance, apiTokenInstance, data))
        }
        inputSendRef.current!.value = ""
    }

    return (
            <div>
                <input placeholder={"tap you message"} ref={inputSendRef}/>
                <button onClick={onClickHandler}>to send</button>
            </div>

    );
};

