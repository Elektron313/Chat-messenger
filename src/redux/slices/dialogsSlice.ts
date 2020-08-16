import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { dialogsApi, DialogType } from '../../api/dialogs';
import { BaseThunkType } from '../store';

type InitState = {
    items: DialogType[];
    currentDialogId: string;
};

const initState: InitState = {
    items: [],
    currentDialogId: '',
};

type SetItems = PayloadAction<{ items: DialogType[] }>;
export type SetCurrentDialogId = PayloadAction<string>;
const dialogsSlice = createSlice({
    name: 'dialogs',
    initialState: initState,
    reducers: {
        setItems: (state, { payload }: SetItems) => ({ ...state, items: payload.items }),
        setCurrentDialogId: (state, { payload }: SetCurrentDialogId) => ({
            ...state,
            currentDialogId: payload,
        }),
    },
});

export const { setCurrentDialogId, setItems } = dialogsSlice.actions;
export const { reducer: dialogsReducer } = dialogsSlice;

type FetchDialogs = BaseThunkType<SetItems>;
export const fetchDialogs = (): FetchDialogs => async (dispatch) => {
    const data = await dialogsApi.getAll();
    dispatch(setItems({ items: data }));
};
