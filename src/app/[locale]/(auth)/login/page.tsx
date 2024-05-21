import {NextIntlClientProvider} from 'next-intl';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Header from '@/components/Header/Header';
import {useTranslations} from 'next-intl';

export default function Login() {
  const t = useTranslations('IndexPage');

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Container maxWidth="sm">
        <Header/>
        <h1>Login page</h1>

      </Container>
    </Box>
  );
}