import axios from 'axios';

export const instance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        token: localStorage.getItem('token'),
    },
});

instance.interceptors.response.use((response) => response.data);
