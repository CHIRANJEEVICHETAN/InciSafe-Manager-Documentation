import { motion } from 'framer-motion';

const features = [
  {
    title: 'Intelligent Incident Reporting',
    description: 'Voice-to-text functionality powered by Google Cloud Speech-to-Text API with automated form submission using Gemini AI.',
    icon: '🎯'
  },
  {
    title: 'Comprehensive Role Management',
    description: 'Customizable user roles with controlled access to features based on responsibilities.',
    icon: '👥'
  },
  {
    title: 'Real-Time Notifications',
    description: 'Immediate alerts for new incidents, updates, and task assignments via Firebase Cloud Messaging.',
    icon: '🔔'
  },
  {
    title: 'Enhanced Analytics Dashboard',
    description: 'Detailed incident categorization analytics with actionable insights and customizable visualizations.',
    icon: '📊'
  },
  {
    title: 'AI & Automation',
    description: 'Auto-generated comprehensive descriptions and predictive risk assessment tools.',
    icon: '🤖'
  },
  {
    title: 'Multi-Layer Security',
    description: 'End-to-end encryption with secure authentication and compliance with industry standards.',
    icon: '🔒'
  }
];

export default function Features() {
  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Core Features
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Everything you need to manage workplace safety effectively
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              whileHover={{ scale: 1.05 }}
              className="relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 