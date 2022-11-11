const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

/**
 * @type {import('next').NextConfig}
 */

// const nextConfig = withPWA({
//   reactStrictMode: true,
// });

const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
