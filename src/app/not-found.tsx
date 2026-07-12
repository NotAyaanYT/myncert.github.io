import Link from 'next/link';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4">
      <div className="text-center max-w-md animate-fade-in">
        <div className="text-8xl font-bold text-blue-600 mb-4">404</div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Page Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The page you are looking for does not exist or has been moved. Try searching for what you need.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium"
          >
            <Home className="h-4 w-4" />
            Go Home
          </Link>
          <Link
            href="/search"
            className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-medium"
          >
            <Search className="h-4 w-4" />
            Search
          </Link>
        </div>
      </div>
    </div>
  );
}
