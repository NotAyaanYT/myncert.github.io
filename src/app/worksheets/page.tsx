import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Users, BookOpen, FileSpreadsheet } from 'lucide-react';
import { classData } from '@/data/classes';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { CURRENT_ACADEMIC_YEAR } from '@/lib/constants';

export const metadata: Metadata = {
  title: `NCERT Worksheets (${CURRENT_ACADEMIC_YEAR}) - Free Printable Practice Worksheets`,
  description: `Free chapter-wise NCERT practice worksheets for Classes 6 to 12 based on the latest ${CURRENT_ACADEMIC_YEAR} syllabus. Interactive worksheets with answer keys.`,
  openGraph: {
    title: `NCERT Worksheets ${CURRENT_ACADEMIC_YEAR}`,
    description: `Free chapter-wise NCERT worksheets for Classes 6-12. Practice with interactive questions. Updated for ${CURRENT_ACADEMIC_YEAR}.`,
  },
};

export default function WorksheetsLandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <Breadcrumb items={[{ label: 'Worksheets', href: '/worksheets' }]} />
        <div className="mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full border border-green-200 dark:border-green-800 mb-4">
            <FileSpreadsheet className="h-3.5 w-3.5" />
            Updated for NCERT {CURRENT_ACADEMIC_YEAR}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            NCERT Practice Worksheets <span className="text-blue-600">({CURRENT_ACADEMIC_YEAR})</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            Chapter-wise interactive practice worksheets for all NCERT subjects based on the latest {CURRENT_ACADEMIC_YEAR} syllabus. Solve questions and check your answers instantly.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {classData.map((cls, index) => (
            <Link
              key={cls.slug}
              href={`/worksheets/${cls.slug}`}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-bl-full" />
              <div className="relative">
                <Users className="h-8 w-8 mb-3 text-white/70" />
                <h3 className="text-lg font-bold mb-1">{cls.name}</h3>
                <p className="text-sm text-white/70 mb-3 line-clamp-2">{cls.description}</p>
                <div className="flex items-center text-sm text-white/80 group-hover:text-white transition-colors">
                  <BookOpen className="h-3 w-3 mr-1" />
                  <span>View Worksheets</span>
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
