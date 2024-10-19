// src/components/Footer.tsx
import React from 'react';
import {Box, Typography, IconButton, SvgIcon} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Custom SVG Icon for Telegram
const TelegramIcon = () => (
    <SvgIcon>
        <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.92 6.01l-1.73 8.16c-.13.59-.48.73-.97.45l-2.69-1.98-1.29 1.25c-.14.14-.26.26-.54.26l.19-2.75 5.01-4.54c.22-.19-.05-.3-.34-.11l-6.24 3.93-2.69-.84c-.58-.18-.59-.58.12-.85l10.47-4.04c.48-.17.91.11.75.85z"/>
    </SvgIcon>
);

const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            py={2}
            mt={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            borderTop="1px solid #e0e0e0" // Subtle top border to separate footer
            bgcolor="transparent" // Make the footer transparent
            sx={{backdropFilter: 'blur(5px)'}} // Optional: slight blur for better readability
        >
            <Box display="flex" justifyContent="center" gap={1}>
                {/* GitHub Icon Link */}
                <IconButton
                    href="https://github.com/"
                    color="default"
                    target="_blank"
                    rel="noopener"
                    aria-label="GitHub"
                    size="small"
                    sx={{color: '#333'}} // Set a consistent color for better visibility
                >
                    <GitHubIcon fontSize="small"/>
                </IconButton>

                {/* LinkedIn Icon Link */}
                <IconButton
                    href="https://linkedin.com/"
                    color="default"
                    target="_blank"
                    rel="noopener"
                    aria-label="LinkedIn"
                    size="small"
                    sx={{color: '#0077b5'}} // LinkedIn brand color
                >
                    <LinkedInIcon fontSize="small"/>
                </IconButton>

                {/* Telegram Icon Link */}
                <IconButton
                    href="https://t.me/"
                    color="default"
                    target="_blank"
                    rel="noopener"
                    aria-label="Telegram"
                    size="small"
                    sx={{color: '#0088cc'}} // Telegram brand color
                >
                    <TelegramIcon/>
                </IconButton>
            </Box>
            <Typography
                variant="caption"
                color="textSecondary"
                mt={1}
                sx={{fontSize: '0.75rem', color: '#333'}} // Set text color for contrast
            >
                © {new Date().getFullYear()} My Portfolio. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
