import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Snackbar,
  Alert,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  SelectChangeEvent,
} from '@mui/material';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
  const [loading, setLoading] = useState(false);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simple validation before submission
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setSnackbarMessage('Please fill in all required fields.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message.');
      }

      setSnackbarMessage('Message sent successfully!');
      setSnackbarSeverity('success');
    } catch (error) {
      console.error('Error:', error);
      setSnackbarMessage('An error occurred while sending the message.');
      setSnackbarSeverity('error');
    } finally {
      setOpenSnackbar(true);
      setLoading(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); // Clear the form after submission
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        Contact Me
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="contact-name">Name</InputLabel>
              <TextField
                id="contact-name" // Unique ID for accessibility
                name="name" // Name attribute for autofill
                value={formData.name}
                onChange={handleTextChange}
                required
                autoComplete="name" // Autofill suggestion
                variant="outlined" // Outline variant for Material-UI
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="contact-email">Email</InputLabel>
              <TextField
                id="contact-email" // Unique ID for accessibility
                name="email" // Name attribute for autofill
                value={formData.email}
                onChange={handleTextChange}
                required
                type="email"
                autoComplete="email" // Autofill suggestion
                variant="outlined" // Outline variant for Material-UI
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="contact-phone">Phone</InputLabel>
              <TextField
                id="contact-phone" // Unique ID for accessibility
                name="phone" // Name attribute for autofill
                value={formData.phone}
                onChange={handleTextChange}
                type="tel" // Set input type to telephone
                autoComplete="tel" // Autofill suggestion
                variant="outlined" // Outline variant for Material-UI
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="contact-subject-label">Subject</InputLabel>
              <Select
                labelId="contact-subject-label"
                id="contact-subject"
                name="subject" // Name attribute for autofill
                value={formData.subject}
                onChange={handleSelectChange}
                label="Subject"
                required
              >
                <MenuItem value="Collaboration Opportunities">Collaboration Opportunities</MenuItem>
                <MenuItem value="Project Feedback">Project Feedback</MenuItem>
                <MenuItem value="General Inquiry">General Inquiry</MenuItem>
                <MenuItem value="Technical Support">Technical Support</MenuItem>
                <MenuItem value="Service Request">Service Request</MenuItem>
                <MenuItem value="Press Inquiries">Press Inquiries</MenuItem>
                <MenuItem value="Job Opportunities">Job Opportunities</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="contact-message">Message</InputLabel>
              <TextField
                id="contact-message" // Unique ID for accessibility
                name="message" // Name attribute for autofill
                value={formData.message}
                onChange={handleTextChange}
                required
                multiline
                rows={4}
                autoComplete="off" // Optionally disable autofill for this field
                variant="outlined" // Outline variant for Material-UI
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={loading} // Disable the button while loading
            >
              {loading ? 'Sending...' : 'Send'}
            </Button>
          </Grid>
        </Grid>
      </form>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;
