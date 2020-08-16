import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BaseThunkType } from '../store';
import { messagesApi, MessageTypeServer } from '../../api/messages';
import { SetCurrentDialogId, setCurrentDialogId } from './dialogsSlice';

type InitState = {
    items: MessageTypeServer[];
    isLoading: boolean;
};

const initState: InitState = {
    items: [],
    isLoading: false,
};

type SetMessages = PayloadAction<{ items: MessageTypeServer[] }>;
type ToggleIsFetching = PayloadAction<boolean>;
type AddMessage = PayloadAction<MessageTypeServer>;
type RemoveMessage = PayloadAction<string>;

const messagesSlice = createSlice({
    name: 'messages',
    initialState: initState,
    reducers: {
        setMessages: (state, { payload }: SetMessages) => ({ ...state, items: payload.items }),
        toggleIsFetching: (state, { payload }: ToggleIsFetching) => ({ ...state, isLoading: payload }),
        addMessage: (state, { payload }: AddMessage) => ({ ...state, items: [...state.items, payload] }),
        removeMessage: (state, { payload }: RemoveMessage) => {
            return { ...state, items: state.items.filter((item) => item._id !== payload) };
        },
    },
});

export const { reducer: messagesReducer } = messagesSlice;
export const { toggleIsFetching, setMessages, addMessage, removeMessage } = messagesSlice.actions;

type FetchMessagesFromDialog = BaseThunkType<SetCurrentDialogId | ToggleIsFetching | SetMessages>;
export const fetchMessagesFromDialog = (id: string): FetchMessagesFromDialog => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentDialogId(id));
    const messages = await messagesApi.getAllForDialogId(id);
    dispatch(setMessages({ items: messages }));
    dispatch(toggleIsFetching(false));
};

type DeleteMessageFromDialog = BaseThunkType<RemoveMessage>;
export const deleteMessageFromDialog = (id: string): DeleteMessageFromDialog => async (dispatch) => {
    messagesApi.delete(id);
    dispatch(removeMessage(id));
};
