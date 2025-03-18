import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  experimental: {
    turbo: {
      rules: {
        // Disable server components for now as they might be causing issues
        server: false,
      },
    },
  },
};

export default nextConfig;
