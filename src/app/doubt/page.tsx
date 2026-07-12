import { Metadata } from 'next';
import { MessageSquare, Search, BookOpen, Users, Shield, Clock } from 'lucide-react';
import Link from 'next/link';
import { CURRENT_ACADEMIC_YEAR } from '@/lib/constants';
import { classData } from '@/data/classes';

export const metadata: Metadata = {
  title: `Doubt Section - Ask & Answer NCERT Doubts (${CURRENT_ACADEMIC_YEAR})`,
  description: `Get your NCERT doubts solved by the community. Ask questions, get answers, and help others for Classes 6-12 based on NCERT ${CURRENT_ACADEMIC_YEAR} syllabus.`,
};

const features = [
  { icon: MessageSquare, title: 'Ask Doubts', description: 'Post your NCERT questions and get answers from experts and peers.' },
  { icon: Search, title: 'Search Questions', description: 'Find answers to previously asked questions instantly.' },
  { icon: BookOpen, title: 'Chapter-wise', description: 'Browse doubts organized by class, subject, and chapter.' },
  { icon: Users, title: 'Community Driven', description: 'Learn together with fellow students and educators.' },
  { icon: Shield, title: 'Verified Answers', description: 'Answers reviewed by subject experts for accuracy.' },
  { icon: Clock, title: 'Quick Responses', description: 'Get answers within 24 hours from the community.' },
];

export default function DoubtPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full border border-green-200 dark:border-green-800 mb-4">
            <MessageSquare className="h-3.5 w-3.5" />
            Updated for NCERT {CURRENT_ACADEMIC_YEAR}
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            NCERT <span className="text-blue-600">Doubt Section</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ask questions, clear your doubts, and help fellow students. Community-driven learning for NCERT {CURRENT_ACADEMIC_YEAR}.
          </p>
        </div>

        <div className="mb-12 animate-fade-in">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input type="text" placeholder="Search for a doubt or question..." className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 rounded-xl outline-none transition-colors text-gray-900 dark:text-white text-base" disabled />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors cursor-not-allowed opacity-60">
                Search
              </button>
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 text-center">Search functionality coming soon</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg w-fit mb-4">
                <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Browse Doubts by Class</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {classData.map((cls, index) => (
              <Link key={cls.id} href={`/doubt/${cls.slug}`} className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-gray-200 dark:border-gray-700 text-center transition-all animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{cls.name}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800 text-center animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Have a Doubt?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Can&apos;t find what you&apos;re looking for? Post your question and get help from the community.
          </p>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors cursor-not-allowed opacity-60">
            Ask a Question (Coming Soon)
          </button>
        </div>
      </div>
    </div>
  );
}
