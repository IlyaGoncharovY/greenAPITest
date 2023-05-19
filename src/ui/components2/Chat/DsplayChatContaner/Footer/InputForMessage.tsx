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
        <div className="d-flex justify-content-center">
            <input className="form-control me-2" placeholder="Type your message" ref={inputSendRef} style={{ flex: '8' }} />
            <button className="btn btn-primary" onClick={onClickHandler} style={{ flex: '2' }}>
                Send
            </button>
        </div>
    );
};

