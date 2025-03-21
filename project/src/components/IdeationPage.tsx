import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const IdeationPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-200 to-orange-200 p-8">
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-gray-800 hover:text-gray-600 transition-colors mb-8"
      >
        <ArrowLeft size={24} />
        Back to Stages
      </button>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Ideation Stage</h1>
        
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Welcome to the Ideation Phase</h2>
          <p className="text-gray-600 mb-6">
            This is where great ideas take their first shape. During the ideation stage, we'll help you:
          </p>
          
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-2">
              • Validate your business idea
            </li>
            <li className="flex items-center gap-2">
              • Conduct market research
            </li>
            <li className="flex items-center gap-2">
              • Define your target audience
            </li>
            <li className="flex items-center gap-2">
              • Create a basic business model
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IdeationPage;