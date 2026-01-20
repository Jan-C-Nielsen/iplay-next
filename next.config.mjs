/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      new URL('https://mosaic.scdn.co/**'),
      new URL('https://i.scdn.co/**'),
    ],
  },
};

export default nextConfig;
