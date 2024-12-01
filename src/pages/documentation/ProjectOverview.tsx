import { motion } from 'framer-motion';

export default function ProjectOverview() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Project Overview</h2>
      
      <div className="space-y-8 text-gray-600 dark:text-gray-400">
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">About InciSafe Manager</h3>
          <p className="mb-4">
            InciSafe Manager is a comprehensive digital safety incident reporting system designed to streamline 
            the process of reporting, tracking, and managing safety incidents across organizations. This innovative 
            solution combines modern technology with user-friendly interfaces to ensure efficient incident management.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Core Features</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Digital Incident Reporting</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Intuitive incident reporting forms</li>
                <li>Multiple incident category support</li>
                <li>Voice-to-text input capability</li>
                <li>Automated form filling using AI</li>
                <li>Evidence attachment support</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Real-time Notifications</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Instant alert system</li>
                <li>Customizable notification rules</li>
                <li>Multi-channel notifications</li>
                <li>Priority-based alerting</li>
                <li>Stakeholder communication</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Key Benefits</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">For Organizations</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Improved incident response time</li>
                <li>Better compliance management</li>
                <li>Comprehensive reporting capabilities</li>
                <li>Data-driven decision making</li>
                <li>Reduced administrative overhead</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">For Users</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Easy-to-use interface</li>
                <li>Mobile accessibility</li>
                <li>Voice input support</li>
                <li>Automated assistance</li>
                <li>Real-time status updates</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Project Goals</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Primary Objectives</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Streamline incident reporting processes</li>
                <li>Enhance safety compliance management</li>
                <li>Improve incident response times</li>
                <li>Provide comprehensive analytics</li>
                <li>Enable data-driven decision making</li>
              </ul>
            </div>
            <div className="mt-6">
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Future Roadmap</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Advanced AI-powered incident prediction</li>
                <li>Integration with IoT safety devices</li>
                <li>Extended mobile capabilities</li>
                <li>Enhanced reporting features</li>
                <li>Global compliance framework support</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
