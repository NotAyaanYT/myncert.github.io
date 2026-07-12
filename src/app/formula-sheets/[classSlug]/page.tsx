import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, BookOpen, Calculator } from 'lucide-react';
import { classData, getClassBySlug } from '@/data/classes';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { CURRENT_ACADEMIC_YEAR } from '@/lib/constants';

interface Props {
  params: Promise<{ classSlug: string }>;
}

export async function generateStaticParams() {
  return classData.map((c) => ({ classSlug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { classSlug } = await params;
  const cls = getClassBySlug(classSlug);
  if (!cls) return {};
  return {
    title: `NCERT Formula Sheets for ${cls.name} (${CURRENT_ACADEMIC_YEAR}) - Maths, Physics, Chemistry`,
    description: `Get free chapter-wise formula sheets for ${cls.name} Maths, Physics, Chemistry based on NCERT ${CURRENT_ACADEMIC_YEAR} syllabus. Quick formula reference.`,
  };
}

const formulaSubjects = ['mathematics', 'physics', 'chemistry'];

export default async function FormulaSheetsClassPage({ params }: Props) {
  const { classSlug } = await params;
  const cls = getClassBySlug(classSlug);
  if (!cls) notFound();

  const subjects = cls.subjects.filter(s => formulaSubjects.includes(s.slug));

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <Breadcrumb
          items={[
            { label: 'Formula Sheets', href: '/formula-sheets' },
            { label: cls.name, href: `/formula-sheets/${cls.slug}` },
          ]}
        />
        <div className="mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full border border-green-200 dark:border-green-800 mb-4">
            <Calculator className="h-3.5 w-3.5" />
            Updated for NCERT {CURRENT_ACADEMIC_YEAR}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {cls.name} <span className="text-blue-600">Formula Sheets</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            Chapter-wise formula sheets for {cls.name} Mathematics, Physics, and Chemistry based on the latest NCERT {CURRENT_ACADEMIC_YEAR} syllabus.
          </p>
        </div>

        {subjects.length === 0 ? (
          <div className="text-center py-20">
            <Calculator className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-500 dark:text-gray-400">No Formula Sheets Available</h2>
            <p className="text-gray-400 dark:text-gray-500 mt-2">Formula sheets are available for Mathematics, Physics, and Chemistry.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <Link
                key={subject.id}
                href={`/formula-sheets/${cls.slug}/${subject.slug}`}
                className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all hover:shadow-lg animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-3 bg-orange-50 dark:bg-orange-900/30 rounded-xl w-fit mb-4">
                  <BookOpen className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 transition-colors">
                  {subject.name}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{subject.description}</p>
                <div className="flex items-center text-sm text-orange-600 dark:text-orange-400 font-medium">
                  <span>View Formula Sheets</span>
                  <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
