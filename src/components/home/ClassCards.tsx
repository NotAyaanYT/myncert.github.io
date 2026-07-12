'use client';

import Link from 'next/link';
import { ArrowRight, Users, BookOpen } from 'lucide-react';
import { classes } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function ClassCards() {
  return (
    <section id="classes" className="py-16 sm:py-20 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Browse by <span className="text-blue-600">Class</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Select your class to access all NCERT solutions for your grade
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {classes.map((cls, index) => (
            <Link
              key={cls.slug}
              href={`/${cls.slug}`}
              className={cn(
                'group relative p-6 rounded-2xl bg-gradient-to-br text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl',
                cls.color,
                `animate-fade-in stagger-${index + 1}`
              )}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-bl-full" />
              <div className="relative">
                <Users className="h-8 w-8 mb-3 text-white/70" />
                <h3 className="text-lg font-bold mb-1">{cls.name}</h3>
                <p className="text-sm text-white/70 mb-3">{cls.description}</p>
                <div className="flex items-center text-sm text-white/80 group-hover:text-white transition-colors">
                  <BookOpen className="h-3 w-3 mr-1" />
                  <span>View Solutions</span>
                  <ArrowRight className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
