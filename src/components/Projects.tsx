// src/components/Projects.tsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

// You can replace this with the respective images for each project
import localImage from '../images/image.png';

const projectData = [
  {
    title: 'My To-Do List',
    description: 'A simple and efficient To-Do List application to manage your tasks.',
    imageUrl: localImage, // Replace with the actual project image
    link: 'https://github.com/shahtaa/myToDoList',
    demo: 'https://shahtaa.github.io/myToDoList/',
  },
  {
    title: 'QR Code Generator',
    description: 'A user-friendly QR code generator built with React and TypeScript.',
    imageUrl: localImage, // Replace with the actual project image
    link: 'https://github.com/shahtaa/wifi-qr-generator',
    demo: 'https://shahtaa.github.io/wifi-qr-generator/',
  },
  {
    title: 'Password Generator',
    description: 'A secure password generator built with React and TypeScript.',
    imageUrl: localImage, // Replace with the actual project image
    link: 'https://github.com/Shahtaa/password-generator',
    demo: 'https://shahtaa.github.io/password-generator/',
  },
  {
    title: 'GitHub User Search',
    description: 'A GitHub User Search application built with React and JavaScript. Users can search for GitHub users and view profiles.',
    imageUrl: localImage, // Replace with the actual project image
    link: 'https://github.com/Shahtaa/github-user-search-app',
    demo: 'https://shahtaa.github.io/github-user-search-app/',
  },
  {
    title: 'ToDoApp',
    description: 'A functional Todo List application built with React and JavaScript. Seamlessly add, complete, and delete tasks.',
    imageUrl: localImage, // Replace with the actual project image
    link: 'https://github.com/Shahtaa/todoapp',
    demo: 'https://shahtaa.github.io/todoapp/',
  },
  // You can add more projects as needed
];

const Projects: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom align="center">
        My Projects
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {projectData.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={project.imageUrl}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
                <Typography variant="body2" color="primary">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                  {' | '}
                  <a href={project.link} target="_blank" rel="noopener noreferrer">GitHub</a>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
