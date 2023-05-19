import React, {FC} from 'react';
import {Card} from "react-bootstrap";
import s from "./MeMessage.module.css"

interface MeMessageItemType {
    message: string
}

export const MeMessageItem: FC<MeMessageItemType> = ({message}) => {
    return (
        <Card className={s.MeMessageContainer}>
            <Card.Body>
                <Card.Text>{message}</Card.Text>
            </Card.Body>
        </Card>
    );
};

