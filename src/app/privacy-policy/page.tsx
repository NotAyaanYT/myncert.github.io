import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'NCERT Solutions Hub Privacy Policy - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  const sections = [
    { title: 'Information We Collect', content: 'We collect information you provide directly, such as when you contact us or subscribe to our newsletter. This may include your name, email address, and any other information you choose to share.' },
    { title: 'How We Use Your Information', content: 'We use the information we collect to provide, maintain, and improve our services, respond to your comments and questions, and send you technical notices, updates, and support messages.' },
    { title: 'Cookies', content: 'We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.' },
    { title: 'Third-Party Services', content: 'We may employ third-party companies and individuals due to the following reasons: to facilitate our Service, to provide the Service on our behalf, to perform Service-related services, or to assist us in analyzing how our Service is used.' },
    { title: 'Data Security', content: 'We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure.' },
    { title: 'Changes to This Privacy Policy', content: 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.' },
    { title: 'Contact Us', content: 'If you have any questions about this Privacy Policy, please contact us at contact@ncertsolutionshub.com.' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2 animate-fade-in">Privacy Policy</h1>
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
