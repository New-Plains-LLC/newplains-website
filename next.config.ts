import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/a", destination: "/a/ai", permanent: false },
      { source: "/a/govcon/:path*", destination: "/a/ai", permanent: true },
      // /b/ai (and anything under it) is the twain.ai-inspired variant of /a/ai;
      // other old /b concept paths still go to /a/ai.
      { source: "/b", destination: "/b/ai", permanent: false },
      // Main sent everything under /b to /a/ai; keep deep links landing on a page.
      { source: "/b/ai/:path+", destination: "/b/ai", permanent: false },
      { source: "/b/:path((?!ai(?:/|$)).+)", destination: "/a/ai", permanent: true },
      ...["c", "d", "e", "f", "g", "compare"].map((route) => ({
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
