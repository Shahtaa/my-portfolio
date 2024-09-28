// src/App.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container, Box, Typography } from '@mui/material';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <Container maxWidth="lg"> {/* Set a maxWidth for the container */}
      <Header />
      <Box mt={4}>
        <Routes>
          <Route path="/" element={<About />} />  {/* Home route */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Typography variant="h5" align="center">404 Not Found</Typography>} />
        </Routes>
      </Box>
    </Container>
  );
};

export default App;
