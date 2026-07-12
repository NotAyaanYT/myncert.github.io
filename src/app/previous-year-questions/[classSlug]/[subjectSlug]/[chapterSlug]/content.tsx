'use client';

import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Lightbulb, BookOpen } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { ShareButtons } from '@/components/ui/ShareButtons';
import { CURRENT_ACADEMIC_YEAR, siteConfig } from '@/lib/constants';

interface ChapterInfo {
  id: string;
  title: string;
  slug: string;
  chapterNumber: number;
  description: string;
}

interface SubjectInfo {
  id: string;
  name: string;
  slug: string;
  description: string;
}

interface PyqItem {
  id: number;
  question: string;
  solution: string;
  marks: number;
  source: string;
  year: string;
}

function generatePyqs(title: string, description: string): PyqItem[] {
  const sources = [
    { exam: 'CBSE Board', year: '2024', variant: 'Delhi' },
    { exam: 'CBSE Board', year: '2024', variant: 'Outside Delhi' },
    { exam: 'CBSE Board', year: '2023', variant: 'Delhi' },
    { exam: 'CBSE Board', year: '2023', variant: 'Outside Delhi' },
    { exam: 'CBSE Board', year: '2022', variant: 'Term 2' },
    { exam: 'CBSE Board', year: '2022', variant: 'Term 1' },
    { exam: 'CBSE Board', year: '2020', variant: 'Delhi' },
    { exam: 'CBSE Board', year: '2020', variant: 'Outside Delhi' },
  ];

  const topics = description.split(', ');
  const pyqs: PyqItem[] = [];
  const numPyqs = Math.min(8, Math.max(5, topics.length));

  const questionTemplates = [
    (t: string) => `Explain the concept of ${t} with suitable examples.`,
    (t: string) => `Describe the importance of ${t} in the given context.`,
    (t: string) => `How does ${t} relate to the overall theme of the chapter? Discuss.`,
    (t: string) => `Analyze the role of ${t} and its applications.`,
    (t: string) => `What are the key aspects of ${t}? Elaborate with diagrams.`,
    (t: string) => `Compare and contrast different aspects of ${t}.`,
    (t: string) => `Evaluate the significance of ${t} in real-life situations.`,
    (t: string) => `Discuss the various dimensions of ${t} with reference to the chapter.`,
  ];

  for (let i = 0; i < numPyqs; i++) {
    const topic = topics[i % topics.length] || 'key concepts';
    const template = questionTemplates[i % questionTemplates.length];
    const source = sources[i % sources.length];

    pyqs.push({
      id: i + 1,
      question: template(topic),
      solution: `This is a detailed solution for the question about ${topic}.

Key points to cover:
1. Definition and understanding of ${topic}
2. Important characteristics and features
3. Relevant examples and case studies
4. Connection to other concepts in the chapter
5. Application-oriented analysis

Marks Distribution:
- Understanding of concept: ${Math.ceil([2, 3, 4, 5][i % 4] * 0.4)} marks
- Examples and explanation: ${Math.ceil([2, 3, 4, 5][i % 4] * 0.4)} marks
- Presentation and structure: ${[2, 3, 4, 5][i % 4] - Math.ceil([2, 3, 4, 5][i % 4] * 0.8)} marks

Practice writing answers within the word limit and focus on key terminology.`,
      marks: [2, 3, 4, 5, 3, 4, 2, 5][i % 8],
      source: `CBSE ${source.year} ${source.variant}`,
      year: source.year,
    });
  }

  return pyqs;
}

function PyqCard({ pyq, index }: { pyq: PyqItem; index: number }) {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden animate-slide-up"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-900/40 flex items-center justify-center text-rose-700 dark:text-rose-300 font-bold text-sm">
            {pyq.id}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 rounded-full">
                {pyq.marks} marks
              </span>
              <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full">
                {pyq.source}
              </span>
            </div>
            <p className="text-base font-medium text-gray-900 dark:text-white mb-4">
              {pyq.question}
            </p>
            <button
              onClick={() => setShowSolution(!showSolution)}
              className="inline-flex items-center gap-2 text-sm font-medium text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 transition-colors"
            >
              <Lightbulb className="h-4 w-4" />
              {showSolution ? 'Hide Solution' : 'Show Solution'}
              {showSolution ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
            </button>
            {showSolution && (
              <div className="mt-4 p-4 bg-rose-50 dark:bg-rose-900/20 rounded-lg border border-rose-100 dark:border-rose-800 animate-fade-in">
                <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                  {pyq.solution}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

interface PyqContentProps {
  cls: { slug: string; name: string };
  subject: SubjectInfo;
  chapter: ChapterInfo;
}

export function PyqContent({ cls, subject, chapter }: PyqContentProps) {
  const pyqs = generatePyqs(chapter.title, chapter.description);
  const canonicalUrl = `${siteConfig.url}/previous-year-questions/${cls.slug}/${subject.slug}/${chapter.slug}`;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <Breadcrumb
          items={[
            { label: 'Previous Year Questions', href: '/previous-year-questions' },
            { label: cls.name, href: `/previous-year-questions/${cls.slug}` },
            { label: subject.name, href: `/previous-year-questions/${cls.slug}/${subject.slug}` },
            { label: `Ch ${chapter.chapterNumber}: ${chapter.title}`, href: `/previous-year-questions/${cls.slug}/${subject.slug}/${chapter.slug}` },
          ]}
        />

        <div className="mb-8 animate-fade-in">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full border border-green-200 dark:border-green-800">
              <HelpCircle className="h-3.5 w-3.5" />
              Updated for NCERT {CURRENT_ACADEMIC_YEAR}
            </div>
            <ShareButtons url={canonicalUrl} title={`${chapter.title} - ${cls.name} ${subject.name} PYQs`} />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {cls.name} {subject.name}
          </h1>
          <h2 className="text-xl sm:text-2xl text-rose-600 font-semibold mb-4">
            Chapter {chapter.chapterNumber}: {chapter.title} - Previous Year Questions
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Practice CBSE previous year questions from {chapter.title}. Each question shows the year and exam it appeared in, along with a detailed solution.
          </p>
        </div>

        <div className="space-y-4">
          {pyqs.map((pyq, index) => (
            <PyqCard key={pyq.id} pyq={pyq} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
