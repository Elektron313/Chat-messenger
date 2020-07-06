import React, { useCallback, useState } from 'react';
import { Dialogs as BaseDialogs } from '../components';
import { DialogsContainer } from '../types/types';

const Dialogs: React.FC<DialogsContainer> = ({ items }) => {
    const [inputValue, setValue] = useState('');
    const [filtred, setFiltred] = useState([...items]);

    const onChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        setValue(value);
        const sortFiltred = filtred.filter(
            (dialog) => dialog.user.fullName.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) >= 0
        );
        setFiltred(sortFiltred);
    }, []);

    return <BaseDialogs items={filtred} onSearch={onChange} inputValue={inputValue} />;
};

export default Dialogs;
