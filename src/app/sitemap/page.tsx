import { Metadata } from 'next';
import Link from 'next/link';
import { classData } from '@/data/classes';

export const metadata: Metadata = {
  title: 'Sitemap',
  description: 'Complete sitemap of NCERT Solutions Hub - navigate through all pages and content.',
};

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 animate-fade-in">Sitemap</h1>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Main Pages</h2>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact Us', href: '/contact' },
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms and Conditions', href: '/terms-and-conditions' },
                { label: 'Disclaimer', href: '/disclaimer' },
                { label: 'DMCA Policy', href: '/dmca' },
                { label: 'Notes', href: '/notes' },
                { label: 'Sample Papers', href: '/sample-papers' },
                { label: 'MCQs', href: '/mcqs' },
                { label: 'Previous Year Questions', href: '/previous-year-questions' },
              ].map((page) => (
                <li key={page.href}>
                  <Link href={page.href} className="text-blue-600 dark:text-blue-400 hover:underline text-sm">{page.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {classData.map((cls) => (
            <div key={cls.id}>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                <Link href={`/${cls.slug}`} className="hover:text-blue-600 transition-colors">{cls.name}</Link>
              </h2>
              <ul className="space-y-1.5 pl-4">
                {cls.subjects.map((subject) => (
                  <li key={subject.id}>
                    <Link href={`/${cls.slug}/${subject.slug}`} className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                      {subject.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
