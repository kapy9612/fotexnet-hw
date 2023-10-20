import useSWR from 'swr';

import { getRequest } from '@/utils/requests';
import { Film } from '@/utils/types';

export const useFilms = (age?: string) => {
    return useSWR<Film[]>(['films', age], () =>
        getRequest(`/api/film`, { age: age }),
    );
};
