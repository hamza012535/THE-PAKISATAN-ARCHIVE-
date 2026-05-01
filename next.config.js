/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Wikipedia / Wikimedia
      {
        protocol: "https",
        hostname: "*.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      // Unsplash
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      // NewsAPI article images (various news sources)
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
