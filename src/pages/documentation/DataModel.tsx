import { motion } from 'framer-motion';
import CodeBlock from '../../components/CodeBlock';

export default function DataModel() {
  const userSchema = `{
  "id": "string",
  "email": "string",
  "displayName": "string",
  "role": "enum(admin, user, manager)",
  "department": "string",
  "createdAt": "timestamp",
  "lastLogin": "timestamp",
  "settings": {
    "notifications": "boolean",
    "theme": "enum(light, dark)",
    "language": "string"
  }
}`;

  const incidentSchema = `{
  "id": "string",
  "type": "enum(behavior, fire, safety, other)",
  "title": "string",
  "description": "string",
  "location": {
    "building": "string",
    "floor": "number",
    "room": "string",
    "coordinates": {
      "lat": "number",
      "lng": "number"
    }
  },
  "severity": "enum(low, medium, high, critical)",
  "status": "enum(reported, investigating, resolved)",
  "reportedBy": "userId",
  "assignedTo": "userId",
  "createdAt": "timestamp",
  "updatedAt": "timestamp",
  "resolvedAt": "timestamp?",
  "attachments": [{
    "id": "string",
    "type": "string",
    "url": "string",
    "uploadedAt": "timestamp"
  }],
  "comments": [{
    "id": "string",
    "userId": "string",
    "content": "string",
    "createdAt": "timestamp"
  }]
}`;

  const firebaseRules = `rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // User document rules
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth.uid == userId;
    }
    
    // Incident document rules
    match /incidents/{incidentId} {
      allow read: if request.auth != null;
      allow create: if request.auth != null;
      allow update: if request.auth != null 
        && (resource.data.reportedBy == request.auth.uid 
            || get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin');
    }
  }
}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Data Model</h2>
      
      <div className="space-y-8 text-gray-600 dark:text-gray-400">
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Database Schema</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Users Collection</h4>
              <CodeBlock code={userSchema} />
            </div>

            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Incidents Collection</h4>
              <CodeBlock code={incidentSchema} />
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Data Relationships</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Primary Collections</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Users - Core user data and authentication</li>
                <li>Incidents - Incident reports and details</li>
                <li>Categories - Incident classification types</li>
                <li>Departments - Organizational structure</li>
                <li>Notifications - System notifications</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Relationships</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>User → Incidents (one-to-many)</li>
                <li>Incident → Comments (one-to-many)</li>
                <li>User → Departments (many-to-one)</li>
                <li>Incident → Categories (many-to-one)</li>
                <li>User → Notifications (one-to-many)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Security Rules</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Firebase Security Rules</h4>
              <CodeBlock code={firebaseRules} />
            </div>

            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Access Control</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Role-based access control (RBAC)</li>
                <li>Department-level data isolation</li>
                <li>Field-level security rules</li>
                <li>Audit logging for sensitive operations</li>
                <li>Data encryption at rest</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Data Access Patterns</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Common Queries</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Fetch active incidents by department</li>
                <li>Get incidents by severity level</li>
                <li>List incidents assigned to user</li>
                <li>Search incidents by location</li>
                <li>Filter incidents by date range</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Indexing Strategy</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Compound index on status and createdAt</li>
                <li>Index on location.building</li>
                <li>Index on assignedTo and status</li>
                <li>Index on type and severity</li>
                <li>Full-text search on description</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
