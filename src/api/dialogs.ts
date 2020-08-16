import { instance } from './api';
import { User } from '../types/types';

export type DialogType = {
    _id: string;
    author: User;
    partner: User;
    lastMessage: {
        _id: string;
        unread: boolean;
        text?: string;
        user: User;
        createdAt: Date;
        updatedAt?: Date;
    };
    createdAt: Date;
    updatedAt: Date;
};

export const dialogsApi = {
    getAll: (): Promise<DialogType[]> => instance.get('/dialogs'),
    create: (partner: string, text: string) => instance.post('/dialogs/', { partner, text }),
};
