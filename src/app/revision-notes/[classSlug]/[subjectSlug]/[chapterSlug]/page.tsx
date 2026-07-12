import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FileText, Download, Printer, BookOpen, Lightbulb, ListChecks, FlaskConical, Sigma } from 'lucide-react';
import { getClassBySlug, getSubjectBySlug } from '@/data/classes';
import { getChapterBySlug } from '@/data/chapters';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { ShareButtons } from '@/components/ui/ShareButtons';
import { CURRENT_ACADEMIC_YEAR, siteConfig } from '@/lib/constants';

interface Props {
  params: Promise<{ classSlug: string; subjectSlug: string; chapterSlug: string }>;
}

function generateKeyPoints(description: string): string[] {
  const words = description.split(', ');
  return words.length > 1
    ? words.map(w => `Understanding of ${w.trim()}`)
    : [
        `Core concepts of ${description}`,
        `Application-based understanding`,
        `Important definitions and terminology`,
        `Step-by-step problem-solving approach`,
      ];
}

function generateFormulas(description: string): string[] {
  const keywords = ['math', 'physics', 'chemistry', 'perimeter', 'area', 'equation', 'formula', 'angle', 'number', 'ratio', 'percentage', 'probability', 'statistics', 'trigonometry', 'geometry', 'algebra', 'force', 'energy', 'velocity', 'acceleration', 'mole', 'concentration'];
  const isFormulaBased = keywords.some(k => description.toLowerCase().includes(k));
  if (!isFormulaBased) return [];
  return [
    `Formula 1: Standard formula related to ${description.split(',')[0]}`,
    `Formula 2: Derived formula for problem-solving`,
    `Formula 3: Relationship between variables`,
    `Formula 4: Application formula`,
  ];
}

function generateDefinitions(description: string): string[] {
  const parts = description.split(', ');
  return parts.length > 1
    ? parts.map((p, i) => `${p.trim()}: A fundamental concept in this chapter.`)
    : [`${description}: Core definition for understanding this chapter.`];
}

