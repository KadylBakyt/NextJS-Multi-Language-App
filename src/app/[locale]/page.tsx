"use client";

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ValidateForm from '@/components/ValidateForm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {useTranslations} from 'next-intl';

export default function Home() {

  const t = useTranslations('UserRegistrationPage');

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Container maxWidth="sm">
        <Header title={t('registration')}/>
        <Box padding={{ xs: 5, lg:5, sm:7}} sx={{ boxShadow: 3 }}>
          <ValidateForm/>
        </Box>
        <Footer/>
      </Container>
    </Box>
  );
}