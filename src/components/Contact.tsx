// src/components/Contact.tsx
import React from 'react';
import {Box} from '@mui/material';
import BasicContactForm from './BasicContactForm';

const Contact: React.FC = () => {
    return (
        <Box sx={{padding: 2}}>
            <BasicContactForm/>
        </Box>
    );
};

export default Contact;
