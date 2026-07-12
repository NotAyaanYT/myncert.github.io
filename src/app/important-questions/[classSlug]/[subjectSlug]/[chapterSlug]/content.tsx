'use client';

import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Download, Printer, Lightbulb } from 'lucide-react';
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

interface Question {
  id: number;
  question: string;
  solution: string;
  marks: number;
}

function generateQuestions(title: string, description: string): Question[] {
  const questions: Question[] = [];
  const descParts = description.split(', ');
  const numQuestions = Math.min(descParts.length, 10);

  for (let i = 0; i < Math.max(numQuestions, 5); i++) {
    const topic = descParts[i % descParts.length] || 'key concepts';
    questions.push({
      id: i + 1,
      question: `Explain the concept of ${topic} in detail with suitable examples.`,
      solution: `${topic} is an important concept in this chapter. It involves understanding the fundamental principles and their applications. Key aspects include:\n\n1. Definition and meaning of ${topic}\n2. Key characteristics and properties\n3. Real-life examples and applications\n4. Common mistakes to avoid\n\nPractice this concept thoroughly to master the chapter.`,
      marks: [2, 3, 4, 5, 3, 4, 2, 5, 3, 4][i % 10],
    });
  }

  return questions;
}

function QuestionCard({ q, index }: { q: Question; index: number }) {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden animate-slide-up"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center text-purple-700 dark:text-purple-300 font-bold text-sm">
            {q.id}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">
                {q.marks} marks
              </span>
            </div>
            <p className="text-base font-medium text-gray-900 dark:text-white mb-4">
              {q.question}
            </p>
            <button
              onClick={() => setShowSolution(!showSolution)}
              className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
            >
              <Lightbulb className="h-4 w-4" />
              {showSolution ? 'Hide Solution' : 'Show Solution'}
              {showSolution ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
            </button>
            {showSolution && (
              <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800 animate-fade-in">
                <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                  {q.solution}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

interface ImportantQuestionsContentProps {
  cls: { slug: string; name: string };
  subject: SubjectInfo;
  chapter: ChapterInfo;
}

export function ImportantQuestionsContent({ cls, subject, chapter }: ImportantQuestionsContentProps) {
  const questions = generateQuestions(chapter.title, chapter.description);
  const canonicalUrl = `${siteConfig.url}/important-questions/${cls.slug}/${subject.slug}/${chapter.slug}`;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <Breadcrumb
          items={[
            { label: 'Important Questions', href: '/important-questions' },
            { label: cls.name, href: `/important-questions/${cls.slug}` },
            { label: subject.name, href: `/important-questions/${cls.slug}/${subject.slug}` },
            { label: `Ch ${chapter.chapterNumber}: ${chapter.title}`, href: `/important-questions/${cls.slug}/${subject.slug}/${chapter.slug}` },
          ]}
        />

        <div className="mb-8 animate-fade-in">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full border border-green-200 dark:border-green-800">
              <HelpCircle className="h-3.5 w-3.5" />
              Updated for NCERT {CURRENT_ACADEMIC_YEAR}
            </div>
            <ShareButtons url={canonicalUrl} title={`${chapter.title} - ${cls.name} ${subject.name} Important Questions`} />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {cls.name} {subject.name}
          </h1>
          <h2 className="text-xl sm:text-2xl text-purple-600 font-semibold mb-4">
            Chapter {chapter.chapterNumber}: {chapter.title} - Important Questions
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Practice these important questions for {chapter.title}. Each question includes a detailed solution to help you understand the concepts thoroughly.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium cursor-not-allowed opacity-70">
            <Download className="h-4 w-4" />
            Download as PDF
          </button>
          <button onClick={() => window.print()} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium">
            <Printer className="h-4 w-4" />
            Print
          </button>
        </div>

        <div className="space-y-4">
          {questions.map((q, index) => (
            <QuestionCard key={q.id} q={q} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
