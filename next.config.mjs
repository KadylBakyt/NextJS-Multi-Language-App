import createNextIntlPlugin from 'next-intl/plugin';
    
export default (phase, { defaultConfig }) => {
    
  const withNextIntl = createNextIntlPlugin();

  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {}
  
  return withNextIntl();
}