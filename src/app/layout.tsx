import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://tryzedger.com'),
  title: {
    default: 'Zedger - Best Group Expense App | Track & Share Expenses with Friends',
    template: '%s | Zedger',
  },
  description:
    'Zedger is the best group expense app with shareable ledger books. The ultimate group expense tracker to track expenses with friends, family, and roommates. Best app for sharing expenses.',
  keywords: [
    'group expense app',
    'best app for sharing expenses',
    'group expense tracker',
    'app to track expenses with friends',
    'group expense tracker app',
    'best app for shared expenses',
    'expense tracking',
    'shared expenses',
    'expense splitting',
    'ledger books',
    'family expenses',
    'trip expenses',
    'roommate expenses',
    'zedger app',
  ],
  authors: [{ name: 'Zedger Team' }],
  creator: 'Zedger',
  publisher: 'Zedger',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tryzedger.com',
    siteName: 'Zedger',
    title: 'Zedger - Best Group Expense App | Track & Share Expenses with Friends',
    description:
      'Zedger is the best group expense app to track expenses with friends, family, and roommates. The ultimate group expense tracker with shareable ledger books.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Zedger - Shareable Ledger Books',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zedger - Best Group Expense App | Track & Share Expenses with Friends',
    description:
      'Zedger is the best group expense app to track expenses with friends, family, and roommates. The ultimate group expense tracker.',
    images: ['/og-image.png'],
    creator: '@zedgerapp',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://tryzedger.com',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://tryzedger.com/#organization',
      name: 'Zedger',
      url: 'https://tryzedger.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://tryzedger.com/images/logo.png',
      },
      sameAs: [
        'https://twitter.com/zedgerapp',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://tryzedger.com/#website',
      url: 'https://tryzedger.com',
      name: 'Zedger',
      publisher: {
        '@id': 'https://tryzedger.com/#organization',
      },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Zedger',
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Android, iOS',
      description: 'The best group expense app with shareable ledger books. Track expenses with friends, family, and roommates effortlessly.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '1000',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KM4S3M53');`,
          }}
        />
        {/* End Google Tag Manager */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#bf5e5b" />
        <link rel="alternate" type="application/rss+xml" title="Zedger Blog RSS" href="/blog/feed.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KM4S3M53"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
