import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jartap.pages.dev",
      },
    ],
  },
};

export default nextConfig;