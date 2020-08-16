import React, { useState } from 'react';

import { SideBar as SideBarBase } from '../../components';
import { userApi } from '../../api/user';
import { dialogsApi } from '../../api/dialogs';
import { User } from '../../types/types';

const SideBar: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [messageText, setMessageText] = useState('');
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState('');

    const onSearch = (value: string) => {
        setIsLoading(true);
        userApi
            .findUsers(value)
            .then((data) => {
                setUsers(data);
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
            });
    };

    const onAddDialog = () => {
        dialogsApi
            .create(selectedUserId, messageText)
            .then(() => onHandleForm(false))
            .catch(() => {
                setIsLoading(false);
            });
    };

    const onHandleForm = (value: boolean) => {
        setVisible(value);
    };
    const handleChangeInput = (value: string) => {
        setInputValue(value);
    };
    const onChangeTextArea = (e: React.FormEvent<HTMLTextAreaElement>) => {
        setMessageText(e.currentTarget.value);
    };
    const onSelectUser = (userId: string) => {
        setSelectedUserId(userId);
    };
    return (
        <>
            <SideBarBase
                inputValue={inputValue}
                visible={visible}
                onHandleForm={onHandleForm}
                isLoading={isLoading}
                onSearch={onSearch}
                onChangeInput={handleChangeInput}
                onSelectUser={onSelectUser}
                onModalOk={onAddDialog}
                onChangeTextArea={onChangeTextArea}
                messageText={messageText}
                selectedUserId={selectedUserId}
                users={users}
            />
        </>
    );
};

export default SideBar;
