// src/components/About.tsx
import React from 'react';
import { Box, Typography, Link, Divider } from '@mui/material';

const About: React.FC = () => {
    return (
        <Box sx={{ maxWidth: 800, margin: '0 auto', padding: '16px' }}>
            <Typography variant="h4" gutterBottom align="center">
                Hi there! 👋
            </Typography>
            <Typography variant="h5" gutterBottom align="center">
                Welcome to My Portfolio! 🎉
            </Typography>
            <Divider sx={{ marginY: 2 }} />
            <Typography variant="h5" gutterBottom>
                About Me 💼
            </Typography>
            <Typography variant="body1" paragraph>
                I'm a full-stack developer specializing in modern web technologies like <strong>React</strong> ⚛️, 
                <strong> JavaScript</strong> 📜, and <strong>Spring Boot</strong> 🚀. I enjoy creating interactive, 
                user-friendly applications 💻 and building efficient backend solutions 🛠️.
            </Typography>
            <Typography variant="body1" paragraph>
                Some of my projects include:
            </Typography>
            <Typography variant="body1" paragraph>
                - <Link href="https://shahtaa.github.io/wifi-qr-generator/" target="_blank" rel="noopener noreferrer">
                    QR Code Generator
                </Link> 📱 - Create custom QR codes easily for WiFi and more.
            </Typography>
            <Typography variant="body1" paragraph>
                - <Link href="https://shahtaa.github.io/password-generator/" target="_blank" rel="noopener noreferrer">
                    Password Generator
                </Link> 🔐 - Generate secure passwords to protect your accounts.
            </Typography>
            <Typography variant="body1" paragraph>
                - <Link href="https://shahtaa.github.io/todoapp/" target="_blank" rel="noopener noreferrer">
                    ToDoApp
                </Link> ✅ - A simple and efficient task management tool.
            </Typography>
            <Typography variant="body1" paragraph>
                I'm always eager to learn 📚 and contribute to exciting projects! 🌟
            </Typography>
        </Box>
    );
};

export default About;
