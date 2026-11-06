import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/a", destination: "/a/ai", permanent: false },
      { source: "/a/govcon/:path*", destination: "/a/ai", permanent: true },
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
