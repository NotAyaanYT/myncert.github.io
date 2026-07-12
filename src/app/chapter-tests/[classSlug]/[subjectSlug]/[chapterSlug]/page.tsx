'use client';

import { useState, useMemo, useEffect, useCallback } from 'react';
import { notFound } from 'next/navigation';
import { Check, X, RotateCcw, Timer, AlertTriangle, BookOpen } from 'lucide-react';
import { getClassBySlug, getSubjectBySlug } from '@/data/classes';
import { getChapterBySlug } from '@/data/chapters';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { UpdateBadge } from '@/components/ui/Badge';
import { CURRENT_ACADEMIC_YEAR } from '@/lib/constants';

interface TestQuestion {
  id: number;
  type: 'mcq' | 'short-answer';
  question: string;
  options?: { label: string; text: string }[];
  correctAnswer: string;
  topic: string;
}

function generateTestQuestions(title: string, description: string): TestQuestion[] {
  const topics = description.split(', ');
  const questions: TestQuestion[] = [];

  for (let i = 0; i < 20; i++) {
    const topic = topics[i % topics.length] || 'key concepts';

    if (i < 15) {
      const correctIdx = Math.floor(Math.random() * 4);
      const labels = ['A', 'B', 'C', 'D'];
      const options = labels.map((label, idx) => ({
        label,
        text: idx === correctIdx
          ? `Correct explanation of ${topic}`
          : `Incorrect option related to ${topic}`,
      }));

      questions.push({
        id: i + 1,
        type: 'mcq',
        question: `Question ${i + 1}: Which statement about ${topic} is correct?`,
        options,
        correctAnswer: labels[correctIdx],
        topic,
      });
    } else {
      questions.push({
        id: i + 1,
        type: 'short-answer',
        question: `Question ${i + 1}: Briefly explain the significance of ${topic} in this chapter.`,
        correctAnswer: `${topic} is significant because it forms a fundamental concept. Understanding it helps in grasping advanced topics and real-world applications.`,
        topic,
      });
    }
  }

  return questions;
}

