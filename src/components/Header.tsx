// src/components/Header.tsx
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { Home, Assignment, Build, MailOutline, Menu as MenuIcon } from '@mui/icons-material';

const iconColor = 'inherit'; // Define a consistent color for the icons

const Header: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const isMenuOpen = Boolean(anchorEl);

    // Open the mobile menu
    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    // Close the mobile menu
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" sx={{ width: '100%', mb: 4 }}>
            <Toolbar>
                {/* Header Title with consistent font */}
                <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: 'Roboto, Arial, sans-serif' }}>
                    My Portfolio
                </Typography>

                {/* Burger Menu Icon for Mobile */}
                <IconButton
                    size="large"
                    edge="end"
                    aria-label="menu"
                    aria-controls="mobile-menu"
                    aria-haspopup="true"
                    onClick={handleMenuOpen}
                    color="inherit"
                    sx={{ display: { xs: 'block', md: 'none' } }} // Only show on mobile
                >
                    <MenuIcon />
                </IconButton>

                {/* Desktop Menu */}
                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '10px' }}>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/"
                        startIcon={<Home sx={{ color: iconColor }} />} // Consistent icon color
                        aria-label="About"
                        sx={{ fontFamily: 'Roboto, Arial, sans-serif' }} // Consistent font for buttons
                    >
                        About
                    </Button>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/projects"
                        startIcon={<Assignment sx={{ color: iconColor }} />}
                        aria-label="Projects"
                        sx={{ fontFamily: 'Roboto, Arial, sans-serif' }} // Consistent font for buttons
                    >
                        Projects
                    </Button>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/skills"
                        startIcon={<Build sx={{ color: iconColor }} />}
                        aria-label="Skills"
                        sx={{ fontFamily: 'Roboto, Arial, sans-serif' }} // Consistent font for buttons
                    >
                        Skills
                    </Button>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/contact"
                        startIcon={<MailOutline sx={{ color: iconColor }} />}
                        aria-label="Contact"
                        sx={{ fontFamily: 'Roboto, Arial, sans-serif' }} // Consistent font for buttons
                    >
                        Contact
                    </Button>
                </Box>

                {/* Mobile Menu */}
                <Menu
                    id="mobile-menu"
                    anchorEl={anchorEl}
                    open={isMenuOpen}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={handleMenuClose} component={Link} to="/" sx={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                        <Home sx={{ marginRight: 1, color: iconColor }} /> About
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose} component={Link} to="/projects" sx={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                        <Assignment sx={{ marginRight: 1, color: iconColor }} /> Projects
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose} component={Link} to="/skills" sx={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                        <Build sx={{ marginRight: 1, color: iconColor }} /> Skills
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose} component={Link} to="/contact" sx={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                        <MailOutline sx={{ marginRight: 1, color: iconColor }} /> Contact
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
