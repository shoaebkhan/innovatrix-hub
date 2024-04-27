/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.example.com',
          port: '',
          pathname: '/E:/Next.JS/innovatrix-hub/public/**',
        },
      ],
    },
  }
export default nextConfig;
