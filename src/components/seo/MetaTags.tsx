import Head from 'next/head';

interface MetaTagsProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  noIndex?: boolean;
  breadcrumbs?: { label: string; href: string }[];
}

export function MetaTags({
  title,
  description,
  canonical,
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noIndex = false,
}: MetaTagsProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ncertsolutionshub.com';
  const fullTitle = `${title} | NCERT Solutions Hub`;
  const fullUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={fullUrl} />}
      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="NCERT Solutions Hub" />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#2563eb" />
      <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
    </>
  );
}
