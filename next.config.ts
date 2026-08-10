import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-408d161b01904a6ea85e41f191a5ec07.r2.dev",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
