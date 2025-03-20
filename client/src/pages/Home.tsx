import React from "react";
import BusinessHeader from "@/components/BusinessHeader";
import ResourceSection from "@/components/ResourceSection";
import PitchForm from "@/components/PitchForm";
import BusinessFooter from "@/components/BusinessFooter";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <BusinessHeader />
      
      <main className="max-w-4xl mx-auto px-4 pb-16 flex-grow">
        <ResourceSection />
        <PitchForm />
      </main>
      
      <BusinessFooter />
    </div>
  );
};

export default Home;
