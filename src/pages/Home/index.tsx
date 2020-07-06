import React from 'react';
import { Message, Status, ChatInput, Messages } from '../../components';
import { Dialogs } from '../../containers';
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
                        <Dialogs
                            items={[
                                {
                                    unreaded: 0,
                                    isMe: false,
                                    created_at: new Date(1995, 11, 17, 3, 24, 0),
                                    text: 'Help spider man Heeeeelppp',
                                    isReaded: true,
                                    user: {
                                        _id: 'dsad123',
                                        // avatar: 'https://sun1-89.userapi.com/c850424/v850424867/f6869/B-F_i2BilOA.jpg?ava=1',
                                        fullName: 'ы',
                                    },
                                    isOnilne: false,
                                },
                                {
                                    unreaded: 0,
                                    isMe: false,
                                    created_at: new Date(2020, 6, 2, 3, 24, 0),
                                    text: 'Help spider man Heeeeelppp',
                                    isReaded: true,
                                    user: {
                                        _id: '32134adsa',
                                        avatar:
                                            'https://sun1-89.userapi.com/c850424/v850424867/f6869/B-F_i2BilOA.jpg?ava=1',
                                        fullName: 'Peter Parker',
                                    },
                                    isOnilne: true,
                                },
                                {
                                    unreaded: 2,
                                    isMe: true,
                                    created_at: 'Tue Aug 25 1992 16:35:55 GMT+0000 (UTC)',
                                    text:
                                        'Quis esse nulla aliquip elit aliqua amet consequat sit aliquip incididunt fugiat dolore quis.',
                                    isReaded: true,
                                    user: {
                                        _id: '0a79dcfa-35e9-4b7d-81d5-2d671917e105',
                                        fullName: 'Raymond',
                                    },
                                    isOnilne: false,
                                },
                                {
                                    unreaded: 4,
                                    isMe: true,
                                    created_at: 'Fri Jan 03 1997 04:06:27 GMT+0000 (UTC)',
                                    text:
                                        'Quis cupidatat mollit reprehenderit ullamco aliquip consequat voluptate quis.',
                                    isReaded: true,
                                    user: {
                                        _id: '1b7bd16f-3fac-4572-aa5c-95d6e2f41a06',
                                        fullName: 'Hannah',
                                    },
                                    isOnilne: false,
                                },
                                {
                                    unreaded: 5,
                                    isMe: false,
                                    created_at: 'Fri Jun 05 1981 23:16:35 GMT+0000 (UTC)',
                                    text: 'Amet nulla eiusmod aliquip in incididunt velit labore.',
                                    isReaded: false,
                                    user: {
                                        _id: '0a5ef170-47c4-4d62-80d4-81a4143ade87',
                                        fullName: 'Lloyd',
                                    },
                                    isOnilne: true,
                                },
                                {
                                    unreaded: 7,
                                    isMe: false,
                                    created_at: 'Wed Dec 26 2012 01:23:04 GMT+0000 (UTC)',
                                    text:
                                        'Pariatur incididunt fugiat minim elit exercitation dolore velit quis tempor irure.',
                                    isReaded: false,
                                    user: {
                                        _id: '439c45d1-e927-48a2-ae9f-99a4f4906e2a',
                                        fullName: 'Cook',
                                    },
                                    isOnilne: true,
                                },
                                {
                                    unreaded: 10,
                                    isMe: false,
                                    created_at: 'Sat Sep 12 1987 12:11:03 GMT+0000 (UTC)',
                                    text:
                                        'Et esse duis enim fugiat officia esse proident minim nulla consequat officia Lorem magna.',
                                    isReaded: true,
                                    user: {
                                        _id: '38c92f2c-50c4-4864-8696-0c59694b58e8',
                                        fullName: 'Violet',
                                    },
                                    isOnilne: true,
                                },
                                {
                                    unreaded: 10,
                                    isMe: true,
                                    created_at: 'Sun Sep 21 1986 14:17:32 GMT+0000 (UTC)',
                                    text: 'Enim ex anim commodo proident dolor aliquip aliqua.',
                                    isReaded: false,
                                    user: {
                                        _id: 'a64b1dfc-d0fb-43df-8d84-150f9678b99e',
                                        fullName: 'Church',
                                    },
                                    isOnilne: true,
                                },
                                {
                                    unreaded: 10,
                                    isMe: false,
                                    created_at: 'Tue Aug 25 1998 07:05:33 GMT+0000 (UTC)',
                                    text:
                                        'Sit irure est aute ad mollit ipsum mollit eu ad ullamco adipisicing consectetur.',
                                    isReaded: true,
                                    user: {
                                        _id: '045d98b1-6185-4f42-8b13-db0ef22858bf',
                                        fullName: 'Juliette',
                                    },
                                    isOnilne: true,
                                },
                                {
                                    unreaded: 8,
                                    isMe: false,
                                    created_at: 'Mon May 22 1978 21:19:21 GMT+0000 (UTC)',
                                    text:
                                        'Id fugiat cillum consectetur incididunt deserunt pariatur Lorem ullamco irure commodo nulla adipisicing proident commodo.',
                                    isReaded: false,
                                    user: {
                                        _id: 'd0301ad1-5efd-4940-90da-944ebaaf24f9',
                                        fullName: 'Blanchard',
                                    },
                                    isOnilne: true,
                                },
                                {
                                    unreaded: 1,
                                    isMe: false,
                                    created_at: 'Wed Apr 04 2007 23:00:58 GMT+0000 (UTC)',
                                    text:
                                        'Esse quis mollit deserunt ipsum et ad eiusmod tempor non exercitation sunt proident minim.',
                                    isReaded: true,
                                    user: {
                                        _id: '751c46f5-15f5-4c23-9ac7-948584d9f74f',
                                        fullName: 'Kristie',
                                    },
                                    isOnilne: true,
                                },
                                {
                                    unreaded: 0,
                                    isMe: false,
                                    created_at: 'Wed Nov 28 2018 22:04:42 GMT+0000 (UTC)',
                                    text: 'Cillum irure incididunt enim sunt.',
                                    isReaded: false,
                                    user: {
                                        _id: '7409bbf3-e377-4b17-b671-124345f11101',
                                        fullName: 'Lilian',
                                    },
                                    isOnilne: true,
                                },
                                {
                                    unreaded: 5,
                                    isMe: false,
                                    created_at: 'Fri Jun 05 1981 23:16:35 GMT+0000 (UTC)',
                                    text: 'Amet nulla eiusmod aliquip in incididunt velit labore.',
                                    isReaded: false,
                                    user: {
                                        _id: '0a5ef170-47c4-4d62-80d4-81a4143ade87',
                                        fullName: 'Lloyd',
                                    },
                                    isOnilne: true,
                                },
                                {
                                    unreaded: 7,
                                    isMe: false,
                                    created_at: 'Wed Dec 26 2012 01:23:04 GMT+0000 (UTC)',
                                    text:
                                        'Pariatur incididunt fugiat minim elit exercitation dolore velit quis tempor irure.',
                                    isReaded: false,
                                    user: {
                                        _id: '439c45d1-e927-48a2-ae9f-99a4f4906e2a',
                                        fullName: 'Cook',
                                    },
                                    isOnilne: true,
                                },
                                {
                                    unreaded: 10,
                                    isMe: false,
                                    created_at: 'Sat Sep 12 1987 12:11:03 GMT+0000 (UTC)',
                                    text:
                                        'Et esse duis enim fugiat officia esse proident minim nulla consequat officia Lorem magna.',
                                    isReaded: true,
                                    user: {
                                        _id: '38c92f2c-50c4-4864-8696-0c59694b58e8',
                                        fullName: 'Violet',
                                    },
                                    isOnilne: true,
                                },
                                {
                                    unreaded: 10,
                                    isMe: true,
                                    created_at: 'Sun Sep 21 1986 14:17:32 GMT+0000 (UTC)',
                                    text: 'Enim ex anim commodo proident dolor aliquip aliqua.',
                                    isReaded: false,
                                    user: {
                                        _id: 'a64b1dfc-d0fb-43df-8d84-150f9678b99e',
                                        fullName: 'Church',
                                    },
                                    isOnilne: true,
                                },
                                {
                                    unreaded: 10,
                                    isMe: false,
                                    created_at: 'Tue Aug 25 1998 07:05:33 GMT+0000 (UTC)',
                                    text:
                                        'Sit irure est aute ad mollit ipsum mollit eu ad ullamco adipisicing consectetur.',
                                    isReaded: true,
                                    user: {
                                        _id: '045d98b1-6185-4f42-8b13-db0ef22858bf',
                                        fullName: 'Juliette',
                                    },
                                    isOnilne: true,
                                },
                                {
                                    unreaded: 8,
                                    isMe: false,
                                    created_at: 'Mon May 22 1978 21:19:21 GMT+0000 (UTC)',
                                    text:
                                        'Id fugiat cillum consectetur incididunt deserunt pariatur Lorem ullamco irure commodo nulla adipisicing proident commodo.',
                                    isReaded: false,
                                    user: {
                                        _id: 'd0301ad1-5efd-4940-90da-944ebaaf24f9',
                                        fullName: 'Blanchard',
                                    },
                                    isOnilne: true,
                                },
                                {
                                    unreaded: 1,
                                    isMe: false,
                                    created_at: 'Wed Apr 04 2007 23:00:58 GMT+0000 (UTC)',
                                    text:
                                        'Esse quis mollit deserunt ipsum et ad eiusmod tempor non exercitation sunt proident minim.',
                                    isReaded: true,
                                    user: {
                                        _id: '751c46f5-15f5-4c23-9ac7-948584d9f74f',
                                        fullName: 'Kristie',
                                    },
                                    isOnilne: true,
                                },
                                {
                                    unreaded: 0,
                                    isMe: false,
                                    created_at: 'Wed Nov 28 2018 22:04:42 GMT+0000 (UTC)',
                                    text: 'Cillum irure incididunt enim sunt.',
                                    isReaded: false,
                                    user: {
                                        _id: '7409bbf3-e377-4b17-b671-124345f11101',
                                        fullName: 'Lilian',
                                    },
                                    isOnilne: true,
                                },
                            ]}
                        />
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
                        <Messages items={null} />
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
