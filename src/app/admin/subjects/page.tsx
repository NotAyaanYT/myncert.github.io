'use client';

import { Plus, Pencil, Trash2 } from 'lucide-react';
import { subjects } from '@/lib/constants';

export default function AdminSubjectsPage() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Subjects</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors text-sm font-medium">
          <Plus className="h-4 w-4" /> Add Subject
        </button>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <th className="text-left p-4 text-sm font-medium text-gray-500 dark:text-gray-400">Name</th>
              <th className="text-left p-4 text-sm font-medium text-gray-500 dark:text-gray-400">Slug</th>
              <th className="text-right p-4 text-sm font-medium text-gray-500 dark:text-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject) => (
              <tr key={subject.id} className="border-b border-gray-100 dark:border-gray-700 last:border-0">
                <td className="p-4 text-sm font-medium text-gray-900 dark:text-white">{subject.name}</td>
                <td className="p-4 text-sm text-gray-500 dark:text-gray-400">{subject.slug}</td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg"><Pencil className="h-4 w-4" /></button>
                    <button className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg"><Trash2 className="h-4 w-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
