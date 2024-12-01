import { motion } from 'framer-motion';

export default function SystemRequirements() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">System Requirements</h2>
      
      <div className="space-y-8 text-gray-600 dark:text-gray-400">
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Hardware Requirements</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Server Requirements</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Processor: Modern multi-core processor (4+ cores recommended)</li>
                <li>RAM: Minimum 8GB (16GB recommended)</li>
                <li>Storage: 50GB+ SSD storage</li>
                <li>Network: High-speed internet connection</li>
                <li>Backup: Redundant storage system</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Client Requirements</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Modern web browser (Chrome, Firefox, Safari, Edge)</li>
                <li>Minimum 4GB RAM</li>
                <li>Stable internet connection (1Mbps+)</li>
                <li>Display resolution: 1280x720 or higher</li>
                <li>Audio input device for voice commands</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Mobile Requirements</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>iOS 12.0 or later</li>
                <li>Android 8.0 or later</li>
                <li>2GB RAM minimum</li>
                <li>Camera for evidence documentation</li>
                <li>Microphone for voice input</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Software Dependencies</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Frontend Dependencies</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>React 18.0+</li>
                <li>React Native (for mobile)</li>
                <li>TypeScript 4.5+</li>
                <li>Tailwind CSS 3.0+</li>
                <li>Framer Motion 6.0+</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Backend Dependencies</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Node.js 14.0+</li>
                <li>Firebase Admin SDK</li>
                <li>Express.js 4.0+</li>
                <li>MongoDB 5.0+</li>
                <li>Redis 6.0+ (for caching)</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Cloud Services</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Firebase (Authentication, Firestore, Storage)</li>
                <li>Google Cloud Platform</li>
                <li>Azure (Deployment)</li>
                <li>SendGrid (Email notifications)</li>
                <li>Twilio (SMS notifications)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Development Environment</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Required Tools</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Git 2.0+</li>
                <li>VS Code or similar IDE</li>
                <li>npm or yarn package manager</li>
                <li>Firebase CLI</li>
                <li>Google Cloud SDK</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Recommended Extensions</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>ESLint</li>
                <li>Prettier</li>
                <li>TypeScript</li>
                <li>Tailwind CSS IntelliSense</li>
                <li>Firebase Explorer</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
