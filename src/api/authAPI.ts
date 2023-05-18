import axios from "axios";

export const instance = axios.create({
    baseURL: "https://api.green-api.com/",
    // withCredentials: true
})

export const authAPI = {
    login(idInstance:string, apiTokenInstance: string) {
        return instance.get<DataRequestType>(`waInstance${idInstance}/GetSettings/${apiTokenInstance}`)
    },
    logout(idInstance:string, apiTokenInstance: string) {
        return instance.get<ResponseLogoutType>(`waInstance${idInstance}/logout/${apiTokenInstance}`)
    },
    authorized(idInstance:string, apiTokenInstance: string) {
        return instance.get<ResponseAuthorizedType>(`waInstance${idInstance}/getStateInstance/${apiTokenInstance}`)
    }
}

export type DataRequestType = {
    /**
     * body post response
     */
    wid: string;
    countryInstance: string;
    typeAccount: string;
    webhookUrl: string;
    webhookUrlToken: string;
    delaySendMessagesMilliseconds: number;
    markIncomingMessagesReaded: string;
    markIncomingMessagesReadedOnReply: string;
    outgoingWebhook: string;
    outgoingMessageWebhook: string;
    stateWebhook: string;
    incomingWebhook: string;
    deviceWebhook: string;
    statusInstanceWebhook: string;
    sendFromUTC: string;
    sendToUTC: string;
}

export type ResponseLogoutType = {
    /**
     * isLogout === true when logged out
     */
    isLogout: boolean
}

export type ResponseAuthorizedType = {
    /**
     * when logged in "authorized", when logged in "notAuthorized"
     */
    stateInstance: string
}

