/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  allowedDevOrigins: ["127.0.0.1:3000", "mosaic.scdn.co"],
   images: {
    remotePatterns: [new URL('https://mosaic.scdn.co/**'), new URL('https://i.scdn.co/**')],
  },
};

export default nextConfig;
