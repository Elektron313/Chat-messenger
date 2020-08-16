import React, { useCallback, useEffect, useState } from 'react';

import { ChatInput as ChatInputBase } from '../../components';
import { filesApi } from '../../api/files';
import { setAttachment, removeAttachment } from '../../redux/slices/attachmentSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/store';
import { messagesApi } from '../../api/messages';
import { UploadFileStatus } from 'antd/es/upload/interface';

export type UploadType = {
    uid: string;
    name: string;
    status?: UploadFileStatus;
    url?: string;
};

type ChatInput = {
    dialogId: string;
};

const ChatInput: React.FC<ChatInput> = ({ dialogId: dialog_id }) => {
    const attachments = useSelector((state: AppStateType) => state.attachmentsReducer.items);
    const dispatch = useDispatch();
    // navigator.getUserMedia =
    //     window.navigator.getUserMedia ||
    //     window.navigator.mozGetUserMedia ||
    //     window.navigator.msGetUserMedia ||
    //     window.navigator.webkitGetUserMedia;

    const [value, setValue] = useState('');
    const [isRecording, setIsRecording] = useState(false);
    const [audioRecorder, setAudioRecorder] = useState<MediaRecorder | null>(null);
    const [emojiPickerVisible, setShowEmojiPicker] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!emojiPickerVisible);
    };

    const onRecord = () => {
        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices
                .getUserMedia({ audio: true })
                .then((stream) => onRecording(stream))
                .catch((err) => onError(err));
        }
    };
    const onRecording = (stream: MediaStream) => {
        const recorder = new MediaRecorder(stream);
        setAudioRecorder(recorder);

        recorder.start();

        recorder.onstart = () => {
            setIsRecording(true);
        };

        recorder.onstop = () => {
            setIsRecording(false);
        };

        recorder.ondataavailable = (e: BlobEvent) => {
            const file = new File([e.data], 'audio.webm');
            setLoading(true);
            filesApi.upload(file).then(({ file }) => {
                sendAudio(file._id).then(() => {
                    setLoading(false);
                });
            });
        };
    };

    const onError = (err: MediaRecorderErrorEvent) => {
        console.log('The following error occured: ' + err);
    };

    // const handleOutsideClick = (el, e) => {
    //     if (el && !el.contains(e.target)) {
    //         setShowEmojiPicker(false);
    //     }
    // };

    // const addEmoji = ({ colons }) => {
    //     setValue((value + ' ' + colons).trim());
    // };

    const sendAudio = (audioId: string) => {
        return messagesApi.send({
            text: null,
            dialog_id,
            attachments: [audioId],
        });
    };

    const sendMessage = () => {
        if (isRecording && audioRecorder) {
            audioRecorder.stop();
        } else if (value || attachments.length) {
            console.log('attac');
            messagesApi.send({
                text: value,
                dialog_id,
                attachments: attachments.map((file) => file.uid),
            });
            setValue('');
            dispatch(setAttachment([]));
        }
    };

    // const handleSendMessage = e => {
    //     socket.emit('DIALOGS:TYPING', { dialogId: currentDialogId, user });
    //     if (e.keyCode === 13) {
    //         sendMessage();
    //     }
    // };

    const onChange = useCallback((e: React.FormEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value);
    }, []);

    const onHideRecording = () => {
        setIsRecording(false);
    };
    const removeFile = (file: UploadType) => {
        dispatch(removeAttachment(file));
    };

    const onSelectFiles = async (files: any) => {
        let uploaded: UploadType[] = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const uid = Math.round(Math.random() * 1000).toString();
            uploaded = [
                ...uploaded,
                {
                    uid,
                    name: file.name,
                    status: 'uploading',
                },
            ];
            dispatch(setAttachment(uploaded));
            await filesApi.upload(file).then(({ file }) => {
                uploaded = uploaded.map((item) => {
                    if (item.uid === uid) {
                        return {
                            status: 'done',
                            uid: file._id,
                            name: file.fileName,
                            url: file.url,
                        };
                    }
                    return item;
                });
            });
        }
        dispatch(setAttachment(uploaded));
    };

    //     useEffect(() => {
    //         const el = document.querySelector('.chat-input__smile-btn');
    //     document.addEventListener('click', handleOutsideClick.bind(this, el));
    //     return () => {
    //         document.removeEventListener('click', handleOutsideClick.bind(this, el));
    //     };
    // }, []);

    return (
        <ChatInputBase
            value={value}
            onChange={onChange}
            // emojiPickerVisible={emojiPickerVisible}
            // toggleEmojiPicker={toggleEmojiPicker}
            // addEmoji={addEmoji}
            // handleSendMessage={handleSendMessage}
            sendMessage={sendMessage}
            onSelectFiles={onSelectFiles}
            attachments={attachments}
            isRecording={isRecording}
            onRecord={onRecord}
            onHideRecording={onHideRecording}
            isLoading={isLoading}
            removeAttachment={removeFile}
            dialogId={dialog_id}
        />
    );
};

export default ChatInput;
