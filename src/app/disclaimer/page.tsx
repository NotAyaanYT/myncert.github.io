import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'NCERT Solutions Hub Disclaimer - Important information about the use of our website and content.',
};

export default function DisclaimerPage() {
  const sections = [
    { title: 'Educational Purpose Only', content: 'The content on NCERT Solutions Hub is provided for educational and informational purposes only. While we strive to ensure accuracy, we recommend that students cross-check solutions with their teachers and textbooks.' },
    { title: 'No Guarantee', content: 'We make no guarantees regarding the accuracy, completeness, or suitability of the solutions provided. The solutions are prepared based on the latest NCERT curriculum and may be subject to change.' },
    { title: 'External Links', content: 'Our website may contain links to external websites. We have no control over the content and practices of these sites and are not responsible for their privacy policies or content.' },
    { title: 'Affiliate Disclosure', content: 'NCERT Solutions Hub may display advertisements through Google AdSense and other ad networks. These ads help us maintain the website and provide free content to our users.' },
    { title: 'Copyright', content: 'NCERT textbook content is the property of NCERT. Our original solutions and explanations are our own work and should not be reproduced without attribution.' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 animate-fade-in">Disclaimer</h1>
        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{section.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
