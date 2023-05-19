import React, {FC} from 'react';
import { Card } from 'react-bootstrap';
import {ResponseGetMessageTypeBody} from "../../../../../../api/messageAPI";
import s from "./GuestMessage.module.css"


interface GuestMessageItemType {
    guestMessage: ResponseGetMessageTypeBody
}

export const GuestMessageItem:FC<GuestMessageItemType> = ({guestMessage}) => {
    return (
        <Card className={s.GuestMessageItem}>
            <Card.Body>
                <Card.Text className="text-end">{guestMessage.messageData.textMessageData.textMessage}</Card.Text>
            </Card.Body>
        </Card>
    );
};

