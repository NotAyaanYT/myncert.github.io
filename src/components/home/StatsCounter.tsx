'use client';

import { useEffect, useRef, useState } from 'react';
import { BookOpen, Users, GraduationCap, Star, Globe, Award, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatItem {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
  gradient: string;
}

const stats: StatItem[] = [
  { icon: <BookOpen className="h-5 w-5" />, value: 1500, suffix: '+', label: 'NCERT Solutions', gradient: 'from-blue-500 to-cyan-500' },
  { icon: <Users className="h-5 w-5" />, value: 100, suffix: 'K+', label: 'Active Students', gradient: 'from-purple-500 to-pink-500' },
  { icon: <GraduationCap className="h-5 w-5" />, value: 7, suffix: '', label: 'Classes (6-12)', gradient: 'from-orange-500 to-red-500' },
  { icon: <Star className="h-5 w-5" />, value: 14, suffix: '', label: 'Subjects', gradient: 'from-green-500 to-emerald-500' },
  { icon: <Globe className="h-5 w-5" />, value: 50, suffix: '+', label: 'Countries', gradient: 'from-indigo-500 to-violet-500' },
  { icon: <Award className="h-5 w-5" />, value: 99, suffix: '%', label: 'Satisfaction', gradient: 'from-amber-500 to-yellow-500' },
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
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Dark gradient background - different from hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-slate-900" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white/80 text-sm font-medium rounded-full border border-white/10 mb-4">
            <TrendingUp className="h-4 w-4" />
            Our Impact
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Trusted by Students{' '}
            <span className="bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">
              Across India
            </span>
          </h2>
          <p className="text-lg text-blue-100/60 max-w-2xl mx-auto">
            Our platform is helping thousands of students excel in their studies every day
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-5">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                'group relative text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:bg-white/10 hover:scale-105 hover:shadow-2xl hover:shadow-white/5',
                `animate-fade-in`
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient border on hover */}
              <div className={cn(
                'absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none',
                'bg-gradient-to-br from-white/10 to-transparent'
              )} />

              {/* Icon with gradient background */}
              <div className={cn(
                'inline-flex p-3 rounded-xl bg-gradient-to-br shadow-lg mb-3 transition-transform duration-300 group-hover:scale-110',
                stat.gradient
              )}>
                <div className="text-white">
                  {stat.icon}
                </div>
              </div>

              {/* Counter value */}
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 tracking-tight">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <div className="text-sm text-blue-200/70 group-hover:text-blue-200 transition-colors">
                {stat.label}
              </div>

              {/* Decorative dot */}
              <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white/40 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
