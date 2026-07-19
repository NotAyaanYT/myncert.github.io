import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { SkipToContent } from '@/components/ui/SkipToContent';
import { CookieConsent } from '@/components/ui/CookieConsent';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';
import { siteConfig, CURRENT_ACADEMIC_YEAR } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

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
    'NCERT Solutions Free',
    'CBSE Class 6 Solutions',
    'CBSE Class 7 Solutions',
    'CBSE Class 8 Solutions',
    'CBSE Class 9 Solutions',
    'CBSE Class 10 Solutions',
    'CBSE Class 11 Solutions',
    'CBSE Class 12 Solutions',
  ],
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: `Free NCERT Solutions for Classes 6-12 based on the official NCERT ${CURRENT_ACADEMIC_YEAR} syllabus. Step-by-step solutions for all subjects including Mathematics, Science, English, Hindi, and Social Science.`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'NCERT Solutions Hub - Free NCERT Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: `Free NCERT Solutions for Classes 6-12 based on the official NCERT ${CURRENT_ACADEMIC_YEAR} syllabus. Step-by-step solutions for all subjects.`,
    images: [siteConfig.ogImage],
    site: '@ncertsolutionshub',
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
  category: 'education',
  classification: 'Education',
  other: {
    'geo.region': 'IN',
    'geo.placename': 'India',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-adsense-account" content="ca-pub-7178910718902546" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="NCERT Hub" />
        <link rel="hreflang" href={siteConfig.url} hrefLang="en-in" />
        <link rel="hreflang" href={siteConfig.url} hrefLang="en" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="preload" as="image" href="/images/hero-pattern.svg" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <SkipToContent />
          <ProgressBar />
          <Header />
          <main id="main-content" className="min-h-screen">
            <ErrorBoundary>{children}</ErrorBoundary>
          </main>
          <Footer />
          <ScrollToTop />
          <CookieConsent />
        </ThemeProvider>

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
