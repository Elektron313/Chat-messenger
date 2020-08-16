import React, { useCallback, useEffect, useState } from 'react';
import { DialogItem } from '../../components';
import { orderBy } from 'lodash';
import { Empty, Input } from 'antd';
import './DialogItem.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/store';
import { fetchDialogs } from '../../redux/slices/dialogsSlice';
import { fetchMessagesFromDialog } from '../../redux/slices/messagesSlice';
import { DialogType } from '../../api/dialogs';
import socket from '../../core/socket';
import { User } from '../../types/types';

const Dialogs: React.FC = () => {
    const myId = useSelector((state: AppStateType) => state.userReducer.user!._id);
    const [inputValue, setValue] = useState('');
    const dispatch = useDispatch();
    const items = useSelector((state: AppStateType) => state.dialogsReducer.items);
    const currentDialogId = useSelector((state: AppStateType) => state.dialogsReducer.currentDialogId);
    const [filtred, setFiltred] = useState<DialogType[]>([]);
    const updateDialogs = () => {
        dispatch(fetchDialogs());
    };
    useEffect(() => {
        dispatch(fetchDialogs());
        socket.on('SERVER:NEW_MESSAGE', updateDialogs);
        socket.on('SERVER:DIALOG_CREATED', updateDialogs);
        return () => {
            socket.removeListener('SERVER:NEW_MESSAGE', updateDialogs);
            socket.removeListener('SERVER:DIALOG_CREATED', updateDialogs);
        };
    }, []);

    useEffect(() => {
        setFiltred([...items]);
    }, [items]);

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        setValue(value);
        const sortFiltred = items.filter(
            (dialog) =>
                dialog.author.fullName.toLowerCase().indexOf(value.toLowerCase()) >= 0 ||
                dialog.partner.fullName.toLowerCase().indexOf(value.toLowerCase()) >= 0
        );
        setFiltred(sortFiltred);
    };

    return (
        <div className={'dialogs'}>
            <div className="dialogs__search">
                <Input.Search placeholder={'Поиск среди контактов'} value={inputValue} onChange={onChange} />
            </div>
            {filtred.length > 0 ? (
                orderBy(filtred, ['created_at'], ['desc']).map((item) => {
                    let user: User;
                    if (myId === item.author._id) {
                        user = item.partner;
                    } else {
                        user = item.author;
                    }
                    return (
                        <DialogItem
                            key={item._id}
                            unreaded={0}
                            createdAt={item.lastMessage.createdAt}
                            isReaded={false}
                            text={item.lastMessage?.text}
                            user={user}
                            isMe={item.lastMessage.user._id === myId}
                            currentDialogId={currentDialogId}
                            id={item._id}
                        />
                    );
                })
            ) : (
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'Ничего не найдено'} />
            )}
        </div>
    );
};

export default Dialogs;
