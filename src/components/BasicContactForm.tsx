// src/components/BasicContactForm.tsx
import React, {useState} from 'react';
import {
    TextField,
    Button,
    Typography,
    Container,
    Snackbar,
    Alert,
} from '@mui/material';

const BasicContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
    const [loading, setLoading] = useState(false);

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const {name, email, message} = formData;
        if (!name || !email || !message) {
            setSnackbarMessage('Please fill in all required fields.');
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
            return;
        }

        setLoading(true);

        try {
            // Simulate a server request with a timeout
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // In a real application, you would send the data to the server here
            setSnackbarMessage('Message sent successfully!');
            setSnackbarSeverity('success');
        } catch (error) {
            setSnackbarMessage('An error occurred while sending the message.');
            setSnackbarSeverity('error');
        } finally {
            setOpenSnackbar(true);
            setLoading(false);
            setFormData({name: '', email: '', message: ''}); // Clear the form after submission
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Typography variant="h4" align="center" gutterBottom>
                Contact Me
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    name="name"
                    label="Name"
                    value={formData.name}
                    onChange={handleTextChange}
                    required
                    fullWidth
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    name="email"
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleTextChange}
                    required
                    fullWidth
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    name="message"
                    label="Message"
                    value={formData.message}
                    onChange={handleTextChange}
                    required
                    multiline
                    rows={4}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={loading}
                >
                    {loading ? 'Sending...' : 'Send'}
                </Button>
            </form>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={() => setOpenSnackbar(false)}
                anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} // Set position to bottom center
            >
                <Alert onClose={() => setOpenSnackbar(false)} severity={snackbarSeverity}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default BasicContactForm;
