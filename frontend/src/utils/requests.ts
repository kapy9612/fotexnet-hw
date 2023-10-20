import axios, { AxiosResponse, Method } from 'axios';

import { ParamsType } from '@/utils/types';

const request = async <T>(
    method: Method,
    url: string,
    body?: T,
    params?: ParamsType,
) => {
    const response: AxiosResponse<T> = await axios({
        method,
        baseURL:
            process.env['NEXT_PUBLIC_BACKEND_URL'] || 'http://localhost:1337',
        url: url,
        data: body,
        params,
    });

    return response.data;
};

export const getRequest = async <T>(url: string, params?: ParamsType) => {
    return request<T>('get', url, undefined, params);
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
