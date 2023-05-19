import React, {FC, useRef} from 'react';
import {useAppDispatch, useAppSelector} from "../../../../../store/config/hook";
import {addUserTC} from "../../../../../store/slices/chat-slice";
import {ItemUser} from "./Item/ItemUser";
import {Logout} from "./Logout/Logout";
import {ResponseContactInfoType} from "../../../../../api/chatAPI";
import {Button, Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";

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
        <Container style={{ padding: '20px' }}>
            <Row>
                <Col md={8}>
                    <InputGroup className="mb-3">
                        <FormControl placeholder="(format: 79.....)" ref={inputRef} />
                        <Button variant="primary" onClick={onClickHandler}>
                            Add Chat
                        </Button>
                    </InputGroup>
                </Col>
                <Col md={4}>
                    <Logout />
                </Col>
            </Row>
            {users.map((user, index) => (
                <Row key={index}>
                    <Col md={12}>
                        <ItemUser user={user} />
                    </Col>
                </Row>
            ))}
        </Container>

    );
};

