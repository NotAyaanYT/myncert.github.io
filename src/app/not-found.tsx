import Link from 'next/link';
import { Home, Search, ArrowLeft, BookOpen, Compass, Sparkles } from 'lucide-react';
import { Metadata } from 'next';
import { classData } from '@/data/classes';

export const metadata: Metadata = {
  title: '404 - Page Not Found | NCERT Solutions Hub',
  description: 'The page you are looking for could not be found. Browse our NCERT solutions for classes 6-12.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800/50 px-4 relative overflow-hidden">
      {/* Animated orbs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="text-center max-w-lg page-enter relative">
        {/* 404 background + icon */}
        <div className="relative mb-8">
          <div className="text-[10rem] sm:text-[12rem] font-bold bg-gradient-to-b from-blue-200/30 to-indigo-200/10 dark:from-blue-500/10 dark:to-indigo-500/5 bg-clip-text text-transparent select-none leading-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-transform duration-500">
              <Compass className="h-16 w-16 text-blue-600 dark:text-blue-400 mx-auto" />
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
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all font-medium shadow-lg shadow-blue-200/50 dark:shadow-blue-900/30 hover:shadow-xl hover:-translate-y-0.5"
          >
            <Home className="h-4 w-4" />
            Go Home
          </Link>
          <Link
            href="/search"
            className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all font-medium border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md"
          >
            <Search className="h-4 w-4" />
            Search Solutions
          </Link>
          <Link
            href="/sitemap"
            className="flex items-center gap-2 px-6 py-3 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            Sitemap
          </Link>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-sm text-gray-500 dark:text-gray-500 mb-4 flex items-center justify-center gap-2">
            <BookOpen className="h-3.5 w-3.5" />
            Looking for a specific class? Try one of these:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {classData.map((cls) => (
              <Link
                key={cls.id}
                href={`/${cls.slug}`}
                className="group px-3 py-1.5 text-sm text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-all hover:shadow-sm border border-blue-100/50 dark:border-blue-800/20"
              >
                {cls.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
