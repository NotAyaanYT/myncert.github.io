import { Metadata } from 'next';
import { MessageSquare, Search, BookOpen, Users, Shield, Clock, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import { CURRENT_ACADEMIC_YEAR } from '@/lib/constants';
import { classData } from '@/data/classes';
import { PageHeader } from '@/components/ui/PageHeader';
import { FeatureClassCard } from '@/components/ui/FeatureClassCard';

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
    <div className="min-h-screen bg-background">
      <PageHeader
        breadcrumbs={[{ label: 'Doubt Section', href: '/doubt' }]}
        title="NCERT Doubt Section"
        titleAccent="Ask & Answer"
        subtitle="Get your NCERT doubts solved by the community. Ask questions, get answers, and help fellow students."
        badge={`Updated for NCERT ${CURRENT_ACADEMIC_YEAR}`}
        badgeIcon={<HelpCircle className="h-3.5 w-3.5" />}
        gradient="indigo"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 page-enter">
        {/* Search Section */}
        <div className="mb-16 max-w-2xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl opacity-20 group-hover:opacity-40 blur transition-all duration-500" />
            <div className="relative flex items-center bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for a doubt or question..."
                className="w-full pl-12 pr-4 py-4 bg-transparent rounded-xl outline-none text-gray-900 dark:text-white text-base"
                disabled
              />
              <button className="mr-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors cursor-not-allowed opacity-60">
                Search
              </button>
            </div>
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-3 text-center">Search functionality coming soon</p>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="section-heading-decoration mx-auto" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              How It Works
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Everything you need to get your doubts cleared
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-6 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700/50 hover:shadow-lg hover:shadow-indigo-500/5 dark:hover:shadow-indigo-900/10 transition-all duration-300 hover:-translate-y-0.5 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Class Grid */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="section-heading-decoration mx-auto" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Browse Doubts by Class
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Select your class to find doubts and answers
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 sm:gap-6">
            {classData.map((cls, index) => (
              <FeatureClassCard
                key={cls.slug}
                name={cls.name}
                slug={cls.slug}
                description={cls.description}
                featurePath="doubt"
                gradient="indigo"
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-100 dark:border-indigo-800/50 text-center p-8 sm:p-12">
          <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-400/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-400/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          <div className="relative">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/50 mb-6">
              <HelpCircle className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Have a Doubt?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto">
              Can&apos;t find what you&apos;re looking for? Post your question and get help from the community.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-300 cursor-not-allowed opacity-60 shadow-lg shadow-indigo-200 dark:shadow-indigo-900/30">
              Ask a Question (Coming Soon)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
