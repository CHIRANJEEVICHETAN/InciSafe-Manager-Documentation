import { motion } from 'framer-motion';
import CodeBlock from '../../components/CodeBlock';

export default function Installation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Installation & Deployment</h2>
      
      <div className="space-y-8 text-gray-600 dark:text-gray-400">
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Local Development Setup</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Prerequisites</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Node.js 14.0 or higher</li>
                <li>npm or yarn package manager</li>
                <li>Git version control</li>
                <li>Firebase CLI tools</li>
                <li>Google Cloud SDK</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Step-by-Step Installation</h4>
              <ol className="list-decimal list-inside space-y-4">
                <li>
                  Clone the repository:
                  <CodeBlock code="git clone https://github.com/your-org/incisafe-manager.git" />
                </li>
                <li>
                  Install dependencies:
                  <CodeBlock code={`cd incisafe-manager\nnpm install`} />
                </li>
                <li>
                  Configure environment variables:
                  <CodeBlock code={`cp .env.example .env\n# Edit .env with your configuration`} />
                </li>
                <li>
                  Initialize Firebase:
                  <CodeBlock code={`firebase login\nfirebase init`} />
                </li>
                <li>
                  Start the development server:
                  <CodeBlock code="npm run dev" />
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Cloud Deployment</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Azure Deployment Steps</h4>
              <ol className="list-decimal list-inside space-y-4">
                <li>
                  Configure Azure CLI:
                  <CodeBlock 
                    code={`az login\naz account set --subscription your-subscription-id`} 
                  />
                </li>
                <li>
                  Create Azure resources:
                  <CodeBlock 
                    code={`# Create resource group\naz group create --name incisafe-rg --location eastus\n\n# Create app service plan\naz appservice plan create --name incisafe-plan \\\n  --resource-group incisafe-rg --sku B1\n\n# Create web app\naz webapp create --name incisafe-app \\\n  --resource-group incisafe-rg --plan incisafe-plan`} 
                  />
                </li>
                <li>
                  Configure deployment settings:
                  <CodeBlock 
                    code={`az webapp config appsettings set \\\n  --name incisafe-app \\\n  --resource-group incisafe-rg \\\n  --settings SCM_DO_BUILD_DURING_DEPLOYMENT=true`} 
                  />
                </li>
                <li>
                  Deploy the application:
                  <CodeBlock 
                    code={`az webapp deployment source config \\\n  --name incisafe-app \\\n  --resource-group incisafe-rg \\\n  --repo-url https://github.com/your-org/incisafe-manager \\\n  --branch main`} 
                  />
                </li>
              </ol>
            </div>

            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Firebase Configuration</h4>
              <ol className="list-decimal list-inside space-y-4">
                <li>
                  Set up Firebase project:
                  <CodeBlock 
                    code={`firebase projects:create incisafe-manager\nfirebase use incisafe-manager`} 
                  />
                </li>
                <li>
                  Configure Firebase services:
                  <CodeBlock 
                    code={`firebase init firestore\nfirebase init storage\nfirebase init functions`} 
                  />
                </li>
                <li>
                  Deploy Firebase resources:
                  <CodeBlock code="firebase deploy" />
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Post-Deployment Configuration</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Security Setup</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Configure Firebase Authentication providers</li>
                <li>Set up Firestore security rules</li>
                <li>Configure Storage access controls</li>
                <li>Set up SSL certificates</li>
                <li>Configure CORS policies</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Monitoring Setup</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Configure Azure Application Insights</li>
                <li>Set up Firebase Analytics</li>
                <li>Configure error tracking</li>
                <li>Set up performance monitoring</li>
                <li>Configure alert notifications</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
