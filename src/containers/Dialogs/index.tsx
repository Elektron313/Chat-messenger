import React, {useCallback, useEffect, useRef, useState} from 'react';
import { DialogItem } from '../../components/index';
import { orderBy } from 'lodash';
import { DialogItemType } from '../../types/types';
import { Empty, Input } from 'antd';
import './DialogItem.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/store';
import { fetchDialogs, fetchMessagesFromDialog } from '../../redux/slices/dialogsSlice';

const Dialogs: React.FC = () => {
    const [inputValue, setValue] = useState('');
    const dispatch = useDispatch();
    const items = useSelector((state: AppStateType) => state.dialogsReducer.items);
    const [filtred, setFiltred] = useState<DialogItemType[]>([...items]);
    useEffect(() => {
        if (!items.length) {
            dispatch(fetchDialogs());
        } else {
            setFiltred(items);
        }
    }, [items]);

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        setValue(value);
        const sortFiltred = items.filter(
            (dialog) => dialog.user.fullName.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) >= 0
        );
        setFiltred(sortFiltred);
    };
    const onSelect = useCallback(
        (id: string) => () => {
            dispatch(fetchMessagesFromDialog(id));
        },
        []
    );

    return (
        <div className={'dialogs'}>
            <div className="dialogs__search">
                <Input.Search placeholder={'Поиск среди контактов'} value={inputValue} onChange={onChange} />
            </div>
            {filtred.length > 0 ? (
                orderBy(filtred, ['created_at'], ['desc']).map((item) => (
                    <DialogItem
                        key={Math.random()}
                        unreaded={0}
                        created_at={item.created_at}
                        isReaded={item.isReaded}
                        text={item.text}
                        user={item.user}
                        isMe={item.isMe}
                        isOnilne={item.isOnilne}
                        onSelectDialog={onSelect}
                    />
                ))
            ) : (
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'Ничего не найдено'} />
            )}
        </div>
    );
};

export default Dialogs;
