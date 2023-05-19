import React, {FC} from 'react';
import {ResponseContactInfoType} from "../../../../../api/chatAPI";
import defaultAva from "../../../../../assects/defaultAva.png"

interface HeaderBodyChatType {
    users: ResponseContactInfoType[];
    activateChatId: string
}

export const HeaderBodyChat: FC<HeaderBodyChatType> = ({users, activateChatId}) => {

    const getInfoContact = () => {
        return users.filter(el => el.chatId === activateChatId)[0]
    }

    return (
        <div className="d-flex align-items-center">
            {activateChatId && getInfoContact() ? (
                <>
                    <img
                        src={getInfoContact().avatar ? getInfoContact().avatar : defaultAva}
                        alt="avatar"
                        style={{ width: '40px' }}
                        className="m-2"
                    />
                    <div>{getInfoContact().name ? getInfoContact().name : getInfoContact().chatId}</div>
                </>
            ) : null}
        </div>
    );
};

