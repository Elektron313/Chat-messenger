import React from 'react';
import { EditOutlined, TeamOutlined } from '@ant-design/icons/lib';
import { Dialogs } from '../../containers';
import { Button, Form, Modal, Input, Select } from 'antd';
import { User } from '../../types/types';

type SideBar = {
    onHandleForm: (value: boolean) => void;
    visible: boolean;
    inputValue: string;
    isLoading: boolean;
    onSearch: (value: string) => void;
    onChangeInput: (value: string) => void;
    onSelectUser: (value: string) => void;
    onModalOk: () => void;
    onChangeTextArea: (e: React.FormEvent<HTMLTextAreaElement>) => void;
    messageText: string;
    selectedUserId: string;
    users: User[];
};
const { Option } = Select;

const SideBar: React.FC<SideBar> = ({
    onHandleForm,
    inputValue,
    visible,
    onSearch,
    isLoading,
    messageText,
    onChangeInput,
    onChangeTextArea,
    onModalOk,
    onSelectUser,
    selectedUserId,
    users,
}) => {
    const options = users.map((user: User) => (
        <Option key={user._id} value={user._id}>
            {user.fullName}
        </Option>
    ));
    return (
        <div className="chat__sidebar">
            <div className="chat__sidebar-header">
                <div>
                    <TeamOutlined />
                    <span> Список диалогов</span>
                </div>
                <EditOutlined onClick={() => onHandleForm(true)} />
            </div>
            <div className="chat__sidebar-dialogs">
                <Dialogs />
            </div>
            <Modal
                title="Создать диалог"
                visible={visible}
                footer={[
                    <Button key="back" onClick={() => onHandleForm(false)}>
                        Закрыть
                    </Button>,
                    <Button disabled={!messageText} key="submit" type="primary" loading={isLoading} onClick={onModalOk}>
                        Создать
                    </Button>,
                ]}
            >
                <Form className="add-dialog-form">
                    <Form.Item label="Введите имя пользователя или E-Mail">
                        <Select
                            value={inputValue}
                            onSearch={onSearch}
                            onChange={onChangeInput}
                            onSelect={onSelectUser}
                            notFoundContent={null}
                            style={{ width: '100%' }}
                            defaultActiveFirstOption={false}
                            showArrow={false}
                            filterOption={false}
                            placeholder="Введите имя пользователя или почту"
                            showSearch
                        >
                            {options}
                        </Select>
                    </Form.Item>
                    {selectedUserId && (
                        <Form.Item label="Введите текст сообщения">
                            <Input.TextArea
                                autoSize={{ minRows: 3, maxRows: 10 }}
                                onChange={onChangeTextArea}
                                value={messageText}
                            />
                        </Form.Item>
                    )}
                </Form>
            </Modal>
        </div>
    );
};

export default SideBar;
