import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Users, BookOpen, Timer } from 'lucide-react';
import { classData } from '@/data/classes';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { CURRENT_ACADEMIC_YEAR } from '@/lib/constants';

export const metadata: Metadata = {
  title: `NCERT Chapter Tests (${CURRENT_ACADEMIC_YEAR}) - Free Timed Practice Tests`,
  description: `Free chapter-wise timed practice tests for all NCERT subjects from Classes 6 to 12 based on the latest ${CURRENT_ACADEMIC_YEAR} syllabus. Test your knowledge with 20-question tests.`,
  openGraph: {
    title: `NCERT Chapter Tests ${CURRENT_ACADEMIC_YEAR}`,
    description: `Free chapter-wise NCERT timed tests for Classes 6-12. Updated for ${CURRENT_ACADEMIC_YEAR}.`,
  },
};

export default function ChapterTestsLandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <Breadcrumb items={[{ label: 'Chapter Tests', href: '/chapter-tests' }]} />
        <div className="mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full border border-green-200 dark:border-green-800 mb-4">
            <Timer className="h-3.5 w-3.5" />
            Updated for NCERT {CURRENT_ACADEMIC_YEAR}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            NCERT Chapter Tests <span className="text-blue-600">({CURRENT_ACADEMIC_YEAR})</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            Chapter-wise timed practice tests for all NCERT subjects. Each test has 20 questions with a 45-minute timer. Perfect for exam preparation.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {classData.map((cls, index) => (
            <Link
              key={cls.slug}
              href={`/chapter-tests/${cls.slug}`}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-bl-full" />
              <div className="relative">
                <Users className="h-8 w-8 mb-3 text-white/70" />
                <h3 className="text-lg font-bold mb-1">{cls.name}</h3>
                <p className="text-sm text-white/70 mb-3 line-clamp-2">{cls.description}</p>
                <div className="flex items-center text-sm text-white/80 group-hover:text-white transition-colors">
                  <BookOpen className="h-3 w-3 mr-1" />
                  <span>Start Tests</span>
                  <ArrowRight className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
