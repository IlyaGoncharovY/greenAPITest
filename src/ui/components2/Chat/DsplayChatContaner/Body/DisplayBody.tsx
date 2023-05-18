import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../../../bll/store/hook";
import {MeMessageItem} from "./MeMessage/MeMessageItem";
import {GuestMessageItem} from "./GuestMessage/GuestMessageItem";
import {getMessageTC} from "../../../../../bll/slices/message-slice";


interface DisplayBodyType {
    activateChatId: string
}

export const DisplayBody: FC<DisplayBodyType> = ({activateChatId}) => {

    const messages = useAppSelector(state => state.message.messages)
    const guestMessages = useAppSelector(state => state.message.guestMessages)
    const idInstance = useAppSelector(state => state.auth.idInstance)
    const apiTokenInstance = useAppSelector(state => state.auth.apiTokenInstance)

    const dispatch = useAppDispatch()

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         guestMessages.forEach((guestMessage) => {
    //             const receiptId = guestMessage.receiptId;
    //             dispatch(getMessageTC(idInstance, apiTokenInstance, receiptId));
    //             console.log(guestMessage)
    //         });
    //     }, 1000);
    //
    //     return () => {
    //         clearInterval(intervalId);
    //     };
    // }, [dispatch, guestMessages]);;
    useEffect(() => {
        const intervalId = setInterval(() => {
          dispatch(getMessageTC(idInstance, apiTokenInstance))
        }, 2000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const filteredMessages = messages.filter((message) => message.chatId === activateChatId);
    const filteredGuestMessages = guestMessages.filter((guestMessage) => guestMessage.body.senderData.chatId === activateChatId);

    return (
        <div>
            <div>
                Me - {filteredMessages.map((el, index) =>
                <div key={index}>
                    <MeMessageItem message={el.message}/>
                </div>)}
            </div>
            <div>
                Other - {filteredGuestMessages.map((el, index) =>
                <div key={index}>
                    <GuestMessageItem guestMessage={el.body}/>
                </div>
            )}
            </div>
        </div>
    );
};

