import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { siteConfig, CURRENT_ACADEMIC_YEAR } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'], display: 'swap' });
const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

export const metadata: Metadata = {
  title: {
    default: `NCERT Solutions Hub - Free NCERT Solutions for Classes 6-12 (${CURRENT_ACADEMIC_YEAR})`,
    template: `%s | NCERT Solutions Hub (${CURRENT_ACADEMIC_YEAR})`,
  },
  description: siteConfig.description,
  keywords: [
    'NCERT Solutions',
    'NCERT',
    `NCERT ${CURRENT_ACADEMIC_YEAR}`,
    `Class 6 ${CURRENT_ACADEMIC_YEAR}`,
    `Class 7 ${CURRENT_ACADEMIC_YEAR}`,
    `Class 8 ${CURRENT_ACADEMIC_YEAR}`,
    `Class 9 ${CURRENT_ACADEMIC_YEAR}`,
    `Class 10 ${CURRENT_ACADEMIC_YEAR}`,
    `Class 11 ${CURRENT_ACADEMIC_YEAR}`,
    `Class 12 ${CURRENT_ACADEMIC_YEAR}`,
    'Ganita Prakash',
    'Ganita Manjari',
    'Curiosity',
    'Exploring Society',
    'Mathematics',
    'Science',
    'CBSE',
    'Free Education',
    'India',
  ],
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: `Free NCERT Solutions for Classes 6-12 based on the official NCERT ${CURRENT_ACADEMIC_YEAR} syllabus. Step-by-step solutions for all subjects.`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: `Free NCERT Solutions for Classes 6-12 based on the official NCERT ${CURRENT_ACADEMIC_YEAR} syllabus.`,
    images: [siteConfig.ogImage],
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
  verification: {
    google: 'YOUR_VERIFICATION_CODE',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <ProgressBar />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>

        {adsenseClient && (
          <Script
            id="google-adsense"
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </body>
    </html>
  );
}
