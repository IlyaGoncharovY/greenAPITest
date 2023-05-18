import React, {FC} from 'react';
import {removeUser, setActiveChat} from "../../../../../../bll/slices/chat-slice";
import {useAppDispatch} from "../../../../../../bll/store/hook";
import {ResponseContactInfoType} from "../../../../../../api/chatAPI";

interface ItemUserType {
    user: ResponseContactInfoType
}

export const ItemUser: FC<ItemUserType> = ({user}) => {

    const dispatch = useAppDispatch()

    const clickDeleteHandler = (chatId: string) => {
        dispatch(removeUser(chatId))
    }

    const clickActivateChat = (chatId: string) => {
        dispatch(setActiveChat(chatId))
    }

    return (
        <div onClick={() => clickActivateChat(user.chatId)}>
            <img src={user.avatar} alt={"avatar"} style={{width: "30px"}}/>
            {user.name}
            <button onClick={() => clickDeleteHandler(user.chatId)}>delete</button>
        </div>
    );
};

