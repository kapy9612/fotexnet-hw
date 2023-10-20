import useSWR from 'swr';

import { getRequest } from '@/utils/requests';
import { Film } from '@/utils/types';

export const useFilms = () => {
    return useSWR<Film[]>(['films'], () => getRequest(`/api/film`));
};
