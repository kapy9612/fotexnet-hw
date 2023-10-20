import axios, { AxiosResponse, Method } from 'axios';

const request = async <T>(method: Method, url: string, body?: T) => {
    const response: AxiosResponse<T> = await axios({
        method,
        baseURL:
            process.env['NEXT_PUBLIC_BACKEND_URL'] || 'http://localhost:1337',
        url: url,
        data: body,
    });

    return response.data;
};

export const getRequest = async <T>(url: string) => {
    return request<T>('get', url);
};

export const postRequest = async <T>(path: string, body: T) => {
    return request<T>('post', path, body);
};

export const putRequest = async <T>(path: string, body: T) => {
    return request<T>('put', path, body);
};

export const deleteRequest = async <T>(path: string) => {
    return request<T>('delete', path);
};
