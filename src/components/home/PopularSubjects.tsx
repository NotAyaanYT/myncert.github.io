'use client';

import Link from 'next/link';
import { ArrowRight, BookOpen, Users, TrendingUp, Sparkles, Calculator, FlaskConical, Globe, BookText, Languages, Landmark } from 'lucide-react';
import { popularSubjects } from '@/lib/constants';
import { cn } from '@/lib/utils';

const subjectColors: Record<string, string> = {
  'mathematics': 'from-blue-500 to-cyan-500',
  'science': 'from-green-500 to-emerald-500',
  'social-science': 'from-orange-500 to-amber-500',
  'english': 'from-purple-500 to-pink-500',
  'hindi': 'from-red-500 to-rose-500',
  'sanskrit': 'from-indigo-500 to-violet-500',
};

const subjectIcons: Record<string, React.ReactNode> = {
  'mathematics': <Calculator className="h-6 w-6" />,
  'science': <FlaskConical className="h-6 w-6" />,
  'social-science': <Globe className="h-6 w-6" />,
  'english': <BookText className="h-6 w-6" />,
  'hindi': <Languages className="h-6 w-6" />,
  'sanskrit': <Landmark className="h-6 w-6" />,
};

export function PopularSubjects() {
  return (
    <section id="subjects" className="relative py-20 sm:py-28 bg-gray-50 dark:bg-gray-800/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 text-sm font-medium rounded-full border border-indigo-100 dark:border-indigo-800 mb-4">
            <Sparkles className="h-4 w-4" />
            Most Accessed
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Popular <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Subjects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Most accessed subjects with comprehensive NCERT solutions
          </p>
        </div>

        {/* Subject cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {popularSubjects.map((subject, index) => {
            const gradient = subjectColors[subject.slug] || 'from-blue-500 to-indigo-500';
            const icon = subjectIcons[subject.slug] || <BookOpen className="h-6 w-6" />;

            return (
              <Link
                key={subject.slug}
                href={`/class-${subject.classes.includes('-') ? subject.classes.split('-')[0] : subject.classes}/${subject.slug}`}
                className={cn(
                  'group relative p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 hover:-translate-y-1',
                  `animate-slide-up`
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Top gradient accent bar */}
                <div className={cn(
                  'absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-60 group-hover:opacity-100 transition-opacity duration-500',
                  gradient
                )} />

                {/* Content */}
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className={cn(
                      'p-3 rounded-xl bg-gradient-to-br shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md',
                      gradient
                    )}>
                      <div className="text-white">
                        {icon}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700/50 px-2.5 py-1 rounded-full">
                      <Users className="h-3.5 w-3.5" />
                      <span className="font-medium">{subject.students}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {subject.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    Classes {subject.classes}
                  </p>

                  <div className="flex items-center text-sm font-medium transition-colors">
                    <span className={cn(
                      'bg-gradient-to-r bg-clip-text text-transparent',
                      gradient
                    )}>
                      Browse Solutions
                    </span>
                    <ArrowRight className="h-4 w-4 ml-1.5 transition-all duration-300 group-hover:translate-x-1.5 text-blue-500" />
                  </div>
                </div>

                {/* Hover shine */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute top-0 -inset-full h-full w-1/2 transform -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shimmer" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
