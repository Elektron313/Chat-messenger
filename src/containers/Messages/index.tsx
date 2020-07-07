import React, {useEffect, useRef} from 'react';
import { Empty, Spin } from 'antd';
import { useSelector } from 'react-redux';
import './Messages.scss';

import { Message } from '../../components/index';
import { AppStateType } from '../../redux/store';
import classNames from 'classnames';

const Messages: React.FC = () => {
    const items = useSelector((state: AppStateType) => state.dialogsReducer.currentDialogId);
    const isLoading = useSelector((state: AppStateType) => state.dialogsReducer.isLoading);
    const messagesRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (messagesRef.current) {
            console.log(messagesRef.current);
            messagesRef.current.scrollTo(0, 999999);
        }
    }, [items]);
    return (
        <div className={classNames('messages', { 'messages--loading': isLoading })} ref={messagesRef}>
            {isLoading ? (
                <Spin size={'large'} tip={'Загрузка сообщений'} />
            ) : items.length > 0 ? (
                items.map((message, index) => <Message key={index} {...message} />)
            ) : (
                <Empty description={'Откройте диалог'} />
            )}
        </div>
    );
};

export default Messages;
