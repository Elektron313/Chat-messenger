import React from 'react';
import { IconReaded, Time } from '../index';
import './DialogItem.scss';
import classNames from 'classnames';

export type DialogItemProps = {
    user: {
        avatar?: string;
        fullName: string;
        isOnline: boolean;
    };
    lastMessage?: string;
    unreaded: number;
};
const DialogItem: React.FC<DialogItemProps> = ({ user, lastMessage, unreaded }) => {
    return (
        <div className={classNames('dialogs__item', { 'dialogs__item--online': user.isOnline })}>
            <div className="dialogs__item-avatar">
                {/*<img src={user.avatar} alt={`${user.avatar} avatar`} />*/}
                <img src={user.avatar} alt="user" />
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>{user.fullName}</b>
                    <span>{/*<Time date={new Date()} />*/}15:00</span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>{lastMessage}</p>
                    <IconReaded isMe={true} isReaded={true} />
                    {unreaded > 0 && (
                        <div className="dialogs__item-info-bottom-count">{unreaded > 9 ? '+9' : unreaded}</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DialogItem;
