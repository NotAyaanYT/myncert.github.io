'use client';

import { useState, useMemo } from 'react';
import { notFound } from 'next/navigation';
import { Check, X, RotateCcw, Printer, FileSpreadsheet } from 'lucide-react';
import { getClassBySlug, getSubjectBySlug } from '@/data/classes';
import { getChapterBySlug } from '@/data/chapters';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { UpdateBadge } from '@/components/ui/Badge';
import { CURRENT_ACADEMIC_YEAR } from '@/lib/constants';

interface WorksheetQuestion {
  id: number;
  type: 'mcq' | 'fill-blank' | 'short-answer' | 'long-answer';
  question: string;
  correctAnswer: string;
}

function generateWorksheetQuestions(title: string, description: string): WorksheetQuestion[] {
  const topics = description.split(', ');
  const questions: WorksheetQuestion[] = [];
  const types: WorksheetQuestion['type'][] = ['mcq', 'fill-blank', 'short-answer', 'long-answer'];

  for (let i = 0; i < 10; i++) {
    const topic = topics[i % topics.length] || 'key concepts';
    const type = types[i % types.length];
    const mcqOptions = ['is the fundamental principle', 'is a derived concept', 'is unrelated', 'is the opposite'];

    let question: string;
    let correctAnswer: string;

    switch (type) {
      case 'mcq':
        question = `Which of the following best describes "${topic}"?\nA. ${topic} ${mcqOptions[0]}\nB. ${topic} ${mcqOptions[1]}\nC. ${topic} ${mcqOptions[2]}\nD. ${topic} ${mcqOptions[3]}`;
        correctAnswer = `A. ${topic} ${mcqOptions[0]}`;
        break;
      case 'fill-blank':
        question = `The concept of ${topic} is related to __________. (Fill in the blank)`;
        correctAnswer = topic;
        break;
      case 'short-answer':
        question = `Define ${topic} in one or two sentences.`;
        correctAnswer = `${topic} refers to the key concept explained in the chapter. It involves understanding the core ideas and their applications.`;
        break;
      case 'long-answer':
        question = `Explain ${topic} with examples. Why is it important in this chapter?`;
        correctAnswer = `${topic} is an important concept in this chapter. It covers fundamental ideas that help build a strong foundation. Key aspects include definition, characteristics, examples, and real-world applications. Understanding this topic thoroughly is essential for mastering the chapter.`;
        break;
    }

    questions.push({ id: i + 1, type, question, correctAnswer });
  }

  return questions;
}

