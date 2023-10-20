import { useEffect, useState } from 'react';

import { ModificationVariant } from '@/components/ModificationModal/ModificationModal';
import { useCreateFilm } from '@/hooks/useCreateFilm';
import { useEditFilm } from '@/hooks/useEditFilm';

export const useForm = (
    variant: ModificationVariant,
    id?: number,
    defaultTitle?: string,
    defaultDescription?: string,
    defaultAge?: number,
) => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [age, setAge] = useState<number>(0);

    const editFilm = useEditFilm(id!, title, description, age);

    const createFilm = useCreateFilm(title, description, age);

    useEffect(() => {
        if (createFilm.isMutating) {
            setTitle('');
            setDescription('');
            setAge(0);
        }
    }, [createFilm.isMutating]);

    useEffect(() => {
        if (defaultTitle) {
            setTitle(defaultTitle);
        }
        if (defaultAge) {
            setAge(defaultAge);
        }
        if (defaultDescription) {
            setDescription(defaultDescription);
        }
    }, [defaultTitle, defaultDescription, defaultAge]);

    return {
        formTitle: title,
        setTitle,
        formDescription: description,
        setDescription,
        formAge: age,
        setAge,
        trigger:
            variant === ModificationVariant.EDIT
                ? editFilm.trigger
                : createFilm.trigger,
    };
};
