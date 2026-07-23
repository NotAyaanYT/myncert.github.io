import { Metadata } from 'next';
import Link from 'next/link';
import { classData } from '@/data/classes';
import { PageHeader } from '@/components/ui/PageHeader';
import { GitFork, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sitemap',
  description: 'Complete sitemap of NCERT Solutions Hub - navigate through all pages and content.',
};

const mainPages = [
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
];

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        breadcrumbs={[{ label: 'Sitemap', href: '/sitemap' }]}
        title="Sitemap"
        titleAccent=""
        subtitle="Complete sitemap of NCERT Solutions Hub - navigate through all pages and content."
        badge="Site Navigation"
        badgeIcon={<GitFork className="h-3.5 w-3.5" />}
        gradient="indigo"
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 page-enter">
        <div className="space-y-10">
          {/* Main Pages */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full" />
              Main Pages
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {mainPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group flex items-center gap-3 p-3.5 bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700/50 hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 group-hover:scale-110 transition-transform duration-300">
                    <ChevronRight className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {page.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Classes */}
          {classData.map((cls) => (
            <div key={cls.id}>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full" />
                <Link href={`/${cls.slug}`} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {cls.name}
                </Link>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {cls.subjects.map((subject) => (
                  <Link
                    key={subject.id}
                    href={`/${cls.slug}/${subject.slug}`}
                    className="group flex items-center gap-3 p-3 bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700/50 hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-300"
                  >
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 group-hover:scale-110 transition-transform duration-300">
                      <ChevronRight className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {subject.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
