/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.microlink.io",
        pathname: "/**", // Allows all paths from this domain
      },
    ],
  },
};

export default nextConfig;
