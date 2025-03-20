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
                  ? 'w-72 md:w-80'
                  : 'w-32 md:w-36'
              } h-64 md:h-80 bg-[#E8D4C3] bg-opacity-90 rounded-md cursor-pointer relative transition-all duration-500 
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
              {/* For non-expanded cards, show vertical text at the bottom right */}
              {(hoveredResource !== resource.id && activeResource !== resource.id) && (
                <div className="absolute bottom-4 right-4">
                  <h3 className="font-serif font-bold text-black tracking-wide writing-mode-vertical text-rotate-90 uppercase">
                    {resource.title}
                  </h3>
                </div>
              )}
              
              {/* For expanded cards, show horizontal content */}
              {(hoveredResource === resource.id || activeResource === resource.id) && (
                <div className="p-4 flex flex-col h-full">
                  <h3 className="font-serif font-bold text-black tracking-wide text-xl mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-sm font-sans text-gray-700 animate-fadeIn">
                    {resource.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceSection;
