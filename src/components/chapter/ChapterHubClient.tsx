'use client';

import { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import {
  BookOpen, FileText, HelpCircle, ClipboardCheck, Calculator, Star,
  ArrowRight, BadgeCheck, Check, X, RotateCcw, Printer, Download,
  Lightbulb, ChevronDown, Hash, Sparkles, Library, GraduationCap
} from 'lucide-react';
import { ContentRenderer } from '@/components/ui/ContentRenderer';
import { ShareButtons } from '@/components/ui/ShareButtons';
import { CURRENT_ACADEMIC_YEAR } from '@/lib/constants';
// ─── Tab Definitions ───────────────────────────────────────────
interface TabDefinition {
  id: string;
  label: string;
  icon: React.ElementType;
  color: string;
  gradient: string;
}

const TABS: TabDefinition[] = [
  { id: 'solutions', label: 'Solutions', icon: BookOpen, color: 'text-blue-600', gradient: 'from-blue-500 to-indigo-500' },
  { id: 'notes', label: 'Notes', icon: FileText, color: 'text-indigo-600', gradient: 'from-indigo-500 to-purple-500' },
  { id: 'mcqs', label: 'MCQs', icon: HelpCircle, color: 'text-violet-600', gradient: 'from-violet-500 to-purple-500' },
  { id: 'worksheets', label: 'Worksheets', icon: ClipboardCheck, color: 'text-orange-600', gradient: 'from-orange-500 to-rose-500' },
  { id: 'formulas', label: 'Formulas', icon: Calculator, color: 'text-rose-600', gradient: 'from-rose-500 to-pink-500' },
  { id: 'important-questions', label: 'Important Qs', icon: Star, color: 'text-amber-600', gradient: 'from-amber-500 to-orange-500' },
];

// ─── Helper Functions ───────────────────────────────────────────
function generateSummary(description: string): string {
  return `This chapter covers ${description.toLowerCase()}. The revision notes provide a comprehensive overview of all key concepts, definitions, and important points to help students quickly revise before examinations.`;
}

function generateKeyPoints(description: string): string[] {
  const words = description.split(', ');
  return words.length > 1
    ? words.map(w => `Understanding of ${w.trim()}`)
    : [
        `Core concepts of ${description}`,
        'Application-based understanding',
        'Important definitions and terminology',
        'Step-by-step problem-solving approach',
      ];
}

function generateFormulas(description: string): string[] {
  const keywords = ['math', 'physics', 'chemistry', 'perimeter', 'area', 'equation', 'formula', 'angle', 'number', 'ratio', 'percentage', 'probability', 'statistics', 'trigonometry', 'geometry', 'algebra'];
  const isFormulaBased = keywords.some(k => description.toLowerCase().includes(k));
  if (!isFormulaBased) return [];
  return [
    `Key formula 1: Standard formula related to ${description.split(',')[0]}`,
    `Key formula 2: Derived formula for problem-solving`,
    `Key formula 3: Relationship between variables`,
  ];
}

function generateImportantConcepts(description: string): string[] {
  const parts = description.split(', ');
  return parts.map((p, i) => `${i + 1}. ${p.charAt(0).toUpperCase() + p.slice(1)} - a fundamental concept in this chapter.`);
}

function generateDiagrams(description: string): string[] {
  const diagramTopics = ['geometry', 'graph', 'chart', 'diagram', 'figure', 'shape', 'circuit', 'ray', 'mirror', 'lens', 'structure', 'cell', 'tissue', 'organ', 'flower', 'plant', 'animal', 'map', 'globe', 'landform', 'climate'];
  const hasDiagrams = diagramTopics.some(k => description.toLowerCase().includes(k));
  if (!hasDiagrams) return [];
  return [
    `Figure 1: Illustration of ${description.split(',')[0]}`,
    `Figure 2: Diagram showing key relationships`,
    `Figure 3: Visual representation of important concepts`,
  ];
}

function generateFormulaTopics(title: string, description: string) {
  const parts = description.split(', ');
  const topics: { topic: string; formulas: { name: string; formula: string; description: string }[] }[] = [];
  const subjectKeywords = description.toLowerCase();

  const isMath = ['math', 'algebra', 'geometry', 'trigonometry', 'number', 'equation', 'ratio', 'percentage', 'probability', 'statistics', 'calculus'].some(k => subjectKeywords.includes(k));
  const isPhysics = ['physics', 'force', 'energy', 'motion', 'light', 'sound', 'electric', 'magnetic', 'heat', 'wave', 'gravitation'].some(k => subjectKeywords.includes(k));
  const isChemistry = ['chemistry', 'mole', 'chemical', 'reaction', 'atomic', 'molecule', 'concentration', 'gas', 'acid', 'base', 'salt', 'equilibrium'].some(k => subjectKeywords.includes(k));

  if (isMath) {
    topics.push({
      topic: 'Core Formulas',
      formulas: [
        { name: 'Area of Rectangle', formula: 'A = l × b', description: 'Area = length × breadth' },
        { name: 'Perimeter of Rectangle', formula: 'P = 2(l + b)', description: 'Perimeter = 2(length + breadth)' },
        { name: 'Area of Circle', formula: 'A = πr²', description: 'Area = π × radius²' },
        { name: 'Circumference of Circle', formula: 'C = 2πr', description: 'Circumference = 2 × π × radius' },
      ],
    });
    if (parts.length > 0) {
      topics.push({
        topic: parts[0],
        formulas: [
          { name: 'Primary Formula', formula: `f(${parts[0].toLowerCase()}) = kx + c`, description: `Core formula related to ${parts[0]}` },
          { name: 'Derived Relation', formula: `g(x) = ax² + bx + c`, description: `Secondary formula for ${parts[0]}` },
        ],
      });
    }
  }
  if (isPhysics) {
    topics.push({
      topic: 'Physics Formulas',
      formulas: [
        { name: 'Force', formula: 'F = ma', description: 'Force = mass × acceleration' },
        { name: 'Work', formula: 'W = F × d', description: 'Work = Force × displacement' },
        { name: 'Kinetic Energy', formula: 'KE = ½mv²', description: 'Kinetic Energy = half × mass × velocity²' },
        { name: 'Potential Energy', formula: 'PE = mgh', description: 'Potential Energy = mass × gravity × height' },
      ],
    });
  }
  if (isChemistry) {
    topics.push({
      topic: 'Chemistry Formulas',
      formulas: [
        { name: 'Mole Concept', formula: 'n = m/M', description: 'Number of moles = mass / molar mass' },
        { name: 'Concentration', formula: 'C = n/V', description: 'Concentration = moles / volume (in L)' },
        { name: 'Ideal Gas Equation', formula: 'PV = nRT', description: 'Pressure × Volume = moles × gas constant × temperature' },
      ],
    });
  }
  return topics;
}

// ─── Interface ──────────────────────────────────────────────────
interface ChapterData {
  id: string;
  title: string;
  slug: string;
  chapterNumber: number;
  description: string;
}

interface ExerciseData {
  id: string;
  title: string;
  slug: string;
  exerciseNumber: number;
}

interface ClassData {
  id: string;
  name: string;
  slug: string;
  grade: number;
  description: string;
  image: string;
}

interface SubjectData {
  id: string;
  name: string;
  slug: string;
  description: string;
}

interface ChapterHubClientProps {
  cls: ClassData;
  subject: SubjectData;
  chapter: ChapterData;
  exercises: ExerciseData[];
  canonicalUrl: string;
}

// ─── Tab Content Components ─────────────────────────────────────

function SolutionsTab({ cls, subject, chapter, exercises }: { cls: ClassData; subject: SubjectData; chapter: ChapterData; exercises: ExerciseData[] }) {
  return (
    <div className="animate-fade-in">
      {exercises.length === 0 ? (
        <div className="text-center py-16">
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <BookOpen className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-500 dark:text-gray-400">Exercises Coming Soon</h3>
          <p className="text-gray-400 dark:text-gray-500 mt-2">Exercise solutions are being added for this chapter.</p>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Exercises</h3>
            <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">{exercises.length} exercises</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {exercises.map((exercise, index) => (
              <Link
                key={exercise.id}
                href={`/${cls.slug}/${subject.slug}/${chapter.slug}/${exercise.slug}`}
                className="group relative p-5 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700/50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-md flex-shrink-0 group-hover:scale-110 transition-transform">
                    <BookOpen className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {exercise.title}
                    </h4>
                  </div>
                </div>
                <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 mt-3 ml-10">
                  <span>View Questions</span>
                  <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function NotesTab({ chapter }: { chapter: ChapterData }) {
  const summary = generateSummary(chapter.description);
  const keyPoints = generateKeyPoints(chapter.description);
  const formulas = generateFormulas(chapter.description);
  const diagrams = generateDiagrams(chapter.description);
  const importantConcepts = generateImportantConcepts(chapter.description);

  const sections = [
    { title: 'Chapter Summary', items: [summary] },
    { title: 'Key Points', items: keyPoints },
    { title: 'Important Concepts', items: importantConcepts },
    ...(formulas.length > 0 ? [{ title: 'Important Formulas', items: formulas }] : []),
    ...(diagrams.length > 0 ? [{ title: 'Diagrams & Illustrations', items: diagrams }] : []),
    { title: 'Quick Revision Tips', items: [
      'Focus on understanding core concepts rather than rote memorization',
      'Practice numerical problems to strengthen application skills',
      'Create mind maps for better retention of interconnected topics',
      'Review chapter summary regularly before examinations',
    ]},
  ];

  return (
    <div className="animate-fade-in">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-medium rounded-full border border-blue-200/50 dark:border-blue-800/50">
          <FileText className="h-3.5 w-3.5" />
          NCERT {CURRENT_ACADEMIC_YEAR}
        </div>
        <div className="flex gap-2">
          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            <Download className="h-3.5 w-3.5" />
            PDF
          </button>
          <button onClick={() => window.print()} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            <Printer className="h-3.5 w-3.5" />
            Print
          </button>
        </div>
      </div>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <ContentRenderer sections={sections} />
      </div>
    </div>
  );
}

function MCQTab({ cls, subject, chapter }: { cls: ClassData; subject: SubjectData; chapter: ChapterData }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const mcqs = useMemo(() => {
    const topics = chapter.description.split(', ');
    const questions: { id: number; question: string; options: { label: string; text: string }[]; correctAnswer: string; explanation: string }[] = [];
    for (let i = 0; i < 10; i++) {
      const topic = topics[i % topics.length] || 'key concepts';
      const correctIdx = Math.floor(Math.random() * 4);
      const distractors = ['is the fundamental principle', 'is a derived concept', 'is unrelated', 'is the opposite'].filter((_, j) => j !== correctIdx);
      questions.push({
        id: i + 1,
        question: `Which of the following best describes "${topic}"?`,
        options: [
          { label: 'A', text: `${topic} ${['is the fundamental principle', 'is a derived concept', 'is unrelated', 'is the opposite'][correctIdx]}` },
          ...distractors.map((d, j) => ({ label: String.fromCharCode(66 + j), text: `${topic} ${d}` })),
        ],
        correctAnswer: String.fromCharCode(65 + 0),
        explanation: `${topic} ${['is the fundamental principle', 'is a derived concept', 'is unrelated', 'is the opposite'][correctIdx]}. This is the correct answer because it accurately describes the concept.`,
      });
    }
    return questions;
  }, [chapter.description]);

  const handleAnswer = (questionId: number, answer: string) => {
    if (showResults) return;
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleReset = () => {
    setAnswers({});
    setShowResults(false);
    setCurrentQ(0);
  };

  const score = showResults ? mcqs.filter(q => answers[q.id] === q.correctAnswer).length : 0;

  if (showResults) {
    return (
      <div className="animate-fade-in">
        <div className="text-center mb-8">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${score >= 7 ? 'bg-blue-50 dark:bg-blue-900/30' : score >= 5 ? 'bg-amber-50 dark:bg-amber-900/30' : 'bg-red-50 dark:bg-red-900/30'}`}>
            {score >= 7 ? <Check className="h-8 w-8 text-blue-500" /> : <X className="h-8 w-8 text-red-500" />}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Your Score: {score}/{mcqs.length}</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            {score >= 7 ? 'Great job! You have a strong understanding.' : score >= 5 ? 'Good effort! Keep practicing.' : 'Keep studying and try again!'}
          </p>
          <button onClick={handleReset} className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all text-sm font-medium shadow-lg">
            <RotateCcw className="h-4 w-4" />
            Try Again
          </button>
        </div>
        <div className="space-y-4">
          {mcqs.map((q) => {
            const userAns = answers[q.id];
            const isCorrect = userAns === q.correctAnswer;
            return (
              <div key={q.id} className={`p-4 rounded-xl border ${isCorrect ? 'border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-900/10' : 'border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-900/10'}`}>
                <p className="font-medium text-gray-900 dark:text-white mb-2">Q{q.id}. {q.question}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Your answer: <span className={isCorrect ? 'text-blue-600 font-medium' : 'text-red-600 font-medium'}>{userAns || 'Not answered'}</span>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Correct answer: <span className="text-blue-600 font-medium">{q.correctAnswer}</span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">{q.explanation}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <div className="flex items-center gap-2 mb-6">
        <HelpCircle className="h-5 w-5 text-violet-600 dark:text-violet-400" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Practice MCQs</h3>
        <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">{mcqs.length} questions</span>
      </div>
      <div className="space-y-4 mb-6">
        {mcqs.slice(currentQ, currentQ + 5).map((q) => (
          <div key={q.id} className="p-4 bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700/50">
            <p className="font-medium text-gray-900 dark:text-white mb-3 text-sm">Q{q.id}. {q.question}</p>
            <div className="space-y-2">
              {q.options.map((opt) => {
                const isSelected = answers[q.id] === opt.label;
                return (
                  <button
                    key={opt.label}
                    onClick={() => handleAnswer(q.id, opt.label)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all border ${
                      isSelected
                        ? 'border-violet-300 dark:border-violet-700 bg-violet-50 dark:bg-violet-900/20 text-violet-800 dark:text-violet-200'
                        : 'border-gray-100 dark:border-gray-700 hover:border-violet-200 dark:hover:border-violet-800 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <span className="font-medium mr-2">{opt.label}.</span> {opt.text}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-400">{Object.keys(answers).length}/{mcqs.length} answered</span>
        <div className="flex gap-2">
          {currentQ > 0 && (
            <button onClick={() => setCurrentQ(prev => Math.max(0, prev - 5))} className="px-4 py-2 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              Previous
            </button>
          )}
          {currentQ + 5 < mcqs.length ? (
            <button onClick={() => setCurrentQ(prev => prev + 5)} className="px-4 py-2 text-sm bg-violet-600 text-white rounded-xl hover:bg-violet-700 transition-colors">
              Next
            </button>
          ) : (
            <button onClick={handleSubmit} className="px-4 py-2 text-sm bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all shadow-lg font-medium">
              Submit Answers
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function WorksheetTab({ chapter }: { chapter: ChapterData }) {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const worksheetQs = useMemo(() => {
    const topics = chapter.description.split(', ');
    const questions: { id: number; type: string; question: string; correctAnswer: string }[] = [];
    const types = ['mcq', 'fill-blank', 'short-answer', 'long-answer'];
    for (let i = 0; i < 10; i++) {
      const topic = topics[i % topics.length] || 'key concepts';
      const type = types[i % types.length];
      let question: string, correctAnswer: string;
      switch (type) {
        case 'mcq':
          question = `Which of the following best describes "${topic}"?\nA. ${topic} is the fundamental principle\nB. ${topic} is a derived concept\nC. ${topic} is unrelated\nD. ${topic} is the opposite`;
          correctAnswer = `A. ${topic} is the fundamental principle`;
          break;
        case 'fill-blank':
          question = `The concept of ${topic} is related to __________. (Fill in the blank)`;
          correctAnswer = topic;
          break;
        case 'short-answer':
          question = `Define ${topic} in one or two sentences.`;
          correctAnswer = `${topic} refers to the key concept explained in the chapter.`;
          break;
        default:
          question = `Explain ${topic} with examples. Why is it important in this chapter?`;
          correctAnswer = `${topic} is an important concept in this chapter. It covers fundamental ideas that help build a strong foundation.`;
      }
      questions.push({ id: i + 1, type, question, correctAnswer });
    }
    return questions;
  }, [chapter.description]);

  const handleAnswer = (id: number, value: string) => setAnswers(prev => ({ ...prev, [id]: value }));
  const handleReset = () => { setAnswers({}); setShowResults(false); };

  return (
    <div className="animate-fade-in">
      <div className="flex items-center gap-2 mb-6">
        <ClipboardCheck className="h-5 w-5 text-orange-600 dark:text-orange-400" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Practice Worksheet</h3>
        <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">{worksheetQs.length} questions</span>
      </div>
      {!showResults ? (
        <>
          <div className="space-y-4 mb-6">
            {worksheetQs.map((q) => (
              <div key={q.id} className="p-4 bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700/50">
                <p className="font-medium text-gray-900 dark:text-white mb-2 text-sm">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-bold mr-2">{q.id}</span>
                  {q.question}
                </p>
                <textarea
                  value={answers[q.id] || ''}
                  onChange={(e) => handleAnswer(q.id, e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg outline-none focus:border-orange-500 transition-colors text-gray-900 dark:text-white mt-2 min-h-[60px]"
                  placeholder="Type your answer..."
                />
              </div>
            ))}
          </div>
          <button onClick={() => setShowResults(true)} className="px-6 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-medium shadow-lg">
            Check Answers
          </button>
        </>
      ) : (
        <div>
          <div className="text-center mb-6">
            <button onClick={handleReset} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm">
              <RotateCcw className="h-4 w-4" /> Try Again
            </button>
          </div>
          <div className="space-y-4">
            {worksheetQs.map((q) => (
              <div key={q.id} className="p-4 rounded-xl border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-gray-800/30">
                <p className="font-medium text-gray-900 dark:text-white mb-1 text-sm">Q{q.id}. {q.question}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Your answer: <span className="text-gray-700 dark:text-gray-300">{answers[q.id] || 'Not answered'}</span>
                </p>
                <details className="mt-2">
                  <summary className="text-xs text-orange-600 dark:text-orange-400 cursor-pointer font-medium">View suggested answer</summary>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 p-2 bg-orange-50 dark:bg-orange-900/10 rounded-lg">{q.correctAnswer}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function FormulaTab({ chapter }: { chapter: ChapterData }) {
  const formulaTopics = generateFormulaTopics(chapter.title, chapter.description);

  return (
    <div className="animate-fade-in">
      <div className="flex items-center gap-2 mb-6">
        <Calculator className="h-5 w-5 text-rose-600 dark:text-rose-400" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Formula Sheet</h3>
      </div>
      {formulaTopics.length === 0 ? (
        <div className="text-center py-12">
          <Calculator className="h-12 w-12 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
          <p className="text-gray-500 dark:text-gray-400">No specific formulas available for this chapter.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {formulaTopics.map((topic, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700/50 overflow-hidden">
              <div className="px-5 py-3 bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 border-b border-gray-100 dark:border-gray-700/30">
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{topic.topic}</h4>
              </div>
              <div className="p-5 space-y-4">
                {topic.formulas.map((formula, i) => (
                  <div key={i} className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-700/30">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{formula.description}</p>
                    <p className="text-base font-mono font-bold text-rose-700 dark:text-rose-300 bg-white dark:bg-gray-900/50 px-3 py-2 rounded-lg border border-gray-100 dark:border-gray-700/30 text-center">
                      {formula.formula}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ImportantQuestionsTab({ chapter }: { chapter: ChapterData }) {
  const questions = useMemo(() => {
    const topics = chapter.description.split(', ');
    return topics.map((topic, i) => ({
      id: i + 1,
      question: `Explain the concept of ${topic.trim()} in detail. Why is it important in ${chapter.title}?`,
      answer: `${topic.trim()} is a fundamental concept in ${chapter.title}. It involves understanding core principles, their applications, and how they relate to other topics. Mastery of this topic is essential for building a strong foundation in the subject. Practice with related numerical problems and real-world examples to reinforce understanding.`,
      marks: i < 3 ? 5 : 3,
    }));
  }, [chapter.description, chapter.title]);

  return (
    <div className="animate-fade-in">
      <div className="flex items-center gap-2 mb-6">
        <Star className="h-5 w-5 text-amber-600 dark:text-amber-400" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Important Questions</h3>
        <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">{questions.length} questions</span>
      </div>
      <div className="space-y-4">
        {questions.map((q) => (
          <details key={q.id} className="group bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700/50 overflow-hidden">
            <summary className="flex items-center gap-3 px-5 py-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-colors">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-sm font-bold flex-shrink-0">
                {q.id}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white">{q.question}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{q.marks} marks</p>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-5 pb-4 pt-0 border-t border-gray-100 dark:border-gray-700/30">
              <div className="flex items-start gap-3 mt-3">
                <Lightbulb className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{q.answer}</p>
              </div>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}

// ─── Main Client Component ──────────────────────────────────────
export function ChapterHubClient({ cls, subject, chapter, exercises, canonicalUrl }: ChapterHubClientProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeTab = searchParams.get('tab') || 'solutions';

  // Validate tab
  const validTab = TABS.find(t => t.id === activeTab) ? activeTab : 'solutions';

  const setTab = (tabId: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (tabId === 'solutions') {
      params.delete('tab');
    } else {
      params.set('tab', tabId);
    }
    const qs = params.toString();
    router.push(`${qs ? '?' + qs : ''}`, { scroll: false });
  };

  const renderTabContent = () => {
    switch (validTab) {
      case 'notes': return <NotesTab chapter={chapter} />;
      case 'mcqs': return <MCQTab cls={cls} subject={subject} chapter={chapter} />;
      case 'worksheets': return <WorksheetTab chapter={chapter} />;
      case 'formulas': return <FormulaTab chapter={chapter} />;
      case 'important-questions': return <ImportantQuestionsTab chapter={chapter} />;
      case 'solutions':
      default: return <SolutionsTab cls={cls} subject={subject} chapter={chapter} exercises={exercises} />;
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-1 mb-8 border-b border-gray-200 dark:border-gray-700/50 pb-0 overflow-x-auto">
        {TABS.map((tab) => {
          const isActive = validTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setTab(tab.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2.5 text-sm font-medium rounded-t-lg border-b-2 transition-all whitespace-nowrap ${
                isActive
                  ? `border-b-${tab.gradient.split(' ')[0].replace('from-', '')} text-${tab.color.split(' ')[0]} bg-white dark:bg-gray-800/50 border-b-current shadow-sm`
                  : 'border-b-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/30'
              }`}
            >
              <Icon className={`h-4 w-4 ${isActive ? tab.color : ''}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="min-h-[300px]">
        {renderTabContent()}
      </div>
    </div>
  );
}
