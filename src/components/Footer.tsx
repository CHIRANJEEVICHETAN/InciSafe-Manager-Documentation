import { Link } from 'react-router-dom';
import { GITHUB_REPO } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">InciSafe Manager</h3>
            <p className="text-gray-600 dark:text-gray-400">
              A product of Loginware Softtec Private Limited, revolutionizing workplace safety.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/manual" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  User Manual
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href={`https://github.com/${GITHUB_REPO}`}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a 
                  href="https://forum.inciSafeManager.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Community Forum
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>Email: support@inciSafeManager.com</li>
              <li>Phone: 1-800-123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} InciSafe Manager. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 