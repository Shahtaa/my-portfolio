import React from 'react';
import { Typography, Container } from '@mui/material';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1">
        I'm a passionate developer dedicated to crafting efficient web applications.
      </Typography>
    </Container>
  );
};

export default About;
