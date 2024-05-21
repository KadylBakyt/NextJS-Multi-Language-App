"use client";

import Link from 'next/link'
import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function NotFound({ children }: { children: React.ReactNode }) {

  return (
    <html>
      <body>
        <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh'
        }}
        >
          <Container maxWidth="sm">
              <Grid container spacing={2}>
              <Grid xs={6}>
                  <Typography variant="h1">
                  404
                  </Typography>
                  <Typography variant="h6">
                  The page you’re looking for doesn’t exist.
                  </Typography>
                  
                  <Link href="/">
                      <Button variant="contained">Return Home</Button>
                  </Link>
                  
              </Grid>
              <Grid xs={6}>
                  <img
                  src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
                  alt=""
                  width={400} height={200}
                  />
              </Grid>
              </Grid>
          </Container>
        </Box>
        {children}
      </body>
    </html>
  );
}