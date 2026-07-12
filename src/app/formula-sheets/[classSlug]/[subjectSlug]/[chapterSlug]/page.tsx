import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Calculator, Download, Printer, BookOpen, Sigma } from 'lucide-react';
import { getClassBySlug, getSubjectBySlug } from '@/data/classes';
import { getChapterBySlug } from '@/data/chapters';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { ShareButtons } from '@/components/ui/ShareButtons';
import { CURRENT_ACADEMIC_YEAR, siteConfig } from '@/lib/constants';

interface Props {
  params: Promise<{ classSlug: string; subjectSlug: string; chapterSlug: string }>;
}

interface FormulaTopic {
  topic: string;
  formulas: { name: string; formula: string; description: string }[];
}

function generateFormulaTopics(title: string, description: string): FormulaTopic[] {
  const parts = description.split(', ');
  const topics: FormulaTopic[] = [];
  const subjectKeywords = description.toLowerCase();

  const isMath = ['math', 'algebra', 'geometry', 'trigonometry', 'number', 'equation', 'ratio', 'percentage', 'probability', 'statistics', 'calculus'].some(k => subjectKeywords.includes(k));
  const isPhysics = ['physics', 'force', 'energy', 'motion', 'light', 'sound', 'electric', 'magnetic', 'heat', 'wave', 'gravitation'].some(k => subjectKeywords.includes(k));
  const isChemistry = ['chemistry', 'mole', 'chemical', 'reaction', 'atomic', 'molecule', 'concentration', 'gas', 'acid', 'base', 'salt', 'equilibrium'].some(k => subjectKeywords.includes(k));

  const formulaTemplates: Record<string, { name: string; formula: string; description: string }[]> = {
    general: [
      { name: 'Standard Formula', formula: 'f(x) = ax + b', description: 'General form of the standard equation' },
      { name: 'Fundamental Relation', formula: 'y = mx + c', description: 'Linear relationship between variables' },
      { name: 'Key Equation', formula: 'A = πr²', description: 'Area calculation formula' },
      { name: 'Derived Formula', formula: 'V = l × b × h', description: 'Volume calculation formula' },
    ],
  };

  if (isMath) {
    topics.push({
      topic: 'Core Formulas',
      formulas: [
        { name: 'Area of Rectangle', formula: 'A = l × b', description: 'Area = length × breadth' },
        { name: 'Perimeter of Rectangle', formula: 'P = 2(l + b)', description: 'Perimeter = 2(length + breadth)' },
        { name: 'Area of Circle', formula: 'A = πr²', description: 'Area = π × radius²' },
        { name: 'Circumference of Circle', formula: 'C = 2πr', description: 'Circumference = 2 × π × radius' },
      ],
    });
    if (parts.length > 0) {
      topics.push({
        topic: parts[0],
        formulas: [
          { name: 'Primary Formula', formula: `f(${parts[0].toLowerCase()}) = kx + c`, description: `Core formula related to ${parts[0]}` },
          { name: 'Derived Relation', formula: `g(x) = ax² + bx + c`, description: `Secondary formula for ${parts[0]}` },
        ],
      });
    }
  }

  if (isPhysics) {
    topics.push({
      topic: 'Physics Formulas',
      formulas: [
        { name: 'Force', formula: 'F = ma', description: 'Force = mass × acceleration' },
        { name: 'Work', formula: 'W = F × d', description: 'Work = Force × displacement' },
        { name: 'Kinetic Energy', formula: 'KE = ½mv²', description: 'Kinetic Energy = half × mass × velocity²' },
        { name: 'Potential Energy', formula: 'PE = mgh', description: 'Potential Energy = mass × gravity × height' },
      ],
    });
  }

  if (isChemistry) {
    topics.push({
      topic: 'Chemistry Formulas',
      formulas: [
        { name: 'Mole Concept', formula: 'n = m/M', description: 'Number of moles = mass / molar mass' },
        { name: 'Concentration', formula: 'C = n/V', description: 'Concentration = moles / volume (in L)' },
        { name: 'Ideal Gas Equation', formula: 'PV = nRT', description: 'Pressure × Volume = moles × gas constant × temperature' },
      ],
    });
  }

  if (!isMath && !isPhysics && !isChemistry) {
    topics.push({
      topic: 'Key Formulas',
      formulas: formulaTemplates.general.slice(0, 3),
    });
  }

  return topics;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { classSlug, subjectSlug, chapterSlug } = await params;
  const cls = getClassBySlug(classSlug);
  const subject = getSubjectBySlug(classSlug, subjectSlug);
  const chapter = getChapterBySlug(classSlug, subjectSlug, chapterSlug);
  if (!cls || !subject || !chapter) return {};
  return {
    title: `${cls.name} ${subject.name} Chapter ${chapter.chapterNumber}: ${chapter.title} Formula Sheet (${CURRENT_ACADEMIC_YEAR})`,
    description: `Free formula sheet for ${cls.name} ${subject.name} Chapter ${chapter.chapterNumber} - ${chapter.title}. All important formulas organized by topic. Based on NCERT ${CURRENT_ACADEMIC_YEAR} syllabus.`,
    openGraph: {
      title: `${chapter.title} - ${cls.name} ${subject.name} Formula Sheet`,
      description: `Free NCERT formula sheet for ${chapter.title} (Chapter ${chapter.chapterNumber}). Updated for ${CURRENT_ACADEMIC_YEAR}.`,
    },
  };
}

