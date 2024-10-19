// src/components/Skills.tsx
import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

const skillsData = [
  { name: 'HTML', icon: 'fab fa-html5', color: '#E34F26' }, // HTML color
  { name: 'CSS', icon: 'fab fa-css3-alt', color: '#1572B6' }, // CSS color
  { name: 'JavaScript', icon: 'fab fa-js', color: '#F7DF1E' }, // JavaScript color
  { name: 'React', icon: 'fab fa-react', color: '#61DAFB' }, // React color
  { name: 'Node.js', icon: 'fab fa-node', color: '#8CC84B' }, // Node.js color
  { name: 'Cloud', icon: 'fas fa-cloud', color: '#B2BEC3' }, // Cloud color
  { name: 'Java Spring', icon: 'fab fa-java', color: '#007396' }, // Java Spring color
];

const Skills: React.FC = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom align="center">
        Skills
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {skillsData.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ textAlign: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <i 
                className={skill.icon} 
                style={{ fontSize: '48px', marginBottom: '8px', color: skill.color }} 
              ></i>
              <Typography variant="h6" mt={1}>
                {skill.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
