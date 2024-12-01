import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { GITHUB_REPO, LATEST_RELEASE_URL, DOWNLOAD_APK_URL } from '../constants';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/features' },
  { name: 'User Manual', href: '/manual' },
  { name: 'Support', href: '/support' },
];

interface NavbarProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

export default function Navbar({ isDark, setIsDark }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center justify-center">
              <img
                className="h-12 w-auto my-2 md:my-0 pt-2 transform hover:scale-110 transition-transform duration-300"
                src="/src/assets/images/InciSafeLogoDark.png"
                alt="InciSafe Manager"
              />
              <span className="ml-3 text-xl font-bold text-gray-900 dark:text-white">
                InciSafe Manager
              </span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${isActivePath(item.href)
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/50'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="flex items-center space-x-4">
              <a
                href={LATEST_RELEASE_URL}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Latest Release
              </a>
              <a
                href={DOWNLOAD_APK_URL}
                className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download APK
              </a>
              <a
                href={`https://github.com/${GITHUB_REPO}`}
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {isDark ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {isDark ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-base font-medium
                  ${isActivePath(item.href)
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/50'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2 space-y-2">
              <a
                href={LATEST_RELEASE_URL}
                className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Latest Release
              </a>
              <a
                href={DOWNLOAD_APK_URL}
                className="block bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download APK
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}