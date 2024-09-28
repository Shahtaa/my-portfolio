import React from 'react';
import { Typography, Container } from '@mui/material';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="body1">
        Feel free to reach out via email or through my social media!
      </Typography>
    </Container>
  );
};

export default Contact;
