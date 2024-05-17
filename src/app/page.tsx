'use client';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ValidateForm from '@/components/ValidateForm';
import Header from '@/components/Header/Header';

export default function Home() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Container maxWidth="sm">
        <Header/>
        <Box padding={{ xs: 5, lg:5, sm:7}} sx={{ boxShadow: 3 }}>
          <ValidateForm/>
        </Box>
      </Container>
    </Box>
  );
}