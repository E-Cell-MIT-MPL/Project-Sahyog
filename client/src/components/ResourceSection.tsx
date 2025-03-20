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

  // Set the first resource as active initially
  useEffect(() => {
    if (resources && resources.length > 0 && activeResource === null) {
      setActiveResource(resources[0].id);
    }
  }, [resources, activeResource]);

  // Handle resource card hover
  const handleResourceHover = (id: number | null) => {
    // If hovering on any card, make sure only that one is hovered
    setHoveredResource(id);
    
    // If we're hovering on a card that's not the first one, make the first one not active
    // If we're hovering on the first one or nothing, set the first one to be active
    if (resources && resources.length > 0) {
      const firstResourceId = resources[0].id;
      if (id !== null && id !== firstResourceId) {
        setActiveResource(id);
      } else if (id === null) {
        setActiveResource(firstResourceId);
      } else {
        setActiveResource(id);
      }
    }
  };

  // Handle resource card click
  const handleResourceClick = (id: number, event: React.MouseEvent<HTMLDivElement>) => {
    // If clicking on a card other than the active one, make it the active one
    if (id !== activeResource) {
      setActiveResource(id);
    } else {
      setActiveResource(null);
    }
    
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
      {/* Resource container with tagline to the left */}
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto">
        {/* Tagline on the left */}
        <div className="md:w-1/3 px-6 mb-8 md:mb-0 md:pr-12">
          <p className="text-lg md:text-xl text-gray-700 italic font-serif leading-relaxed">
            "Bridging the gap between<br />ideation<br />and execution for aspiring<br />entrepreneurs."
          </p>
        </div>
        
        {/* Resources on the right */}
        <div className="md:w-2/3 relative">
          
          <div 
            ref={containerRef}
            className="flex justify-start space-x-6 max-w-full overflow-x-auto pb-8 z-10 relative"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {resources?.map((resource: Resource, index) => (
              <div
                key={resource.id}
                className={`resource-card flex-shrink-0 ${
                  hoveredResource === resource.id || activeResource === resource.id
                    ? 'w-72 md:w-80'
                    : 'w-32 md:w-36'
                } h-64 md:h-80 bg-[#E8D4C3] bg-opacity-90 rounded-md cursor-pointer relative transition-all duration-500 
                  ${hoveredResource === resource.id
                    ? 'z-20 shadow-md'
                    : activeResource === resource.id
                    ? 'z-30 shadow-lg'
                    : 'z-10'
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
      </div>
    </section>
  );
};

export default ResourceSection;
