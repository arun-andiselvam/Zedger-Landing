import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://zedger.app'),
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
    url: 'https://zedger.app',
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
    canonical: 'https://zedger.app',
  },
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
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
