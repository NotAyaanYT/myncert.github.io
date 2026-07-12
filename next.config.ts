import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: isGitHubPages ? 'export' : undefined,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: isGitHubPages, // Required for static export
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // GitHub Pages requires basePath and assetPrefix for project sites
  ...(isGitHubPages && {
    basePath: '/myncert.github.io',
    assetPrefix: '/myncert.github.io/',
  }),
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'X-XSS-Protection', value: '1; mode=block' },
        {
          key: 'Content-Security-Policy',
          value: [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://pagead2.googlesyndication.com https://www.googletagmanager.com https://www.google-analytics.com",
            "style-src 'self' 'unsafe-inline'",
            "img-src 'self' data: https:",
            "font-src 'self'",
            "connect-src 'self' https://www.google-analytics.com",
            "frame-src 'self' https://www.google.com",
            "manifest-src 'self'",
          ].join('; '),
        },
      ],
    },
  ],
};

export default nextConfig;
