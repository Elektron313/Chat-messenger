import { instance } from './api';
import { User } from '../types/types';
import { DialogType } from './dialogs';

export type MessageTypeServer = {
    _id: string;
    text?: string;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    readed: boolean;
    dialog: DialogType;
    // attachments?: any;
    // isTyping?: boolean;
    // audio?: string;
};

type Send = {
    text: string | null;
    dialog_id: string;
    attachments: string[];
};
export const messagesApi = {
    getAllForDialogId: (id: string): Promise<MessageTypeServer[]> => instance.get(`/messages/?dialog=${id}`),
    send: ({ text, dialog_id, attachments }: Send): Promise<any> =>
        instance.post('/messages', { text, dialog_id, attachments }),
    delete: (id: string): Promise<{ status: string; message: string }> => instance.delete('messages/?id=' + id),
};
