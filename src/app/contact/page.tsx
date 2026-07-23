'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, MessageSquare } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        breadcrumbs={[{ label: 'Contact Us', href: '/contact' }]}
        title="Contact"
        titleAccent="Us"
        subtitle="Have questions, suggestions, or feedback? We would love to hear from you. Send us a message and we will respond as soon as possible."
        badge="Get in Touch"
        badgeIcon={<MessageSquare className="h-3.5 w-3.5" />}
        gradient="blue"
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 page-enter">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="relative overflow-hidden p-10 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-200 dark:border-green-800/50 text-center animate-scale-in">
                <div className="absolute top-0 right-0 w-40 h-40 bg-green-400/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/50 mb-4">
                    <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Message Sent!</h2>
                  <p className="text-gray-600 dark:text-gray-400">Thank you for contacting us. We will get back to you soon.</p>
                </div>
              </div>
            ) : (
              <div className="bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700/50 p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Name</label>
                      <input type="text" required className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-xl outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-gray-900 dark:text-white" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email</label>
                      <input type="email" required className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-xl outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-gray-900 dark:text-white" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Subject</label>
                    <input type="text" required className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-xl outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-gray-900 dark:text-white" placeholder="How can we help?" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Message</label>
                    <textarea required rows={5} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-xl outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-gray-900 dark:text-white resize-none" placeholder="Write your message..." />
                  </div>
                  <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl transition-all duration-300 font-medium shadow-lg shadow-blue-200 dark:shadow-blue-900/30">
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </form>
              </div>
            )}
          </div>

          <div className="space-y-4">
            {[
              { icon: Mail, label: 'Email', value: 'contact@ncertsolutionshub.com' },
              { icon: Phone, label: 'Phone', value: '+91-XXXXXXXXXX' },
              { icon: MapPin, label: 'Address', value: 'New Delhi, India' },
            ].map((item) => (
              <div key={item.label} className="group flex items-start gap-4 p-5 bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700/50 hover:shadow-md transition-all duration-300">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">{item.label}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
