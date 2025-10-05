// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com', // Whitelist this domain
        port: '',
        pathname: '/**',
      },
    ],
  },
};
export default nextConfig;
