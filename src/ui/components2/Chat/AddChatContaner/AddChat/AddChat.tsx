import React, {FC, useRef} from 'react';
import {useAppDispatch, useAppSelector} from "../../../../../bll/store/hook";
import {addUserTC} from "../../../../../bll/slices/chat-slice";
import {ItemUser} from "./Item/ItemUser";
import {Logout} from "./Logout/Logout";
import {ResponseContactInfoType} from "../../../../../api/chatAPI";

interface AddChatType {
    users: ResponseContactInfoType[]
}

export const AddChat:FC<AddChatType> = ({users}) => {

    const idInstance = useAppSelector(state => state.auth.idInstance)
    const apiTokenInstance = useAppSelector(state => state.auth.apiTokenInstance)


    const dispatch = useAppDispatch()

    const inputRef = useRef<HTMLInputElement>(null)

    const onClickHandler = () => {
        const userPhoneNumber = inputRef.current!.value;
        const userToNumber = `${userPhoneNumber}@c.us`;
        const isValidInput = /^\d{11}$/.test(userPhoneNumber);
        if (isValidInput) {
            const data = {chatId: userToNumber};
            dispatch(addUserTC(idInstance, apiTokenInstance, data));
        }
        inputRef.current!.value = '';
    };

    return (
        <div style={{border: "1px solid red"}}>
            <input ref={inputRef} placeholder="format 79....."/>
            <button onClick={onClickHandler}>Add Chat</button>
            <Logout/>
            <div>
                {users.map((user, index) => (
                    <div key={index}>
                        <ItemUser user={user}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

