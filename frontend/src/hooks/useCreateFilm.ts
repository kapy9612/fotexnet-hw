import useSWRMutation from 'swr/mutation';

import { useFilms } from '@/hooks/useFilms';
import { postRequest } from '@/utils/requests';

export const useCreateFilm = (
    title: string,
    description: string,
    age: number,
) => {
    const { mutate } = useFilms();

    return useSWRMutation(
        ['film-create'],
        () => postRequest(`/api/film`, { title, description, age }),
        { onSuccess: () => mutate() },
    );
};
