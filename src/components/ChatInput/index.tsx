import React, { useCallback, useState } from 'react';
import './ChatInput.scss';
import { Input } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { AudioOutlined, CameraOutlined, RightCircleOutlined } from '@ant-design/icons/lib';

const Button: React.FC = () => {
    const [isValue, setValue] = useState<string>('');

    const onChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }, []);

    return (
        <div className={'chat-input'}>
            <div className="chat-input__smile-btn">
                <SmileOutlined />
            </div>
            <Input placeholder={'Введите текст сообщения'} size={'large'} onChange={onChange} />
            <div className="chat-input__actions">
                <CameraOutlined />
                {isValue ? <RightCircleOutlined /> : <AudioOutlined />}
            </div>
        </div>
    );
};

export default Button;
