import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Copy, Check, BookOpen, BadgeCheck } from 'lucide-react';
import { classData, getClassBySlug, getSubjectBySlug } from '@/data/classes';
import { getChaptersForSubject, getChapterBySlug, getExercisesForChapter, getExerciseBySlug, exerciseData } from '@/data/chapters';
import { questionData } from '@/data/questions';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { CURRENT_ACADEMIC_YEAR } from '@/lib/constants';
import { renderMarkdown } from '@/lib/markdown';

export async function generateStaticParams() {
  const params: Array<{ classSlug: string; subjectSlug: string; chapterSlug: string; exerciseSlug: string; questionNumber: string }> = [];
  for (const cls of classData) {
    for (const subject of cls.subjects) {
      const chapters = getChaptersForSubject(cls.slug, subject.slug);
      for (const chapter of chapters) {
        const exercises = getExercisesForChapter(cls.slug, subject.slug, chapter.slug);
        for (const exercise of exercises) {
          const key = `${cls.slug}-${subject.slug}-${chapter.slug}-${exercise.slug}`;
          const questions = questionData[key] || [];
          for (const q of questions) {
            params.push({
              classSlug: cls.slug,
              subjectSlug: subject.slug,
              chapterSlug: chapter.slug,
              exerciseSlug: exercise.slug,
              questionNumber: String(q.questionNumber),
            });
          }
        }
      }
    }
  }
  return params;
}

interface Props {
  params: Promise<{
    classSlug: string;
    subjectSlug: string;
    chapterSlug: string;
    exerciseSlug: string;
    questionNumber: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { classSlug, subjectSlug, chapterSlug, exerciseSlug, questionNumber } = await params;
  const cls = getClassBySlug(classSlug);
  const subject = getSubjectBySlug(classSlug, subjectSlug);
  const chapter = getChapterBySlug(classSlug, subjectSlug, chapterSlug);
  const exercise = getExerciseBySlug(classSlug, subjectSlug, chapterSlug, exerciseSlug);
  if (!cls || !subject || !chapter || !exercise) return {};

  const key = `${classSlug}-${subjectSlug}-${chapterSlug}-${exerciseSlug}`;
  const questions = questionData[key] || [];
  const qNum = parseInt(questionNumber, 10);
  const question = questions.find(q => q.questionNumber === qNum);
  if (!question) return {};

  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ncertsolutionshub.com'}/${cls.slug}/${subject.slug}/${chapter.slug}/${exercise.slug}/${questionNumber}`;

  return {
    title: `Question ${questionNumber} | ${exercise.title} | Chapter ${chapter.chapterNumber}: ${chapter.title} | ${cls.name} ${subject.name}`,
    description: `Get free NCERT Solutions for ${cls.name} ${subject.name} Chapter ${chapter.chapterNumber} ${exercise.title} Question ${questionNumber}. Step-by-step solution with explanation.`,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `Question ${questionNumber} - ${cls.name} ${subject.name}`,
      description: question.content.slice(0, 160),
      url: canonicalUrl,
      siteName: 'NCERT Solutions Hub',
      type: 'article',
    },
  };
}

