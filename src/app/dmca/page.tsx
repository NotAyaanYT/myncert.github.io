import { Metadata } from 'next';
import { Copyright, Sparkles } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';

export const metadata: Metadata = {
  title: 'DMCA Policy',
  description: 'NCERT Solutions Hub DMCA Policy - Copyright infringement notification procedure.',
};

export default function DMCAPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        breadcrumbs={[{ label: 'DMCA Policy', href: '/dmca' }]}
        title="DMCA Policy"
        subtitle="Copyright infringement notification procedure."
        badge="Legal"
        badgeIcon={<Copyright className="h-3.5 w-3.5" />}
        gradient="slate"
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 page-enter">
        <div className="space-y-8 text-gray-600 dark:text-gray-400 leading-relaxed">
          <div className="bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700/50 p-6 sm:p-8">
            <p className="mb-6">NCERT Solutions Hub respects the intellectual property rights of others. If you believe that any content on our website infringes your copyright, please notify us in accordance with the Digital Millennium Copyright Act (DMCA).</p>
            
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full" />
              Filing a DMCA Notice
            </h2>
            <p className="mb-4">To file a DMCA notice, please provide the following information:</p>
            <ul className="space-y-3 pl-0">
              {[
                'Your physical or electronic signature',
                'Identification of the copyrighted work claimed to be infringed',
                'Identification of the material that is infringing and its location on our website',
                'Your contact information (address, phone number, email)',
                'A statement that you have a good faith belief that the use is not authorized',
                'A statement that the information in the notice is accurate',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-50 dark:bg-blue-900/30 flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700/50 p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full" />
              Submit Notice
            </h2>
            <p className="mb-4">Send your DMCA notice to: <a href="mailto:contact@ncertsolutionshub.com" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">contact@ncertsolutionshub.com</a></p>
            <p className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-100 dark:border-blue-800/30">We will respond to all valid DMCA notices within 2-3 business days and take appropriate action, which may include removing or disabling access to the infringing material.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
