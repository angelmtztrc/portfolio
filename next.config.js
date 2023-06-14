/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: ['res.cloudinary.com', 'images.unsplash.com']
  }
};

module.exports = nextConfig;
