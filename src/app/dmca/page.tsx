import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DMCA Policy',
  description: 'NCERT Solutions Hub DMCA Policy - Copyright infringement notification procedure.',
};

export default function DMCAPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 animate-fade-in">DMCA Policy</h1>
        <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed">
          <p>NCERT Solutions Hub respects the intellectual property rights of others. If you believe that any content on our website infringes your copyright, please notify us in accordance with the Digital Millennium Copyright Act (DMCA).</p>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Filing a DMCA Notice</h2>
          <p>To file a DMCA notice, please provide the following information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your physical or electronic signature</li>
            <li>Identification of the copyrighted work claimed to be infringed</li>
            <li>Identification of the material that is infringing and its location on our website</li>
            <li>Your contact information (address, phone number, email)</li>
            <li>A statement that you have a good faith belief that the use is not authorized</li>
            <li>A statement that the information in the notice is accurate</li>
          </ul>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Submit Notice</h2>
          <p>Send your DMCA notice to: contact@ncertsolutionshub.com</p>
          <p>We will respond to all valid DMCA notices within 2-3 business days and take appropriate action, which may include removing or disabling access to the infringing material.</p>
        </div>
      </div>
    </div>
  );
}
