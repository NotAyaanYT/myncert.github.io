'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BookOpen, Eye, EyeOff } from 'lucide-react';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        router.push('/admin/dashboard');
      } else {
        setError('Invalid credentials');
      }
    } catch {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <BookOpen className="h-10 w-10 text-blue-600 mx-auto mb-3" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Login</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">NCERT Solutions Hub</p>
        </div>
        <form onSubmit={handleLogin} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 space-y-5">
          {error && <p className="text-sm text-red-600 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">{error}</p>}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl outline-none focus:border-blue-500 transition-colors text-gray-900 dark:text-white" placeholder="admin@example.com" />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
            <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl outline-none focus:border-blue-500 transition-colors text-gray-900 dark:text-white pr-10" placeholder="••••••••" />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-[38px] text-gray-400 hover:text-gray-600">
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors">Sign In</button>
        </form>
      </div>
    </div>
  );
}
