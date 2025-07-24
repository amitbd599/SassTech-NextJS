/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["nextjs.sasstech.webnextpro.com"],
  },
  compress: true,
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
