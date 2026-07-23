'use client';

import Link from 'next/link';
import { ArrowRight, GraduationCap, BookOpen, Sparkles } from 'lucide-react';
import { classes } from '@/lib/constants';
import { cn } from '@/lib/utils';

const classIcons = [
  'ri:number-6', 'ri:number-7', 'ri:number-8', 'ri:number-9',
  'ri:number-10', 'ri:number-11', 'ri:number-12'
];

export function ClassCards() {
  return (
    <section id="classes" className="relative py-20 sm:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-400/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full border border-blue-100 dark:border-blue-800 mb-4">
            <Sparkles className="h-4 w-4" />
            Choose Your Grade
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Browse by <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Class</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Select your class to access all NCERT solutions for your grade
          </p>
        </div>

        {/* Class cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-5">
          {classes.map((cls, index) => (
            <Link
              key={cls.slug}
              href={`/${cls.slug}`}
              className={cn(
                'group relative p-6 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.04]',
                `animate-fade-in`,
                cls.color
              )}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {/* Card background with gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-white/20 to-transparent" />
              
              {/* Decorative circles */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-white/10 rounded-full blur-sm group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/5 rounded-full" />

              {/* Content */}
              <div className="relative flex flex-col items-center text-center text-white">
                {/* Class number icon */}
                <div className="w-14 h-14 mb-4 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-110 group-hover:bg-white/25 transition-all duration-300">
                  {cls.name.replace('Class ', '')}
                </div>

                {/* Class name */}
                <h3 className="text-lg font-bold mb-1.5 tracking-tight">{cls.name}</h3>
                <p className="text-sm text-white/70 mb-4 line-clamp-2 leading-snug">{cls.description}</p>

                {/* CTA */}
                <div className="flex items-center gap-1 text-sm text-white/80 group-hover:text-white font-medium transition-colors mt-auto">
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>Explore</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>

              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
