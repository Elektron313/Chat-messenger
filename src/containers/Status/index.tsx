import React from 'react';
import { Status as StatusBase } from '../../components';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../redux/store';
import { User } from '../../types/types';

const Status: React.FC = () => {
    const { currentDialogId, items } = useSelector((state: AppStateType) => state.dialogsReducer);
    const user = useSelector((state: AppStateType) => state.userReducer.user);
    if (!items.length || !currentDialogId) {
        return null;
    }

    const currentDialogObj = items.filter((dialog) => dialog._id === currentDialogId)[0];

    let partner: User;

    if (currentDialogObj.author._id === user!._id) {
        partner = currentDialogObj.partner;
    } else {
        partner = currentDialogObj.author;
    }

    return <StatusBase online={partner.isOnline} fullname={partner.fullName} />;
};

export default Status;
