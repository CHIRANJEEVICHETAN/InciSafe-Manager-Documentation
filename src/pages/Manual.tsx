import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiBook, FiCpu, FiDownload, FiCode, FiDatabase, FiTool } from 'react-icons/fi';

// Import section components
import ProjectOverview from './documentation/ProjectOverview';
import SystemRequirements from './documentation/SystemRequirements';
import Installation from './documentation/Installation';
import Architecture from './documentation/Architecture';
import DataModel from './documentation/DataModel';
import Maintenance from './documentation/Maintenance';

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  component: React.ComponentType;
}

export default function Manual() {
  const [activeSection, setActiveSection] = useState('overview');

  const sections: Section[] = [
    { 
      id: 'overview', 
      title: 'Project Overview', 
      icon: <FiBook className="w-5 h-5" />,
      component: ProjectOverview
    },
    { 
      id: 'requirements', 
      title: 'System Requirements', 
      icon: <FiCpu className="w-5 h-5" />,
      component: SystemRequirements
    },
    { 
      id: 'installation', 
      title: 'Installation & Deployment', 
      icon: <FiDownload className="w-5 h-5" />,
      component: Installation
    },
    { 
      id: 'architecture', 
      title: 'Architecture', 
      icon: <FiCode className="w-5 h-5" />,
      component: Architecture
    },
    { 
      id: 'database', 
      title: 'Data Model', 
      icon: <FiDatabase className="w-5 h-5" />,
      component: DataModel
    },
    { 
      id: 'maintenance', 
      title: 'Maintenance', 
      icon: <FiTool className="w-5 h-5" />,
      component: Maintenance
    },
  ];

  const ActiveComponent = sections.find(section => section.id === activeSection)?.component || ProjectOverview;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            InciSafe Manager Documentation
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            A Digital Safety Incident Reporting System
          </p>
          <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Version 1.0 | Last Updated: {new Date().toLocaleDateString()}
          </div>
        </div>

        {/* Navigation */}
        <nav className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${
                    activeSection === section.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                {section.icon}
                <span className="ml-2">{section.title}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Content */}
        <AnimatePresence mode="wait">
          <ActiveComponent key={activeSection} />
        </AnimatePresence>

        {/* Footer */}
        <div className="text-center pt-8 text-gray-500 dark:text-gray-400 text-sm pb-8">
          <p> 2024 InciSafe Manager. All rights reserved.</p>
          <p>Created by: Sowjanya H R, Chetan B R, Sneha A, Naveen S</p>
        </div>
      </div>
    </div>
  );
}