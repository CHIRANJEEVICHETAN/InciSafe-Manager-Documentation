import { motion } from 'framer-motion';

export default function Architecture() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Architecture Overview</h2>
      
      <div className="space-y-8 text-gray-600 dark:text-gray-400">
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">System Architecture</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Frontend Architecture</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>React Native with Expo framework</li>
                <li>TypeScript for type safety</li>
                <li>Redux for state management</li>
                <li>React Navigation for routing</li>
                <li>Tailwind CSS for styling</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Backend Architecture</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Firebase Cloud Functions</li>
                <li>Express.js middleware</li>
                <li>Firebase Authentication</li>
                <li>Cloud Firestore database</li>
                <li>Firebase Storage for files</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">AI Integration</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Voice Processing</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Google Cloud Speech-to-Text API</li>
                <li>Real-time voice recognition</li>
                <li>Multiple language support</li>
                <li>Noise cancellation</li>
                <li>Custom vocabulary training</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Gemini AI Integration</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Natural language processing</li>
                <li>Automated form filling</li>
                <li>Incident classification</li>
                <li>Priority assessment</li>
                <li>Response suggestion</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Security Architecture</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Authentication & Authorization</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>JWT-based authentication</li>
                <li>Role-based access control</li>
                <li>Multi-factor authentication</li>
                <li>Session management</li>
                <li>OAuth 2.0 integration</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Data Security</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>End-to-end encryption</li>
                <li>Secure file storage</li>
                <li>Data backup and recovery</li>
                <li>Audit logging</li>
                <li>Compliance monitoring</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Integration Architecture</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">External Services</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Email service (SendGrid)</li>
                <li>SMS notifications (Twilio)</li>
                <li>Cloud storage (Firebase)</li>
                <li>Analytics (Firebase Analytics)</li>
                <li>Monitoring (Application Insights)</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">API Architecture</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>RESTful API design</li>
                <li>GraphQL integration</li>
                <li>WebSocket for real-time updates</li>
                <li>API versioning</li>
                <li>Rate limiting</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
