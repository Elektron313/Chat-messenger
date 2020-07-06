import { DialogItem } from '../components';

export type User = {
    _id: string;
    avatar?: string;
    fullName: string;
};
export type DialogItemType = {
    text: string;
    created_at: Date | string;
    isReaded: boolean;
    user: User;
    isMe: boolean;
    unreaded: number;
    isOnilne: boolean;
};

export type DialogsContainer = {
    items: DialogItemType[];
};
