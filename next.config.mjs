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
        source: '/blog/best-bill-splitting-apps-for-couples-managing-shared-expenses-together',
        destination: '/blog/bill-splitting-app-for-couples',
        permanent: true,
      },
      {
        source: '/blog/how-to-split-bills-with-friends-methods-that-keep-peace',
        destination: '/blog/how-to-split-bills-with-friends',
        permanent: true,
      },
      {
        source: '/blog/best-expense-splitting-apps-india',
        destination: '/blog/best-free-expense-splitting-apps-india',
        permanent: true,
      },
      {
        source: '/blog/ultimate-grade-to-find-your-best-app-for-splitting-trip-expenses',
        destination: '/blog/ultimate-guide-to-find-your-best-app-for-splitting-trip-expenses',
        permanent: true,
      },
      {
        source: '/bill-splitting-app-for-rommates',
        destination: '/bill-splitting-app-roommates',
        permanent: true,
      },
      {
        source: '/blog/how-to-split-rent-with-roommates-fair-methods-and-fixes',
        destination: '/blog/how-to-split-rent-with-roommates',
        permanent: true,
      },
      {
        source: '/blog/how-to-divide-electricity-bill-between-roommates-fairly',
        destination: '/blog/divide-electricity-bill-between-roommates',
        permanent: true,
      },
      {
        source: '/blog/what-is-the-best-family-budgeting-app-5-options-ranked',
        destination: '/blog/best-family-budgeting-app',
        permanent: true,
      },
      {
        source: '/blog/how-to-track-household-expenses-a-simple-beginner-guide',
        destination: '/blog/how-to-track-household-expenses',
        permanent: true,
      },
      {
        source: '/blog/easy-to-use-budget-app-free-for-tracking-shared-expenses',
        destination: '/blog/easy-budget-app-for-shared-expenses',
        permanent: true,
      },
      {
        source: '/blog/shared-expense-tracker-app-a-guide-for-families-and-roommates',
        destination: '/blog/shared-expense-tracker-app',
        permanent: true,
      },
      {
        source: '/blog/how-to-plan-a-family-budget-with-a-simple-example',
        destination: '/blog/how-to-plan-a-family-budget',
        permanent: true,
      },
      {
        source: '/blog/what-are-some-budgeting-apps-a-family-comparison',
        destination: '/blog/what-are-some-budgeting-apps',
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
