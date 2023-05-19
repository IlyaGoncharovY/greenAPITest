import React, {FC} from 'react';
import {removeUser, setActiveChat} from "../../../../../../bll/slices/chat-slice";
import {useAppDispatch} from "../../../../../../bll/store/hook";
import {ResponseContactInfoType} from "../../../../../../api/chatAPI";
import defaultAva from "../../../../../../assects/defaultAva.png"
import {Button, Col, Row} from "react-bootstrap";
import s from "./Item.module.css"

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
        <Row onClick={() => clickActivateChat(user.chatId)} className={s.ItemContainer}>
            <Col md={4} className="d-flex justify-content-center">
                <img src={user.avatar ? user.avatar : defaultAva} alt="avatar" style={{ width: '50px' }} />
            </Col>
            <Col md={4} className="d-flex align-items-center">
                {user.name}
            </Col>
            <Col md={4} className="d-flex justify-content-end align-items-center">
                <Button onClick={() => clickDeleteHandler(user.chatId)} variant="danger">Delete</Button>
            </Col>
        </Row>
    );
};

