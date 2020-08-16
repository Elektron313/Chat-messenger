import { instance } from './api';
import { Login } from '../modules/LoginForm/LoginForm';
import { User } from '../types/types';
import { RegisterFormType } from '../modules/RegisterForm/RegisterFormType';

type LoginResponse = {
    status: string;
    token: string;
    message: string;
};
type RegisterResponse = {
    status: string;
    response: '' | User;
    message: string;
};
export type Registration = Omit<RegisterFormType, 're-password'>;
export const userApi = {
    login: (postData: Login): Promise<LoginResponse> => instance.post('/user/login', postData),
    getMe: (): Promise<User> => instance.get('/user/me'),
    registration: (postData: Registration): Promise<RegisterResponse> => instance.post('/user/registration', postData),
    verifyHash: (hash: string): Promise<Omit<RegisterResponse, 'response'>> =>
        instance.get('/user/verify?hash=' + hash),
    findUsers: (name: string): Promise<User[]> => instance.get(`/user/find/?name=${name}`),
};
