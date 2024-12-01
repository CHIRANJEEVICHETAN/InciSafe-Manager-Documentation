import { motion } from 'framer-motion';

export default function Manual() {
  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">User Manual</h1>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Getting Started</h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 space-y-4">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">System Requirements</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                <li>iOS: 12.0 or later</li>
                <li>Android: 8.0 or later</li>
                <li>Stable internet connection</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Installation Guide</h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 space-y-4">
              <ol className="list-decimal list-inside text-gray-600 dark:text-gray-400 space-y-2">
                <li>Download APK or install via App Store/Google Play</li>
                <li>Open the application</li>
                <li>Follow setup instructions</li>
                <li>Enable required permissions</li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Using the Application</h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 space-y-6">
              <div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">Incident Reporting</h3>
                <ol className="list-decimal list-inside text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Navigate to the "Report Incident" tab</li>
                  <li>Select an incident category</li>
                  <li>Use the mic button or type manually</li>
                  <li>Review AI-generated details</li>
                  <li>Submit the form</li>
                </ol>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
} 