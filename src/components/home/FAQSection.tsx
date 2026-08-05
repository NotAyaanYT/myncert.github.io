'use client';

import { useState } from 'react';
import { Plus, HelpCircle, Sparkles } from 'lucide-react';
import { faqItems } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { JsonLd, faqSchema } from '@/components/seo/JsonLd';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <JsonLd data={faqSchema(faqItems)} />
      <section className="relative py-20 sm:py-28 bg-gray-50 dark:bg-gray-900 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/5 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-14 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full border border-blue-100 dark:border-blue-800 mb-4">
              <HelpCircle className="h-4 w-4" />
              Got Questions?
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
              Frequently Asked{' '}
              <span className="brand-gradient-text">Questions</span>
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Everything you need to know about NCERT Solutions Hub
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            {faqItems.map((faq, index) => (
              <div
                key={index}
                className={cn(
                  'group bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300',
                  openIndex === index ? 'shadow-lg border-blue-200 dark:border-blue-800' : 'hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600',
                  `animate-fade-in`
                )}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                  aria-expanded={openIndex === index}
                >
                  <span className="flex items-center gap-3 text-base font-semibold text-gray-900 dark:text-white">
                    <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-xs font-bold shadow-sm">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <span className={cn(
                    'flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300',
                    openIndex === index ? 'bg-blue-600 text-white rotate-45' : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600'
                  )}>
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className={cn(
                    'overflow-hidden transition-all duration-300 ease-in-out',
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  )}
                >
                  <div className="px-5 md:px-6 pb-5 md:pb-6 pl-14 md:pl-16">
                    <div className="w-8 h-[1px] bg-gradient-to-r from-blue-500 to-indigo-500 mb-3" />
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
