import { instance } from './api';

type UploadResponse = {
    status: string;
    file: {
        _id: string;
        fileName: string;
        size: number;
        ext: string;
        url: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    };
};

export const filesApi = {
    upload: (file: File): Promise<UploadResponse> => {
        const formData = new FormData();
        formData.append('file', file);
        return instance.post('/files', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
    },
};
