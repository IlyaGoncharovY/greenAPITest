import React, {FC} from 'react';
import {ResponseContactInfoType} from "../../../../../api/chatAPI";

interface HeaderBodyChatType {
    users: ResponseContactInfoType[];
    activateChatId: string
}

export const HeaderBodyChat: FC<HeaderBodyChatType> = ({users, activateChatId}) => {

    const getInfoContact = () => {
        return users.filter(el => el.chatId === activateChatId)[0]
    }

    return (
        <div>
            {activateChatId && getInfoContact() ? (
                <>
                    <img src={getInfoContact().avatar} alt={"avatar"} style={{width:"30px"}}/>
                    {getInfoContact().name ? getInfoContact().name : getInfoContact().chatId}
                </>
            ) : null}
        </div>
    );
};

