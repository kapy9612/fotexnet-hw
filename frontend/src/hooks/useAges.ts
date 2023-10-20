import useSWR from 'swr';

import { getRequest } from '@/utils/requests';

export const useAges = () => {
    return useSWR<number[]>(['ages'], () => getRequest(`/api/film/age`));
};
