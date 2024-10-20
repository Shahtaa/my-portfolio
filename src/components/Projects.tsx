// src/components/Projects.tsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Button, Box } from '@mui/material';
import localImage from '../images/image.png';

const projectData = [
    {
        title: 'HTML5 and CSS3',
        description: 'Exercises and resources for HTML5 and CSS3 web development.',
        category: 'HTML/CSS/JavaScript Basics',
        link: 'https://github.com/Shahtaa/html5-ja-css3',
        demo: '',
    },
    {
        title: 'JavaScript Programming',
        description: 'Projects and exercises related to JavaScript programming.',
        category: 'HTML/CSS/JavaScript Basics',
        link: 'https://github.com/Shahtaa/javascript-ohjelmointi',
        demo: '',
    },
    {
        title: 'My To-Do List',
        description: 'A simple and efficient To-Do List application to manage your tasks.',
        category: 'HTML/CSS/JavaScript Basics',
        link: 'https://github.com/shahtaa/myToDoList',
        demo: 'https://shahtaa.github.io/myToDoList/',
    },
    {
        title: 'QR Code Generator',
        description: 'A user-friendly QR code generator built with React and TypeScript.',
        category: 'React Projects',
        link: 'https://github.com/shahtaa/wifi-qr-generator',
        demo: 'https://shahtaa.github.io/wifi-qr-generator/',
    },
    {
        title: 'Password Generator',
        description: 'A secure password generator built with React and TypeScript.',
        category: 'React Projects',
        link: 'https://github.com/Shahtaa/password-generator',
        demo: 'https://shahtaa.github.io/password-generator/',
    },
    {
        title: 'GitHub User Search',
        description: 'A GitHub User Search application built with React and JavaScript. Users can search for GitHub users and view profiles.',
        category: 'React Projects',
        link: 'https://github.com/Shahtaa/github-user-search-app',
        demo: 'https://shahtaa.github.io/github-user-search-app/',
    },
    {
        title: 'ToDoApp',
        description: 'A functional Todo List application built with React and JavaScript. Seamlessly add, complete, and delete tasks.',
        category: 'React Projects',
        link: 'https://github.com/Shahtaa/todoapp',
        demo: 'https://shahtaa.github.io/todoapp/',
    },
    {
        title: 'Demo',
        description: 'A Spring Boot application for managing content items.',
        category: 'Spring Boot Projects',
        link: 'https://github.com/Shahtaa/demo',
        demo: '',
    },
    {
        title: 'Kahvikauppa',
        description: 'A Spring Boot application for managing a coffee shop.',
        category: 'Spring Boot Projects',
        link: 'https://github.com/Shahtaa/kahvikauppa',
        demo: '',
    },
    {
        title: 'Java Programming - MOOC.fi',
        description: 'A comprehensive course on Java programming offered by MOOC.fi.',
        category: 'Additional Repositories',
        link: 'https://github.com/Shahtaa/hbc-java23S',
        demo: '',
    },
    {
        title: 'Full Stack Open',
        description: 'An immersive dive into modern web development, covering React, Node.js, and MongoDB.',
        category: 'Additional Repositories',
        link: 'https://github.com/Shahtaa/hy-fullstack-part-1',
        demo: '',
    },
];

const Projects: React.FC = () => {
    const renderProjects = (category: string) => {
        return (
            <Grid container spacing={4} justifyContent="center" style={{ marginTop: '16px' }}>
                {projectData
                    .filter((project) => project.category === category)
                    .map((project, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    boxShadow: 3,
                                    transition: 'transform 0.2s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        boxShadow: 5,
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image={localImage}
                                    alt={project.title}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="h5" component="div" align="center" gutterBottom>
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" align="center" paragraph>
                                        {project.description}
                                    </Typography>
                                </CardContent>
                                <Box display="flex" justifyContent="space-between" padding={2}>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            borderColor: '#3f51b5',
                                            color: '#3f51b5',
                                            '&:hover': {
                                                backgroundColor: '#f0f0f0',
                                                borderColor: '#303f9f',
                                                color: '#303f9f',
                                            },
                                        }}
                                    >
                                        GitHub
                                    </Button>
                                    {project.demo && (
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{
                                                backgroundColor: '#3f51b5',
                                                '&:hover': {
                                                    backgroundColor: '#303f9f',
                                                },
                                            }}
                                        >
                                            Live Demo
                                        </Button>
                                    )}
                                </Box>
                            </Card>
                        </Grid>
                    ))}
            </Grid>
        );
    };

    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom align="center" style={{ fontWeight: 'bold', marginBottom: '40px' }}>
                My Projects
            </Typography>

            <Typography variant="h5" gutterBottom align="center">
                HTML/CSS/JavaScript Basics 📦
            </Typography>
            {renderProjects('HTML/CSS/JavaScript Basics')}

            <Typography variant="h5" gutterBottom align="center" style={{ marginTop: '40px' }}>
                React Projects ⚛️
            </Typography>
            {renderProjects('React Projects')}

            <Typography variant="h5" gutterBottom align="center" style={{ marginTop: '40px' }}>
                Spring Boot Projects 🚀
            </Typography>
            {renderProjects('Spring Boot Projects')}

            <Typography variant="h5" gutterBottom align="center" style={{ marginTop: '40px' }}>
                Additional Repositories 📦
            </Typography>
            {renderProjects('Additional Repositories')}
        </div>
    );
};

export default Projects;
