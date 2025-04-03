
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, Calendar, Check } from 'lucide-react';
import { toast } from "@/lib/toast";

const CTASection = () => {
  const handleGetStarted = () => {
    toast.success("Ready to start your journey!", {
      description: "Redirecting to the registration form",
      position: "bottom-center",
    });
  };
  
  const handleScheduleMeeting = () => {
    toast.info("Schedule a meeting", {
      description: "Opening calendar to schedule a consultation",
      position: "bottom-center",
    });
  };

  return (
    <section id="cta" className="relative bg-indigo-600 py-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-700 to-indigo-500"></div>
        <svg
          className="absolute bottom-0 left-0 right-0 text-indigo-800"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="currentColor"
            fillOpacity="0.15"
            d="M0,128L48,138.7C96,149,192,171,288,160C384,149,480,107,576,106.7C672,107,768,149,864,154.7C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <svg
          className="absolute bottom-0 left-0 right-0 text-indigo-900"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ transform: "translateY(60px)" }}
        >
          <path
            fill="currentColor"
            fillOpacity="0.1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,160C960,181,1056,203,1152,192C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-indigo-100 text-lg mb-8">
              Join our community of innovators and get the support you need to transform your ideas into successful ventures.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                "Access to mentorship from industry experts",
                "Funding opportunities and investor connections",
                "State-of-the-art workspace and resources",
                "Networking events and workshops"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-2">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-indigo-100">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={handleGetStarted}
                className="bg-white text-indigo-700 hover:bg-indigo-50 font-medium px-6 py-6"
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button
                onClick={handleScheduleMeeting}
                variant="outline"
                className="bg-transparent border-2 border-white/50 text-white hover:bg-white/10 hover:border-white font-medium px-6 py-6"
              >
                <Calendar className="mr-2 h-4 w-4" /> Schedule a Meeting
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-5">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Us</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-indigo-200" />
                  </div>
                  <div>
                    <div className="text-sm text-indigo-200">Email</div>
                    <div className="text-white">startup@mahe.edu</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-indigo-200" />
                  </div>
                  <div>
                    <div className="text-sm text-indigo-200">Phone</div>
                    <div className="text-white">+91 820-2924444</div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-white/10 mt-6">
                  <p className="text-indigo-100 text-sm">
                    We're available Monday to Friday, 9:00 AM to 5:00 PM IST
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
