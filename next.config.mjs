/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themealdb.com", // Allow images from all domains
      },
    ],
  },
};

export default nextConfig;
