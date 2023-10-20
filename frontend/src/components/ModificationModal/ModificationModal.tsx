import React from 'react';

import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';

import { ModificationModalType } from '@/utils/types';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 450,
    width: '100%',
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 3,
};

export enum ModificationVariant {
    ADD,
    EDIT,
}

const ModificationModal = ({
    open,
    setOpen,
    title,
    setTitle,
    variant,
    description,
    setDescription,
    age,
    setAge,
    trigger,
}: ModificationModalType) => {
    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {variant === ModificationVariant.ADD
                        ? 'Add new film'
                        : 'Edit'}
                </Typography>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        void trigger();
                        setOpen(false);
                    }}
                >
                    <Stack
                        direction="column"
                        spacing={2}
                        style={{ marginTop: '1rem' }}
                    >
                        <TextField
                            id="title"
                            label="Title"
                            variant="outlined"
                            value={title}
                            required
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <TextField
                            label="Description"
                            variant="outlined"
                            multiline
                            rows={4}
                            value={description}
                            required
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <TextField
                            id="standard-basic"
                            label="Age limit"
                            type="number"
                            variant="outlined"
                            value={age}
                            required
                            onChange={(e) => setAge(Number(e.target.value))}
                        />
                        <Button variant="outlined" type="submit" fullWidth>
                            Submit
                        </Button>
                    </Stack>
                </form>
            </Box>
        </Modal>
    );
};

export default ModificationModal;
