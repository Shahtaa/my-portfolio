// src/components/About.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const About: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1">
        This is the About page content. Describe yourself or your work here.
      </Typography>
    </Box>
  );
};

export default About;
