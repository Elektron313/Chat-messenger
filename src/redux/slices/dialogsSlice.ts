import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DialogItemType, MessageType } from '../../types/types';
import { dialogsApi } from '../../api/dialogs';
import { BaseThunkType } from '../store';
import { messagesApi } from '../../api/messages';

type InitState = {
    items: DialogItemType[];
    currentDialogId: MessageType[];
    isLoading: boolean;
};

const initState: InitState = {
    items: [],
    currentDialogId: [],
    isLoading: false,
};

type SetItems = PayloadAction<{ items: DialogItemType[] }>;
type SetCurrentDialogId = PayloadAction<{ messages: MessageType[] }>;
type ToggleIsFetching = PayloadAction<boolean>;
const dialogsSlice = createSlice({
    name: 'dialogs',
    initialState: initState,
    reducers: {
        setItems: (state, { payload }: SetItems) => ({ ...state, items: payload.items }),
        setCurrentDialogId: (state, { payload }: SetCurrentDialogId) => ({
            ...state,
            currentDialogId: payload.messages,
        }),
        toggleIsFetching: (state, { payload }: ToggleIsFetching) => ({ ...state, isLoading: payload }),
    },
});

export const { setCurrentDialogId, setItems, toggleIsFetching } = dialogsSlice.actions;
export const { reducer: dialogsReducer } = dialogsSlice;

type FetchDialogs = BaseThunkType<SetItems>;
export const fetchDialogs = (): FetchDialogs => async (dispatch) => {
    const data = await dialogsApi.getAll();
    dispatch(setItems({ items: data }));
};

type FetchMessagesFromDialog = BaseThunkType<SetCurrentDialogId | ToggleIsFetching>;
export const fetchMessagesFromDialog = (id: string): FetchMessagesFromDialog => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const messages = await messagesApi.getAllForDialogId(id);
    dispatch(setCurrentDialogId({ messages }));
    dispatch(toggleIsFetching(false));
};
