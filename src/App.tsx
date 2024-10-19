// src/App.tsx
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Container, Box} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'; // Import CssBaseline for consistent styling
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound'; // Don't forget to import your NotFound component

// Create a theme instance
const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // Customize your primary color
            light: '#63a4ff',
            dark: '#115293',
        },
        secondary: {
            main: '#dc004e', // Customize your secondary color
        },
        background: {
            default: '#f5f5f5', // Default background color
        },
        text: {
            primary: '#000000', // Primary text color
            secondary: '#555555', // Secondary text color
        },
    },
});

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/> {/* Apply baseline styles */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    width: '100vw',
                }}
            >
                <Header/>
                <Container
                    maxWidth="lg"
                    sx={{
                        flexGrow: 1,
                        mt: 4,
                        mb: 4,
                    }}
                >
                    <Routes>
                        <Route path="/" element={<About/>}/>
                        <Route path="/projects" element={<Projects/>}/>
                        <Route path="/skills" element={<Skills/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="*" element={<NotFound/>}/> {/* Fallback for undefined routes */}
                    </Routes>
                </Container>
                <Footer/>
            </Box>
        </ThemeProvider>
    );
};

export default App;
