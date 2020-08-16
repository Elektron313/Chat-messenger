import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UploadType } from '../../containers/ChatInput';

type InitState = {
    items: UploadType[];
};

const initialState: InitState = {
    items: [],
};

type SetAttachment = PayloadAction<UploadType[]>;
export type RemoveAttachment = PayloadAction<UploadType>;
const attachmentsSlice = createSlice({
    initialState,
    name: 'attachments',
    reducers: {
        setAttachment: (state, { payload }: SetAttachment) => ({ ...state, items: payload }),
        removeAttachment: (state, { payload }: RemoveAttachment) => ({
            ...state,
            items: state.items.filter((item) => item.uid !== payload.uid),
        }),
    },
});

export const { setAttachment, removeAttachment } = attachmentsSlice.actions;
export const { reducer: attachmentsReducer } = attachmentsSlice;
