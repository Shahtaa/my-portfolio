// src/components/Header.tsx
import React from 'react';
import {AppBar, Toolbar, Typography, Button} from '@mui/material';
import {Link} from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <AppBar position="static" sx={{width: '100%'}}>
            <Toolbar>
                <Typography variant="h6" sx={{flexGrow: 1}}>
                    My Portfolio
                </Typography>
                <Button color="inherit" component={Link} to="/">About</Button> {/* Serves as Home */}
                <Button color="inherit" component={Link} to="/projects">Projects</Button>
                <Button color="inherit" component={Link} to="/skills">Skills</Button> {/* Skills Link */}
                <Button color="inherit" component={Link} to="/contact">Contact</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
