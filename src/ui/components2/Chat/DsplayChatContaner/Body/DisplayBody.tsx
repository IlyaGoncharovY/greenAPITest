import React, {FC, useEffect, useRef} from 'react';
import {useAppDispatch, useAppSelector} from "../../../../../bll/store/hook";
import {MeMessageItem} from "./MeMessage/MeMessageItem";
import {GuestMessageItem} from "./GuestMessage/GuestMessageItem";
import {getMessageTC} from "../../../../../bll/slices/message-slice";
import s from "./Display.module.css"

interface DisplayBodyType {
    activateChatId: string
}

export const DisplayBody: FC<DisplayBodyType> = ({activateChatId}) => {

    const messages = useAppSelector(state => state.message.messages)
    const guestMessages = useAppSelector(state => state.message.guestMessages)
    const idInstance = useAppSelector(state => state.auth.idInstance)
    const apiTokenInstance = useAppSelector(state => state.auth.apiTokenInstance)

    const dispatch = useAppDispatch()
    const containerRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const intervalId = setInterval(() => {
          dispatch(getMessageTC(idInstance, apiTokenInstance))
        }, 6000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const filteredMessages = messages.filter((message) => message.chatId === activateChatId);
    const filteredGuestMessages = guestMessages.filter((guestMessage) => guestMessage.body.senderData.chatId === activateChatId);

    return (
        <div ref={containerRef} className={s.DisplayContainer}>
            <div className={s.MessageBox}>
                {filteredMessages.map((el, index) => (
                    <div key={index}>
                        <MeMessageItem message={el.message} />
                    </div>
                ))}
            </div>
            <div className={s.MessageBox}>
                {filteredGuestMessages.map((el, index) => (
                    <div key={index}>
                        <GuestMessageItem guestMessage={el.body} />
                    </div>
                ))}
            </div>
        </div>
    );
};

