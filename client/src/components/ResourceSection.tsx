import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Resource } from "@shared/schema";
import { centerResourceCard } from "@/lib/utils";

const ResourceSection: React.FC = () => {
  const [selectedResource, setSelectedResource] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { data: resources = [], isLoading, error } = useQuery({
    queryKey: ['/api/resources'],
  });

  // Handle resource card click
  const handleResourceClick = (id: number, event: React.MouseEvent<HTMLDivElement>) => {
    setSelectedResource(selectedResource === id ? null : id);
    
    // Center the clicked card
    if (containerRef.current) {
      centerResourceCard(event.currentTarget, containerRef.current);
    }
  };

  if (isLoading) {
    return (
      <section className="mb-12">
        <div className="flex space-x-4 overflow-x-auto pb-6">
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
    <section className="mb-12">
      <div className="relative">
        <div 
          ref={containerRef}
          className="flex space-x-4 max-w-full overflow-x-auto pb-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {resources?.map((resource: Resource) => (
            <div
              key={resource.id}
              className={`resource-card flex-shrink-0 w-64 h-32 md:w-72 md:h-40 bg-tan bg-opacity-70 rounded-lg p-4 flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md ${
                selectedResource === resource.id 
                  ? 'scale-110 z-10 shadow-lg' 
                  : 'scale-100'
              }`}
              onClick={(e) => handleResourceClick(resource.id, e)}
            >
              <div className="text-center">
                <h3 className="font-serif text-lg font-bold text-navy mb-1">
                  {resource.title}
                </h3>
                {selectedResource === resource.id && (
                  <p className="text-sm font-sans text-navy/80">
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
