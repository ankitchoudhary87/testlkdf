/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['52.201.123.57', 'lkdfacility.org', 'img.youtube.com'],
  },
}

module.exports = nextConfig
