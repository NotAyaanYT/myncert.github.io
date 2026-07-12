'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, BookOpen, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { mainNavItems } from '@/lib/constants';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { SearchBar } from '@/components/ui/SearchBar';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isAdmin = pathname.startsWith('/admin');
  if (isAdmin) return null;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <BookOpen className="h-7 w-7 text-blue-600 transition-transform group-hover:scale-110" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              NCERT<span className="text-blue-600">Hub</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className={cn(
                'px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                pathname === '/'
                  ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800'
              )}
            >
              Home
            </Link>
            <Link
              href="/#classes"
              className={cn(
                'px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                'text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800'
              )}
            >
              Classes
            </Link>
            <Link
              href="/#subjects"
              className={cn(
                'px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                'text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800'
              )}
            >
              Subjects
            </Link>
            <Link
              href="/#solutions"
              className={cn(
                'px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                'text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800'
              )}
            >
              NCERT Solutions
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800">
                Resources <ChevronDown className="h-3 w-3" />
              </button>
              <div className="absolute left-0 top-full mt-1 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                <Link href="/notes" className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 first:rounded-t-xl">Notes</Link>
                <Link href="/important-questions" className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700">Important Questions</Link>
                <Link href="/mcqs" className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700">MCQs</Link>
                <Link href="/sample-papers" className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700">Sample Papers</Link>
                <Link href="/previous-year-questions" className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700">Previous Year Questions</Link>
                <Link href="/" className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700">Worksheets</Link>
                <Link href="/notes" className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700">Revision Notes</Link>
                <Link href="/" className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 last:rounded-b-xl">Formula Sheets</Link>
              </div>
            </div>
            <Link
              href="/about"
              className={cn(
                'px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                pathname === '/about'
                  ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800'
              )}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={cn(
                'px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                pathname === '/contact'
                  ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800'
              )}
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <SearchBar />
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          'fixed inset-0 top-16 z-30 bg-white dark:bg-gray-900 lg:hidden transition-transform duration-300',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col p-4 gap-1">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                'px-4 py-3 text-base font-medium rounded-lg transition-colors',
                pathname === item.href
                  ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
