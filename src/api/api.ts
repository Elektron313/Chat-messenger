import axios from 'axios';

export const instance = axios.create({
    baseURL: 'http://localhost:3004',
});

instance.interceptors.response.use((response) => response.data);
