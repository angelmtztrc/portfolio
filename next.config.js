/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['latin'] } }]
  },
  images: {
    domains: ['www.datocms-assets.com', 'images.unsplash.com']
  }
};

module.exports = nextConfig;
