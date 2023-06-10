/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: ['www.datocms-assets.com', 'images.unsplash.com']
  }
};

module.exports = nextConfig;
