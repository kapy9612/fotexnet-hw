import React, { useState } from 'react';

import { Grid, Typography } from '@mui/material';

import FilmCard from '@/components/FilmCard/FilmCard';
import FilterRow from '@/components/FilterRow/FilterRow';
import ModificationModal, {
    ModificationVariant,
} from '@/components/ModificationModal/ModificationModal';
import { useFilms } from '@/hooks/useFilms';
import { useForm } from '@/hooks/useForm';
import { Film } from '@/utils/types';

function FilmLayout() {
    const [open, setOpen] = useState(false);
    const [filterAge, setFilterAge] = useState('');

    const films = useFilms(filterAge !== '' ? filterAge : undefined);

    const {
        formTitle,
        setTitle,
        formDescription,
        setDescription,
        formAge,
        setAge,
        trigger,
    } = useForm(ModificationVariant.ADD);

    if (films.error) {
        return (
            <Typography>An error occurred, please refresh the page.</Typography>
        );
    }

    return (
        <>
            <Typography variant={'h2'}>Fotexnet homework</Typography>
            <FilterRow
                age={filterAge}
                setAge={setFilterAge}
                setOpen={setOpen}
            />
            <Grid container spacing={2} columns={{ xs: 4, sm: 6, md: 8 }}>
                {films.isLoading
                    ? Array.from(new Array(8)).map((_, index) => (
                          <Grid item xs={2} key={index}>
                              <FilmCard />
                          </Grid>
                      ))
                    : films.data!.map((item: Film) => (
                          <Grid item xs={2} key={item.id}>
                              <FilmCard
                                  age={item.age}
                                  title={item.title}
                                  description={item.description}
                                  id={item.id}
                              />
                          </Grid>
                      ))}
            </Grid>
            {open && (
                <ModificationModal
                    open={open}
                    setOpen={setOpen}
                    variant={ModificationVariant.ADD}
                    title={formTitle}
                    description={formDescription}
                    age={formAge}
                    setAge={setAge}
                    setDescription={setDescription}
                    setTitle={setTitle}
                    trigger={trigger}
                />
            )}
        </>
    );
}

export default FilmLayout;
