import React from 'react';
import { Dialogs } from '../../components';

const Home: React.FC = () => {
    return (
        <div>
            <Dialogs
                items={[
                    {
                        user: {
                            isOnline: false,
                            avatar: 'https://sun1-89.userapi.com/c850424/v850424867/f6869/B-F_i2BilOA.jpg?ava=1',
                            fullName: 'Peter Parker',
                        },
                        unreaded: 0,
                        lastMessage: 'Help spider man Heeeeelppp',
                    },
                ]}
            />
            {/*<Message*/}
            {/*    avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"*/}
            {/*    text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"*/}
            {/*    date={new Date('Sun Apr 21 2019 21:55:29')}*/}
            {/*    attachments={[*/}
            {/*        {*/}
            {/*            filename: 'image.jpg',*/}
            {/*            url: 'https://source.unsplash.com/100x100/?random=1&nature,water',*/}
            {/*        },*/}
            {/*        {*/}
            {/*            filename: 'image.jpg',*/}
            {/*            url: 'https://source.unsplash.com/100x100/?random=2&nature,water',*/}
            {/*        },*/}
            {/*        {*/}
            {/*            filename: 'image.jpg',*/}
            {/*            url: 'https://source.unsplash.com/100x100/?random=3&nature,water',*/}
            {/*        },*/}
            {/*    ]}*/}
            {/*/>*/}
            {/*<Message*/}
            {/*    avatar="https://sun1-89.userapi.com/c850424/v850424867/f6869/B-F_i2BilOA.jpg?ava=1"*/}
            {/*    text="Hello, World!"*/}
            {/*    date={new Date('Sun Apr 21 2019 21:55:29')}*/}
            {/*    isMe={true}*/}
            {/*    isReaded={false}*/}
            {/*/>*/}
            {/*<Message*/}
            {/*    avatar="https://sun1-89.userapi.com/c850424/v850424867/f6869/B-F_i2BilOA.jpg?ava=1"*/}
            {/*    isTyping*/}
            {/*    date={new Date('Sun Apr 21 2019 21:55:29')}*/}
            {/*/>*/}
        </div>
    );
};

export default Home;
