import React, {useEffect} from 'react';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from "../../../store/config/hook";
import {PATH} from "../../../utils/path/PATH";
import {DisplayContainer} from "./DsplayChatContaner/DisplayContainer";
import {AddChat} from "./AddChatContaner/AddChat/AddChat";
import {Col, Container, Row} from "react-bootstrap";

export const ChatPage = () => {

    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    const users = useAppSelector(state => state.chat.users)
    const activateChatId = useAppSelector(state => state.chat.activateChatId)

    useEffect(() => {
        if (!isLoggedIn) {
            return;
        }
    }, [isLoggedIn])

    if (!isLoggedIn) {
        return <Navigate to={PATH.LOGIN}/>
    }

    return (
        <Container fluid style={{ height: "100vh" }}>
            <Row style={{ height: "100%" }}>
                <Col md={4} style={{ backgroundColor: "#97c9b2"}}>
                    <AddChat users={users} />
                </Col>
                <Col md={8} style={{ backgroundColor: "#a2aba0"}}>
                    <DisplayContainer users={users} activateChatId={activateChatId} />
                </Col>
            </Row>
        </Container>
    );
};

