import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StartupPage = () => {
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
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Startup Stage</h1>
        
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Launch Your Startup</h2>
          <p className="text-gray-600 mb-6">
            Time to bring your innovation to market. In the startup stage, we'll help you with:
          </p>
          
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-2">
              • Business planning
            </li>
            <li className="flex items-center gap-2">
              • Funding strategies
            </li>
            <li className="flex items-center gap-2">
              • Market entry
            </li>
            <li className="flex items-center gap-2">
              • Growth planning
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StartupPage;