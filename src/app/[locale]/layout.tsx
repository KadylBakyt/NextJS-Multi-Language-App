import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
 
export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </NextIntlClientProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}