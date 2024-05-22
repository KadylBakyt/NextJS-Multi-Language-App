import nextIntl from "next-intl/plugin";

// Your existing Next.js configuration
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [],
  },
};

// Use nextIntl to extend your configuration with the next-intl plugin
const withNextIntl = nextIntl("./src/i18n.ts");

export default withNextIntl(nextConfig);