function generateDiagrams(description: string): string[] {
  const diagramTopics = ['geometry', 'graph', 'chart', 'diagram', 'figure', 'shape', 'circuit', 'ray', 'mirror', 'lens', 'structure', 'cell', 'tissue', 'organ', 'flower', 'plant', 'animal', 'map', 'globe', 'landform', 'climate', 'triangle', 'circle', 'quadrilateral', 'ecosystem', 'food chain', 'water cycle', 'digestive', 'respiratory', 'circulatory'];
  const hasDiagrams = diagramTopics.some(k => description.toLowerCase().includes(k));
  if (!hasDiagrams) return [];
  return [
    `Diagram 1: Illustration of ${description.split(',')[0]}`,
    `Diagram 2: Schematic showing key relationships`,
    `Diagram 3: Visual representation of important concepts`,
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { classSlug, subjectSlug, chapterSlug } = await params;
  const cls = getClassBySlug(classSlug);
  const subject = getSubjectBySlug(classSlug, subjectSlug);
  const chapter = getChapterBySlug(classSlug, subjectSlug, chapterSlug);
  if (!cls || !subject || !chapter) return {};
  return {
    title: `${cls.name} ${subject.name} Chapter ${chapter.chapterNumber}: ${chapter.title} Revision Notes (${CURRENT_ACADEMIC_YEAR})`,
    description: `Download free revision notes for ${cls.name} ${subject.name} Chapter ${chapter.chapterNumber} - ${chapter.title}. Based on NCERT ${CURRENT_ACADEMIC_YEAR} syllabus. Includes key concepts, important points, and formulas.`,
    openGraph: {
      title: `${chapter.title} - ${cls.name} ${subject.name} Revision Notes`,
      description: `Free NCERT revision notes for ${chapter.title} (Chapter ${chapter.chapterNumber}). Updated for ${CURRENT_ACADEMIC_YEAR}.`,
    },
  };
}

export default async function RevisionNotesChapterPage({ params }: Props) {
  const { classSlug, subjectSlug, chapterSlug } = await params;
  const cls = getClassBySlug(classSlug);
  const subject = getSubjectBySlug(classSlug, subjectSlug);
  const chapter = getChapterBySlug(classSlug, subjectSlug, chapterSlug);
  if (!cls || !subject || !chapter) notFound();

  const keyPoints = generateKeyPoints(chapter.description);
  const formulas = generateFormulas(chapter.description);
  const definitions = generateDefinitions(chapter.description);
  const diagrams = generateDiagrams(chapter.description);
  const canonicalUrl = `${siteConfig.url}/revision-notes/${cls.slug}/${subject.slug}/${chapter.slug}`;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <Breadcrumb
          items={[
            { label: 'Revision Notes', href: '/revision-notes' },
            { label: cls.name, href: `/revision-notes/${cls.slug}` },
            { label: subject.name, href: `/revision-notes/${cls.slug}/${subject.slug}` },
            { label: `Ch ${chapter.chapterNumber}: ${chapter.title}`, href: `/revision-notes/${cls.slug}/${subject.slug}/${chapter.slug}` },
          ]}
        />

        <div className="mb-8 animate-fade-in">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full border border-green-200 dark:border-green-800">
              <FileText className="h-3.5 w-3.5" />
              Updated for NCERT {CURRENT_ACADEMIC_YEAR}
            </div>
            <ShareButtons url={canonicalUrl} title={`${chapter.title} - ${cls.name} ${subject.name} Revision Notes`} />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {cls.name} {subject.name}
          </h1>
          <h2 className="text-xl sm:text-2xl text-blue-600 font-semibold mb-4">
            Chapter {chapter.chapterNumber}: {chapter.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">{chapter.description}</p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium cursor-not-allowed opacity-70">
            <Download className="h-4 w-4" />
            Download PDF
          </button>
          <button onClick={() => window.print()} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium">
            <Printer className="h-4 w-4" />
            Print
          </button>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-blue-100 dark:border-blue-900 overflow-hidden">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border-b border-blue-100 dark:border-blue-900">
              <div className="flex items-center gap-2">
                <ListChecks className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Key Points</h3>
              </div>
            </div>
            <div className="p-4">
              <ul className="space-y-2">
                {keyPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl border border-purple-100 dark:border-purple-900 overflow-hidden">
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border-b border-purple-100 dark:border-purple-900">
              <div className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Important Definitions</h3>
              </div>
            </div>
            <div className="p-4 space-y-3">
              {definitions.map((def, i) => (
                <div key={i} className="p-3 bg-purple-50 dark:bg-purple-900/10 rounded-lg border border-purple-100 dark:border-purple-900/50">
                  <p className="text-sm text-gray-700 dark:text-gray-300">{def}</p>
                </div>
              ))}
            </div>
          </div>

          {formulas.length > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-green-100 dark:border-green-900 overflow-hidden">
              <div className="p-4 bg-green-50 dark:bg-green-900/20 border-b border-green-100 dark:border-green-900">
                <div className="flex items-center gap-2">
                  <Sigma className="h-5 w-5 text-green-600" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Important Formulas</h3>
                </div>
              </div>
              <div className="p-4 space-y-3">
                {formulas.map((formula, i) => (
                  <div key={i} className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 font-mono text-sm text-gray-800 dark:text-gray-200">
                    {formula}
                  </div>
                ))}
              </div>
            </div>
          )}

          {diagrams.length > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-cyan-100 dark:border-cyan-900 overflow-hidden">
              <div className="p-4 bg-cyan-50 dark:bg-cyan-900/20 border-b border-cyan-100 dark:border-cyan-900">
                <div className="flex items-center gap-2">
                  <FlaskConical className="h-5 w-5 text-cyan-600" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Diagrams & Illustrations</h3>
                </div>
              </div>
              <div className="p-4 space-y-3">
                {diagrams.map((diagram, i) => (
                  <div key={i} className="p-4 bg-cyan-50 dark:bg-cyan-900/10 rounded-lg border border-cyan-100 dark:border-cyan-900/50 text-center">
                    <p className="text-sm font-medium text-cyan-700 dark:text-cyan-300">{diagram}</p>
                    <div className="mt-2 h-24 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-xs text-gray-400">
                      [Diagram placeholder - refer to NCERT textbook]
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-white dark:bg-gray-800 rounded-xl border border-amber-100 dark:border-amber-900 overflow-hidden">
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border-b border-amber-100 dark:border-amber-900">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-amber-600" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Revision Tips</h3>
              </div>
            </div>
            <div className="p-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                  Focus on understanding core concepts rather than rote memorization
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                  Practice numerical problems to strengthen application skills
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                  Create mind maps for better retention of interconnected topics
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                  Review chapter summary regularly before examinations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
