'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
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
      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Everything you need to know about NCERT Solutions Hub
            </p>
          </div>

          <div className="space-y-3">
            {faqItems.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-base font-medium text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 text-gray-400 flex-shrink-0 transition-transform duration-300',
                      openIndex === index && 'rotate-180'
                    )}
                  />
                </button>
                <div
                  className={cn(
                    'overflow-hidden transition-all duration-300',
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  )}
                >
                  <p className="px-5 pb-5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
