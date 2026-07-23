import { Metadata } from 'next';
import { Scale, Sparkles } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'NCERT Solutions Hub Terms and Conditions - Please read these terms carefully before using our website.',
};

const sections = [
  { title: 'Acceptance of Terms', content: 'By accessing and using NCERT Solutions Hub, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should not use our website.' },
  { title: 'Use of Content', content: 'All content on this website is provided for educational purposes only. You may use, copy, and distribute the content for personal and educational use, but you may not sell or commercially exploit the content without our prior written consent.' },
  { title: 'Accuracy of Information', content: 'We strive to provide accurate and up-to-date information, but we make no warranties regarding the completeness, accuracy, or reliability of the content. The solutions provided are based on the latest NCERT curriculum and CBSE guidelines.' },
  { title: 'User Conduct', content: 'You agree not to use the website for any unlawful purpose or in violation of these terms. You shall not attempt to disrupt the website\'s functionality or access restricted areas without authorization.' },
  { title: 'Intellectual Property', content: 'The NCERT Solutions Hub name, logo, and website design are our intellectual property. NCERT textbook content belongs to NCERT. Our original solutions and explanations are our intellectual property.' },
  { title: 'Limitation of Liability', content: 'NCERT Solutions Hub shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to or use of the website.' },
  { title: 'Changes to Terms', content: 'We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on this page. Your continued use of the website after changes constitutes acceptance of the new terms.' },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        breadcrumbs={[{ label: 'Terms and Conditions', href: '/terms-and-conditions' }]}
        title="Terms and Conditions"
        subtitle="Please read these terms carefully before using our website."
        badge="Legal"
        badgeIcon={<Scale className="h-3.5 w-3.5" />}
        gradient="slate"
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 page-enter">
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-10 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          Last updated: January 1, 2025
        </div>
        <div className="space-y-8">
          {sections.map((section, idx) => (
            <div key={section.title} className="group animate-fade-in" style={{ animationDelay: `${idx * 0.05}s` }}>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full group-hover:scale-y-110 transition-transform" />
                {section.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed pl-3">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
