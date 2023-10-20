import React from 'react';

export type Film = {
    id: number;
    title: string;
    description: string;
    age: number;
};

export type PeopleCardType = {
    media: string;
    item: Film;
};

export type CustomModalType = Film & {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    deleteTrigger: any;
};

export type FilterRowType = {
    setAge: React.Dispatch<React.SetStateAction<string>>;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    age: string;
};

export type Planet = {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
};

export type ParamsType = {
    page?: number;
    search?: string;
};
