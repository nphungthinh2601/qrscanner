import type React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/providers/theme-provider';
import { LanguageProvider } from '@/providers/language-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Quick QR Scanner & Generator',
  description: 'Scan, Generate, Customize - The Ultimate QR Code Solution.',
  generator: 'VNDev Labs',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'Quick QR Scanner & Generator Logo',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

import './globals.css';
