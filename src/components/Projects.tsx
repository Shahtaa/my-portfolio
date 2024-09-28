import React from 'react';
import { Typography, Container } from '@mui/material';
import '../styles/Projects.css';

const Projects: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        My Projects
      </Typography>
      <Typography variant="body1">
        Here are some of the projects I've worked on.
      </Typography>
    </Container>
  );
};

export default Projects;
