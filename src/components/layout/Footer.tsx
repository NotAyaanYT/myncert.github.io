'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Mail, MapPin, Phone, ExternalLink, Send, Globe, MessageCircle } from 'lucide-react';
import { footerNavItems, siteConfig } from '@/lib/constants';

export function Footer() {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/admin');
  if (isAdmin) return null;

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <BookOpen className="h-6 w-6 text-blue-600 transition-transform group-hover:scale-110" />
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                NCERT<span className="text-blue-600">Hub</span>
              </span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Free NCERT Solutions for Classes 6 to 12 based on the latest syllabus. 
              Quality education accessible to every student across India.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-400 hover:text-sky-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                aria-label="Follow us on Twitter"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                aria-label="Follow us on GitHub"
              >
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1"
                  >
                    {item.label}
                    {item.href.startsWith('http') && <ExternalLink className="h-3 w-3" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Study Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Study Resources</h3>
            <ul className="space-y-2">
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
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:contact@ncertsolutionshub.com" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  contact@ncertsolutionshub.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600 dark:text-gray-400">+91-XXXXXXXXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600 dark:text-gray-400">New Delhi, India</span>
              </li>
            </ul>

            {/* Newsletter Signup */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wider">Stay Updated</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Get latest NCERT updates and study tips</p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex gap-2"
              >
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-1.5 text-xs bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white placeholder-gray-400"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-colors"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} NCERT Solutions Hub. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/privacy-policy" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-300 dark:text-gray-700">|</span>
              <Link href="/terms-and-conditions" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Terms &amp; Conditions
              </Link>
              <span className="text-gray-300 dark:text-gray-700">|</span>
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
