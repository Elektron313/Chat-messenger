export type User = {
    _id: string;
    email: string;
    avatar?: string;
    fullName: string;
    password: string;
    isOnline: boolean;
    confirmed: boolean;
    confirmed_hash: string;
    last_seen: Date;
};
export type DialogsItemType = {
    createdAt: Date;
    text: string | undefined;
    isReaded: boolean;
    user: User;
    unreaded: number;
    isMe: boolean;
    id: string;
};

export type MessageType = {
    _id: string;
    text?: string;
    date: Date;
    user: User;
    isMe: boolean;
    isReaded?: boolean;
    attachments?: any;
    isTyping?: boolean;
    audio?: string;
    onRemoveMessage: (id: string) => void;
};
