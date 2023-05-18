import {instance} from "./authAPI";

export const messageAPI = {
    SendMessage(idInstance: string, apiTokenInstance: string, data: RequestSendMessageType) {
        return instance.post<ResponseSendMessageType>(`waInstance${idInstance}/SendMessage/${apiTokenInstance}`, data)
    },
    GetMessageBody(idInstance: string, apiTokenInstance: string) {
        return instance.get<ResponseGetMessageType>(`waInstance${idInstance}/getContactInfo/${apiTokenInstance}`
        )
    },
    DeleteNotification(idInstance: string, apiTokenInstance: string, receiptId: number) {
        return instance.delete<ResponseDeleteNotification>(`waInstance${idInstance}/DeleteNotification/${apiTokenInstance}/${receiptId}`)
    }
}

/**
 * type request message, request chatId
 */
export type RequestSendMessageType = {
    chatId: string;
    message: string;
}

export type ResponseSendMessageType = {
    /**
     * response for send message
     */
    idMessage: string;
}
/**
 * common type for body Get Message
 */
export type ResponseGetMessageType = {
    receiptId: number;
    body: ResponseGetMessageTypeBody;
}

export type ResponseDeleteNotification = {
    /**
     * Result of deleting an incoming notification:
     * true - the incoming notification has been successfully
     * removed from the queue;
     */
    result: boolean
}

export type ResponseGetMessageTypeBodyInstanceData = {
    idInstance: number;
    wid: string;
    typeInstance: string;
}

export type ResponseGetMessageTypeBodySenderData = {
    chatId: string;
    chatName: string;
    sender: string;
    senderName: string;
}

export type ResponseGetMessageTypeBodyMessageDataExtendedTextMessageData = {
    text: string;
    description: string;
    title: string;
    previewType: string;
    jpegThumbnail: string;
}

export type ResponseGetMessageTypeBodyMessageData = {
    typeMessage: string;
    extendedTextMessageData: ResponseGetMessageTypeBodyMessageDataExtendedTextMessageData;
}

export type ResponseGetMessageTypeBody = {
    typeWebhook: string;
    instanceData: ResponseGetMessageTypeBodyInstanceData;
    timestamp: number;
    idMessage: string;
    senderData: ResponseGetMessageTypeBodySenderData;
    messageData: ResponseGetMessageTypeBodyMessageData;
}
