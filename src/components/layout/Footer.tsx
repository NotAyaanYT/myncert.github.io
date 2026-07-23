'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Mail, MapPin, ExternalLink, Send, Globe, MessageCircle, ChevronRight, Sparkles } from 'lucide-react';
import { footerNavItems, siteConfig } from '@/lib/constants';

export function Footer() {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/admin');
  if (isAdmin) return null;

  return (
    <footer className="relative bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand - spans 3 cols */}
          <div className="lg:col-span-3">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="flex items-center justify-center w-9 h-9 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-md shadow-blue-500/25 transition-transform duration-300 group-hover:scale-110">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                <span className="text-gray-900 dark:text-white">NCERT</span>
                <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Hub</span>
              </span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
              Free NCERT Solutions for Classes 6 to 12 based on the latest syllabus. 
              Quality education accessible to every student across India.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-2">
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-xl text-gray-400 hover:text-sky-500 hover:bg-sky-50 dark:hover:bg-sky-900/20 transition-all duration-200"
                aria-label="Follow us on Twitter"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-xl text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                aria-label="Follow us on GitHub"
              >
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links - spans 2 cols */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-5 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5">
              {footerNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 inline-flex items-center gap-1.5"
                  >
                    <ChevronRight className="h-3 w-3 text-gray-300 dark:text-gray-600 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
                    {item.label}
                    {item.href.startsWith('http') && <ExternalLink className="h-3 w-3 opacity-50" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Study Resources - spans 2 cols */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-5 uppercase tracking-wider">Study Resources</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'NCERT Solutions', href: '/#solutions' },
                { label: 'NCERT Notes', href: '/notes' },
                { label: 'Revision Notes', href: '/revision-notes' },
                { label: 'Sample Papers', href: '/sample-papers' },
                { label: 'MCQs', href: '/mcqs' },
                { label: 'Important Questions', href: '/important-questions' },
                { label: 'Previous Year Papers', href: '/previous-year-questions' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 inline-flex items-center gap-1.5"
                  >
                    <ChevronRight className="h-3 w-3 text-gray-300 dark:text-gray-600 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter - spans 3 cols */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-5 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-3 mb-5">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex-shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <a href="mailto:contact@ncertsolutionshub.com" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  contact@ncertsolutionshub.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex-shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">New Delhi, India</span>
              </li>
            </ul>

            {/* Newsletter Signup */}
            <div className="relative p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-100 dark:border-blue-800/50">
              <div className="absolute top-3 right-3 text-blue-200 dark:text-blue-700">
                <Sparkles className="h-5 w-5" />
              </div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Stay Updated</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Get latest NCERT updates and study tips</p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex gap-2"
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-3.5 py-2 text-xs bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-gray-900 dark:text-white placeholder-gray-400 transition-all"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium rounded-xl transition-all duration-200 shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 active:scale-95"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} NCERT Solutions Hub. All rights reserved.
            </p>
            <div className="flex items-center gap-5 text-sm">
              <Link href="/privacy-policy" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-300 dark:text-gray-700 hidden sm:inline">|</span>
              <Link href="/terms-and-conditions" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Terms &amp; Conditions
              </Link>
              <span className="text-gray-300 dark:text-gray-700 hidden sm:inline">|</span>
              <Link href="/sitemap" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
