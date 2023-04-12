/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "cdn.sanity.io",
      "media.licdn.com",
    ],
  },
};

module.exports = nextConfig;
