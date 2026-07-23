import { Metadata } from 'next';
import { Info, Sparkles } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'NCERT Solutions Hub Disclaimer - Important information about the use of our website and content.',
};

const sections = [
  { title: 'Educational Purpose Only', content: 'The content on NCERT Solutions Hub is provided for educational and informational purposes only. While we strive to ensure accuracy, we recommend that students cross-check solutions with their teachers and textbooks.' },
  { title: 'No Guarantee', content: 'We make no guarantees regarding the accuracy, completeness, or suitability of the solutions provided. The solutions are prepared based on the latest NCERT curriculum and may be subject to change.' },
  { title: 'External Links', content: 'Our website may contain links to external websites. We have no control over the content and practices of these sites and are not responsible for their privacy policies or content.' },
  { title: 'Affiliate Disclosure', content: 'NCERT Solutions Hub may display advertisements through Google AdSense and other ad networks. These ads help us maintain the website and provide free content to our users.' },
  { title: 'Copyright', content: 'NCERT textbook content is the property of NCERT. Our original solutions and explanations are our own work and should not be reproduced without attribution.' },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        breadcrumbs={[{ label: 'Disclaimer', href: '/disclaimer' }]}
        title="Disclaimer"
        subtitle="Important information about the use of our website and content."
        badge="Legal"
        badgeIcon={<Info className="h-3.5 w-3.5" />}
        gradient="slate"
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 page-enter">
        <div className="space-y-8">
          {sections.map((section, idx) => (
            <div key={section.title} className="group animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
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
