import React from 'react';
import { MessageType } from '../Message';
import { Message } from '../index';
import { Empty } from 'antd';

type MessagesType = {
    items: MessageType[] | null;
};
const Messages: React.FC<MessagesType> = ({ items }) => {
    return <>{items ? items.map((message, index) => <Message key={index} {...message} />) : <Empty description={'Откройте диалог'} />}</>;
};

export default Messages;
