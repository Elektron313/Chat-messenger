import React, { useEffect, useRef, useState } from 'react';
import { Empty, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import './Messages.scss';
import classNames from 'classnames';
import { Message } from '../../components';
import { AppStateType } from '../../redux/store';
import socket from '../../core/socket';
import { addMessage, deleteMessageFromDialog, fetchMessagesFromDialog } from '../../redux/slices/messagesSlice';
import { MessageTypeServer } from '../../api/messages';

const Messages: React.FC = () => {
    const dispatch = useDispatch();
    const items = useSelector((state: AppStateType) => state.messagesReducer.items);
    const dialog = useSelector((state: AppStateType) => state.dialogsReducer.currentDialogId);
    const isLoading = useSelector((state: AppStateType) => state.messagesReducer.isLoading);
    const myId = useSelector((state: AppStateType) => state.userReducer.user?._id);
    const attachments = useSelector((state: AppStateType) => state.attachmentsReducer.items);
    const myRef = useRef<HTMLDivElement>(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [blockHeight, setBlockHeight] = useState(135);
    const [isTyping, setIsTyping] = useState(false);
    // let typingTimeoutId = null;
    const onNewMessage = (data: MessageTypeServer) => {
        if (dialog === data.dialog._id) {
            dispatch(addMessage(data));
        }
    };
    // const toggleIsTyping = () => {
    //     setIsTyping(true);
    //     clearInterval(typingTimeoutId);
    //     typingTimeoutId = setTimeout(() => {
    //         setIsTyping(false);
    //     }, 3000);
    // };

    // useEffect(() => {
    //     socket.on("DIALOGS:TYPING", toggleIsTyping);
    // }, []);

    useEffect(() => {
        if (attachments.length) {
            setBlockHeight(245);
        } else {
            setBlockHeight(135);
        }
    }, [attachments]);
    useEffect(() => {
        setTimeout(function () {
            if (myRef.current) {
                myRef.current.scrollTop = 999999999;
            }
        }, 2);
        socket.on('SERVER:NEW_MESSAGE', onNewMessage);
        return () => {
            socket.removeListener('SERVER:NEW_MESSAGE', onNewMessage);
        };
    }, [items]);

    useEffect(() => {
        if (dialog) {
            dispatch(fetchMessagesFromDialog(dialog));
        }
    }, [dialog]);

    const onRemoveMessage = (id: string) => {
        dispatch(deleteMessageFromDialog(id));
    };
    return (
        <div className="chat__dialog-messages" style={{ height: `calc(100% - ${blockHeight}px)` }}>
            <div className={classNames('messages', { 'messages--loading': isLoading })} ref={myRef}>
                {isLoading ? (
                    <Spin size="large" tip="Загрузка сообщений..." />
                ) : items.length > 0 && !isLoading ? (
                    items.length > 0 ? (
                        items.map((item) => (
                            <Message
                                key={item._id}
                                isMe={myId === item.user._id}
                                _id={item._id}
                                date={item.createdAt}
                                text={item.text}
                                user={item.user}
                                onRemoveMessage={onRemoveMessage}
                            />
                        ))
                    ) : (
                        <Empty description="Диалог пуст" />
                    )
                ) : (
                    <Empty description="Откройте диалог" />
                )}
            </div>
        </div>
    );
};

export default Messages;
