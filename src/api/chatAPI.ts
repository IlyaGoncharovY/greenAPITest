import {instance} from "./authAPI";

export const chatAPI = {
    getContactsInfo(idInstance: string, apiTokenInstance: string, data: RequestContactInfoType) {
        return instance.post<ResponseContactInfoType>(`waInstance${idInstance}/getContactInfo/${apiTokenInstance}`, data)
    },
    CheckWA(idInstance: string, apiTokenInstance: string, data: RequestCheckWAType) {
        return instance.post<ResponseCheckWA>(`waInstance${idInstance}/CheckWhatsapp/${apiTokenInstance}`, data)
    }
}

export type RequestContactInfoType = {
    /**
     * id of a specific chat
     */
    chatId: string
}

export type RequestCheckWAType = {
    /**
     * phoneNumber of a specific user
     */
    phoneNumber: number
}

export type ResponseContactInfoType = {
    /**
     * body contact info
     */
	avatar: string;
	name: string;
	email: string;
	category: string;
	description: string;
	products: any[];
	chatId: string;
	lastSeen?: any;
	isArchive: boolean;
	isDisappearing: boolean;
	isMute: boolean;
	messageExpiration: number;
	muteExpiration?: any;
}

type ResponseCheckWA = {
    /**
     * The flag of the presence of WhatsApp on the phone number
     * true = ok!
     */
    existsWhatsapp: boolean
}