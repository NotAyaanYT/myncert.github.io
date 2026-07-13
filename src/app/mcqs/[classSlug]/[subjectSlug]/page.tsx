import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowRight, BookOpen, HelpCircle } from 'lucide-react';
import { getClassBySlug, getSubjectBySlug, getSubjectVersion, getChaptersKey, SyllabusVersion } from '@/data/classes';
import { getChaptersForSubject } from '@/data/chapters';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { CURRENT_ACADEMIC_YEAR } from '@/lib/constants';
import McqSubjectClient from '@/components/mcqs/McqSubjectClient';

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

  // Pass only serializable data to the Client Component
  const subjectData = {
    id: subject.id,
    name: subject.name,
    slug: subject.slug,
    versions: subject.versions,
    defaultVersion: subject.defaultVersion,
  };

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
        <McqSubjectClient
          cls={cls}
          subject={subjectData}
          versionData={versionData}
          chapters={chapters}
          selectedVersion={(version as SyllabusVersion) || '2026-27'}
          CURRENT_ACADEMIC_YEAR={CURRENT_ACADEMIC_YEAR}
        />
      </div>
    </div>
  );
}

