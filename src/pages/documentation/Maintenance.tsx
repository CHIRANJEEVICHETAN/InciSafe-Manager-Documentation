import { motion } from 'framer-motion';

export default function Maintenance() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Maintenance Guide</h2>
      
      <div className="space-y-8 text-gray-600 dark:text-gray-400">
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Regular Maintenance Tasks</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Daily Tasks</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Monitor system health metrics</li>
                <li>Check error logs</li>
                <li>Review security alerts</li>
                <li>Backup verification</li>
                <li>Performance monitoring</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Weekly Tasks</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Database optimization</li>
                <li>Storage cleanup</li>
                <li>Update security patches</li>
                <li>Review system analytics</li>
                <li>Performance testing</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Monthly Tasks</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Full system backup</li>
                <li>Security audit</li>
                <li>Dependency updates</li>
                <li>User access review</li>
                <li>Documentation updates</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Monitoring & Alerts</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">System Monitoring</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Server health metrics</li>
                <li>API response times</li>
                <li>Database performance</li>
                <li>Storage usage</li>
                <li>User activity patterns</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Alert Configuration</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Error rate thresholds</li>
                <li>Performance degradation alerts</li>
                <li>Security breach notifications</li>
                <li>Storage capacity warnings</li>
                <li>API usage limits</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Backup & Recovery</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Backup Strategy</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Daily incremental backups</li>
                <li>Weekly full backups</li>
                <li>Geo-redundant storage</li>
                <li>Encrypted backup storage</li>
                <li>Retention policy management</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Recovery Procedures</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Data restoration process</li>
                <li>System rollback steps</li>
                <li>Disaster recovery plan</li>
                <li>Business continuity procedures</li>
                <li>Emergency contact protocol</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Performance Optimization</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Database Optimization</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Index optimization</li>
                <li>Query performance tuning</li>
                <li>Data archival strategy</li>
                <li>Connection pool management</li>
                <li>Cache optimization</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Application Performance</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Code profiling</li>
                <li>Memory usage optimization</li>
                <li>API response optimization</li>
                <li>Asset compression</li>
                <li>CDN configuration</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
