/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.si.com', 's.yimg.com', 'patentlyapple.typepad.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
