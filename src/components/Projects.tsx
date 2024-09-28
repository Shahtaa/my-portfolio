// src/components/Projects.tsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const projectData = [
  {
    title: 'Project 1',
    description: 'Description of Project 1',
    imageUrl: 'https://via.placeholder.com/300', // Placeholder image
    link: 'https://example.com/project1', // Project link
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2',
    imageUrl: 'https://via.placeholder.com/300', // Placeholder image
    link: 'https://example.com/project2',
  },
  {
    title: 'Project 3',
    description: 'Description of Project 3',
    imageUrl: 'https://via.placeholder.com/300', // Placeholder image
    link: 'https://example.com/project3',
  },
  // Add more projects as needed
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
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
