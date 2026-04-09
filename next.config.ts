import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone output untuk self-hosted deployment (server sendiri / Docker)
  output: "standalone",

  images: {
    // Tambah domain gambar eksternal yang dipakai (misal Unsplash, Sanity CDN)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
