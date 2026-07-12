import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FileText, Clock, CheckCircle, Layers, Download, Printer, ArrowLeft } from 'lucide-react';
import { getClassBySlug, getSubjectBySlug } from '@/data/classes';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { ShareButtons } from '@/components/ui/ShareButtons';
import { CURRENT_ACADEMIC_YEAR, siteConfig } from '@/lib/constants';

interface Props {
  params: Promise<{ classSlug: string; subjectSlug: string; paperId: string }>;
}

interface Section {
  name: string;
  marks: number;
  instructions: string;
  questions: { q: string; marks: number; or?: string }[];
}

function getPaperData(classSlug: string, subjectSlug: string, paperId: string) {
  const sections: Section[] = [
    {
      name: 'Section A',
      marks: 20,
      instructions: 'Select the correct option. Each question carries 1 mark.',
      questions: [
        { q: 'Multiple choice question based on fundamental concepts', marks: 1 },
        { q: 'Multiple choice question testing application of concept', marks: 1 },
        { q: 'Assertion-Reason based question', marks: 1 },
        { q: 'Multiple choice question with diagram', marks: 1 },
        { q: 'Case-based MCQ testing analytical skills', marks: 1 },
        { q: 'Fill in the blanks type conceptual question', marks: 1 },
        { q: 'Multiple choice question on key terminology', marks: 1 },
        { q: 'MCQ based on practical applications', marks: 1 },
        { q: 'Conceptual MCQ with numerical aspect', marks: 1 },
        { q: 'MCQ based on recent developments', marks: 1 },
        { q: 'Multiple choice question - mixed concepts', marks: 1 },
        { q: 'MCQ on important definitions and facts', marks: 1 },
        { q: 'Application-based MCQ with real-life context', marks: 1 },
        { q: 'MCQ on graphical/data interpretation', marks: 1 },
        { q: 'MCQ covering cross-chapter linkage', marks: 1 },
        { q: 'Conceptual understanding MCQ', marks: 1 },
        { q: 'Problem-solving MCQ', marks: 1 },
        { q: 'Analysis-based MCQ', marks: 1 },
        { q: 'Evaluation-type MCQ', marks: 1 },
        { q: 'Comprehension-based MCQ', marks: 1 },
      ],
    },
    {
      name: 'Section B',
      marks: 20,
      instructions: 'Answer any 5 out of 6 questions. Each question carries 4 marks.',
      questions: [
        { q: 'Explain the concept with suitable examples and diagrams.', marks: 4 },
        { q: 'Differentiate between two related concepts with at least three points.', marks: 4 },
        { q: 'Describe the process/steps involved with proper labeling.', marks: 4 },
        { q: 'Solve the numerical problem step by step.', marks: 4 },
        { q: 'Analyze the given situation and provide a detailed explanation.', marks: 4 },
        { q: 'Compare and contrast the given topics with examples.', marks: 4 },
      ],
    },
    {
      name: 'Section C',
      marks: 24,
      instructions: 'Answer any 6 out of 7 questions. Each question carries 4 marks.',
      questions: [
        { q: 'Long answer question requiring detailed explanation with examples.', marks: 4 },
        { q: 'Application-based question with real-world scenario.', marks: 4 },
        { q: 'Derivation or proof of important principle.', marks: 4 },
        { q: 'Case study based question with analysis.', marks: 4, or: 'Alternative question on related concept.' },
        { q: 'Problem solving question with multiple steps.', marks: 4 },
        { q: 'Diagram-based question with explanation.', marks: 4 },
        { q: 'Conceptual question linking multiple topics.', marks: 4 },
      ],
    },
    {
      name: 'Section D',
      marks: 16,
      instructions: 'Answer any 2 out of 3 questions. Each question carries 8 marks.',
      questions: [
        { q: 'Comprehensive question covering major topics of the syllabus with sub-parts.', marks: 8 },
        { q: 'Project-based or application-oriented question with real-life data.', marks: 8, or: 'Alternative comprehensive question.' },
        { q: 'Higher Order Thinking Skills (HOTS) question requiring critical analysis.', marks: 8 },
      ],
    },
  ];

  return {
    title: paperId === 'sample-paper-1' ? 'Sample Paper 1' : paperId === 'sample-paper-2' ? 'Sample Paper 2' : 'Sample Paper 3',
    totalMarks: 80,
    timeDuration: '3 Hours',
    maxQuestions: 33,
    generalInstructions: [
      'This question paper contains 33 questions divided into 4 sections.',
      'All questions are compulsory unless specified as "optional".',
      'Section A: 20 MCQs of 1 mark each.',
      'Section B: 6 questions of 4 marks each (attempt any 5).',
      'Section C: 7 questions of 4 marks each (attempt any 6).',
      'Section D: 3 questions of 8 marks each (attempt any 2).',
      'There is no negative marking for incorrect answers.',
      'Use of calculators is not permitted unless specified.',
    ],
    sections,
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { classSlug, subjectSlug, paperId } = await params;
  const cls = getClassBySlug(classSlug);
  const subject = getSubjectBySlug(classSlug, subjectSlug);
  if (!cls || !subject) return {};
  const paper = getPaperData(classSlug, subjectSlug, paperId);
  return {
    title: `${cls.name} ${subject.name} ${paper.title} (${CURRENT_ACADEMIC_YEAR})`,
    description: `Download CBSE ${cls.name} ${subject.name} ${paper.title} based on NCERT ${CURRENT_ACADEMIC_YEAR} syllabus. Practice with official pattern question paper.`,
  };
}

export default async function SamplePaperDetailPage({ params }: Props) {
  const { classSlug, subjectSlug, paperId } = await params;
  const cls = getClassBySlug(classSlug);
  const subject = getSubjectBySlug(classSlug, subjectSlug);
  if (!cls || !subject) notFound();

  const paper = getPaperData(classSlug, subjectSlug, paperId);
  const canonicalUrl = `${siteConfig.url}/sample-papers/${cls.slug}/${subject.slug}/${paperId}`;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <Breadcrumb
          items={[
            { label: 'Sample Papers', href: '/sample-papers' },
            { label: cls.name, href: `/sample-papers/${cls.slug}` },
            { label: subject.name, href: `/sample-papers/${cls.slug}/${subject.slug}` },
            { label: paper.title, href: `/sample-papers/${cls.slug}/${subject.slug}/${paperId}` },
          ]}
        />

        <div className="mb-8 animate-fade-in">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full border border-green-200 dark:border-green-800">
              <FileText className="h-3.5 w-3.5" />
              Updated for NCERT {CURRENT_ACADEMIC_YEAR}
            </div>
            <ShareButtons url={canonicalUrl} title={`${cls.name} ${subject.name} ${paper.title}`} />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {cls.name} {subject.name}
          </h1>
          <h2 className="text-xl sm:text-2xl text-amber-600 font-semibold mb-4">
            {paper.title}
          </h2>

          <div className="flex flex-wrap gap-3 mb-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full font-medium">
              <CheckCircle className="h-4 w-4" />
              {paper.totalMarks} Marks
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium">
              <Clock className="h-4 w-4" />
              {paper.timeDuration}
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full font-medium">
              <Layers className="h-4 w-4" />
              {paper.sections.length} Sections
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-400">
            Practice this CBSE sample paper for {cls.name} {subject.name} designed as per the {CURRENT_ACADEMIC_YEAR} exam pattern.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors text-sm font-medium cursor-not-allowed opacity-70">
            <Download className="h-4 w-4" />
            Download PDF
          </button>
          <button onClick={() => window.print()} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium">
            <Printer className="h-4 w-4" />
            Print
          </button>
          <Link
            href={`/sample-papers/${cls.slug}/${subject.slug}`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Papers
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">General Instructions</h3>
            <ol className="list-decimal list-inside space-y-1">
              {paper.generalInstructions.map((inst, i) => (
                <li key={i} className="text-sm text-gray-600 dark:text-gray-400">{inst}</li>
              ))}
            </ol>
          </div>
        </div>

        {paper.sections.map((section, sIdx) => (
          <div
            key={section.name}
            className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-6 animate-slide-up"
            style={{ animationDelay: `${sIdx * 0.1}s` }}
          >
            <div className="bg-amber-50 dark:bg-amber-900/20 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{section.name}</h3>
                <span className="text-sm font-medium text-amber-600 dark:text-amber-400">({section.marks} marks)</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{section.instructions}</p>
            </div>
            <div className="p-6">
              <ol className="space-y-4" type="1">
                {section.questions.map((q, qIdx) => (
                  <li key={qIdx} className="text-sm">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-600 dark:text-gray-400">
                        {sIdx * 10 + qIdx + 1}
                      </span>
                      <div className="flex-1">
                        <p className="text-gray-800 dark:text-gray-200 font-medium">{q.q}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full">
                            {q.marks} mark{q.marks > 1 ? 's' : ''}
                          </span>
                        </div>
                        {q.or && (
                          <p className="text-gray-500 dark:text-gray-400 text-xs mt-1 italic">OR</p>
                        )}
                        {q.or && (
                          <p className="text-gray-800 dark:text-gray-200 font-medium text-sm mt-1">{q.or}</p>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Marking Scheme</h3>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-2 px-3 font-semibold text-gray-700 dark:text-gray-300">Section</th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-700 dark:text-gray-300">Marks per Question</th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-700 dark:text-gray-300">Number of Questions</th>
                    <th className="text-right py-2 px-3 font-semibold text-gray-700 dark:text-gray-300">Total Marks</th>
                  </tr>
                </thead>
                <tbody>
                  {paper.sections.map((section) => (
                    <tr key={section.name} className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-2 px-3 text-gray-800 dark:text-gray-200 font-medium">{section.name}</td>
                      <td className="py-2 px-3 text-gray-600 dark:text-gray-400">Varies</td>
                      <td className="py-2 px-3 text-gray-600 dark:text-gray-400">{section.questions.length} (+ optional)</td>
                      <td className="py-2 px-3 text-right text-gray-800 dark:text-gray-200 font-medium">{section.marks}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={3} className="py-3 px-3 text-right font-bold text-gray-900 dark:text-white">Total</td>
                    <td className="py-3 px-3 text-right font-bold text-gray-900 dark:text-white">{paper.totalMarks}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
