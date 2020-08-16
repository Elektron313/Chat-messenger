import { notification } from 'antd';
import { NotificationApi } from 'antd/es/notification';

// type Type = 'success' | 'error' | 'info' | 'warning' | 'warn' | 'open' | 'close' | 'destroy';

type Param = {
    text: string;
    type?: keyof NotificationApi;
    tittle?: string;
};

export default ({ text, type = 'info', tittle }: Param) => {
    // @ts-ignore
    notification[type]({
        message: tittle,
        description: text,
    });
};
