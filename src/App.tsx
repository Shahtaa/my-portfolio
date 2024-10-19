// src/App.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound'; // Don't forget to import your NotFound component

const App: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100vw',
      }}
    >
      <Header />
      <Container
        maxWidth="lg"
        sx={{
          flexGrow: 1,
          mt: 4,
          mb: 4,
        }}
      >
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> {/* Fallback for undefined routes */}
        </Routes>
      </Container>
      <Footer />
    </Box>
  );
};

export default App;
