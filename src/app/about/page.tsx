import { Metadata } from 'next';
import { BookOpen, Users, Target, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about NCERT Solutions Hub - our mission, vision, and commitment to providing free quality education to students across India.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
          About <span className="text-blue-600">NCERT Solutions Hub</span>
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            NCERT Solutions Hub is a dedicated educational platform providing free, high-quality NCERT solutions 
            for students from Classes 6 to 12. Our mission is to make quality education accessible to every 
            student in India, regardless of their background or location.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {[
            { icon: BookOpen, title: 'Our Mission', description: 'To provide free, accurate, and comprehensive NCERT solutions that help students excel in their academic journey.' },
            { icon: Users, title: 'Our Audience', description: 'Serving millions of students across India from Classes 6 to 12 following the CBSE curriculum.' },
            { icon: Target, title: 'Our Vision', description: 'To become India\'s most trusted platform for NCERT solutions and educational resources.' },
            { icon: Heart, title: 'Our Values', description: 'Quality education, accessibility, accuracy, and a commitment to student success.' },
          ].map((item) => (
            <div key={item.title} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
              <item.icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-3" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 border border-blue-100 dark:border-blue-800">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Our Commitment</h2>
          <ul className="space-y-3">
            {[
              'All solutions are 100% free with no hidden charges',
              'Content is regularly updated as per the latest NCERT syllabus',
              'Solutions are verified by subject matter experts',
              'Mobile-friendly platform accessible from any device',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                <span className="text-blue-600 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
