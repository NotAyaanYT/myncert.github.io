'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu, X, BookOpen, ChevronDown, GraduationCap,
  FileQuestion, ClipboardCheck, Bookmark,
  Home, Search, Sparkles, Info, Mail
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { SearchBar } from '@/components/ui/SearchBar';

const studyHubLinks = [
  { label: 'NCERT Notes', href: '/notes', icon: Bookmark, desc: 'Chapter-wise notes & revision' },
  { label: 'MCQs', href: '/mcqs', icon: FileQuestion, desc: 'Practice tests with answers' },
  { label: 'Worksheets', href: '/worksheets', icon: ClipboardCheck, desc: 'Extra practice questions' },
];

const navItems = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'NCERT Solutions', href: '/#solutions', icon: BookOpen },
  { label: 'Classes', href: '/#classes', icon: GraduationCap },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);
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

  // Trap focus in mobile menu & body scroll lock
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
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
      'relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200',
      isActive
        ? 'text-white bg-blue-600 shadow-sm'
        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800'
    );

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.04)] dark:shadow-[0_1px_3px_rgba(0,0,0,0.2)] border-b border-gray-200/50 dark:border-gray-800/50'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="NCERT Solutions Hub Home">
            <div className="relative flex items-center justify-center w-9 h-9 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight">
              <span className="text-gray-900 dark:text-white">NCERT</span>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Hub</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={navLinkClass(pathname === item.href)}
              >
                {item.label}
              </Link>
            ))}

            {/* Resources Dropdown */}
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
                  'flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200',
                  isResourcesOpen
                    ? 'text-white bg-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800'
                )}
                aria-expanded={isResourcesOpen}
                aria-haspopup="true"
                aria-label="Resources menu"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Resources
                <ChevronDown className={cn('h-3 w-3 transition-transform duration-300', isResourcesOpen && 'rotate-180')} />
              </button>

              {isResourcesOpen && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-72 bg-white dark:bg-gray-950 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-gray-200 dark:border-gray-800 p-2 animate-slide-down"
                  role="menu"
                  aria-label="Resources"
                  style={{ transformOrigin: 'top center' }}
                >
                  <div className="grid gap-0.5">
                    {studyHubLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsResourcesOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-xl text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 group"
                        role="menuitem"
                      >
                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 transition-colors">
                          <link.icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium">{link.label}</div>
                          <div className="text-xs text-gray-400 dark:text-gray-500">{link.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className={navLinkClass(pathname === '/about')}>About</Link>
            <Link href="/contact" className={navLinkClass(pathname === '/contact')}>Contact</Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <SearchBar />
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative p-2.5 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="relative w-5 h-5">
                <span className={cn(
                  'absolute inset-0 transition-transform duration-300',
                  isMobileMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                )}>
                  <Menu className="h-5 w-5" />
                </span>
                <span className={cn(
                  'absolute inset-0 transition-transform duration-300',
                  isMobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                )}>
                  <X className="h-5 w-5" />
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 top-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden transition-opacity duration-300',
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 z-50 h-full w-full max-w-sm bg-white dark:bg-stone-950 lg:hidden transition-transform duration-300 ease-out shadow-2xl',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Mobile menu header */}
        <div className="flex items-center justify-between px-4 h-16 border-b border-gray-100 dark:border-gray-800">
          <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg">
              <BookOpen className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold text-gray-900 dark:text-white">NCERT<span className="text-blue-600">Hub</span></span>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile navigation */}
        <nav className="flex flex-col p-4 gap-1 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 4rem)' }} aria-label="Mobile navigation">
          <div className="space-y-0.5">
            <p className="px-3 py-2 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Navigation</p>
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                'flex items-center gap-3 px-4 py-3 text-base font-medium rounded-xl transition-all duration-200',
                pathname === '/'
                  ? 'text-white bg-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800'
              )}
            >
              <Home className="h-5 w-5" />
              Home
            </Link>
            <Link
              href="/#classes"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 rounded-xl transition-all duration-200"
            >
              <GraduationCap className="h-5 w-5" />
              Classes
            </Link>
            <Link
              href="/#classes"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 rounded-xl transition-all duration-200"
            >
              <BookOpen className="h-5 w-5" />
              NCERT Solutions
            </Link>
          </div>

          {/* Mobile Resources Section */}
          <div className="border-t border-gray-100 dark:border-gray-800 pt-3 mt-2">
            <p className="px-3 py-2 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Study Hub</p>
            <Link
              href="/notes"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 rounded-xl transition-all duration-200"
            >
              <Bookmark className="h-5 w-5" />
              NCERT Notes
            </Link>
            <Link
              href="/mcqs"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 rounded-xl transition-all duration-200"
            >
              <FileQuestion className="h-5 w-5" />
              MCQs
            </Link>
            <Link
              href="/worksheets"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 rounded-xl transition-all duration-200"
            >
              <ClipboardCheck className="h-5 w-5" />
              Worksheets
            </Link>
          </div>

          <div className="border-t border-gray-100 dark:border-gray-800 pt-3 mt-2">
            <p className="px-3 py-2 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">More</p>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 rounded-xl transition-all duration-200"
            >
              <Info className="h-5 w-5" />
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 rounded-xl transition-all duration-200"
            >
              <Mail className="h-5 w-5" />
              Contact
            </Link>
          </div>

          {/* Footer in mobile menu */}
          <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
            <div className="px-4 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200">NCERT Solutions Hub</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Free NCERT solutions for Classes 6-12</p>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
