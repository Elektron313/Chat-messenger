import React from 'react';
import './ChatInput.scss';
import { SmileOutlined } from '@ant-design/icons';
import {
    AudioOutlined,
    CameraOutlined,
    CloseOutlined,
    LoadingOutlined,
    RightCircleOutlined,
} from '@ant-design/icons/lib';
import { useDropzone } from 'react-dropzone';
import UploadFiles from '../UploadFile';
import { UploadType } from '../../containers/ChatInput';
import TextArea from 'antd/es/input/TextArea';

type ChatInput = {
    dialogId: string;
    value: string;
    onChange: (e: React.FormEvent<HTMLTextAreaElement>) => void;
    // emojiPickerVisible={emojiPickerVisible}
    // toggleEmojiPicker={toggleEmojiPicker}
    // addEmoji={addEmoji}
    // handleSendMessage={handleSendMessage}
    sendMessage: () => void;
    onSelectFiles: (files: any) => void;
    attachments: UploadType[];
    isRecording: boolean;
    onRecord: () => void;
    onHideRecording: () => void;
    isLoading: boolean;
    removeAttachment: (file: UploadType) => void;
};

const ChatInput: React.FC<ChatInput> = ({
    dialogId,
    removeAttachment,
    isLoading,
    value,
    onChange,
    sendMessage,
    attachments,
    isRecording,
    onHideRecording,
    onRecord,
    onSelectFiles,
}) => {
    const { getInputProps, open } = useDropzone({ onDrop: onSelectFiles });
    // const [isValue, setValue] = useState<string>('');
    // const [attachments, setAttachments] = useState([]);

    // const onSendMessage = (value: string, dialogId: string) => {
    //     messagesApi.send(value, dialogId);
    //     setValue('');
    // };

    return (
        <div className={'chat-input'}>
            <div>
                <div className="chat-input__smile-btn">
                    {/*<div className="chat-input__emoji-picker">*/}
                    {/*    {emojiPickerVisible && (*/}
                    {/*        <Picker onSelect={emojiTag => addEmoji(emojiTag)} set="apple" />*/}
                    {/*    )}*/}
                    {/*</div>*/}
                    <SmileOutlined />
                </div>
                {isRecording ? (
                    <div className="chat-input__record-status">
                        <i className="chat-input__record-status-bubble"></i>
                        Recording...
                        <CloseOutlined
                            onClick={onHideRecording}
                            type="link"
                            shape="circle"
                            className="stop-recording"
                        />
                    </div>
                ) : (
                    <TextArea
                        placeholder={'Введите текст сообщения'}
                        autoSize={{ minRows: 1, maxRows: 6 }}
                        onChange={onChange}
                        onKeyUp={(e) => e.keyCode === 13 && sendMessage()}
                        value={value}
                    />
                )}
                <div className="chat-input__actions">
                    <input {...getInputProps()} />
                    <CameraOutlined onClick={open} />
                    {isLoading ? (
                        <LoadingOutlined type="link" shape="circle" />
                    ) : isRecording || value || attachments.length ? (
                        <RightCircleOutlined onClick={sendMessage} type="link" shape="circle" />
                    ) : (
                        <div className="chat-input__record-btn">
                            <AudioOutlined onClick={onRecord} type="link" shape="circle" />
                        </div>
                    )}
                </div>
            </div>
            {attachments.length > 0 && (
                <div className="chat-input__attachments">
                    <UploadFiles removeAttachment={removeAttachment} attachments={attachments} />
                </div>
            )}
        </div>
    );
};

export default ChatInput;
