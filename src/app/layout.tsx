import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://coca.app'),
  title: {
    default: 'Coca - Your Everyday Tasks, Automated',
    template: '%s | Coca',
  },
  description:
    'Coca helps you automate your everyday tasks with smart task management. Join 450+ active users who trust Coca for seamless productivity and project management.',
  keywords: [
    'task management',
    'productivity',
    'automation',
    'project management',
    'team collaboration',
    'workflow automation',
    'task tracking',
    'coca app',
  ],
  authors: [{ name: 'Coca Team' }],
  creator: 'Coca',
  publisher: 'Coca',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://coca.app',
    siteName: 'Coca',
    title: 'Coca - Your Everyday Tasks, Automated',
    description:
      'Coca helps you automate your everyday tasks with smart task management. Join 450+ active users who trust Coca.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Coca - Task Management Made Simple',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coca - Your Everyday Tasks, Automated',
    description:
      'Coca helps you automate your everyday tasks with smart task management.',
    images: ['/og-image.png'],
    creator: '@cocaapp',
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
    canonical: 'https://coca.app',
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
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#bf5e5b" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
