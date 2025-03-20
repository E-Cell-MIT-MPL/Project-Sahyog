import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Resource } from "@shared/schema";
import { centerResourceCard } from "@/lib/utils";

const ResourceSection: React.FC = () => {
  const [hoveredResource, setHoveredResource] = useState<number | null>(null);
  const [activeResource, setActiveResource] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { data: resources = [], isLoading, error } = useQuery({
    queryKey: ['/api/resources'],
  });

  // Handle resource card hover
  const handleResourceHover = (id: number | null) => {
    setHoveredResource(id);
  };

  // Handle resource card click
  const handleResourceClick = (id: number, event: React.MouseEvent<HTMLDivElement>) => {
    setActiveResource(activeResource === id ? null : id);
    
    // Center the clicked card
    if (containerRef.current) {
      centerResourceCard(event.currentTarget, containerRef.current);
    }
  };

  if (isLoading) {
    return (
      <section className="mb-12">
        <div className="flex justify-center space-x-4 overflow-x-auto pb-6">
          {[1, 2, 3, 4].map((i) => (
            <div 
              key={i}
              className="resource-card flex-shrink-0 w-64 h-32 md:w-72 md:h-40 bg-gray-300 bg-opacity-70 rounded-lg animate-pulse"
            />
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mb-12">
        <div className="text-center p-6 bg-red-100 rounded-lg">
          <p className="text-red-700">
            Error loading resources. Please try again later.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-16">
      <div className="relative">
        <div 
          ref={containerRef}
          className="flex justify-center space-x-6 max-w-full overflow-x-auto pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {resources?.map((resource: Resource) => (
            <div
              key={resource.id}
              className={`resource-card flex-shrink-0 w-56 h-40 md:w-72 md:h-52 bg-[#E8D4C3] bg-opacity-90 rounded-md p-4 flex items-center justify-center cursor-pointer ${
                hoveredResource === resource.id
                  ? 'scale-105 z-10 shadow-md transform-gpu transition-all duration-300'
                  : activeResource === resource.id
                  ? 'scale-110 z-20 shadow-lg transform-gpu transition-all duration-300'
                  : 'scale-100 transition-all duration-300'
              }`}
              onClick={(e) => handleResourceClick(resource.id, e)}
              onMouseEnter={() => handleResourceHover(resource.id)}
              onMouseLeave={() => handleResourceHover(null)}
            >
              <div className="text-center">
                <h3 className="font-serif text-lg font-bold text-black mb-3 tracking-wide">
                  {resource.title}
                </h3>
                {activeResource === resource.id && (
                  <p className="text-sm font-sans text-gray-700 animate-fadeIn">
                    {resource.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceSection;
