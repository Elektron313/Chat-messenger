import React, { useEffect } from 'react';
import '../../styles/layouts/chat.scss';
import './Home.scss';
import { Redirect, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/store';
import { Empty } from 'antd';
import { setCurrentDialogId } from '../../redux/slices/dialogsSlice';

import { Status, Messages, SideBar } from '../../containers';
import { ChatInput } from '../../containers';

const Home: React.FC = () => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const isAuth = useSelector((state: AppStateType) => state.userReducer.isAuth);
    const dialogId = useSelector((state: AppStateType) => state.dialogsReducer.currentDialogId);

    useEffect(() => {
        const dialogId = pathname.split('/').pop();
        if (dialogId) {
            dispatch(setCurrentDialogId(dialogId));
        } else {
            dispatch(setCurrentDialogId(''));
        }
    }, [pathname]);
    return (
        <>
            {isAuth ? (
                <section className={'home'}>
                    <div className={'chat'}>
                        <SideBar />
                        <div className="chat__dialog">
                            {dialogId ? (
                                <>
                                    <div className="chat__dialog-header">
                                        <Status />
                                    </div>
                                    <Messages />
                                    <div className="chat__dialogs-input">
                                        <ChatInput dialogId={dialogId} />
                                    </div>
                                </>
                            ) : (
                                <Empty description="Откройте диалог" />
                            )}
                        </div>
                    </div>
                </section>
            ) : (
                <Redirect to="/login" />
            )}
        </>
    );
};

export default Home;
