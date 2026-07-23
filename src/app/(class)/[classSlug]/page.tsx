import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, BookOpen, BadgeCheck, GraduationCap, Sparkles, BookText } from 'lucide-react';
import { classData, getClassBySlug } from '@/data/classes';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { JsonLd, courseSchema } from '@/components/seo/JsonLd';
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
    title: `NCERT Solutions for ${cls.name} - All Subjects (${CURRENT_ACADEMIC_YEAR})`,
    description: `Get free NCERT Solutions for ${cls.name} based on the official NCERT ${CURRENT_ACADEMIC_YEAR} syllabus. Comprehensive solutions for all subjects.`,
    openGraph: { title: `${cls.name} NCERT Solutions ${CURRENT_ACADEMIC_YEAR}`, description: `Free NCERT Solutions for ${cls.name} - All Subjects (${CURRENT_ACADEMIC_YEAR} syllabus)` },
  };
}

export default async function ClassPage({ params }: Props) {
  const { classSlug } = await params;
  const cls = getClassBySlug(classSlug);
  if (!cls) notFound();

  return (
    <>
      <JsonLd data={courseSchema({ name: cls.name, description: cls.description, url: `/${cls.slug}` })} />
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Gradient header section */}
        <div className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-900 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-[0.06]" />
          <div className="absolute top-0 -right-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 left-1/3 w-80 h-80 bg-purple-400/15 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
            <Breadcrumb
              items={[{ label: cls.name, href: `/${cls.slug}` }]}
              className="mb-6 [&_a]:text-blue-200 [&_a:hover]:text-white [&_span]:text-white/80 [&_svg]:text-blue-300"
            />
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/15 backdrop-blur-sm text-white/90 text-xs font-medium rounded-full border border-white/10 mb-4">
                <BadgeCheck className="h-3.5 w-3.5" />
                Updated for NCERT {CURRENT_ACADEMIC_YEAR}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                NCERT Solutions for{' '}
                <span className="bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 bg-clip-text text-transparent">
                  {cls.name}
                </span>
              </h1>
              <p className="text-lg text-blue-100/80 max-w-3xl leading-relaxed">
                Access comprehensive, step-by-step NCERT solutions for {cls.name} across all subjects based on the latest NCERT {CURRENT_ACADEMIC_YEAR} syllabus and textbooks.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-gray-900 to-transparent" />
        </div>

        {/* Subjects section */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-2 mb-8">
            <GraduationCap className="h-5 w-5 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Subjects in {cls.name}
            </h2>
            <div className="ml-auto text-sm text-gray-500 dark:text-gray-400">
              {cls.subjects.length} subjects
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cls.subjects.map((subject, index) => (
              <Link
                key={subject.id}
                href={`/${cls.slug}/${subject.slug}`}
                className="group relative p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-md shadow-blue-500/20 transition-transform duration-300 group-hover:scale-110">
                      <BookOpen className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                        {subject.name}
                      </h2>
                      {/* Version info */}
                      {subject.versions && subject.versions.length > 0 && (
                        <div className="flex items-center gap-1 mt-0.5">
                          <BookText className="h-3 w-3 text-gray-400" />
                          <span className="text-xs text-gray-400 dark:text-gray-500 truncate">
                            {subject.versions[0].bookName}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                    {subject.description}
                  </p>
                  <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
                    <span>View Chapters</span>
                    <ArrowRight className="h-4 w-4 ml-1.5 transition-all duration-300 group-hover:translate-x-1.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
