import React from "react";
import { FiZap } from "react-icons/fi";

const BusinessHeader: React.FC = () => {
  return (
    <header className="pt-10 pb-6 text-center">
      <div className="inline-flex items-center justify-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-wide text-black relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="relative">
              <FiZap size={40} className="text-yellow-400" />
              <div className="absolute inset-0 animate-pulse text-yellow-400 opacity-50">
                <FiZap size={40} />
              </div>
            </div>
          </div>
          <span className="mr-1">BUSIN</span>
          <span className="transform skew-x-12 inline-block relative -top-2">E</span>
          <span className="ml-1">SS</span>
          <br/>
          <span className="tracking-widest">CLINIC</span>
        </h1>
      </div>
    </header>
  );
};

export default BusinessHeader;
