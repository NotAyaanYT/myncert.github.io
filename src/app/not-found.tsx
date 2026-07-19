import Link from 'next/link';
import { Home, Search, ArrowLeft, BookOpen, FileQuestion } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found | NCERT Solutions Hub',
  description: 'The page you are looking for could not be found. Browse our NCERT solutions for classes 6-12.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/50 px-4">
      <div className="text-center max-w-lg animate-fade-in">
        <div className="relative mb-8">
          <div className="text-[10rem] sm:text-[12rem] font-bold text-blue-600/10 dark:text-blue-500/10 select-none leading-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl">
              <FileQuestion className="h-16 w-16 text-blue-600 mx-auto" />
            </div>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
          Oops! The page you are looking for does not exist or has been moved. 
          It might have been updated to align with the latest NCERT 2026-27 syllabus.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-medium shadow-lg shadow-blue-200 dark:shadow-blue-900/30 hover:shadow-xl hover:-translate-y-0.5"
          >
            <Home className="h-4 w-4" />
            Go Home
          </Link>
          <Link
            href="/search"
            className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all font-medium border border-gray-200 dark:border-gray-700"
          >
            <Search className="h-4 w-4" />
            Search Solutions
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
            Looking for something specific? Try these popular pages:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'].map((cls) => (
              <Link
                key={cls}
                href={`/class-${cls.toLowerCase().replace(' ', '-')}`}
                className="px-3 py-1.5 text-sm text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
              >
                {cls}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
