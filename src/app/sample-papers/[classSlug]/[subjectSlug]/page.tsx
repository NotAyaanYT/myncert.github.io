import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, FileText, Download, Eye, Clock, CheckCircle, Layers } from 'lucide-react';
import { getClassBySlug, getSubjectBySlug } from '@/data/classes';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { CURRENT_ACADEMIC_YEAR } from '@/lib/constants';

interface Props {
  params: Promise<{ classSlug: string; subjectSlug: string }>;
}

interface SamplePaper {
  id: string;
  title: string;
  totalMarks: number;
  timeDuration: string;
  numSections: number;
  description: string;
}

function getSamplePapers(classSlug: string, subjectSlug: string): SamplePaper[] {
  return [
    {
      id: 'sample-paper-1',
      title: 'Sample Paper 1',
      totalMarks: 80,
      timeDuration: '3 Hours',
      numSections: 4,
      description: `Full syllabus sample paper based on NCERT ${CURRENT_ACADEMIC_YEAR} pattern.`,
    },
    {
      id: 'sample-paper-2',
      title: 'Sample Paper 2',
      totalMarks: 80,
      timeDuration: '3 Hours',
      numSections: 4,
      description: `Additional practice paper with mixed difficulty level for ${CURRENT_ACADEMIC_YEAR}.`,
    },
    {
      id: 'sample-paper-3',
      title: 'Sample Paper 3',
      totalMarks: 80,
      timeDuration: '3 Hours',
      numSections: 4,
      description: `Advanced level practice paper for thorough revision.`,
    },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { classSlug, subjectSlug } = await params;
  const cls = getClassBySlug(classSlug);
  const subject = getSubjectBySlug(classSlug, subjectSlug);
  if (!cls || !subject) return {};
  return {
    title: `${cls.name} ${subject.name} Sample Papers (${CURRENT_ACADEMIC_YEAR})`,
    description: `Download free CBSE sample papers for ${cls.name} ${subject.name} based on NCERT ${CURRENT_ACADEMIC_YEAR} syllabus. Practice with solved papers.`,
  };
}

export default async function SamplePapersSubjectPage({ params }: Props) {
  const { classSlug, subjectSlug } = await params;
  const cls = getClassBySlug(classSlug);
  const subject = getSubjectBySlug(classSlug, subjectSlug);
  if (!cls || !subject) notFound();

  const papers = getSamplePapers(classSlug, subjectSlug);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <Breadcrumb
          items={[
            { label: 'Sample Papers', href: '/sample-papers' },
            { label: cls.name, href: `/sample-papers/${cls.slug}` },
            { label: subject.name, href: `/sample-papers/${cls.slug}/${subject.slug}` },
          ]}
        />
        <div className="mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full border border-green-200 dark:border-green-800 mb-4">
            <FileText className="h-3.5 w-3.5" />
            Updated for NCERT {CURRENT_ACADEMIC_YEAR}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {cls.name} {subject.name} <span className="text-blue-600">Sample Papers</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            Practice with CBSE sample papers for {cls.name} {subject.name} based on the latest {CURRENT_ACADEMIC_YEAR} exam pattern.
          </p>
        </div>

        {papers.length === 0 ? (
          <div className="text-center py-20">
            <FileText className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-500 dark:text-gray-400">Coming Soon</h2>
            <p className="text-gray-400 dark:text-gray-500 mt-2">Sample papers are being added.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {papers.map((paper, index) => (
              <div
                key={paper.id}
                className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-amber-300 dark:hover:border-amber-600 transition-all hover:shadow-md animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {paper.title}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{paper.description}</p>
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full">
                        <CheckCircle className="h-3 w-3" />
                        {paper.totalMarks} Marks
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                        <Clock className="h-3 w-3" />
                        {paper.timeDuration}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">
                        <Layers className="h-3 w-3" />
                        {paper.numSections} Sections
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={`/sample-papers/${cls.slug}/${subject.slug}/${paper.id}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors text-sm font-medium"
                    >
                      <Eye className="h-4 w-4" />
                      View
                    </Link>
                    <button className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm font-medium cursor-not-allowed opacity-70">
                      <Download className="h-4 w-4" />
                      PDF
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
