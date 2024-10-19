// src/contexts/NotificationContext.tsx
import React, {createContext, useContext, useState} from 'react';
import {Snackbar, Alert} from '@mui/material';

interface NotificationContextProps {
    showNotification: (message: string, severity?: 'success' | 'error') => void;
}

const NotificationContext = createContext<NotificationContextProps | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState<'success' | 'error'>('success');

    const handleClose = () => {
        setOpen(false);
    };

    const showNotification = (msg: string, sev: 'success' | 'error' = 'success') => {
        setMessage(msg);
        setSeverity(sev);
        setOpen(true);
    };

    return (
        <NotificationContext.Provider value={{showNotification}}>
            {children}
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity}>
                    {message}
                </Alert>
            </Snackbar>
        </NotificationContext.Provider>
    );
};

export const useNotification = () => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotification must be used within a NotificationProvider');
    }
    return context;
};
