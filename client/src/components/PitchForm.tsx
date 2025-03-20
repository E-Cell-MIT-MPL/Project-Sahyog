import React, { useState } from "react";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertPitchSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

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

const PitchForm: React.FC = () => {
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
    <section className="bg-tan bg-opacity-80 rounded-lg p-6 md:p-10 max-w-2xl mx-auto">
      <h2 className="font-serif text-2xl md:text-3xl text-center mb-8 text-navy">
        Submit Your Startup Pitch
      </h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-navy font-medium">Name:</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    className="form-input bg-cream bg-opacity-70 border-none rounded-md p-2 text-navy" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-navy font-medium">Email:</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    type="email"
                    className="form-input bg-cream bg-opacity-70 border-none rounded-md p-2 text-navy" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="startupName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-navy font-medium">Startup Name:</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    className="form-input bg-cream bg-opacity-70 border-none rounded-md p-2 text-navy" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="flex flex-col space-y-2">
            <Label htmlFor="pitchDoc" className="text-navy font-medium">
              Upload pitch Doc:
            </Label>
            <FileUpload
              id="pitchDoc"
              name="pitchDoc"
              buttonLabel="upload here"
              onFileChange={handleFileChange}
              acceptedFileTypes=".pdf,.doc,.docx,.ppt,.pptx"
            />
          </div>
          
          <FormField
            control={form.control}
            name="pitchPresented"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-navy font-medium">Pitch Presented:</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={(value) => field.onChange(value === 'true')}
                    defaultValue={field.value ? 'true' : 'false'}
                    className="flex items-center space-x-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem 
                        value="true" 
                        id="yes"
                        className="border-navy text-navy focus:ring-navy"
                      />
                      <label htmlFor="yes" className="cursor-pointer">YES</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem 
                        value="false" 
                        id="no" 
                        className="border-navy text-navy focus:ring-navy"
                      />
                      <label htmlFor="no" className="cursor-pointer">NO</label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="pt-4 flex flex-col items-center">
            <Button
              type="submit"
              className="submit-btn bg-navy text-cream font-medium py-2 px-8 rounded-md uppercase tracking-wider"
              disabled={submitMutation.isPending}
            >
              {submitMutation.isPending ? "SUBMITTING..." : "SUBMIT"}
            </Button>
            <p className="text-xs mt-2 text-navy opacity-70">check your mail!</p>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default PitchForm;
