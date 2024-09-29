// src/App.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NotFound from './components/NotFound'; // Import the NotFound component

const App: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Header />
      <Box mt={4}>
        <Routes>
          <Route path="/" element={<About />} />  {/* Home route */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> {/* Use NotFound component */}
        </Routes>
      </Box>
    </Container>
  );
};

export default App;
