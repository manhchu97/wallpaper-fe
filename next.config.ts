import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['testxpull.b-cdn.net'],  // Remove 'https://'
  },
};

export default nextConfig;