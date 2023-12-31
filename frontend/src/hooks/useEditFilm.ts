import useSWRMutation from 'swr/mutation';

import { useFilms } from '@/hooks/useFilms';
import { putRequest } from '@/utils/requests';

export const useEditFilm = (
    id: number,
    title: string,
    description: string,
    age: number,
) => {
    const { mutate } = useFilms();

    return useSWRMutation(
        ['film-edit'],
        () => putRequest(`/api/film/${id}`, { title, description, age }),
        { onSuccess: () => mutate() },
    );
};
