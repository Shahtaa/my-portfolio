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

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target; // This will work because SelectChangeEvent has the correct target type
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simple validation before submission
    if (!formData.name || !formData.email || !formData.message) {
      setSnackbarMessage('Please fill in all required fields.');
      setOpenSnackbar(true);
      return;
    }

    // Here you would typically send the form data to your server
    console.log(formData);
    setSnackbarMessage('Message sent successfully!');
    setOpenSnackbar(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); // Clear the form after submission
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
              name="name"
              id="contact-name"
              value={formData.name}
              onChange={handleTextChange}
              required
              autoComplete="name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              id="contact-email"
              value={formData.email}
              onChange={handleTextChange}
              required
              type="email"
              autoComplete="email"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              id="contact-phone"
              value={formData.phone}
              onChange={handleTextChange}
              type="tel"
              autoComplete="tel"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="contact-subject-label">Subject</InputLabel>
              <Select
                labelId="contact-subject-label"
                id="contact-subject"
                name="subject" // Use name here to manage the form state
                value={formData.subject}
                onChange={handleSelectChange} // This function should now work correctly
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
            <TextField
              fullWidth
              label="Message"
              name="message"
              id="contact-message"
              value={formData.message}
              onChange={handleTextChange}
              required
              multiline
              rows={4}
              autoComplete="off"
              variant="outlined"
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
