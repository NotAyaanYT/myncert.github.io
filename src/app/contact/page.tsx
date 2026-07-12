'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
          Contact <span className="text-blue-600">Us</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl">
          Have questions, suggestions, or feedback? We would love to hear from you. Send us a message and we will respond as soon as possible.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="p-8 bg-green-50 dark:bg-green-900/20 rounded-2xl border border-green-200 dark:border-green-800 text-center animate-scale-in">
                <Check className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-2">Message Sent!</h2>
                <p className="text-green-600 dark:text-green-400">Thank you for contacting us. We will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                    <input type="text" required className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl outline-none focus:border-blue-500 transition-colors text-gray-900 dark:text-white" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                    <input type="email" required className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl outline-none focus:border-blue-500 transition-colors text-gray-900 dark:text-white" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                  <input type="text" required className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl outline-none focus:border-blue-500 transition-colors text-gray-900 dark:text-white" placeholder="How can we help?" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                  <textarea required rows={5} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl outline-none focus:border-blue-500 transition-colors text-gray-900 dark:text-white resize-none" placeholder="Write your message..." />
                </div>
                <button type="submit" className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium">
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            {[
              { icon: Mail, label: 'Email', value: 'contact@ncertsolutionshub.com' },
              { icon: Phone, label: 'Phone', value: '+91-XXXXXXXXXX' },
              { icon: MapPin, label: 'Address', value: 'New Delhi, India' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <item.icon className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">{item.label}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
