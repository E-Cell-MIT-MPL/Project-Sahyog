import React, { useState } from "react";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertPitchSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { FiZap } from "react-icons/fi";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FileUpload } from "@/components/ui/file-upload";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Add validation rules to the schema
const formSchema = insertPitchSchema.extend({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  startupName: z.string().min(1, "Startup name is required"),
});

interface PitchFormProps {
  showLogoAnimation?: boolean;
}

const PitchForm: React.FC<PitchFormProps> = ({ showLogoAnimation = false }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      startupName: "",
      pitchDocName: "",
      pitchPresented: false,
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      const response = await apiRequest("POST", "/api/pitches", values);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/pitches'] });
      toast({
        title: "Submission Successful",
        description: "Your pitch has been submitted. Check your email for confirmation!",
      });
      form.reset();
      setSelectedFile(null);
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: error.message || "There was a problem submitting your pitch",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Include the filename if a file was selected
    if (selectedFile) {
      values.pitchDocName = selectedFile.name;
    }
    
    submitMutation.mutate(values);
  };

  const handleFileChange = (file: File | null) => {
    setSelectedFile(file);
    if (file) {
      form.setValue("pitchDocName", file.name);
    } else {
      form.setValue("pitchDocName", "");
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center gap-8 px-4">
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-10 md:hidden">
        <FiZap size={60} className="text-yellow-400 animate-pulse opacity-80" />
      </div>
      
      {/* Logo animation beside the form */}
      <div className="hidden md:flex flex-col items-center justify-center md:w-1/3">
        <div className={`transition-all duration-700 ${
          showLogoAnimation 
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 transform translate-y-20'
        }`}>
          <div className={`mb-6 ${showLogoAnimation ? 'animate-popIn animate-float' : ''}`}>
            <FiZap size={100} className="text-yellow-400 animate-pulse opacity-80" />
          </div>
          <div className={`text-center ${showLogoAnimation ? 'animate-fadeIn' : ''}`}>
            <h3 className="text-white text-xl font-bold mb-2">BUSINESS CLINIC</h3>
            <p className="text-white opacity-90">Ideas Come to Life</p>
          </div>
        </div>
      </div>
      
      <section className="bg-gradient-to-b from-[#E8D4C3] via-[#E0A790] to-[#735585] rounded-lg md:w-2/3 w-full shadow-lg overflow-hidden relative">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <div className="relative p-6 md:p-8">
          <h2 className="font-serif text-2xl md:text-3xl text-center mb-8 text-white">
            Submit Your Startup Pitch
          </h2>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Name:</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="form-input bg-white/30 backdrop-blur-sm border-none rounded-md p-2 text-white placeholder:text-white/70" 
                        placeholder="Your Name"
                      />
                    </FormControl>
                    <FormMessage className="text-red-200" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Email:</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        type="email"
                        className="form-input bg-white/30 backdrop-blur-sm border-none rounded-md p-2 text-white placeholder:text-white/70" 
                        placeholder="your.email@example.com"
                      />
                    </FormControl>
                    <FormMessage className="text-red-200" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="startupName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Startup Name:</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="form-input bg-white/30 backdrop-blur-sm border-none rounded-md p-2 text-white placeholder:text-white/70" 
                        placeholder="Your Startup"
                      />
                    </FormControl>
                    <FormMessage className="text-red-200" />
                  </FormItem>
                )}
              />
              
              <div className="flex flex-col space-y-2">
                <Label htmlFor="pitchDoc" className="text-white">
                  Upload Pitch Doc:
                </Label>
                <div className="flex justify-center">
                  <FileUpload
                    id="pitchDoc"
                    name="pitchDoc"
                    buttonLabel="upload here"
                    buttonClassName="bg-white/30 hover:bg-white/40 text-white border-none"
                    onFileChange={handleFileChange}
                    acceptedFileTypes="*"
                  />
                </div>
              </div>
              
              <FormField
                control={form.control}
                name="pitchPresented"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-white">Pitch Presented:</FormLabel>
                    <FormControl>
                      <div className="flex justify-center">
                        <RadioGroup
                          onValueChange={(value) => field.onChange(value === 'true')}
                          defaultValue={field.value ? 'true' : 'false'}
                          className="flex items-center space-x-10"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem 
                              value="true" 
                              id="yes"
                              className="border-white text-white bg-transparent focus:ring-white"
                            />
                            <label htmlFor="yes" className="cursor-pointer text-white">YES</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem 
                              value="false" 
                              id="no" 
                              className="border-white text-white bg-transparent focus:ring-white"
                            />
                            <label htmlFor="no" className="cursor-pointer text-white">NO</label>
                          </div>
                        </RadioGroup>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-200" />
                  </FormItem>
                )}
              />
              
              <div className="pt-4 flex flex-col items-center">
                <Button
                  type="submit"
                  className="submit-btn bg-indigo-900 hover:bg-indigo-800 text-white font-medium py-2 px-8 rounded-md uppercase tracking-wider shadow-md"
                  disabled={submitMutation.isPending}
                >
                  {submitMutation.isPending ? "SUBMITTING..." : "SUBMIT"}
                </Button>
                <p className="text-xs mt-2 text-white">check your mail!</p>
              </div>
            </form>
          </Form>
        </div>
      </section>
    </div>
  );
};

export default PitchForm;