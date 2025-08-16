/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['img.youtube.com', 'pbs.twimg.com', 'github.com'], // Add domains for bookmark images
    },
  }
  
  module.exports = nextConfig