'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className={cn('p-2 rounded-lg', className)}>
        <div className="h-5 w-5" />
      </div>
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        'p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 transition-all hover:scale-110',
        className
      )}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative">
        <Sun className={cn('h-5 w-5 transition-all', isDark ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90 absolute top-0 left-0')} />
        <Moon className={cn('h-5 w-5 transition-all', !isDark ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90 absolute top-0 left-0')} />
      </div>
    </button>
  );
}