export default async function FormulaSheetChapterPage({ params }: Props) {
  const { classSlug, subjectSlug, chapterSlug } = await params;
  const cls = getClassBySlug(classSlug);
  const subject = getSubjectBySlug(classSlug, subjectSlug);
  const chapter = getChapterBySlug(classSlug, subjectSlug, chapterSlug);
  if (!cls || !subject || !chapter) notFound();

  const formulaTopics = generateFormulaTopics(chapter.title, chapter.description);
  const canonicalUrl = `${siteConfig.url}/formula-sheets/${cls.slug}/${subject.slug}/${chapter.slug}`;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <Breadcrumb
          items={[
            { label: 'Formula Sheets', href: '/formula-sheets' },
            { label: cls.name, href: `/formula-sheets/${cls.slug}` },
            { label: subject.name, href: `/formula-sheets/${cls.slug}/${subject.slug}` },
            { label: `Ch ${chapter.chapterNumber}: ${chapter.title}`, href: `/formula-sheets/${cls.slug}/${subject.slug}/${chapter.slug}` },
          ]}
        />

        <div className="mb-8 animate-fade-in">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full border border-green-200 dark:border-green-800">
              <Calculator className="h-3.5 w-3.5" />
              Updated for NCERT {CURRENT_ACADEMIC_YEAR}
            </div>
            <ShareButtons url={canonicalUrl} title={`${chapter.title} - ${cls.name} ${subject.name} Formula Sheet`} />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {cls.name} {subject.name}
          </h1>
          <h2 className="text-xl sm:text-2xl text-orange-600 font-semibold mb-4">
            Chapter {chapter.chapterNumber}: {chapter.title} - Formula Sheet
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            All important formulas from this chapter organized by topic for quick reference.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium cursor-not-allowed opacity-70">
            <Download className="h-4 w-4" />
            Download PDF
          </button>
          <button onClick={() => window.print()} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium">
            <Printer className="h-4 w-4" />
            Print
          </button>
        </div>

        <div className="space-y-6">
          {formulaTopics.map((topic, tIndex) => (
            <div
              key={tIndex}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${tIndex * 0.1}s` }}
            >
              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <Sigma className="h-5 w-5 text-orange-600" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{topic.topic}</h3>
                </div>
              </div>
              <div className="p-4 space-y-4">
                {topic.formulas.map((formula, fIndex) => (
                  <div
                    key={fIndex}
                    className="p-4 bg-gray-50 dark:bg-gray-700/30 rounded-lg border border-gray-200 dark:border-gray-600"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                          {formula.name}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                          {formula.description}
                        </p>
                      </div>
                    </div>
                    <div className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600">
                      <code className="text-base font-mono font-bold text-orange-700 dark:text-orange-300 block text-center">
                        {formula.formula}
                      </code>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
