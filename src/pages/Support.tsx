import { motion } from 'framer-motion';

export default function Support() {
  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Support & Resources</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact Support</h2>
            <div className="space-y-4">
              <p className="flex items-center text-gray-600 dark:text-gray-400">
                <span className="mr-2">📧</span>
                <a href="mailto:support@inciSafeManager.com" className="hover:text-gray-900 dark:hover:text-white">
                  Email: support@inciSafeManager.com
                </a>
              </p>
              <p className="flex items-center text-gray-600 dark:text-gray-400">
                <span className="mr-2">📞</span>
                <a href="tel:1-800-123-4567" className="hover:text-gray-900 dark:hover:text-white">
                  Phone: 1-800-123-4567
                </a>
              </p>
              <p className="flex items-center text-gray-600 dark:text-gray-400">
                <span className="mr-2">💬</span>
                Live Chat: Available 24/7
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Login Issues</h3>
                <p className="text-gray-600 dark:text-gray-400">Ensure internet connectivity and correct credentials.</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Incident Submission Problems</h3>
                <p className="text-gray-600 dark:text-gray-400">Clear cache or update the app.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Documentation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="/InciSafe_Manual.pdf"
              className="flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <span className="mr-2">📄</span>
              <span className="text-gray-900 dark:text-white">PDF Manual</span>
            </a>
            <a
              href="/guide"
              className="flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <span className="mr-2">📚</span>
              <span className="text-gray-900 dark:text-white">Interactive User Guide</span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}