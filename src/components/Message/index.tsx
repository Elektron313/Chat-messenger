import React from 'react';
import './Message.scss';
import classNames from 'classnames';
import { IconReaded, Time } from '../index';

type Message = {
    avatar?: string;
    text?: string;
    date: Date;
    user?: any;
    isMe: boolean;
    isReaded: boolean;
    attachments?: any;
    isTyping?: boolean;
};
const Message: React.FC<Message> = ({ avatar, user = 'user', text, date, isMe, isReaded, attachments, isTyping }) => (
    <div
        className={classNames('message', {
            'message--isme': isMe,
            'message--is-typing': isTyping,
            'message--image': attachments && attachments.length === 1,
        })}
    >
        <div className="message__content">
            <IconReaded isMe={isMe} isReaded={isReaded} />
            <div className="message__avatar">
                <img src={avatar} alt={`Avatar ${user.fullname}`} />
            </div>
            <div className="message__info">
                {(text || isTyping) && (
                    <div className="message__bubble">
                        {text && <p className="message__text">{text}</p>}
                        {isTyping && (
                            <div className="message__typing">
                                <span />
                                <span />
                                <span />
                            </div>
                        )}
                    </div>
                )}
                <div className="message__attachments">
                    {attachments &&
                        attachments.map((item: any) => (
                            <div className="message__attachments-item">
                                <img src={item.url} alt={item.filename} />
                            </div>
                        ))}
                </div>
                {date && (
                    <span className="message__date">
                        <Time date={date} />
                    </span>
                )}
            </div>
        </div>
    </div>
);

export default Message;
