'use client';

import { useEffect, useRef, useState } from 'react';
import { BookOpen, Users, GraduationCap, Star, Globe, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatItem {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { icon: <BookOpen className="h-6 w-6" />, value: 1500, suffix: '+', label: 'NCERT Solutions' },
  { icon: <Users className="h-6 w-6" />, value: 100, suffix: 'K+', label: 'Active Students' },
  { icon: <GraduationCap className="h-6 w-6" />, value: 7, suffix: '', label: 'Classes Covered (6-12)' },
  { icon: <Star className="h-6 w-6" />, value: 14, suffix: '', label: 'Subjects Available' },
  { icon: <Globe className="h-6 w-6" />, value: 50, suffix: '+', label: 'Countries Reached' },
  { icon: <Award className="h-6 w-6" />, value: 99, suffix: '%', label: 'Satisfaction Rate' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export function StatsCounter() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Trusted by Students <span className="text-blue-200">Across India</span>
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Our platform is helping thousands of students excel in their studies every day
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                'text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 transition-all hover:bg-white/15 hover:scale-105',
                `animate-fade-in stagger-${index + 1}`
              )}
            >
              <div className="inline-flex p-3 bg-white/10 rounded-xl text-blue-200 mb-3">
                {stat.icon}
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
