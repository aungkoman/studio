"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { testimonialGenerator, type TestimonialGeneratorInput } from "@/ai/flows/testimonial-generator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  clientName: z.string().min(2, "Client name is required."),
  clientCompany: z.string().min(2, "Company name is required."),
  clientRole: z.string().min(2, "Client role is required."),
  serviceUsed: z.string().min(5, "Service used is required."),
  projectOutcome: z.string().min(10, "Project outcome description is too short."),
  tone: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function TestimonialGenerator() {
  const { toast } = useToast();
  const [generatedTestimonial, setGeneratedTestimonial] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setGeneratedTestimonial(null);
    try {
      const result = await testimonialGenerator(data as TestimonialGeneratorInput);
      setGeneratedTestimonial(result.testimonial);
      toast({
        title: "Testimonial Generated!",
        description: "Your AI-crafted testimonial is ready below.",
        variant: "default",
      });
      reset(); // Optionally reset form fields
    } catch (error) {
      console.error("Error generating testimonial:", error);
      toast({
        title: "Error Generating Testimonial",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto bg-background shadow-none border-none md:border md:shadow-sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-6 pt-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="clientName">Client Name</Label>
              <Input id="clientName" {...register("clientName")} placeholder="e.g., John Doe" />
              {errors.clientName && <p className="text-sm text-destructive">{errors.clientName.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="clientCompany">Client Company</Label>
              <Input id="clientCompany" {...register("clientCompany")} placeholder="e.g., Acme Corp" />
              {errors.clientCompany && <p className="text-sm text-destructive">{errors.clientCompany.message}</p>}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="clientRole">Client Role/Position</Label>
            <Input id="clientRole" {...register("clientRole")} placeholder="e.g., CEO" />
            {errors.clientRole && <p className="text-sm text-destructive">{errors.clientRole.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="serviceUsed">Service Used</Label>
            <Input id="serviceUsed" {...register("serviceUsed")} placeholder="e.g., Web Application Development" />
            {errors.serviceUsed && <p className="text-sm text-destructive">{errors.serviceUsed.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="projectOutcome">Project Outcome/Key Benefits</Label>
            <Textarea id="projectOutcome" {...register("projectOutcome")} placeholder="Describe the positive results or benefits experienced..." />
            {errors.projectOutcome && <p className="text-sm text-destructive">{errors.projectOutcome.message}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="tone">Desired Tone (Optional)</Label>
            <Input id="tone" {...register("tone")} placeholder="e.g., Professional, Enthusiastic, Friendly" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="submit" disabled={isLoading} className="bg-primary hover:bg-primary/90">
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Generate Testimonial
          </Button>
        </CardFooter>
      </form>

      {generatedTestimonial && (
        <div className="mt-8 p-6 border-t border-border">
          <h4 className="text-lg font-semibold mb-2">Generated Testimonial:</h4>
          <Textarea value={generatedTestimonial} readOnly rows={6} className="bg-muted/50" />
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => {
              navigator.clipboard.writeText(generatedTestimonial);
              toast({title: "Copied!", description: "Testimonial copied to clipboard."});
            }}
            className="mt-2"
          >
            Copy to Clipboard
          </Button>
        </div>
      )}
    </Card>
  );
}
