'use client';

import { useState, useMemo } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Check, X, RotateCcw, ArrowRight, HelpCircle, BookOpen, Lightbulb } from 'lucide-react';
import { getClassBySlug, getSubjectBySlug } from '@/data/classes';
import { getChapterBySlug } from '@/data/chapters';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { UpdateBadge } from '@/components/ui/Badge';
import { CURRENT_ACADEMIC_YEAR, siteConfig } from '@/lib/constants';

interface MCQ {
  id: number;
  question: string;
  options: { label: string; text: string }[];
  correctAnswer: string;
  explanation: string;
}

function generateMCQs(title: string, description: string): MCQ[] {
  const topics = description.split(', ');
  const mcqs: MCQ[] = [];
  const numMCQs = 10;

  const questionTemplates = [
    (t: string) => `What is the primary concept related to ${t}?`,
    (t: string) => `Which of the following best describes ${t}?`,
    (t: string) => `The term "${t.split(' ')[0]}" refers to:`,
    (t: string) => `Which statement about ${t} is correct?`,
    (t: string) => `In the context of ${t}, which option is true?`,
    (t: string) => `What is the main characteristic of ${t}?`,
    (t: string) => `${t} is primarily associated with:`,
    (t: string) => `Which of the following is NOT related to ${t}?`,
    (t: string) => `The study of ${t} involves:`,
    (t: string) => `Which example best illustrates ${t}?`,
  ];

  for (let i = 0; i < numMCQs; i++) {
    const topic = topics[i % topics.length] || 'key concepts';
    const template = questionTemplates[i % questionTemplates.length];
    const question = template(topic);
    const correctIdx = Math.floor(Math.random() * 4);
    const labels = ['A', 'B', 'C', 'D'];
    const options = labels.map((label, idx) => ({
      label,
      text: idx === correctIdx
        ? `Correct answer related to ${topic} - the most accurate description.`
        : `Incorrect option ${idx + 1} for ${topic} - this is not accurate.`,
    }));

    mcqs.push({
      id: i + 1,
      question,
      options,
      correctAnswer: labels[correctIdx],
      explanation: `The correct answer is ${labels[correctIdx]}. ${topic} is an important concept in this chapter. Understanding this helps build a strong foundation for advanced topics. Review the chapter thoroughly for complete understanding.`,
    });
  }

  return mcqs;
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

function QuizCard({ mcq, index, selectedAnswer, onAnswer, showResult }: {
  mcq: MCQ;
  index: number;
  selectedAnswer: string | null;
  onAnswer: (answer: string) => void;
  showResult: boolean;
}) {
  const isAnswered = selectedAnswer !== null;

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden animate-slide-up"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center text-teal-700 dark:text-teal-300 font-bold text-sm">
            {mcq.id}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-base font-medium text-gray-900 dark:text-white mb-4">
              {mcq.question}
            </p>
            <div className="space-y-3">
              {mcq.options.map((opt) => (
                <McqOption
                  key={opt.label}
                  label={opt.label}
                  text={opt.text}
                  isSelected={selectedAnswer === opt.label}
                  isCorrect={showResult && opt.label === mcq.correctAnswer}
                  isWrong={showResult && selectedAnswer === opt.label && opt.label !== mcq.correctAnswer}
                  isDisabled={isAnswered}
                  onSelect={() => onAnswer(opt.label)}
                />
              ))}
            </div>
            {showResult && selectedAnswer && (
              <div className={`mt-4 p-4 rounded-lg border ${selectedAnswer === mcq.correctAnswer ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'} animate-fade-in`}>
                <div className="flex items-center gap-2 mb-1">
                  <Lightbulb className="h-4 w-4 text-amber-500" />
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">Explanation</span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{mcq.explanation}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function McqChapterPage({
  params,
}: {
  params: Promise<{ classSlug: string; subjectSlug: string; chapterSlug: string }>;
}) {
  const resolved = useMemo(() => {
    const p = params instanceof Promise ? { classSlug: '', subjectSlug: '', chapterSlug: '' } : params;
    return p;
  }, [params]);

  const [classSlug, setClassSlug] = useState('');
  const [subjectSlug, setSubjectSlug] = useState('');
  const [chapterSlug, setChapterSlug] = useState('');

  useMemo(() => {
    (async () => {
      try {
        const p = await params;
        setClassSlug(p.classSlug);
        setSubjectSlug(p.subjectSlug);
        setChapterSlug(p.chapterSlug);
      } catch {}
    })();
  }, [params]);

  const cls = getClassBySlug(classSlug);
  const subject = getSubjectBySlug(classSlug, subjectSlug);
  const chapter = getChapterBySlug(classSlug, subjectSlug, chapterSlug);

  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState<Record<number, boolean>>({});

  const mcqs = useMemo(() => {
    if (!chapter) return [];
    return generateMCQs(chapter.title, chapter.description);
  }, [chapter]);

  const handleAnswer = (questionId: number, answer: string) => {
    if (showResults[questionId]) return;
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
    setShowResults(prev => ({ ...prev, [questionId]: true }));
  };

  const score = useMemo(() => {
    let correct = 0;
    mcqs.forEach(mcq => {
      if (answers[mcq.id] === mcq.correctAnswer) correct++;
    });
    return correct;
  }, [answers, mcqs]);

  const allAnswered = mcqs.length > 0 && mcqs.every(mcq => answers[mcq.id] !== undefined);

  const resetQuiz = () => {
    setAnswers({});
    setShowResults({});
  };

  if (!classSlug) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-teal-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!cls || !subject || !chapter) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <Breadcrumb
          items={[
            { label: 'MCQs', href: '/mcqs' },
            { label: cls.name, href: `/mcqs/${cls.slug}` },
            { label: subject.name, href: `/mcqs/${cls.slug}/${subject.slug}` },
            { label: `Ch ${chapter.chapterNumber}: ${chapter.title}`, href: `/mcqs/${cls.slug}/${subject.slug}/${chapter.slug}` },
          ]}
        />

        <div className="mb-8 animate-fade-in">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <UpdateBadge />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {cls.name} {subject.name}
          </h1>
          <h2 className="text-xl sm:text-2xl text-teal-600 font-semibold mb-4">
            Chapter {chapter.chapterNumber}: {chapter.title} - MCQs
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Test your knowledge of {chapter.title} with these {mcqs.length} multiple choice questions.
          </p>
        </div>

        {allAnswered && (
          <div className="mb-8 p-6 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl text-white animate-fade-in">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className="text-xl font-bold mb-1">Quiz Complete!</h3>
                <p className="text-teal-100">
                  You scored <span className="text-2xl font-bold text-white">{score}</span> out of <span className="font-bold">{mcqs.length}</span>
                </p>
                <p className="text-teal-100 text-sm mt-1">
                  {score === mcqs.length ? 'Perfect score! Excellent work!' :
                   score >= mcqs.length * 0.7 ? 'Great job! Keep practicing.' :
                   score >= mcqs.length * 0.5 ? 'Good effort! Review the topics you missed.' :
                   'Keep practicing! Review the chapter and try again.'}
                </p>
              </div>
              <button
                onClick={resetQuiz}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-teal-700 rounded-xl font-semibold hover:bg-teal-50 transition-colors"
              >
                <RotateCcw className="h-4 w-4" />
                Retry Quiz
              </button>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {mcqs.map((mcq, index) => (
            <QuizCard
              key={mcq.id}
              mcq={mcq}
              index={index}
              selectedAnswer={answers[mcq.id] || null}
              onAnswer={(answer) => handleAnswer(mcq.id, answer)}
              showResult={showResults[mcq.id] || false}
            />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={resetQuiz}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
          >
            <RotateCcw className="h-4 w-4" />
            Reset All
          </button>
          <Link
            href={`/notes/${cls.slug}/${subject.slug}/${chapter.slug}`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm font-medium"
          >
            <BookOpen className="h-4 w-4" />
            View Revision Notes
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
