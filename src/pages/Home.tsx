import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome to InciSafe Manager
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
          A product of Loginware Softtec Private Limited, revolutionizing workplace safety
          through a robust, AI-enabled digital platform.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#features"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Explore Features
          </a>
          <a
            href="https://demo.inciSafeManager.com"
            className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            Try Demo
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {quickLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {link.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {link.description}
              </p>
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

const quickLinks = [
  {
    title: 'GitHub Repository',
    description: 'Access our open-source code and contribute',
    href: 'https://github.com/CHIRANJEEVICHETAN/InciSafe-Manager',
  },
  {
    title: 'User Forum',
    description: 'Join discussions and get help from the community',
    href: 'https://discord.gg/SuZhmDB3',
  },
  {
    title: 'Documentation',
    description: 'Read comprehensive guides and tutorials',
    href: '/manual',
  },
  {
    title: 'Download',
    description: 'Get the latest version of InciSafe Manager',
    href: 'https://github.com/CHIRANJEEVICHETAN/InciSafe-Manager/releases/latest',
  },
]; 