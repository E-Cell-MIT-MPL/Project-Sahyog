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
              className="resource-card flex-shrink-0 w-32 h-64 md:w-40 md:h-80 bg-gray-300 bg-opacity-70 rounded-lg animate-pulse"
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
    <section className="mb-16 py-8">
      <div className="relative">
        <div 
          ref={containerRef}
          className="flex justify-center space-x-6 max-w-full overflow-x-auto pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {resources?.map((resource: Resource) => (
            <div
              key={resource.id}
              className={`resource-card flex-shrink-0 ${
                hoveredResource === resource.id || activeResource === resource.id
                  ? 'w-72 h-44 md:w-80 md:h-52'
                  : 'w-32 h-64 md:w-36 md:h-80'
              } bg-[#E8D4C3] bg-opacity-90 rounded-md p-4 cursor-pointer flex items-center justify-center transition-all duration-500 
                ${hoveredResource === resource.id
                  ? 'z-10 shadow-md'
                  : activeResource === resource.id
                  ? 'z-20 shadow-lg'
                  : ''
                }
              `}
              onClick={(e) => handleResourceClick(resource.id, e)}
              onMouseEnter={() => handleResourceHover(resource.id)}
              onMouseLeave={() => handleResourceHover(null)}
            >
              <div className={`transition-all duration-300 ${
                hoveredResource === resource.id || activeResource === resource.id 
                  ? 'text-center' 
                  : 'vertical-text'
              }`}>
                <h3 className={`font-serif font-bold text-black tracking-wide ${
                  hoveredResource === resource.id || activeResource === resource.id
                    ? 'text-xl mb-3'
                    : 'mb-0 writing-mode-vertical text-rotate-90'
                }`}>
                  {resource.title}
                </h3>
                {(hoveredResource === resource.id || activeResource === resource.id) && (
                  <p className="text-sm font-sans text-gray-700 animate-fadeIn mt-2">
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
