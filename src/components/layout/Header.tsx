'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, BookOpen, ChevronDown, GraduationCap, ListChecks, FileQuestion, FileText, ClipboardCheck, History, Bookmark, Beaker, Calculator } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { SearchBar } from '@/components/ui/SearchBar';

const resourceLinks = [
  { label: 'NCERT Notes', href: '/notes', icon: Bookmark },
  { label: 'Revision Notes', href: '/revision-notes', icon: FileText },
  { label: 'Important Questions', href: '/important-questions', icon: ListChecks },
  { label: 'MCQs', href: '/mcqs', icon: FileQuestion },
  { label: 'Worksheets', href: '/worksheets', icon: ClipboardCheck },
  { label: 'Formula Sheets', href: '/formula-sheets', icon: Calculator },
  { label: 'Sample Papers', href: '/sample-papers', icon: Beaker },
  { label: 'Previous Year Questions', href: '/previous-year-questions', icon: History },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileResourcesOpen(false);
  }, [pathname]);

  // Close resources dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setIsResourcesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Trap focus in mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll when mobile menu is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const isAdmin = pathname.startsWith('/admin');
  if (isAdmin) return null;

  const navLinkClass = (isActive: boolean) =>
    cn(
      'px-3 py-2 text-sm font-medium rounded-lg transition-colors',
      isActive
        ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400'
        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800'
    );

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm'
          : 'bg-white dark:bg-gray-900'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group" aria-label="NCERT Solutions Hub Home">
            <BookOpen className="h-7 w-7 text-blue-600 transition-transform group-hover:scale-110" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              NCERT<span className="text-blue-600">Hub</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            <Link href="/" className={navLinkClass(pathname === '/')}>Home</Link>
            <Link href="/#classes" className={navLinkClass(false)}>Classes</Link>
            <Link href="/#subjects" className={navLinkClass(false)}>Subjects</Link>
            <Link href="/#solutions" className={navLinkClass(false)}>NCERT Solutions</Link>

            <div ref={resourcesRef} className="relative">
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsResourcesOpen(!isResourcesOpen);
                  }
                }}
                className={cn(
                  'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                  isResourcesOpen
                    ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800'
                )}
                aria-expanded={isResourcesOpen}
                aria-haspopup="true"
                aria-label="Resources menu"
              >
                Resources
                <ChevronDown className={cn('h-3 w-3 transition-transform duration-200', isResourcesOpen && 'rotate-180')} />
              </button>

              {isResourcesOpen && (
                <div
                  className="absolute left-0 top-full mt-1 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 py-1 animate-scale-in"
                  role="menu"
                  aria-label="Resources"
                >
                  {resourceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsResourcesOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors first:rounded-t-lg last:rounded-b-lg"
                      role="menuitem"
                    >
                      <link.icon className="h-4 w-4 text-gray-400" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className={navLinkClass(pathname === '/about')}>About</Link>
            <Link href="/contact" className={navLinkClass(pathname === '/contact')}>Contact</Link>
          </nav>

          <div className="flex items-center gap-2">
            <SearchBar />
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={cn(
          'fixed inset-0 top-16 z-40 bg-white dark:bg-gray-900 lg:hidden transition-transform duration-300 ease-in-out overflow-y-auto',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        aria-hidden={!isMobileMenuOpen}
      >
        <nav className="flex flex-col p-4 gap-1" aria-label="Mobile navigation">
          <Link
            href="/"
            className={cn(
              'flex items-center gap-3 px-4 py-3 text-base font-medium rounded-lg transition-colors',
              pathname === '/'
                ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800'
            )}
          >
            <GraduationCap className="h-5 w-5" />
            Home
          </Link>
          <Link
            href="/#classes"
            className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <BookOpen className="h-5 w-5" />
            Classes
          </Link>
          <Link
            href="/#subjects"
            className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <BookOpen className="h-5 w-5" />
            Subjects
          </Link>

          {/* Mobile Resources Section */}
          <div className="border-t border-gray-100 dark:border-gray-800 pt-2 mt-1">
            <button
              onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
              className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 rounded-lg transition-colors"
              aria-expanded={isMobileResourcesOpen}
            >
              <span className="flex items-center gap-3">
                <FileText className="h-5 w-5" />
                Study Resources
              </span>
              <ChevronDown className={cn('h-4 w-4 transition-transform duration-200', isMobileResourcesOpen && 'rotate-180')} />
            </button>
            <div className={cn(
              'overflow-hidden transition-all duration-300',
              isMobileResourcesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            )}>
              <div className="ml-4 pl-4 border-l-2 border-gray-100 dark:border-gray-800 space-y-1 py-1">
                {resourceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <link.icon className="h-4 w-4 text-gray-400" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 dark:border-gray-800 pt-2 mt-1">
            <Link
              href="/about"
              className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <GraduationCap className="h-5 w-5" />
              About
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <GraduationCap className="h-5 w-5" />
              Contact
            </Link>
            <Link
              href="/chapter-tests"
              className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <ClipboardCheck className="h-5 w-5" />
              Chapter Tests
            </Link>
            <Link
              href="/doubt"
              className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <FileQuestion className="h-5 w-5" />
              Doubt Section
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
