import React, {FC} from 'react';
import {HeaderBodyChat} from "./Header/HeaderBodyChat";
import {DisplayBody} from "./Body/DisplayBody";
import {InputForMessage} from "./Footer/InputForMessage";
import {ResponseContactInfoType} from "../../../../api/chatAPI";
import {Container} from "react-bootstrap";

interface DisplayContainerType {
    users: ResponseContactInfoType[]
    activateChatId: string
}

export const DisplayContainer:FC<DisplayContainerType> = ({users, activateChatId}) => {

    return (
        <div style={{ height: '100vh' }}>
            <Container fluid style={{ height: '16.66%' }}>
                <HeaderBodyChat users={users} activateChatId={activateChatId} />
            </Container>
            <Container fluid style={{ height: '66.66%',border: "2px solid black", borderRadius:"10px" }}>
                <DisplayBody activateChatId={activateChatId} />
            </Container>
            <Container fluid style={{ height: '16.66%', paddingTop:"10px" }}>
                <InputForMessage />
            </Container>
        </div>
    );
};

