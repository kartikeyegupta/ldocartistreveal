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
  async redirects() {
    return [
      {
        "source": "/(.*)",
        "has": [
          {
            "type": "header",
            "key": "host",
            "value": "lavardoc.com"
          }
        ],
        "destination": "https://dukeldoc.com/lavardoc",
        "permanent": true
      }
    ]
  }
};

export default nextConfig;
