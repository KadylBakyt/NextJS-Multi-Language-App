import nextIntl from "next-intl/plugin";

// Your existing Next.js configuration
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

// Use nextIntl to extend your configuration with the next-intl plugin
const withNextIntl = nextIntl("./src/i18n.ts");

export default withNextIntl(nextConfig);