import React from 'react';
import { DialogItem } from '../index';
import { DialogItemProps } from '../DialogItem';

type Dialogs = {
    items: DialogItemProps[];
};
const Dialogs: React.FC<Dialogs> = ({ items }) => {
    return (
        <div className={'dialogs'}>
            {items.map((item) => (
                <DialogItem user={item.user} unreaded={0} lastMessage={item.lastMessage} />
            ))}
        </div>
    );
};

export default Dialogs;
