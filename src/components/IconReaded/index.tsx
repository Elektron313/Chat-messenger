import React from 'react';
import readedSvg from '../../assets/img/readed.svg';
import noReadedSvg from '../../assets/img/noreaded.svg';

type Props = {
    isMe: boolean;
    isReaded: boolean;
};
const IconReaded: React.FC<Props> = ({ isMe, isReaded }) =>
    (isMe &&
        (isReaded ? (
            <img className="message__icon-readed" src={readedSvg} alt="Readed icon" />
        ) : (
            <img className="message__icon-readed message__icon-readed--no" src={noReadedSvg} alt="No readed icon" />
        ))) ||
    null;

export default IconReaded;
