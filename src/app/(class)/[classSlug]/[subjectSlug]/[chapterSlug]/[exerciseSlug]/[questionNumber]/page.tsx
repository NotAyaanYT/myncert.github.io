import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Copy, Check, BookOpen, BadgeCheck, Sparkles, Share2, Bookmark } from 'lucide-react';
import { classData, getClassBySlug, getSubjectBySlug } from '@/data/classes';
import { getChaptersForSubject, getChapterBySlug, getExercisesForChapter, getExerciseBySlug, exerciseData } from '@/data/chapters';
import { questionData } from '@/data/questions';
import { PageHeader } from '@/components/ui/PageHeader';
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
      <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center py-20 page-enter">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 mb-6 shadow-lg">
              <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Question Not Found
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
              The question you are looking for (Question {questionNumber}) does not exist in {exercise.title} of {chapter.title}.
            </p>
            <Link
              href={`/${cls.slug}/${subject.slug}/${chapter.slug}/${exercise.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all font-medium shadow-lg shadow-blue-200/50 dark:shadow-blue-900/30 hover:shadow-xl hover:-translate-y-0.5"
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
    <div className="min-h-screen bg-background">
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

      <PageHeader
        breadcrumbs={breadcrumbItems}
        title={`Question ${questionNumber}`}
        subtitle={`${subject.name} - ${exercise.title} | Chapter ${chapter.chapterNumber}: ${chapter.title}`}
        badge={`${cls.name}`}
        badgeIcon={<BookOpen className="h-3.5 w-3.5" />}
        gradient="blue"
      >
        <div className="flex flex-wrap items-center gap-3 mt-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50/90 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full border border-green-200/50 dark:border-green-800/50 backdrop-blur-sm">
            <BadgeCheck className="h-3.5 w-3.5" />
            NCERT {CURRENT_ACADEMIC_YEAR}
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-50/90 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs font-medium rounded-full border border-purple-200/50 dark:border-purple-800/50 backdrop-blur-sm">
            <BookOpen className="h-3.5 w-3.5" />
            {exercise.title}
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50/90 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-medium rounded-full border border-amber-200/50 dark:border-amber-800/50 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Free Solution
          </div>
        </div>
      </PageHeader>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 page-enter">
        {/* Question Card */}
        <div className="bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700/50 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
          {/* Question Section */}
          <div className="p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl flex-shrink-0 shadow-sm">
                <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {question.title}
                </h2>
                <div
                  className="text-gray-700 dark:text-gray-300 mt-3 leading-relaxed prose prose-sm dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: await renderMarkdown(question.content) }}
                />
              </div>
            </div>
          </div>

          {/* Solution Section */}
          <div className="border-t border-gray-100 dark:border-gray-700/50 bg-gradient-to-b from-green-50/30 to-white dark:from-green-900/10 dark:to-gray-800/30">
            <div className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl flex-shrink-0 shadow-sm">
                  <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-base font-semibold text-green-700 dark:text-green-400">
                      Solution
                    </h3>
                    <span className="h-px flex-1 bg-gradient-to-r from-green-200/50 to-transparent dark:from-green-800/30" />
                  </div>
                  <div
                    className="prose prose-sm dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: await renderMarkdown(question.solution) }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Bar */}
          <div className="border-t border-gray-100 dark:border-gray-700/50 px-6 sm:px-8 py-3 flex items-center justify-between bg-white dark:bg-gray-800/30">
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Verified Answer
              </span>
            </div>
            <div className="flex gap-2">
              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-700/70 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all hover:shadow-sm">
                <Copy className="h-3.5 w-3.5" />
                Copy
              </button>
              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-sm hover:shadow-md">
                <Bookmark className="h-3.5 w-3.5" />
                Save
              </button>
              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-700/70 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all hover:shadow-sm">
                <Share2 className="h-3.5 w-3.5" />
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700/50">
          <div>
            {prevQuestion ? (
              <Link
                href={`/${cls.slug}/${subject.slug}/${chapter.slug}/${exercise.slug}/${prevQuestion.questionNumber}`}
                className="group flex items-center gap-2 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all rounded-xl hover:bg-white/50 dark:hover:bg-gray-800/30"
              >
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
                <span className="hidden sm:inline">Previous:</span> Q{prevQuestion.questionNumber}
              </Link>
            ) : (
              <span className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 dark:text-gray-600">
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">No previous</span>
              </span>
            )}
          </div>
          <Link
            href={`/${cls.slug}/${subject.slug}/${chapter.slug}/${exercise.slug}`}
            className="group flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all"
          >
            <BookOpen className="h-4 w-4" />
            <span className="hidden sm:inline">All Questions</span>
            <span className="sm:hidden">All</span>
          </Link>
          <div>
            {nextQuestion ? (
              <Link
                href={`/${cls.slug}/${subject.slug}/${chapter.slug}/${exercise.slug}/${nextQuestion.questionNumber}`}
                className="group flex items-center gap-2 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all rounded-xl hover:bg-white/50 dark:hover:bg-gray-800/30"
              >
                <span className="hidden sm:inline">Next:</span> Q{nextQuestion.questionNumber}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ) : (
              <span className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 dark:text-gray-600">
                <span className="hidden sm:inline">No next</span>
                <ArrowRight className="h-4 w-4" />
              </span>
            )}
          </div>
        </div>

        {/* Back Links */}
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700/50 flex flex-wrap gap-3">
          <Link
            href={`/${cls.slug}/${subject.slug}/${chapter.slug}`}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all rounded-xl hover:bg-white/50 dark:hover:bg-gray-800/30 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
            <span className="hidden sm:inline">Back to</span> Chapter {chapter.chapterNumber}
          </Link>
          <Link
            href={`/${cls.slug}/${subject.slug}`}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all rounded-xl hover:bg-white/50 dark:hover:bg-gray-800/30 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
            All {subject.name} Chapters
          </Link>
        </div>
      </div>
    </div>
  );
}
