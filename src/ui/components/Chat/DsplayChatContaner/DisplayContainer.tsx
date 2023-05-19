import React, {FC} from 'react';
import {HeaderBodyChat} from "./Header/HeaderBodyChat";
import {DisplayBody} from "./Body/DisplayBody";
import {InputForMessage} from "./Footer/InputForMessage";
import {ResponseContactInfoType} from "../../../../api/chatAPI";
import {Container} from "react-bootstrap";
import s from "./Display.module.css"

interface DisplayContainerType {
    users: ResponseContactInfoType[]
    activateChatId: string
}

export const DisplayContainer:FC<DisplayContainerType> = ({users, activateChatId}) => {

    return (
        <div className={s.displayContainer}>
            <Container fluid className={s.headerContainer}>
                <HeaderBodyChat users={users} activateChatId={activateChatId} />
            </Container>
            <Container fluid className={s.displayBodyContainer}>
                <DisplayBody activateChatId={activateChatId} />
            </Container>
            <Container fluid className={s.inputContainer}>
                <InputForMessage />
            </Container>
        </div>
    );
};

