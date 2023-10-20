import React from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';

import { CustomModalType } from '@/utils/types';

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

const ModificationModal = ({ open, setOpen, title, description, age }: any) => {
    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {title}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                    {description}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                    Age limit: {age}
                </Typography>
                <Stack
                    direction="row"
                    spacing={1}
                    style={{ marginTop: '1rem' }}
                ></Stack>
            </Box>
        </Modal>
    );
};

export default ModificationModal;