export default function ChapterTestPage({
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
  const [testStarted, setTestStarted] = useState(false);
  const [testSubmitted, setTestSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(45 * 60);
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);

  const questions = useMemo(() => {
    if (!chapter) return [];
    return generateTestQuestions(chapter.title, chapter.description);
  }, [chapter]);

  const answeredCount = Object.keys(answers).length;
  const progress = questions.length > 0 ? (answeredCount / questions.length) * 100 : 0;

  const startTest = () => {
    setTestStarted(true);
    setTestSubmitted(false);
    setAnswers({});
    setTimeLeft(45 * 60);
  };

  useEffect(() => {
    if (!testStarted || testSubmitted) return;
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [testStarted, testSubmitted]);

  useEffect(() => {
    if (timeLeft === 0 && testStarted && !testSubmitted) {
      const timeout = window.setTimeout(() => setTestSubmitted(true), 0);
      return () => window.clearTimeout(timeout);
    }
  }, [timeLeft, testStarted, testSubmitted]);

  const handleAnswer = (qId: number, answer: string) => {
    if (testSubmitted) return;
    setAnswers(prev => ({ ...prev, [qId]: answer }));
  };

  const submitTest = () => {
    setTestSubmitted(true);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const isCorrect = useCallback((q: TestQuestion) => {
    const userAns = (answers[q.id] || '').trim().toLowerCase();
    const correct = q.correctAnswer.trim().toLowerCase();
    if (q.type === 'mcq') return userAns === correct;
    return userAns.length > 0 && (userAns.includes(correct.substring(0, 15)) || correct.includes(userAns.substring(0, 15)));
  }, [answers]);

  const score = useMemo(() => {
    if (!testSubmitted) return 0;
    return questions.filter(q => isCorrect(q)).length;
  }, [testSubmitted, questions, isCorrect]);

  const topicBreakdown = useMemo(() => {
    if (!testSubmitted) return [];
    const topicMap: Record<string, { total: number; correct: number }> = {};
    questions.forEach(q => {
      if (!topicMap[q.topic]) topicMap[q.topic] = { total: 0, correct: 0 };
      topicMap[q.topic].total++;
      if (isCorrect(q)) topicMap[q.topic].correct++;
    });
    return Object.entries(topicMap).map(([topic, data]) => ({
      topic,
      ...data,
      percentage: Math.round((data.correct / data.total) * 100),
    }));
  }, [testSubmitted, questions, isCorrect]);

  if (!classSlug) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-red-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!cls || !subject || !chapter) {
    notFound();
  }

  const timePercentage = ((45 * 60 - timeLeft) / (45 * 60)) * 100;

  if (!testStarted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
          <Breadcrumb
            items={[
              { label: 'Chapter Tests', href: '/chapter-tests' },
              { label: cls.name, href: `/chapter-tests/${cls.slug}` },
              { label: subject.name, href: `/chapter-tests/${cls.slug}/${subject.slug}` },
              { label: `Ch ${chapter.chapterNumber}: ${chapter.title}`, href: `/chapter-tests/${cls.slug}/${subject.slug}/${chapter.slug}` },
            ]}
          />
          <div className="mb-8 animate-fade-in">
            <UpdateBadge />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-4 mb-2">
              {cls.name} {subject.name}
            </h1>
            <h2 className="text-xl sm:text-2xl text-red-600 font-semibold mb-4">
              Chapter {chapter.chapterNumber}: {chapter.title} - Chapter Test
            </h2>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 text-center animate-fade-in">
            <Timer className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Ready to Test Your Knowledge?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-lg mx-auto">
              This test has 20 questions covering all topics from this chapter. You have 45 minutes to complete it.
              Questions include multiple choice and short answer types.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <p className="text-sm font-medium text-red-700 dark:text-red-300">20 Questions</p>
              </div>
              <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <p className="text-sm font-medium text-red-700 dark:text-red-300">45 Minutes</p>
              </div>
              <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <p className="text-sm font-medium text-red-700 dark:text-red-300">MCQ + Short Answer</p>
              </div>
            </div>
            <button
              onClick={startTest}
              className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors text-lg"
            >
              <Timer className="h-5 w-5" />
              Start Test
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <Breadcrumb
          items={[
            { label: 'Chapter Tests', href: '/chapter-tests' },
            { label: cls.name, href: `/chapter-tests/${cls.slug}` },
            { label: subject.name, href: `/chapter-tests/${cls.slug}/${subject.slug}` },
            { label: `Ch ${chapter.chapterNumber}: ${chapter.title}`, href: `/chapter-tests/${cls.slug}/${subject.slug}/${chapter.slug}` },
          ]}
        />

        {!testSubmitted ? (
          <>
            <div className="sticky top-20 z-10 mb-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 shadow-sm">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <Timer className={`h-5 w-5 ${timeLeft < 300 ? 'text-red-500 animate-pulse' : 'text-gray-500'}`} />
                  <span className={`text-lg font-bold font-mono ${timeLeft < 300 ? 'text-red-500' : 'text-gray-900 dark:text-white'}`}>
                    {formatTime(timeLeft)}
                  </span>
                </div>
                <div className="flex-1 max-w-md">
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-1">
                    <span>Progress</span>
                    <span>{answeredCount}/{questions.length}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
                  </div>
                </div>
                <button
                  onClick={() => setShowConfirmSubmit(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                >
                  <Check className="h-4 w-4" />
                  Submit Test
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {questions.map((q, index) => (
                <div
                  key={q.id}
                  className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/40 flex items-center justify-center text-red-700 dark:text-red-300 font-bold text-sm">
                        {q.id}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full">
                            {q.type === 'mcq' ? 'MCQ' : 'Short Answer'}
                          </span>
                          <span className="text-xs text-gray-400">{q.topic}</span>
                        </div>
                        <p className="text-base font-medium text-gray-900 dark:text-white mb-4">
                          {q.question}
                        </p>

                        {q.type === 'mcq' && q.options ? (
                          <div className="space-y-2">
                            {q.options.map(opt => (
                              <label
                                key={opt.label}
                                className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                                  answers[q.id] === opt.label
                                    ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                                    : 'border-gray-200 dark:border-gray-600 hover:border-red-300'
                                }`}
                              >
                                <input
                                  type="radio"
                                  name={`q-${q.id}`}
                                  value={opt.label}
                                  checked={answers[q.id] === opt.label}
                                  onChange={() => handleAnswer(q.id, opt.label)}
                                  className="sr-only"
                                />
                                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${
                                  answers[q.id] === opt.label
                                    ? 'bg-red-500 text-white'
                                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                                }`}>
                                  {opt.label}
                                </span>
                                <span className="text-sm text-gray-800 dark:text-gray-200">{opt.text}</span>
                              </label>
                            ))}
                          </div>
                        ) : (
                          <textarea
                            value={answers[q.id] || ''}
                            onChange={(e) => handleAnswer(q.id, e.target.value)}
                            placeholder="Type your answer..."
                            rows={3}
                            className="w-full p-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-red-500 transition-all"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="animate-fade-in">
            <div className="mb-8 p-8 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl text-white">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Test Complete!</h3>
                <p className="text-red-100 text-lg mb-1">
                  Your Score: <span className="text-3xl font-bold text-white">{score}</span> / {questions.length}
                </p>
                <p className="text-red-100">
                  {score === questions.length ? 'Perfect score! Outstanding!' :
                   score >= questions.length * 0.7 ? 'Great job! Well prepared.' :
                   score >= questions.length * 0.5 ? 'Good effort! Review the topics you missed.' :
                   'Keep practicing! Review the chapter and try again.'}
                </p>
                {timeLeft === 0 && <p className="text-red-200 text-sm mt-2">Time ran out.</p>}
              </div>
            </div>

            <div className="mb-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Topic-wise Breakdown</h3>
              <div className="space-y-3">
                {topicBreakdown.map((t) => (
                  <div key={t.topic}>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{t.topic}</span>
                      <span className="text-gray-500 dark:text-gray-400">{t.correct}/{t.total} ({t.percentage}%)</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all ${
                          t.percentage >= 70 ? 'bg-green-500' : t.percentage >= 40 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${t.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {questions.map((q) => {
                const correct = isCorrect(q);
                return (
                  <div
                    key={q.id}
                    className={`bg-white dark:bg-gray-800 rounded-xl border overflow-hidden ${
                      correct ? 'border-green-200 dark:border-green-800' : 'border-red-200 dark:border-red-800'
                    }`}
                  >
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                          correct ? 'bg-green-100 dark:bg-green-900/40 text-green-700' : 'bg-red-100 dark:bg-red-900/40 text-red-700'
                        }`}>
                          {correct ? <Check className="h-5 w-5" /> : <X className="h-5 w-5" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-medium text-gray-400">Q{q.id}</span>
                            <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
                              {q.type === 'mcq' ? 'MCQ' : 'Short Answer'}
                            </span>
                          </div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">{q.question}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            <span className="font-medium">Your answer:</span> {answers[q.id] || 'Not answered'}
                          </p>
                          {!correct && (
                            <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                              <span className="font-medium">Correct answer:</span> {q.correctAnswer}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={startTest}
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors"
              >
                <RotateCcw className="h-4 w-4" />
                Retry Test
              </button>
            </div>
          </div>
        )}
      </div>

      {showConfirmSubmit && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-sm w-full shadow-xl">
            <AlertTriangle className="h-12 w-12 text-amber-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-2">Submit Test?</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-2">
              You have answered {answeredCount} out of {questions.length} questions.
            </p>
            {answeredCount < questions.length && (
              <p className="text-xs text-amber-600 dark:text-amber-400 text-center mb-4">
                {questions.length - answeredCount} questions are unanswered.
              </p>
            )}
            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirmSubmit(false)}
                className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
              >
                Continue Test
              </button>
              <button
                onClick={() => { setShowConfirmSubmit(false); submitTest(); }}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
