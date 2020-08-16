import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Login } from '../../modules/LoginForm/LoginForm';
import { BaseThunkType } from '../store';
import { User } from '../../types/types';
import { Registration, userApi } from '../../api/user';
import openNotification from '../../utils/helpers/openNotification';
import { History } from 'history';

type InitialState = {
    user: User | null;
    isFetching: boolean;
    isAuth: boolean;
};

const initState: InitialState = {
    user: null,
    isFetching: false,
    isAuth: false,
};

type SetUser = PayloadAction<User>;
type HandleFetching = PayloadAction<boolean>;
type SetToken = PayloadAction<string>;
const userSlice = createSlice({
    name: 'user',
    initialState: initState,
    reducers: {
        setUser: (state, { payload }: SetUser) => ({ ...state, user: payload, isAuth: true }),
        handleFetching: (state, { payload }: HandleFetching) => ({ ...state, isFetching: payload }),
    },
});

export const { setUser, handleFetching } = userSlice.actions;
export const { reducer: userReducer } = userSlice;

type FetchUserData = BaseThunkType<SetUser>;
export const fetchUserData = (): FetchUserData => async (dispatch) => {
    const data = await userApi.getMe();
    dispatch(setUser(data));
};

type Actions = HandleFetching | SetToken;
type FetchUserLogin = BaseThunkType<Actions>;
export const fetchUserLogin = (data: Login, history: History): FetchUserLogin => async (dispatch) => {
    dispatch(handleFetching(true));
    const userData = await userApi.login(data);
    if (userData.status === 'error') {
        openNotification({ text: 'Неверный логин или пароль', type: 'error', tittle: 'Ошибка при авторизации' });
    } else {
        openNotification({ text: 'Успешная авторизация', type: 'success', tittle: 'Отлично' });
        localStorage.setItem('token', userData.token);
        dispatch(fetchUserData());
        history.push('/');
    }
    dispatch(handleFetching(false));
};

type RequestRegistration = BaseThunkType<SetUser>;
export const requestRegistration = (data: Registration, history: History): RequestRegistration => async (dispatch) => {
    const response = await userApi.registration(data);
    if (response.status === 'success') {
        history.push('/registry/verify');
    }
};
