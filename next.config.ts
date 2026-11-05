import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...["b", "c", "d", "e", "f", "g", "compare"].map((route) => ({
        source: `/${route}/:path*`, destination: "/a/ai", permanent: true,
      })),
    ];
  },
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
