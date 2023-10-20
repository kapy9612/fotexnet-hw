import React from 'react';

import { TriggerWithoutArgs } from 'swr/mutation';

import { ModificationVariant } from '@/components/ModificationModal/ModificationModal';

export type Film = {
    id: number;
    title: string;
    description: string;
    age: number;
};

export type ModificationModalType = Partial<Film> & {
    variant: ModificationVariant;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    setAge: React.Dispatch<React.SetStateAction<number>>;
    setDescription: React.Dispatch<React.SetStateAction<string>>;
    trigger: TriggerWithoutArgs;
};

export type FilterRowType = {
    setAge: React.Dispatch<React.SetStateAction<string>>;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    age: string;
};

export type ParamsType = {
    age?: string;
};
