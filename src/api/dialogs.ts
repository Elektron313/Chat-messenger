import { instance } from './api';
import { DialogItemType } from '../types/types';

export const dialogsApi = {
    getAll: (): Promise<DialogItemType[]> => instance.get('/dialogs'),
};
