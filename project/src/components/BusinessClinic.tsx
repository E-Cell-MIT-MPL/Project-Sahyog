import React from 'react';
import { useNavigate } from 'react-router-dom';

const BusinessClinic = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-300 to-orange-300 flex flex-col items-center justify-center p-4 animate-fadeIn">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-12 animate-slideDown">
          HAVE YOU APPROACHED BUSINESS CLINIC
        </h1>
        
        <div className="flex gap-8 justify-center animate-slideUp">
          <button
            onClick={() => navigate('/')}
            className="bg-gray-900 text-white px-12 py-4 rounded-xl text-xl
                     transform transition-all duration-500
                     hover:shadow-[0_0_30px_rgba(255,255,255,0.7)]
                     hover:scale-105 hover:rotate-1
                     hover:bg-gray-800"
          >
            YES
          </button>
          
          <button
            onClick={() => navigate('/')}
            className="bg-gray-900 text-white px-12 py-4 rounded-xl text-xl
                     transform transition-all duration-500
                     hover:shadow-[0_0_30px_rgba(255,255,255,0.7)]
                     hover:scale-105 hover:-rotate-1
                     hover:bg-gray-800"
          >
            NO
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessClinic;