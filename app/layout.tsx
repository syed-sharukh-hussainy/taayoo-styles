import type { Metadata } from 'next';

import localFont from 'next/font/local';

import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

import './globals.css';
import dynamic from 'next/dynamic';
// import GoogleAnalytics from '@/components/google-analytics';
import CookieBanner from '@/components/cookie-banner';
import GoogleAnalytics from '@/components/google-analytics';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'TaaYoo Styles',
  description:
    'Effortlessly create and beautify your code snippets with TaaYoo Styles, making them eye-catching code showcases.',
  alternates: {
    canonical: ``,
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
      <Suspense fallback={<div>Loading...</div>}>
        <GoogleAnalytics GA_MEASUREMENT_ID="G-7CK10C8BC5" />
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
        <Suspense fallback={<div>Loading...</div>}>
          <CookieBanner />
        </Suspense>
      </body>
    </html>
  );
}
