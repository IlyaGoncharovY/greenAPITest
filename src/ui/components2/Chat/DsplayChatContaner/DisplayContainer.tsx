import React, {FC} from 'react';
import {HeaderBodyChat} from "./Header/HeaderBodyChat";
import {DisplayBody} from "./Body/DisplayBody";
import {InputForMessage} from "./Footer/InputForMessage";
import {ResponseContactInfoType} from "../../../../api/chatAPI";

interface DisplayContainerType {
    users: ResponseContactInfoType[]
    activateChatId: string
}

export const DisplayContainer:FC<DisplayContainerType> = ({users, activateChatId}) => {

    return (
        <div style={{border: "1px solid green"}}>
            <HeaderBodyChat users={users} activateChatId={activateChatId}/>
            <DisplayBody activateChatId={activateChatId}/>
            <InputForMessage/>
        </div>
    );
};

