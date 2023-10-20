import React, { useEffect, useState } from 'react';

import { Grid, Typography } from '@mui/material';

import FilmCard from '@/components/FilmCard/FilmCard';
import FilmDetailsModal from '@/components/FilmDetailsModal/FilmDetailsModal';
import FilterRow from '@/components/FilterRow/FilterRow';
import ModificationModal from '@/components/ModificationModal/ModificationModal';
import { useFilms } from '@/hooks/useFilms';
import { Film } from '@/utils/types';

function FilmLayout() {
    const [open, setOpen] = useState(false);
    const [age, setAge] = useState('');

    const films = useFilms();

    const filteredFilms =
        films.data &&
        films?.data.filter((f) => (age !== '' ? f.age === Number(age) : f.age));

    if (films.error) {
        return (
            <Typography>An error occurred, please refresh the page.</Typography>
        );
    }

    return (
        <>
            <Typography variant={'h2'}>Fotexnet homework</Typography>
            <FilterRow age={age} setAge={setAge} setOpen={setOpen} />
            <Grid container spacing={2} columns={{ xs: 4, sm: 6, md: 10 }}>
                {(films.isLoading
                    ? Array.from(new Array(5))
                    : filteredFilms!
                ).map((item: Film, index: number) => (
                    <Grid item xs={2} key={index}>
                        <FilmCard
                            item={item}
                            media={`https://picsum.photos/id/${
                                index + 1
                            }/250/175`}
                        />
                    </Grid>
                ))}
            </Grid>
            {open && <ModificationModal open={open} setOpen={setOpen} />}
        </>
    );
}

export default FilmLayout;
