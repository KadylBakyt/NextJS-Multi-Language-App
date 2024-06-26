"use client";

import React, { Component } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {useTranslations} from 'next-intl';
  
export default function Footer() {

    const year = new Date().getFullYear();
    const t = useTranslations('Footer');

    return (
        <Box
            justifyContent="center"
            alignItems="center"
            component="footer"
        >
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign:'center' }}>
                        &copy; { year } {t('copyright-content')}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>  
    );
    
}