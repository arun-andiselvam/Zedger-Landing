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
      {
        source: '/blog/how-to-split-bills-with-roommates-without-drama',
        destination: '/blog/split-bills-with-roommates',
        permanent: true,
      },
      {
        source: '/bill-splitting-app-for-roommates',
        destination: '/bill-splitting-app-roommates',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
