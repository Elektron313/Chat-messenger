import { instance } from './api';
import { MessageType } from '../types/types';

export const messagesApi = {
    getAllForDialogId: (id: string): Promise<MessageType[]> => instance.get(`/messages?_id=${id}`),
};
