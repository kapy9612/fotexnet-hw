import React from 'react';

import {
    FormControl,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material';
import { InputLabel } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import { useFilms } from '@/hooks/useFilms';
import { removeDuplicates } from '@/utils/removeDuplicates';
import { FilterRowType } from '@/utils/types';

const FilterRow = ({ age, setAge, setOpen }: FilterRowType) => {
    const films = useFilms();

    const ages =
        !films.isLoading && films.data
            ? removeDuplicates(films.data!.flatMap((f) => f.age))
            : null;

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <Grid container spacing={2} columns={10} alignItems={'center'}>
            <Grid item xs={6} />
            <Grid item xs={2}>
                <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => setOpen(true)}
                >
                    Add new
                </Button>
            </Grid>
            <Grid item xs={2}>
                <FormControl fullWidth size="small">
                    <InputLabel id="select-label">Age Limit</InputLabel>
                    <Select
                        labelId="select-label"
                        value={age}
                        label="Age Limit"
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {ages &&
                            ages.map((item, index) => (
                                <MenuItem value={item} key={index}>
                                    {item}
                                </MenuItem>
                            ))}
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    );
};

export default FilterRow;
