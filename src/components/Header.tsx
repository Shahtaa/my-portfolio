import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // If you want to use routing
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Button color="inherit" component={Link} to="/about">
          About Me
        </Button>
        <Button color="inherit" component={Link} to="/projects">
          My Projects
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contact Me
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
