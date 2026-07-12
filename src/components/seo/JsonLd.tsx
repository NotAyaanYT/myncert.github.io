interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'NCERT Solutions Hub',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://ncertsolutionshub.com',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ncertsolutionshub.com'}/images/logo.png`,
    description: 'Free NCERT Solutions for Classes 6 to 12',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New Delhi',
      addressCountry: 'IN',
    },
    founder: {
      '@type': 'Person',
      name: 'NCERT Solutions Hub Team',
    },
    sameAs: [
      'https://twitter.com/ncertsolutionshub',
      'https://facebook.com/ncertsolutionshub',
    ],
  };
}

export function breadcrumbSchema(items: { label: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ncertsolutionshub.com'}${item.href}`,
    })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function courseSchema(classData: { name: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: classData.name,
    description: classData.description,
    url: classData.url,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'NCERT Solutions Hub',
    },
  };
}

export function webPageSchema(title: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: url,
    breadcrumb: {
      '@type': 'BreadcrumbList',
    },
  };
}

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'NCERT Solutions Hub',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://ncertsolutionshub.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ncertsolutionshub.com'}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}
