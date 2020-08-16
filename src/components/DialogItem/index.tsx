import React from 'react';
import { Avatar, IconReaded } from '../index';
import classNames from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import { DialogsItemType } from '../../types/types';
import { Link } from 'react-router-dom';

const getMessageTime = (created_at: Date | string): string => {
    if (typeof created_at === 'string') {
        created_at = new Date(created_at);
    }
    if (isToday(created_at)) {
        return format(created_at, 'HH:mm');
    } else {
        return format(created_at, 'dd.MM.yyyy');
    }
};
type OnSelect = {
    currentDialogId: string;
};
const DialogItem: React.FC<DialogsItemType & OnSelect> = ({
    createdAt,
    text,
    isReaded,
    user,
    unreaded,
    isMe,
    currentDialogId,
    id,
}) => {
    return (
        <Link to={`/dialog/${id}`}>
            <div
                className={classNames(
                    'dialogs__item',
                    { 'dialogs__item--online': user.isOnline },
                    { 'dialogs__item--select': currentDialogId === id }
                )}
            >
                <div className="dialogs__item-avatar">
                    <Avatar user={user} />
                </div>
                <div className="dialogs__item-info">
                    <div className="dialogs__item-info-top">
                        <b>{user.fullName}</b>
                        <span>{getMessageTime(createdAt)}</span>
                    </div>
                    <div className="dialogs__item-info-bottom">
                        <p>{text}</p>
                        {isMe && <IconReaded isMe={true} isReaded={isReaded} />}
                        {unreaded > 0 && (
                            <div className="dialogs__item-info-bottom-count">{unreaded > 9 ? '+9' : unreaded}</div>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default DialogItem;
