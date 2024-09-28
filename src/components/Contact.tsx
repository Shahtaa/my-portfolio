// src/components/Contact.tsx
import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Snackbar,
  Alert,
} from '@mui/material';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setSnackbarMessage('Message sent successfully!');
    setOpenSnackbar(true);
    setFormData({ name: '', email: '', message: '' }); // Clear the form after submission
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        Contact Me
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name" // Name attribute for autofill
              id="contact-name" // Unique ID for accessibility
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name" // Autofill suggestion
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email" // Name attribute for autofill
              id="contact-email" // Unique ID for accessibility
              value={formData.email}
              onChange={handleChange}
              required
              type="email"
              autoComplete="email" // Autofill suggestion
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              name="message" // Name attribute for autofill
              id="contact-message" // Unique ID for accessibility
              value={formData.message}
              onChange={handleChange}
              required
              multiline
              rows={4}
              autoComplete="off" // Optionally disable autofill for this field
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="success">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;
