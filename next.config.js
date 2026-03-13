/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: process.env.NODE_ENV === 'development',
  },
  turbopack: {
    root: __dirname,
  },
}

module.exports = nextConfig