export default async function QuestionPage({ params }: Props) {
  const { classSlug, subjectSlug, chapterSlug, exerciseSlug, questionNumber } = await params;
  const cls = getClassBySlug(classSlug);
  const subject = getSubjectBySlug(classSlug, subjectSlug);
  const chapter = getChapterBySlug(classSlug, subjectSlug, chapterSlug);
  const exercise = getExerciseBySlug(classSlug, subjectSlug, chapterSlug, exerciseSlug);
  if (!cls || !subject || !chapter || !exercise) notFound();

  const key = `${classSlug}-${subjectSlug}-${chapterSlug}-${exerciseSlug}`;
  const questions = questionData[key] || [];
  const qNum = parseInt(questionNumber, 10);
  const question = questions.find(q => q.questionNumber === qNum);
  if (!question) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-6">
              <BookOpen className="h-8 w-8 text-gray-400" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Question Not Found
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
              The question you are looking for (Question {questionNumber}) does not exist in {exercise.title} of {chapter.title}.
            </p>
            <Link
              href={`/${cls.slug}/${subject.slug}/${chapter.slug}/${exercise.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to {exercise.title}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const url = `/${cls.slug}/${subject.slug}/${chapter.slug}/${exercise.slug}/${questionNumber}`;
  const prevQuestion = questions.find(q => q.questionNumber === qNum - 1);
  const nextQuestion = questions.find(q => q.questionNumber === qNum + 1);

  const breadcrumbItems = [
    { label: cls.name, href: `/${cls.slug}` },
    { label: subject.name, href: `/${cls.slug}/${subject.slug}` },
    { label: `Ch ${chapter.chapterNumber}: ${chapter.title}`, href: `/${cls.slug}/${subject.slug}/${chapter.slug}` },
    { label: exercise.title, href: `/${cls.slug}/${subject.slug}/${chapter.slug}/${exercise.slug}` },
    { label: `Question ${questionNumber}`, href: url },
  ];

  const faqSchemaData = [
    {
      question: `What is the solution for ${cls.name} ${subject.name} ${exercise.title} Question ${questionNumber}?`,
      answer: question.solution,
    },
  ];

  const breadcrumbSchemaData = [
    { label: 'Home', href: '/' },
    ...breadcrumbItems,
  ];

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ncertsolutionshub.com';

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'FAQPage',
            '@id': `${siteUrl}${url}#faq`,
            mainEntity: faqSchemaData.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: { '@type': 'Answer', text: item.answer },
            })),
          },
          {
            '@type': 'BreadcrumbList',
            '@id': `${siteUrl}${url}#breadcrumb`,
            itemListElement: breadcrumbSchemaData.map((item, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: item.label,
              item: `${siteUrl}${item.href}`,
            })),
          },
        ],
      }} />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <Breadcrumb items={breadcrumbItems} />

        <div className="mb-8 animate-fade-in">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full border border-green-200 dark:border-green-800">
              <BadgeCheck className="h-3.5 w-3.5" />
              Updated for NCERT {CURRENT_ACADEMIC_YEAR}
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs font-medium rounded-full border border-purple-200 dark:border-purple-800">
              <BookOpen className="h-3.5 w-3.5" />
              {exercise.title}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                Question {questionNumber}
              </h1>
              <p className="text-base text-gray-600 dark:text-gray-400 mt-1">
                {subject.name} - {exercise.title} | Chapter {chapter.chapterNumber}: {chapter.title} | {cls.name}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden animate-slide-up">
          <div className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex-shrink-0">
                <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {question.title}
                </h2>
                <div
                  className="text-gray-700 dark:text-gray-300 mt-2 leading-relaxed prose prose-sm dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: await renderMarkdown(question.content) }}
                />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-green-50 dark:bg-green-900/30 rounded-lg flex-shrink-0">
                <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-green-700 dark:text-green-400 mb-3">
                  Solution
                </h3>
                <div
                  className="prose prose-sm dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: await renderMarkdown(question.solution) }}
                />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="inline-flex items-center gap-1">
                <Check className="h-3 w-3 text-green-500" />
                Answered
              </span>
            </div>
            <div className="flex gap-2">
              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                <Copy className="h-3.5 w-3.5" />
                Copy
              </button>
              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Bookmark
              </button>
              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                Share
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div>
            {prevQuestion ? (
              <Link
                href={`/${cls.slug}/${subject.slug}/${chapter.slug}/${exercise.slug}/${prevQuestion.questionNumber}`}
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous: Question {prevQuestion.questionNumber}
              </Link>
            ) : (
              <span className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 dark:text-gray-600">
                <ArrowLeft className="h-4 w-4" />
                No previous question
              </span>
            )}
          </div>
          <Link
            href={`/${cls.slug}/${subject.slug}/${chapter.slug}/${exercise.slug}`}
            className="flex items-center gap-2 px-4 py-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium"
          >
            <BookOpen className="h-4 w-4" />
            All Questions
          </Link>
          <div>
            {nextQuestion ? (
              <Link
                href={`/${cls.slug}/${subject.slug}/${chapter.slug}/${exercise.slug}/${nextQuestion.questionNumber}`}
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Next: Question {nextQuestion.questionNumber}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <span className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 dark:text-gray-600">
                No next question
                <ArrowRight className="h-4 w-4" />
              </span>
            )}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-wrap gap-4">
          <Link
            href={`/${cls.slug}/${subject.slug}/${chapter.slug}`}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Chapter {chapter.chapterNumber}
          </Link>
          <Link
            href={`/${cls.slug}/${subject.slug}`}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            All {subject.name} Chapters
          </Link>
        </div>
      </div>
    </div>
  );
}
