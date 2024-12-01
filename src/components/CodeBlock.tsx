import { FiCopy, FiCheck } from 'react-icons/fi';
import { useState } from 'react';

interface CodeBlockProps {
  code: string;
}

export default function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative mt-2 group">
      <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto whitespace-pre-wrap break-all">
        <code className="text-sm">{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 rounded-md bg-gray-200 dark:bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity"
        title="Copy to clipboard"
      >
        {copied ? (
          <FiCheck className="w-4 h-4 text-green-500" />
        ) : (
          <FiCopy className="w-4 h-4 text-gray-600 dark:text-gray-400" />
        )}
      </button>
    </div>
  );
}
