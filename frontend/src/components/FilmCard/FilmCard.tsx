import React, { useState } from 'react';

import {
    Card,
    CardContent,
    CardMedia,
    Skeleton,
    Typography,
} from '@mui/material';

import FilmDetailsModal from '@/components/FilmDetailsModal/FilmDetailsModal';
import { useDeleteFilm } from '@/hooks/useDeleteFilm';
import { PeopleCardType } from '@/utils/types';

const FilmCard = ({ media, item }: PeopleCardType) => {
    const [open, setOpen] = useState(false);
    const { trigger } = useDeleteFilm(item?.id);

    return (
        <>
            <Card
                variant="outlined"
                sx={{
                    maxWidth: 250,
                    width: '100%',
                    height: '100%',
                }}
                onClick={() => setOpen(true)}
            >
                {!item ? (
                    <>
                        <Skeleton
                            variant="rectangular"
                            width={250}
                            height={175}
                        />
                        <CardContent>
                            <Skeleton />
                        </CardContent>
                    </>
                ) : (
                    <>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={media}
                            title={item.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                {item.title}
                            </Typography>
                        </CardContent>
                    </>
                )}
            </Card>
            {open && (
                <FilmDetailsModal
                    open={open}
                    setOpen={setOpen}
                    deleteTrigger={() => {
                        void trigger();
                        setOpen(false);
                    }}
                    {...item}
                />
            )}
        </>
    );
};

export default FilmCard;
