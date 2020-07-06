import React, { useEffect, useRef, useState } from 'react';
import './Message.scss';
import classNames from 'classnames';
import { Avatar, IconReaded, Time } from '../index';
import waveSvg from '../../assets/img/wave.svg';
import playSvg from '../../assets/img/play.svg';
import pauseSvg from '../../assets/img/pause.svg';
import convertCurrentTime from '../../utils/helpers/convertCurrentTime';
import { User } from '../../types/types';

export type MessageType = {
    text?: string;
    date: Date;
    user: User;
    isMe: boolean;
    isReaded?: boolean;
    attachments?: any;
    isTyping?: boolean;
    audio?: string;
};
type MessageAudio = {
    audio: string;
};
const MessageAudio: React.FC<MessageAudio> = ({ audio }) => {
    const [isPlay, setIsPlaying] = useState<boolean>(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const audioElem = useRef<HTMLAudioElement>(null);
    const togglePlay = () => {
        if (audioElem.current) {
            if (!isPlay) {
                audioElem.current.volume = 0.05;
                audioElem.current.play();
            } else {
                audioElem.current.pause();
            }
        }
    };
    useEffect(() => {
        if (audioElem.current) {
            audioElem.current.addEventListener('playing', () => setIsPlaying(true));
            audioElem.current.addEventListener('ended', () => {
                setIsPlaying(false);
                setProgress(0);
                setCurrentTime(0);
            });
            audioElem.current.addEventListener('pause', () => setIsPlaying(false));
            audioElem.current.addEventListener('timeupdate', () => {
                const duration = (audioElem.current && audioElem.current.duration) || 0;
                setCurrentTime(audioElem.current!.currentTime);
                setProgress((audioElem.current!.currentTime / duration) * 100);
            });
        }
    }, []);

    return (
        <div className={'message__audio'}>
            <audio ref={audioElem} src={audio} preload={'auto'} />
            <div className={'message__audio-progress'} style={{ width: progress + '%' }} />
            <div className={'message__audio-info'}>
                <div className={'message__audio-btn'}>
                    <button onClick={togglePlay}>
                        {isPlay ? <img src={pauseSvg} alt="pause" /> : <img src={playSvg} alt="play" />}
                    </button>
                </div>
                <div className="message__audio-wave">
                    <img src={waveSvg} alt="waveSvg" />
                </div>
                <span className={'message__audio-duration'}>{convertCurrentTime(currentTime)}</span>
            </div>
        </div>
    );
};

const Message: React.FC<MessageType> = ({ audio, user, text, date, isMe, isReaded, attachments, isTyping }) => {
    return (
        <div
            className={classNames('message', {
                'message--isme': isMe,
                'message--is-audio': audio,
                'message--is-typing': isTyping,
                'message--image': attachments && attachments.length === 1,
            })}
        >
            <div className="message__content">
                <IconReaded isMe={isMe} isReaded={isReaded} />
                <div className="message__avatar">
                    <Avatar user={user} />
                </div>
                <div className="message__info">
                    {(audio || text || isTyping) && (
                        <div className="message__bubble">
                            {text && <p className="message__text">{text}</p>}
                            {isTyping && (
                                <div className="message__typing">
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            )}
                            {audio && <MessageAudio audio={audio} />}
                        </div>
                    )}
                    {attachments && (
                        <div className="message__attachments">
                            {attachments.map((item: any, index: number) => (
                                <div key={index} className="message__attachments-item">
                                    <img src={item.url} alt={item.filename} />
                                </div>
                            ))}
                        </div>
                    )}
                    {date && (
                        <span className="message__date">
                            <Time date={date} />
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Message;
