import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css'; // Global styles

const App: React.FC = () => {
  return (
    <Router basename="/my-portfolio"> {/* Add basename here */}
      <Container>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<About />} /> {/* Default route */}
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
