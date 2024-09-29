// src/App.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NotFound from './components/NotFound'; // Import the NotFound component
import Footer from './components/Footer'; // Import Footer component

const App: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Ensures the container takes the full height
        width: '100vw', // Ensures the container takes the full width
      }}
    >
      <Header />
      <Container
        maxWidth="lg"
        sx={{
          flexGrow: 1, // Allows the Container to grow and push the footer down
          mt: 4,
          mb: 4,
        }}
      >
        <Routes>
          <Route path="/" element={<About />} />  {/* Home route */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> {/* Use NotFound component */}
        </Routes>
      </Container>
      <Footer /> {/* Include Footer component at the bottom */}
    </Box>
  );
};

export default App;
