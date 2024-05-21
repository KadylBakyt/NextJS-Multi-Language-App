import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['en', 'kz', 'cn', 'ru'],
 
  defaultLocale: 'en'
});
 
export const config = {
  matcher: ['/', '/(kz|en|cn|ru)/:path*']
};