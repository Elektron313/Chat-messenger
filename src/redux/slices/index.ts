import { combineReducers } from '@reduxjs/toolkit';
import { dialogsReducer } from './dialogsSlice';
import { messagesReducer } from './messagesSlice';
import { userReducer } from './userSlice';
import { attachmentsReducer } from './attachmentSlice';

export default combineReducers({
    dialogsReducer,
    messagesReducer,
    userReducer,
    attachmentsReducer,
});
