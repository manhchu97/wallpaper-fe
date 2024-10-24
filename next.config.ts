import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['testxpull.b-cdn.net','103.162.21.218'],  // Remove 'https://'
  },
};

export default nextConfig;