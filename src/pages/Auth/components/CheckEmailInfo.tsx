import React, { useEffect, useState } from 'react';
import { Result } from 'antd';
import { Block } from '../../../components';
import { useLocation } from 'react-router-dom';
import { userApi } from '../../../api/user';

type InfoType = {
    status: 'success' | 'error';
    message: string;
};
const renderTextInfo = (hash: string, verified: boolean): InfoType => {
    if (hash) {
        if (verified) {
            return {
                status: 'success',
                message: 'Аккаунт успешно подтвержден!',
            };
        } else {
            return {
                status: 'error',
                message: 'Ошибка при подтверждении аккаунта!',
            };
        }
    } else {
        return {
            status: 'success',
            message: 'Ссылка с подтверждением аккаунта отправлена на E-Mail.',
        };
    }
};

const CheckEmailInfo: React.FC = () => {
    const location = useLocation();
    const [verified, setVerified] = useState(false);
    const hash = location.search.split('hash=')[1];
    const info = renderTextInfo(hash, verified);

    useEffect(() => {
        if (hash) {
            userApi.verifyHash(hash).then((data) => {
                if (data.status === 'success') {
                    setVerified(true);
                }
            });
        }
    });

    return (
        <div>
            <Block>
                <Result
                    status={info.status}
                    title={info.status === 'success' ? 'Success' : 'Error'}
                    subTitle={info.message}
                />
            </Block>
        </div>
    );
};

export default CheckEmailInfo;
