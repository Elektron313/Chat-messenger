import React from 'react';
import { Message, Status, ChatInput, Messages } from '../../components';
import Dialogs from '../../containers/Dialogs';
import '../../styles/layouts/chat.scss';
import './Home.scss';
import { EditOutlined, EllipsisOutlined, TeamOutlined } from '@ant-design/icons/lib';

const Home: React.FC = () => {
    return (
        <section className={'home'}>
            <div className={'chat'}>
                <div className="chat__sidebar">
                    <div className="chat__sidebar-header">
                        <div>
                            <TeamOutlined />
                            <span> Список диалогов</span>
                        </div>
                        <EditOutlined />
                    </div>
                    <div className="chat__sidebar-dialogs">
                        <Dialogs />
                    </div>
                </div>
                <div className="chat__dialog">
                    <div className="chat__dialog-header">
                        <div className="chat__dialog-empty"></div>
                        <div className="chat__dialog-header-center">
                            <b className="chat__dialog-header-username">Гай Цезарь</b>
                            <div className="chat__dialog-header-status">
                                <Status online={false} />
                            </div>
                        </div>
                        <EllipsisOutlined style={{ fontSize: '22px' }} />
                    </div>
                    <div className="chat__dialog-messages">
                        <Messages />
                        {/*<Message*/}
                        {/*    user={{*/}
                        {/*        _id: 'asf',*/}
                        {/*        fullName: 'ASDAS',*/}
                        {/*        avatar: 'https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1',*/}
                        {/*    }}*/}
                        {/*    isMe={false}*/}
                        {/*    date={new Date('Sun Apr 21 2019 21:55:29')}*/}
                        {/*    audio="https://notificationsounds.com/soundfiles/069059b7ef840f0c74a814ec9237b6ec/file-de_vuvuzela-power-down.mp3"*/}
                        {/*/>*/}
                        {/*<Message*/}
                        {/*    user={{*/}
                        {/*        _id: 'asf',*/}
                        {/*        fullName: 'ASDAS',*/}
                        {/*        avatar: 'https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1',*/}
                        {/*    }}*/}
                        {/*    isMe={false}*/}
                        {/*    date={new Date('Sun Apr 21 2019 21:55:29')}*/}
                        {/*    text={'dsaaaaaaaaaaaaaaaaaaaaaaaaaaqwevxcv'}*/}
                        {/*/>*/}
                        {/*<Message*/}
                        {/*    user={{*/}
                        {/*        _id: 'asf',*/}
                        {/*        fullName: 'ASDAS',*/}
                        {/*        avatar: 'https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1',*/}
                        {/*    }}*/}
                        {/*    isMe={true}*/}
                        {/*    date={new Date('Sun Apr 21 2019 21:55:29')}*/}
                        {/*    text={'dsaaaaaaaaaaaaaaaaaaaaaaaaaaqwevxcv'}*/}
                        {/*/>*/}
                        {/*<Message*/}
                        {/*    user={{*/}
                        {/*        _id: 'asf',*/}
                        {/*        fullName: 'ASDAS',*/}
                        {/*        avatar: 'https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1',*/}
                        {/*    }}*/}
                        {/*    isMe={false}*/}
                        {/*    date={new Date('Sun Apr 21 2019 21:55:29')}*/}
                        {/*    text={'dsaaaaaaaaaaaaaaaaaaaaaaaaaaqwevxcv'}*/}
                        {/*/>*/}
                        {/*<Message*/}
                        {/*    user={{*/}
                        {/*        _id: 'asf',*/}
                        {/*        fullName: 'ASDAS',*/}
                        {/*        avatar: 'https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1',*/}
                        {/*    }}*/}
                        {/*    isMe={false}*/}
                        {/*    date={new Date('Sun Apr 21 2019 21:55:29')}*/}
                        {/*    text={'dsaaaaaaaaaaaaaaaaaaaaaaaaaaqwevxcv'}*/}
                        {/*/>*/}
                        {/*<Message*/}
                        {/*    user={{*/}
                        {/*        _id: 'asf',*/}
                        {/*        fullName: 'ASDAS',*/}
                        {/*        avatar: 'https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1',*/}
                        {/*    }}*/}
                        {/*    isMe={false}*/}
                        {/*    date={new Date('Sun Apr 21 2019 21:55:29')}*/}
                        {/*    text={'dsaaaaaaaaaaaaaaaaaaaaaaaaaaqwevxcv'}*/}
                        {/*/>*/}
                        {/*<Message*/}
                        {/*    user={{*/}
                        {/*        _id: 'asf',*/}
                        {/*        fullName: 'ASDAS',*/}
                        {/*        avatar: 'https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1',*/}
                        {/*    }}*/}
                        {/*    isMe={false}*/}
                        {/*    date={new Date('Sun Apr 21 2019 21:55:29')}*/}
                        {/*    text={'dsaaaaaaaaaaaaaaaaaaaaaaaaaaqwevxcv'}*/}
                        {/*/>*/}
                        {/*<Message*/}
                        {/*    user={{*/}
                        {/*        _id: 'asf',*/}
                        {/*        fullName: 'ASDAS',*/}
                        {/*        avatar: 'https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1',*/}
                        {/*    }}*/}
                        {/*    isMe={false}*/}
                        {/*    date={new Date('Sun Apr 21 2019 21:55:29')}*/}
                        {/*    text={'dsaaaaaaaaaaaaaaaaaaaaaaaaaaqwevxcv'}*/}
                        {/*/>*/}
                        {/*<Message*/}
                        {/*    user={{*/}
                        {/*        _id: 'asf',*/}
                        {/*        fullName: 'ASDAS',*/}
                        {/*        avatar: 'https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1',*/}
                        {/*    }}*/}
                        {/*    isMe={false}*/}
                        {/*    date={new Date('Sun Apr 21 2019 21:55:29')}*/}
                        {/*    text={'dsaaaaaaaaaaaaaaaaaaaaaaaaaaqwevxcv'}*/}
                        {/*/>*/}
                        {/*<Message*/}
                        {/*    user={{*/}
                        {/*        _id: 'asf',*/}
                        {/*        fullName: 'ASDAS',*/}
                        {/*        avatar: 'https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1',*/}
                        {/*    }}*/}
                        {/*    isMe={false}*/}
                        {/*    date={new Date('Sun Apr 21 2019 21:55:29')}*/}
                        {/*    text={'dsaaaaaaaaaaaaaaaaaaaaaaaaaaqwevxcv'}*/}
                        {/*/>*/}
                        {/*<Message*/}
                        {/*    user={{*/}
                        {/*        _id: 'asf',*/}
                        {/*        fullName: 'ASDAS',*/}
                        {/*        avatar: 'https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1',*/}
                        {/*    }}*/}
                        {/*    isMe={false}*/}
                        {/*    date={new Date('Sun Apr 21 2019 21:55:29')}*/}
                        {/*    text={'dsaaaaaaaaaaaaaaaaaaaaaaaaaaqwevxcv'}*/}
                        {/*/>*/}
                        {/*<Message*/}
                        {/*    user={{*/}
                        {/*        _id: 'asf',*/}
                        {/*        fullName: 'ASDAS',*/}
                        {/*        avatar: 'https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1',*/}
                        {/*    }}*/}
                        {/*    isMe={false}*/}
                        {/*    date={new Date('Sun Apr 21 2019 21:55:29')}*/}
                        {/*    text={'dsaaaaaaaaaaaaaaaaaaaaaaaaaaqwevxcv'}*/}
                        {/*/>*/}
                        {/*<Message*/}
                        {/*    user={{*/}
                        {/*        _id: 'asf',*/}
                        {/*        fullName: 'ASDAS',*/}
                        {/*        avatar: 'https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1',*/}
                        {/*    }}*/}
                        {/*    isMe={false}*/}
                        {/*    date={new Date('Sun Apr 21 2019 21:55:29')}*/}
                        {/*    text={'dsaaaaaaaaaaaaaaaaaaaaaaaaaaqwevxcv'}*/}
                        {/*/>*/}
                    </div>
                    <div className="chat__dialogs-input">
                        <ChatInput />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
