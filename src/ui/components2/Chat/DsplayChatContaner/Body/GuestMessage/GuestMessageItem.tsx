import React, {FC} from 'react';
import {ResponseGetMessageTypeBody} from "../../../../../../api/messageAPI";

interface GuestMessageItemType {
    guestMessage: ResponseGetMessageTypeBody
}

export const GuestMessageItem:FC<GuestMessageItemType> = ({guestMessage}) => {
    return (
        <div>
            Guest - {guestMessage.messageData.textMessageData.textMessage}
        </div>
    );
};

