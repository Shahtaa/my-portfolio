// src/components/About.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const About: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Hi there! 👋
      </Typography>
      <Typography variant="h5" gutterBottom>
        Welcome to My Portfolio! 🎉
      </Typography>
      <Typography variant="h5" gutterBottom>
        About Me 💼
      </Typography>
      <Typography variant="body1">
        I'm a passionate coder 👨‍💻 dedicated to crafting efficient web applications. 
        With expertise in Java ☕ and React ⚛️, I thrive on tackling new challenges and 
        contributing creativity to innovative projects.
      </Typography>
    </Box>
  );
};

export default About;
