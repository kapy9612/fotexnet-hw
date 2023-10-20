import useSWRMutation from 'swr/mutation';

import { useFilms } from '@/hooks/useFilms';
import { deleteRequest } from '@/utils/requests';

export const useDeleteFilm = (id: number) => {
    const { mutate } = useFilms();

    return useSWRMutation(
        ['film-delete'],
        () => deleteRequest(`/api/film/${id}`),
        { onSuccess: () => mutate() },
    );
};
