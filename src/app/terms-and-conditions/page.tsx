import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'NCERT Solutions Hub Terms and Conditions - Please read these terms carefully before using our website.',
};

export default function TermsPage() {
  const sections = [
    { title: 'Acceptance of Terms', content: 'By accessing and using NCERT Solutions Hub, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should not use our website.' },
    { title: 'Use of Content', content: 'All content on this website is provided for educational purposes only. You may use, copy, and distribute the content for personal and educational use, but you may not sell or commercially exploit the content without our prior written consent.' },
    { title: 'Accuracy of Information', content: 'We strive to provide accurate and up-to-date information, but we make no warranties regarding the completeness, accuracy, or reliability of the content. The solutions provided are based on the latest NCERT curriculum and CBSE guidelines.' },
    { title: 'User Conduct', content: 'You agree not to use the website for any unlawful purpose or in violation of these terms. You shall not attempt to disrupt the website\'s functionality or access restricted areas without authorization.' },
    { title: 'Intellectual Property', content: 'The NCERT Solutions Hub name, logo, and website design are our intellectual property. NCERT textbook content belongs to NCERT. Our original solutions and explanations are our intellectual property.' },
    { title: 'Limitation of Liability', content: 'NCERT Solutions Hub shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to or use of the website.' },
    { title: 'Changes to Terms', content: 'We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on this page. Your continued use of the website after changes constitutes acceptance of the new terms.' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2 animate-fade-in">Terms and Conditions</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">Last updated: January 1, 2025</p>
        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.title} className="animate-fade-in">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{section.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
