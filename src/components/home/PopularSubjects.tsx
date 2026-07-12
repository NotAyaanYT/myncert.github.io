'use client';

import Link from 'next/link';
import { ArrowRight, BookOpen, Users, TrendingUp } from 'lucide-react';
import { popularSubjects } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function PopularSubjects() {
  return (
    <section id="subjects" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Popular <span className="text-blue-600">Subjects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Most accessed subjects with comprehensive NCERT solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularSubjects.map((subject, index) => (
            <Link
              key={subject.slug}
              href={`/class-${subject.classes.includes('-') ? subject.classes.split('-')[0] : subject.classes}/${subject.slug}`}
              className={cn(
                'group p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all hover:shadow-lg',
                `animate-slide-up stagger-${index + 1}`
              )}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
                  <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                  <TrendingUp className="h-4 w-4" />
                  <span>{subject.students}</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {subject.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                Classes {subject.classes}
              </p>
              <div className="flex items-center text-sm text-blue-600 dark:text-blue-400 font-medium">
                <span>Browse Solutions</span>
                <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
