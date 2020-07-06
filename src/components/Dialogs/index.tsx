import React from 'react';
import { DialogItem } from '../index';
import { orderBy } from 'lodash';
import { DialogItemType } from '../../types/types';
import { Empty, Input } from 'antd';
import './DialogItem.scss';

type Props = {
    items: DialogItemType[];
    onSearch: (e: React.FormEvent<HTMLInputElement>) => void;
    inputValue: string;
};
const Dialogs: React.FC<Props> = ({ items, onSearch, inputValue }) => {
    return (
        <div className={'dialogs'}>
            <div className="dialogs__search">
                <Input.Search placeholder={'Поиск среди контактов'} value={inputValue} onChange={onSearch} />
            </div>
            {items.length > 0 ? (
                orderBy(items, ['created_at'], ['desc']).map((item) => (
                    <DialogItem
                        key={Math.random()}
                        unreaded={0}
                        created_at={item.created_at}
                        isReaded={item.isReaded}
                        text={item.text}
                        user={item.user}
                        isMe={item.isMe}
                        isOnilne={item.isOnilne}
                    />
                ))
            ) : (
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'Ничего не найдено'} />
            )}
        </div>
    );
};

export default Dialogs;
