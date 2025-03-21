import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lightbulb, Rocket, Zap } from 'lucide-react';

const StartupStage = () => {
  const navigate = useNavigate();

  const handleStageClick = () => {
    navigate('/business-clinic');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-300 to-orange-300 flex flex-col items-center justify-center p-4 animate-fadeIn">
      <h1 className="text-4xl font-bold text-gray-800 mb-12 animate-slideDown">
        CHOOSE YOUR STARTUP STAGE
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {[
          { title: 'IDEATION', icon: Lightbulb },
          { title: 'INNOVATION', icon: Zap },
          { title: 'STARTUP', icon: Rocket }
        ].map(({ title, icon: Icon }, index) => (
          <div
            key={title}
            onClick={handleStageClick}
            className={`bg-gray-900 rounded-2xl p-8 text-white cursor-pointer 
                     transform transition-all duration-500
                     hover:shadow-[0_0_30px_rgba(255,255,255,0.7)]
                     hover:scale-105 hover:rotate-1
                     flex flex-col items-center justify-center
                     min-h-[300px] animate-slideUp
                     hover:bg-gray-800`}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <Icon 
              size={48} 
              className="mb-4 transition-transform duration-500 group-hover:rotate-12
                         animate-pulse"
            />
            <h2 className="text-2xl font-semibold transition-all duration-300
                          hover:tracking-wider">{title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartupStage;