'use client';

import { Metadata } from 'next';
import { useState, useMemo } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Check, X, RotateCcw, ArrowRight, HelpCircle, BookOpen, Lightbulb, ChevronDown, Calculator, Hash } from 'lucide-react';
import { getClassBySlug, getSubjectBySlug, getSubjectVersion, getChaptersKey, SyllabusVersion } from '@/data/classes';
import { getChaptersForSubject, getChapterBySlug } from '@/data/chapters';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { UpdateBadge } from '@/components/ui/Badge';
import { CURRENT_ACADEMIC_YEAR, siteConfig } from '@/lib/constants';

interface MCQ {
  id: number;
  type: 'mcq' | 'numerical';
  question: string;
  options?: { label: string; text: string }[];
  correctAnswer?: string;
  correctValue?: number;
  tolerance?: number;
  explanation: string;
}

interface NumericalInputProps {
  questionId: number;
  value: string;
  onChange: (questionId: number, value: string) => void;
  isDisabled: boolean;
  showAnswer?: boolean;
  correctValue?: number;
  tolerance?: number;
  userAnswer?: string;
  isCorrect?: boolean;
}

function NumericalInput(props: NumericalInputProps) {
  const { questionId, value, onChange, isDisabled, showAnswer, correctValue, tolerance, userAnswer, isCorrect } = props;
  const [focused, setFocused] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers, decimal point, and minus sign
    if (/^[-]?\d*\.?\d*$/.test(value)) {
      onChange(questionId, value);
    }
  };

  // Render answer view when showAnswer is true, otherwise render input view
  const content = showAnswer ? (
    (() => {
      const toleranceRange = ` ±${tolerance || 0}`;
      const isCorrectAnswer = isCorrect !== undefined ? isCorrect : (userAnswer !== undefined && correctValue !== undefined && tolerance !== undefined 
        ? Math.abs(parseFloat(userAnswer) - correctValue) <= tolerance 
        : undefined);
      
      return (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Your answer:</label>
            <input
              type="text"
              value={userAnswer || ''}
              readOnly
              className={`flex-1 px-4 py-3 bg-white dark:bg-gray-800 border rounded-xl text-lg font-mono text-center ${
                isCorrect === true 
                  ? 'border-green-500 dark:border-green-400 bg-green-50 dark:bg-green-900/20' 
                  : isCorrect === false 
                    ? 'border-red-500 dark:border-red-400 bg-red-50 dark:bg-red-900/20' 
                    : 'border-gray-200 dark:border-gray-700'
              }`} />
            {isCorrect !== undefined ? (
              <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-sm font-medium ${
                isCorrect ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
              }`}>
                  {isCorrect ? <Check className="h-3.5 w-3.5" /> : <X className="h-3.5 w-3.5" />}
                  {isCorrect ? 'Correct' : 'Incorrect'}
              </span>
            ) : null}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
            <Calculator className="h-4 w-4 text-teal-500" />
            <span>Correct answer: <span className="font-mono font-medium">{correctValue}</span>{tolerance && ` ±${tolerance}`}</span>
          </div>
        </div>
      );
    })()
  ) : (
    // Render input view
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        Your answer
        <Hash className="h-3.5 w-3.5 inline-block ml-1 text-teal-500" />
      </label>
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          disabled={isDisabled}
          placeholder="Enter numerical answer..."
          className={`w-full px-4 py-3 bg-white dark:bg-gray-800 border rounded-xl text-lg font-mono text-center transition-all ${
            isDisabled 
              ? 'bg-gray-100 dark:bg-gray-800 cursor-not-allowed' 
              : focused 
                ? 'border-teal-500 dark:border-teal-400 ring-2 ring-teal-500/20' 
                : 'border-gray-200 dark:border-gray-700 focus:border-teal-500 dark:focus:border-teal-400'
          } focus:outline-none focus:ring-2 focus:ring-teal-500/20`}
          inputMode="decimal"
        />
        <div className="absolute bottom-2 right-3 text-xs text-gray-400 pointer-events-none">
          Numerical value
        </div>
      </div>
      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
        Enter a numerical value (e.g., 3.14, -5, 2.5e3)
      </p>
    </div>
  );

  return content;
}

function McqOption({
  label,
  text,
  isSelected,
  isCorrect,
  isWrong,
  isDisabled,
  onSelect,
}: {
  label: string;
  text: string;
  isSelected: boolean;
  isCorrect: boolean;
  isWrong: boolean;
  isDisabled: boolean;
  onSelect: () => void;
}) {
  let borderClass = 'border-gray-200 dark:border-gray-600 hover:border-teal-300 dark:hover:border-teal-500';
  let bgClass = 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750';
  let labelClass = 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300';

  if (isCorrect) {
    borderClass = 'border-green-500 dark:border-green-400';
    bgClass = 'bg-green-50 dark:bg-green-900/20';
    labelClass = 'bg-green-500 text-white';
  } else if (isWrong) {
    borderClass = 'border-red-500 dark:border-red-400';
    bgClass = 'bg-red-50 dark:bg-red-900/20';
    labelClass = 'bg-red-500 text-white';
  } else if (isSelected) {
    borderClass = 'border-teal-500 dark:border-teal-400';
    bgClass = 'bg-teal-50 dark:bg-teal-900/20';
    labelClass = 'bg-teal-500 text-white';
  }

  return (
    <button
      onClick={onSelect}
      disabled={isDisabled}
      className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${borderClass} ${bgClass} ${isDisabled ? 'cursor-default' : 'cursor-pointer'}`}
    >
      <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${labelClass}`}>
        {isCorrect ? <Check className="h-4 w-4" /> : isWrong ? <X className="h-4 w-4" /> : label}
      </span>
      <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-left">{text}</span>
    </button>
  );
}

function QuizCard({ mcq, index, selectedAnswer, onAnswer, quizSubmitted }: {
  mcq: MCQ;
  index: number;
  selectedAnswer: string | null;
  onAnswer: (answer: string) => void;
  quizSubmitted: boolean;
}) {
  const isAnswered = selectedAnswer !== null;

  if (mcq.type === 'numerical') {
    const userAnswer = selectedAnswer;
    const isCorrect = quizSubmitted && mcq.correctValue !== undefined && mcq.tolerance !== undefined && userAnswer !== null && userAnswer !== ''
      ? Math.abs(parseFloat(userAnswer!) - mcq.correctValue) <= mcq.tolerance
      : undefined;

    return ;
  }

  return ;
}

export default async function ChapterContent({ params, searchParams }: { params: Promise<{ classSlug: string; subjectSlug: string; chapterSlug: string }>; searchParams: Promise<{ version?: string }> }) {
  const { classSlug, subjectSlug, chapterSlug } = await params;
  const { version } = await searchParams;
  const cls = getClassBySlug(classSlug);
  const subject = getSubjectBySlug(classSlug, subjectSlug);
  const selectedVersion = (version as SyllabusVersion) || '2026-27';
  const subjectVersion = getSubjectVersion(classSlug, subjectSlug, selectedVersion);
  const chapter = getChapterBySlug(classSlug, subjectSlug, chapterSlug, selectedVersion);

  if (!cls || !subject || !chapter) {
    notFound();
  }

  const subjectBookName = subjectVersion?.bookName || subject.name;

  const mcqs = useMemo(() => {
    // Generate MCQs for this chapter
    const mcqs: MCQ[] = [];
    const topics = [
      'Introduction',
      'Basic Concepts',
      'Key Principles',
      'Applications',
      'Important Formulas',
      'Problem Solving',
      'Summary'
    ];

    topics.forEach((topic, index) => {
      // Add MCQ
      mcqs.push({
        id: mcqs.length + 1,
        type: 'mcq',
        question: `What is the main concept of ${topic} in ${chapter.title}?`,
        options: [
          { label: 'A', text: `The fundamental definition of ${topic} as established in the NCERT textbook` },
          { label: 'B', text: `A common misconception about ${topic} that contradicts the textbook` },
          { label: 'C', text: `An outdated theory about ${topic} that has been superseded` },
          { label: 'D', text: `A concept related to ${topic} but not its defining feature` },
        ],
        correctAnswer: 'A',
        explanation: `The correct answer is A. This question tests your understanding of ${topic}, which is a key concept in "${chapter.title}". The explanation is based on the NCERT textbook definition. Review the relevant section in your textbook for a detailed understanding of this topic.`,
      });

      // Add numerical question for some topics
      if (index % 2 === 0) {
        mcqs.push({
          id: mcqs.length + 1,
          type: 'numerical',
          question: `Calculate the approximate value for ${topic} in ${chapter.title} based on standard parameters.`,
          correctValue: Math.floor(Math.random() * 100) + 1,
          tolerance: 2,
          explanation: `The correct answer is approximately ${mcqs[mcqs.length - 1].correctValue}. This numerical question tests your ability to apply concepts from ${topic} in "${chapter.title}".`,
        });
      }
    });

    return mcqs;
  }, [chapter, subjectSlug]);

  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [showAnswers, setShowAnswers] = useState(false);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const handleAnswerChange = (questionId: number, value: string) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = () => {
    setQuizSubmitted(true);
  };

  const handleReset = () => {
    setUserAnswers({});
    setShowAnswers(false);
    setQuizSubmitted(false);
  };

  const getScore = () => {
    let correct = 0;
    mcqs.forEach(mcq => {
      if (mcq.type === 'mcq' && userAnswers[mcq.id] === mcq.correctAnswer) {
        correct++;
      } else if (mcq.type === 'numerical' && mcq.correctValue !== undefined && mcq.tolerance !== undefined) {
        const userVal = parseFloat(userAnswers[mcq.id] || '');
        if (!isNaN(userVal) && Math.abs(userVal - mcq.correctValue) <= mcq.tolerance) {
          correct++;
        }
      }
    });
    return correct;
  };

  const score = getScore();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <Breadcrumb
          items={[
            { label: 'Important Questions', href: '/important-questions' },
            { label: cls.name, href: `/important-questions/${cls.slug}` },
            { label: subject.name, href: `/important-questions/${cls.slug}/${subject.slug}` },
            { label: `Ch ${chapter.chapterNumber}: ${chapter.title}`, href: `/important-questions/${cls.slug}/${subject.slug}/${chapter.slug}?version=${selectedVersion}` },
          ]}
        />

        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-800 mb-4">
            <HelpCircle className="h-3.5 w-3.5" />
            {subjectVersion ? `${subjectVersion.year} - ${subjectVersion.bookName}` : `Updated for NCERT ${CURRENT_ACADEMIC_YEAR}`}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {cls.name} {subject.name} <span className="text-blue-600">Important Questions</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            Chapter {chapter.chapterNumber}: {chapter.title} ({subjectVersion?.bookName || 'NCERT'} - {subjectVersion?.year || CURRENT_ACADEMIC_YEAR}). Practice chapter-wise important questions with detailed explanations.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <label htmlFor="version-select" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Syllabus Version:
            </label>
            <select
              id="version-select"
              value={selectedVersion}
              onChange={(e) => window.location.search = `version=${e.target.value}`}
              className="px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="2026-27">2026-27 (Latest) - {subjectBookName}</option>
              <option value="previous">Previous (2023-24)</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              disabled={!quizSubmitted}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <RotateCcw className="h-4 w-4 inline-block mr-1" />
              Reset Quiz
            </button>
            <button
              onClick={() => setShowAnswers(!showAnswers)}
              className="px-4 py-2 bg-teal-500 text-white rounded-lg text-sm font-medium hover:bg-teal-600 transition-colors"
            >
              <Lightbulb className="h-4 w-4 inline-block mr-1" />
              {showAnswers ? 'Hide Answers' : 'Show Answers'}
            </button>
            <button
              onClick={handleSubmit}
              disabled={quizSubmitted}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Check className="h-4 w-4 inline-block mr-1" />
              Submit Quiz
            </button>
          </div>
        </div>

        {quizSubmitted && (
          <div className="mb-8 p-6 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl text-white animate-fade-in">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className="text-xl font-bold mb-1">Quiz Complete!</h3>
                <p className="text-teal-100">
                  You scored <span className="text-2xl font-bold">{score}</span> out of {mcqs.length}
                </p>
                <p className="text-teal-100 text-sm mt-1">
                  {score === mcqs.length ? 'Perfect score! Excellent work!' : score >= mcqs.length * 0.7 ? 'Good job! Keep practicing!' : 'Keep studying, you\'ll improve!'}
                </p>
              </div>
              <div className="text-right">
                <p className="text-4xl font-bold">{Math.round((score / mcqs.length) * 100)}%</p>
                <p className="text-teal-100 text-sm">Accuracy</p>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {mcqs.map((mcq, index) => {
            const isMcqCorrect = mcq.type === 'mcq' && userAnswers[mcq.id] === mcq.correctAnswer;
            const isNumericalCorrect = mcq.type === 'numerical' && mcq.correctValue !== undefined && mcq.tolerance !== undefined && 
              !isNaN(parseFloat(userAnswers[mcq.id] || '')) && 
              Math.abs(parseFloat(userAnswers[mcq.id] || '') - mcq.correctValue) <= mcq.tolerance;
            const isCorrect = quizSubmitted && (isMcqCorrect || isNumericalCorrect);
            const borderClass = quizSubmitted 
              ? (isCorrect ? 'border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-900/20' : 'border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/20')
              : 'border-gray-200 dark:border-gray-700';

            return (
            <div
              key={mcq.id}
              className={`p-6 bg-white dark:bg-gray-800 rounded-xl border ${borderClass} animate-slide-up`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center">
                  <span className="text-teal-600 dark:text-teal-400 font-bold text-lg">
                    {mcq.type === 'mcq' ? 'MCQ' : 'NUM'}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Question {index + 1}: {mcq.question}
                  </h3>
                  
                  {mcq.type === 'mcq' ? (
                    <div className="space-y-2">
                      {mcq.options?.map((option) => (
                        <McqOption
                          key={option.label}
                          label={option.label}
                          text={option.text}
                          isSelected={!quizSubmitted && userAnswers[mcq.id] === option.label}
                          isCorrect={quizSubmitted && option.label === mcq.correctAnswer}
                          isWrong={quizSubmitted && userAnswers[mcq.id] === option.label && option.label !== mcq.correctAnswer}
                          isDisabled={quizSubmitted || showAnswers}
                          onSelect={() => !quizSubmitted && !showAnswers && handleAnswerChange(mcq.id, option.label)}
                        />
                      ))}
                    </div>
                  ) : (
                    <NumericalInput
                      questionId={mcq.id}
                      value={userAnswers[mcq.id] || ''}
                      onChange={handleAnswerChange}
                      isDisabled={quizSubmitted || showAnswers}
                      showAnswer={showAnswers || quizSubmitted}
                      correctValue={mcq.correctValue}
                      tolerance={mcq.tolerance}
                      userAnswer={userAnswers[mcq.id]}
                      isCorrect={quizSubmitted && mcq.correctValue !== undefined && mcq.tolerance !== undefined && !isNaN(parseFloat(userAnswers[mcq.id] || '')) && Math.abs(parseFloat(userAnswers[mcq.id] || '') - mcq.correctValue) <= mcq.tolerance}
                    />
                  )}

                  {(showAnswers || quizSubmitted) && (
                    <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                      <div className="flex items-center gap-2 mb-2">
                        <Lightbulb className="h-5 w-5 text-yellow-500" />
                        <span className="font-semibold text-gray-900 dark:text-white">Explanation</span>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{mcq.explanation}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            );
          })}
        </div>

        {mcqs.length === 0 && (
          <div className="text-center py-20">
            <svg className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <h2 className="text-2xl font-semibold text-gray-500 dark:text-gray-400">Coming Soon</h2>
            <p className="text-gray-400 dark:text-gray-500 mt-2">Important questions are being added for this chapter.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export async function generateMetadata({ params, searchParams }: { params: Promise<{ classSlug: string; subjectSlug: string; chapterSlug: string }>; searchParams: Promise<{ version?: string }> }): Promise<Metadata> {
  const { classSlug, subjectSlug, chapterSlug } = await params;
  const { version } = await searchParams;
  const cls = getClassBySlug(classSlug);
  const subject = getSubjectBySlug(classSlug, subjectSlug);
  const selectedVersion = (version as SyllabusVersion) || '2026-27';
  const subjectVersion = getSubjectVersion(classSlug, subjectSlug, selectedVersion);
  const chapter = getChapterBySlug(classSlug, subjectSlug, chapterSlug, selectedVersion);
  
  if (!cls || !subject || !chapter) return {};

  return {
    title: `${cls.name} ${subject.name} Ch ${chapter.chapterNumber}: ${chapter.title} Important Questions - NCERT ${subjectVersion?.year || CURRENT_ACADEMIC_YEAR}`,
    description: `Get free important questions for ${cls.name} ${subject.name} Chapter ${chapter.chapterNumber}: ${chapter.title} (${subjectVersion?.bookName || 'NCERT'} - ${subjectVersion?.year || CURRENT_ACADEMIC_YEAR}). Practice with detailed explanations.`,
  };
}