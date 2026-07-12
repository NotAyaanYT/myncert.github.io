import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FileText, Download, Printer, BookOpen } from 'lucide-react';
import { getClassBySlug, getSubjectBySlug } from '@/data/classes';
import { getChapterBySlug } from '@/data/chapters';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { ShareButtons } from '@/components/ui/ShareButtons';
import { ContentRenderer } from '@/components/ui/ContentRenderer';
import { CURRENT_ACADEMIC_YEAR, siteConfig } from '@/lib/constants';

interface Props {
  params: Promise<{ classSlug: string; subjectSlug: string; chapterSlug: string }>;
}

function generateSummary(description: string): string {
  return `This chapter covers ${description.toLowerCase()}. The revision notes provide a comprehensive overview of all key concepts, definitions, and important points to help students quickly revise before examinations.`;
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
  const keywords = ['math', 'physics', 'chemistry', 'perimeter', 'area', 'equation', 'formula', 'angle', 'number', 'ratio', 'percentage', 'probability', 'statistics', 'trigonometry', 'geometry', 'algebra'];
  const isFormulaBased = keywords.some(k => description.toLowerCase().includes(k));
  if (!isFormulaBased) return [];
  return [
    `Key formula 1: Standard formula related to ${description.split(',')[0]}`,
    `Key formula 2: Derived formula for problem-solving`,
    `Key formula 3: Relationship between variables`,
  ];
}

function generateImportantConcepts(description: string): string[] {
  const parts = description.split(', ');
  return parts.map((p, i) => `${i + 1}. ${p.charAt(0).toUpperCase() + p.slice(1)} - a fundamental concept in this chapter.`);
}

function generateDiagrams(description: string): string[] {
  const diagramTopics = ['geometry', 'graph', 'chart', 'diagram', 'figure', 'shape', 'circuit', 'ray', 'mirror', 'lens', 'structure', 'cell', 'tissue', 'organ', 'flower', 'plant', 'animal', 'map', 'globe', 'landform', 'climate'];
  const hasDiagrams = diagramTopics.some(k => description.toLowerCase().includes(k));
  if (!hasDiagrams) return [];
  return [
    `Figure 1: Illustration of ${description.split(',')[0]}`,
    `Figure 2: Diagram showing key relationships`,
    `Figure 3: Visual representation of important concepts`,
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

export default async function NotesChapterPage({ params }: Props) {
  const { classSlug, subjectSlug, chapterSlug } = await params;
  const cls = getClassBySlug(classSlug);
  const subject = getSubjectBySlug(classSlug, subjectSlug);
  const chapter = getChapterBySlug(classSlug, subjectSlug, chapterSlug);
  if (!cls || !subject || !chapter) notFound();

  const summary = generateSummary(chapter.description);
  const keyPoints = generateKeyPoints(chapter.description);
  const formulas = generateFormulas(chapter.description);
  const diagrams = generateDiagrams(chapter.description);
  const importantConcepts = generateImportantConcepts(chapter.description);

  const sections = [
    { title: 'Chapter Summary', items: [summary] },
    { title: 'Key Points', items: keyPoints },
    { title: 'Important Concepts', items: importantConcepts },
    ...(formulas.length > 0 ? [{ title: 'Important Formulas', items: formulas }] : []),
    ...(diagrams.length > 0 ? [{ title: 'Diagrams & Illustrations', items: diagrams }] : []),
    { title: 'Quick Revision Tips', items: [
      'Focus on understanding core concepts rather than rote memorization',
      'Practice numerical problems to strengthen application skills',
      'Create mind maps for better retention of interconnected topics',
      'Review chapter summary regularly before examinations',
    ]},
  ];

  const canonicalUrl = `${siteConfig.url}/notes/${cls.slug}/${subject.slug}/${chapter.slug}`;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <Breadcrumb
          items={[
            { label: 'Revision Notes', href: '/notes' },
            { label: cls.name, href: `/notes/${cls.slug}` },
            { label: subject.name, href: `/notes/${cls.slug}/${subject.slug}` },
            { label: `Ch ${chapter.chapterNumber}: ${chapter.title}`, href: `/notes/${cls.slug}/${subject.slug}/${chapter.slug}` },
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

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <ContentRenderer sections={sections} />
        </div>
      </div>
    </div>
  );
}
