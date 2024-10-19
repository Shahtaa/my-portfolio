// src/components/Skills.tsx
import React from 'react';
import { Grid, Typography, Box, Paper } from '@mui/material';

// Group skills by category with original colors and links
const skillsData = {
  Frontend: [
    { name: 'HTML', icon: 'fab fa-html5', color: '#E34F26', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' }, // HTML color
    { name: 'CSS', icon: 'fab fa-css3-alt', color: '#1572B6', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' }, // CSS color
    { name: 'JavaScript', icon: 'fab fa-js', color: '#F7DF1E', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' }, // JavaScript color
    { name: 'React', icon: 'fab fa-react', color: '#61DAFB', link: 'https://reactjs.org/' }, // React color
  ],
  Backend: [
    { name: 'Node.js', icon: 'fab fa-node', color: '#8CC84B', link: 'https://nodejs.org/' }, // Node.js color
    { name: 'Java Spring', icon: 'fab fa-java', color: '#007396', link: 'https://spring.io/' }, // Java Spring color
    { name: 'MongoDB', icon: 'fas fa-database', color: '#4DB33D', link: 'https://www.mongodb.com/' }, // MongoDB color
  ],
  Cloud: [
    { name: 'AWS', icon: 'fab fa-aws', color: '#FF9900', link: 'https://aws.amazon.com/' }, // AWS color
    { name: 'Azure', icon: 'fab fa-microsoft', color: '#0078D4', link: 'https://azure.microsoft.com/' }, // Azure color
    { name: 'Cloud', icon: 'fas fa-cloud', color: '#B2BEC3', link: 'https://cloud.google.com/' }, // Cloud color
  ],
};

const Skills: React.FC = () => {
  return (
    <Box sx={{ padding: '40px 20px', bgcolor: '#f9f9f9', borderRadius: '8px' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#333' }}>
        Skills
      </Typography>
      {Object.entries(skillsData).map(([category, skills]) => (
        <Box key={category} sx={{ marginBottom: '40px' }}>
          <Typography variant="h5" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#555' }}>
            {category}
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Paper
                  elevation={3}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100px', // Fixed width for circular card
                    height: '100px', // Fixed height for circular card
                    borderRadius: '50%', // Make the card circular
                    bgcolor: skill.color, // Use the original skill color
                    textAlign: 'center',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'scale(1.05)', // Scale effect on hover
                      boxShadow: 6,
                    },
                  }}
                >
                  <a href={skill.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <i 
                      className={skill.icon} 
                      style={{ fontSize: '48px', color: '#fff' }} // Set icon color to white for contrast
                    ></i>
                  </a>
                </Paper>
                <Typography variant="h6" mt={1} sx={{ color: '#333', textAlign: 'center' }}>
                  {skill.name}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default Skills;
