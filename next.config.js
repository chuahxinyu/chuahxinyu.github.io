const withContentlayer = require("next-contentlayer").withContentlayer;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Optionally, add any other Next.js config below
};

module.exports = withContentlayer(nextConfig);
