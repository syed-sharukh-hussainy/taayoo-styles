import type { Metadata } from 'next';

import localFont from 'next/font/local';

import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

import './globals.css';
import dynamic from 'next/dynamic';

import CookieBanner from '@/components/cookie-banner';
import GoogleAnalytics from '@/components/google-analytics';
import { Suspense } from 'react';
import Loading from './loading';

export const metadata: Metadata = {
  title: 'TaaYoo Styles',
  description:
    'Effortlessly create and beautify your code snippets with TaaYoo Styles, making them eye-catching code showcases.',
  openGraph: {
    title: 'TaaYoo Styles',
    description:
      'Effortlessly create and beautify your code snippets with TaaYoo Styles, making them eye-catching code showcases.',
    url: 'https://taayoo-styles.vercel.app',
    siteName: 'TaaYoo Styles',
    locale: 'en_US',
    type: 'website',
    images: ['/opengraph-image.png', '/twitter-image.png'],
  },
  metadataBase: new URL('https://taayoo-styles.vercel.app'),
  icons: {
    icon: '/favicon.ico',
  },
};

const Navbar = dynamic(() => import('@/components/navbar'), { ssr: false });

const satoshi = localFont({
  src: [
    {
      path: '../fonts/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Satoshi-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/Satoshi-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Suspense fallback={<Loading />}>
        <GoogleAnalytics
          GA_MEASUREMENT_ID={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
      </Suspense>
      <body className={satoshi.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Toaster />
        </ThemeProvider>
        <Suspense fallback={<Loading />}>
          <CookieBanner />
        </Suspense>
      </body>
    </html>
  );
}
