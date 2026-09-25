/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/blog/free-group-trip-expense-splitter-track-who-paid-what-on-vacation',
        destination: '/blog/free-group-trip-expense-splitter',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