export default function WorksheetChapterPage({
  params,
}: {
  params: Promise<{ classSlug: string; subjectSlug: string; chapterSlug: string }>;
}) {
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
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const [allChecked, setAllChecked] = useState(false);

  const questions = useMemo(() => {
    if (!chapter) return [];
    return generateWorksheetQuestions(chapter.title, chapter.description);
  }, [chapter]);

  const handleAnswer = (id: number, value: string) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
    setChecked(prev => ({ ...prev, [id]: false }));
    setAllChecked(false);
  };

  const checkAnswers = () => {
    setChecked({});
    setAllChecked(true);
  };

  const resetWorksheet = () => {
    setAnswers({});
    setChecked({});
    setAllChecked(false);
  };

  const isCorrect = (q: WorksheetQuestion) => {
    const userAns = (answers[q.id] || '').trim().toLowerCase();
    const correct = q.correctAnswer.trim().toLowerCase();
    return q.type === 'mcq'
      ? userAns.startsWith(correct[0]) || userAns.includes(correct.substring(0, 3))
      : userAns.length > 0 && (userAns.includes(correct.substring(0, 10)) || correct.includes(userAns.substring(0, 10)));
  };

  const score = useMemo(() => {
    if (!allChecked) return 0;
    return questions.filter(q => isCorrect(q)).length;
  }, [allChecked, answers, questions]);

  if (!classSlug) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-amber-500 border-t-transparent rounded-full" />
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
            { label: 'Worksheets', href: '/worksheets' },
            { label: cls.name, href: `/worksheets/${cls.slug}` },
            { label: subject.name, href: `/worksheets/${cls.slug}/${subject.slug}` },
            { label: `Ch ${chapter.chapterNumber}: ${chapter.title}`, href: `/worksheets/${cls.slug}/${subject.slug}/${chapter.slug}` },
          ]}
        />

        <div className="mb-8 animate-fade-in">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <UpdateBadge />
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium print:hidden"
            >
              <Printer className="h-4 w-4" />
              Print Worksheet
            </button>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {cls.name} {subject.name}
          </h1>
          <h2 className="text-xl sm:text-2xl text-amber-600 font-semibold mb-4">
            Chapter {chapter.chapterNumber}: {chapter.title} - Worksheet
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Practice worksheet with 10 questions. Write your answers and check them instantly.
          </p>
        </div>

        {allChecked && (
          <div className="mb-8 p-6 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl text-white animate-fade-in">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className="text-xl font-bold mb-1">Worksheet Complete!</h3>
                <p className="text-amber-100">
                  You scored <span className="text-2xl font-bold text-white">{score}</span> out of <span className="font-bold">{questions.length}</span>
                </p>
              </div>
              <button
                onClick={resetWorksheet}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-amber-700 rounded-xl font-semibold hover:bg-amber-50 transition-colors"
              >
                <RotateCcw className="h-4 w-4" />
                Reset
              </button>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {questions.map((q, index) => (
            <div
              key={q.id}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center text-amber-700 dark:text-amber-300 font-bold text-sm">
                    {q.id}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full">
                        {q.type === 'mcq' ? 'MCQ' : q.type === 'fill-blank' ? 'Fill in the Blank' : q.type === 'short-answer' ? 'Short Answer' : 'Long Answer'}
                      </span>
                    </div>
                    <p className="text-base font-medium text-gray-900 dark:text-white mb-4 whitespace-pre-line">
                      {q.question}
                    </p>

                    {q.type === 'mcq' ? (
                      <div className="space-y-2">
                        {['A', 'B', 'C', 'D'].map(letter => {
                          const optText = q.question.split('\n').find(l => l.startsWith(`${letter}.`)) || '';
                          return (
                            <label
                              key={letter}
                              className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                                allChecked && checked[q.id] && answers[q.id]?.startsWith(letter)
                                  ? q.correctAnswer.startsWith(letter)
                                    ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                                    : 'border-red-500 bg-red-50 dark:bg-red-900/20'
                                  : answers[q.id]?.startsWith(letter)
                                    ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/20'
                                    : 'border-gray-200 dark:border-gray-600 hover:border-amber-300'
                              }`}
                            >
                              <input
                                type="radio"
                                name={`q-${q.id}`}
                                value={letter}
                                checked={answers[q.id] === letter}
                                onChange={() => handleAnswer(q.id, letter)}
                                className="sr-only"
                              />
                              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${
                                answers[q.id]?.startsWith(letter)
                                  ? 'bg-amber-500 text-white'
                                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                              }`}>
                                {letter}
                              </span>
                              <span className="text-sm text-gray-800 dark:text-gray-200">{optText.replace(/^[A-D]\.\s*/, '')}</span>
                            </label>
                          );
                        })}
                      </div>
                    ) : (
                      <>
                        {q.type === 'fill-blank' ? (
                          <input
                            type="text"
                            value={answers[q.id] || ''}
                            onChange={(e) => handleAnswer(q.id, e.target.value)}
                            placeholder="Type your answer..."
                            className={`w-full p-3 rounded-lg border-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all ${
                              allChecked && checked[q.id]
                                ? isCorrect(q)
                                  ? 'border-green-500'
                                  : 'border-red-500'
                                : 'border-gray-200 dark:border-gray-600 focus:border-amber-500'
                            }`}
                          />
                        ) : (
                          <textarea
                            value={answers[q.id] || ''}
                            onChange={(e) => handleAnswer(q.id, e.target.value)}
                            placeholder="Type your answer..."
                            rows={q.type === 'short-answer' ? 3 : 5}
                            className={`w-full p-3 rounded-lg border-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all ${
                              allChecked && checked[q.id]
                                ? isCorrect(q)
                                  ? 'border-green-500'
                                  : 'border-red-500'
                                : 'border-gray-200 dark:border-gray-600 focus:border-amber-500'
                            }`}
                          />
                        )}
                      </>
                    )}

                    {allChecked && (
                      <div className={`mt-4 p-4 rounded-lg border animate-fade-in ${
                        isCorrect(q)
                          ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                          : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
                      }`}>
                        <div className="flex items-center gap-2 mb-1">
                          {isCorrect(q) ? <Check className="h-4 w-4 text-green-600" /> : <X className="h-4 w-4 text-red-600" />}
                          <span className="text-sm font-semibold text-gray-900 dark:text-white">
                            {isCorrect(q) ? 'Correct!' : 'Incorrect'}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          <span className="font-medium">Expected answer:</span> {q.correctAnswer}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between print:hidden">
          <button
            onClick={resetWorksheet}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
          >
            <RotateCcw className="h-4 w-4" />
            Reset All
          </button>
          <button
            onClick={checkAnswers}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-700 transition-colors"
          >
            <Check className="h-4 w-4" />
            Check Answers
          </button>
        </div>
      </div>
    </div>
  );
}
