import { Metadata } from 'next';
import { BookOpen, Users, Target, Heart, Check, Sparkles } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about NCERT Solutions Hub - our mission, vision, and commitment to providing free quality education to students across India.',
};

const values = [
  { icon: BookOpen, title: 'Our Mission', description: 'To provide free, accurate, and comprehensive NCERT solutions that help students excel in their academic journey.', gradient: 'from-blue-500 to-indigo-500' },
  { icon: Users, title: 'Our Audience', description: 'Serving millions of students across India from Classes 6 to 12 following the CBSE curriculum.', gradient: 'from-indigo-500 to-purple-500' },
  { icon: Target, title: 'Our Vision', description: 'To become India\'s most trusted platform for NCERT solutions and educational resources.', gradient: 'from-purple-500 to-pink-500' },
  { icon: Heart, title: 'Our Values', description: 'Quality education, accessibility, accuracy, and a commitment to student success.', gradient: 'from-pink-500 to-rose-500' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        breadcrumbs={[{ label: 'About Us', href: '/about' }]}
        title="About"
        titleAccent="NCERT Solutions Hub"
        subtitle="Learn about our mission, vision, and commitment to providing free quality education to students across India."
        badge="Our Story"
        badgeIcon={<Sparkles className="h-3.5 w-3.5" />}
        gradient="blue"
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 page-enter">
        {/* Introduction */}
        <div className="mb-16">
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            NCERT Solutions Hub is a dedicated educational platform providing free, high-quality NCERT solutions 
            for students from Classes 6 to 12. Our mission is to make quality education accessible to every 
            student in India, regardless of their background or location.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {values.map((item) => (
            <div
              key={item.title}
              className="group relative p-6 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} mb-4`}>
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Commitment Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-100 dark:border-blue-800/50 p-8 sm:p-10">
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-400/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          <div className="relative">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/50 mb-5">
              <Heart className="h-7 w-7 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Commitment</h2>
            <ul className="space-y-4">
              {[
                'All solutions are 100% free with no hidden charges',
                'Content is regularly updated as per the latest NCERT syllabus',
                'Solutions are verified by subject matter experts',
                'Mobile-friendly platform accessible from any device',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex-shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                  </span>
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
