import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, BookOpen, HelpCircle, Book } from 'lucide-react';
import { getClassBySlug, getSubjectBySlug, getSubjectVersion, getChaptersKey, SyllabusVersion } from '@/data/classes';
import { getChaptersForSubject } from '@/data/chapters';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { CURRENT_ACADEMIC_YEAR } from '@/lib/constants';

interface Props {
  params: Promise<{ classSlug: string; subjectSlug: string }>;
  searchParams: Promise<{ version?: string }>;
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { classSlug, subjectSlug } = await params;
  const { version } = await searchParams;
  const cls = getClassBySlug(classSlug);
  const subject = getSubjectBySlug(classSlug, subjectSlug);
  if (!cls || !subject) return {};
  
  const selectedVersion: SyllabusVersion = (version as SyllabusVersion) || '2026-27';
  const versionData = getSubjectVersion(classSlug, subjectSlug, selectedVersion);
  
  return {
    title: `${cls.name} ${subject.name} MCQs (${versionData?.year || CURRENT_ACADEMIC_YEAR}) - Chapter-wise`,
    description: `Get free chapter-wise MCQs for ${cls.name} ${subject.name} (${versionData?.bookName || 'NCERT'}) based on ${versionData?.year || CURRENT_ACADEMIC_YEAR} syllabus. Practice multiple choice questions with instant answers.`,
  };
}

export default async function McqSubjectPage({ params, searchParams }: Props) {
  const { classSlug, subjectSlug } = await params;
  const { version } = await searchParams;
  const cls = getClassBySlug(classSlug);
  const subject = getSubjectBySlug(classSlug, subjectSlug);
  if (!cls || !subject) notFound();

  const selectedVersion: SyllabusVersion = (version as SyllabusVersion) || '2026-27';
  const versionData = getSubjectVersion(classSlug, subjectSlug, selectedVersion);
  const chaptersKey = getChaptersKey(classSlug, subjectSlug, selectedVersion);
  const chapters = chaptersKey ? getChaptersForSubject(classSlug, subjectSlug, selectedVersion) : [];

  // Get available versions for this subject
  const availableVersions = subject.versions.map(v => ({
    version: v.version,
    year: v.year,
    bookName: v.bookName,
  }));

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <Breadcrumb
          items={[
            { label: 'MCQs', href: '/mcqs' },
            { label: cls.name, href: `/mcqs/${cls.slug}` },
            { label: subject.name, href: `/mcqs/${cls.slug}/${subject.slug}` },
          ]}
        />
        <div className="mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full border border-green-200 dark:border-green-800 mb-4">
            <HelpCircle className="h-3.5 w-3.5" />
            {versionData ? `${versionData.year} - ${versionData.bookName}` : `Updated for NCERT ${CURRENT_ACADEMIC_YEAR}`}
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {cls.name} {subject.name} <span className="text-blue-600">MCQs</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                Chapter-wise MCQs for {cls.name} {subject.name} ({versionData?.bookName || 'NCERT'} - {versionData?.year || CURRENT_ACADEMIC_YEAR}). Practice and test your understanding of each chapter.
              </p>
            </div>
            {/* Version Selector */}
            {availableVersions.length > 1 && (
              <div className="flex items-center gap-2">
                <label htmlFor="version-select" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Syllabus Version:
                </label>
                <select
                  id="version-select"
                  defaultValue={selectedVersion}
                  onChange={(e) => {
                    const newVersion = e.target.value;
                    const params = new URLSearchParams();
                    params.set('version', newVersion);
                    window.location.search = params.toString();
                  }}
                  className="px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  {availableVersions.map(v => (
                    <option key={v.version} value={v.version}>
                      {v.year} - {v.bookName}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>

        {chapters.length === 0 ? (
          <div className="text-center py-20">
            <BookOpen className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-500 dark:text-gray-400">Coming Soon</h2>
            <p className="text-gray-400 dark:text-gray-500 mt-2">MCQs are being added for {versionData?.bookName || 'this version'}.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {chapters.map((chapter, index) => (
              <Link
                key={chapter.id}
                href={`/mcqs/${cls.slug}/${subject.slug}/${chapter.slug}?version=${selectedVersion}`}
                className="group p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-teal-300 dark:hover:border-teal-600 transition-all hover:shadow-md animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-teal-50 dark:bg-teal-900/30 rounded-lg flex-shrink-0">
                    <BookOpen className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h2 className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-teal-600 transition-colors">
                      Chapter {chapter.chapterNumber}: {chapter.title}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{chapter.description}</p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-teal-600 dark:text-teal-400 font-medium mt-3 ml-10">
                  <span>Practice MCQs</span>
                  <ArrowRight className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
