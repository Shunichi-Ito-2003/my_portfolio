import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/my_portfolio',
  assetPrefix: '/my_portfolio',
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
