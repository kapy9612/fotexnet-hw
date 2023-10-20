import React, { useState } from 'react';

import { Edit } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Card,
    CardActions,
    CardContent,
    Collapse,
    IconButton,
    IconButtonProps,
    Skeleton,
    Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import ModificationModal, {
    ModificationVariant,
} from '@/components/ModificationModal/ModificationModal';
import { useDeleteFilm } from '@/hooks/useDeleteFilm';
import { useForm } from '@/hooks/useForm';
import { Film } from '@/utils/types';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const FilmCard = ({ id, title, description, age }: Partial<Film>) => {
    const [expanded, setExpanded] = useState(false);
    const [open, setOpen] = useState(false);
    const deleteFilm = useDeleteFilm(id!);

    const {
        formTitle,
        setTitle,
        formDescription,
        setDescription,
        formAge,
        setAge,
        trigger,
    } = useForm(ModificationVariant.EDIT, id, title, description, age);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <Card
                variant="outlined"
                sx={{
                    maxWidth: 400,
                    width: '100%',
                }}
            >
                {!id ? (
                    <>
                        <CardContent>
                            <Skeleton />
                        </CardContent>
                    </>
                ) : (
                    <>
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                {title}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton
                                color="primary"
                                onClick={() => {
                                    setOpen(true);
                                }}
                            >
                                <Edit />
                            </IconButton>
                            <IconButton
                                color="error"
                                onClick={() => {
                                    void deleteFilm.trigger();
                                }}
                            >
                                <DeleteIcon />
                            </IconButton>
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>{description}</Typography>
                                <Typography paragraph>
                                    Age limit: {age}
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </>
                )}
            </Card>
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
};

export default FilmCard;
