import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://tryzedger.com'),
  title: {
    default: 'Zedger - Shareable Ledger Books for Every Part of Your Life',
    template: '%s | Zedger',
  },
  description:
    'Zedger is the first app with shareable ledger books. Track expenses with family, friends, and roommates. Family books, trip books, recurring expenses, and more.',
  keywords: [
    'expense tracking',
    'shared expenses',
    'expense splitting',
    'ledger books',
    'family expenses',
    'trip expenses',
    'roommate expenses',
    'zedger app',
    'shared ledger app',
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
    title: 'Zedger - Shareable Ledger Books for Every Part of Your Life',
    description:
      'Zedger is the first app with shareable ledger books. Track expenses with family, friends, and roommates.',
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
    title: 'Zedger - Shareable Ledger Books for Every Part of Your Life',
    description:
      'Zedger is the first app with shareable ledger books. Track expenses with family, friends, and roommates.',
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
      description: 'Shareable ledger books for families, friends, and roommates. Track expenses together with ease.',
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#bf5e5b" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
