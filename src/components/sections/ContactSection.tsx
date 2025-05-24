"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Send, Loader2 } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { useState } from "react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required."),
  email: z.string().email("Invalid email address."),
  phone: z.string().optional(),
  subject: z.string().min(3, "Subject is required."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Contact form data:", data);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
    });
    reset();
    setIsSubmitting(false);
  };

  return (
    <AnimatedSection id="contact" className="bg-secondary">
      <div className="section-container">
        <h2 className="section-title">Let's Build Something Amazing Together</h2>
        <p className="text-center max-w-2xl mx-auto mb-12 text-lg">
          Have a project in mind, a question, or just want to say hello? We'd love to hear from you.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection animationClassName="opacity-0 -translate-x-10" once={true} as="div">
            <Card className="bg-card p-2 md:p-0 shadow-none md:shadow-xl md:bg-card">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Your Name" {...register("name")} />
                    {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your@email.com" {...register("email")} />
                    {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input id="phone" type="tel" placeholder="(123) 456-7890" {...register("phone")} />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject / Interested Service</Label>
                    <Input id="subject" placeholder="e.g., Web Development Inquiry" {...register("subject")} />
                    {errors.subject && <p className="text-sm text-destructive mt-1">{errors.subject.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea id="message" placeholder="Tell us about your project or inquiry..." rows={5} {...register("message")} />
                    {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                    {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection animationClassName="opacity-0 translate-x-10" once={true} as="div" className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Direct Contact Information</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:info@techsoftware100.com" className="hover:text-primary transition-colors">info@techsoftware100.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:+1234567890" className="hover:text-primary transition-colors">(123) 456-7890</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <span>123 Innovation Drive, Tech City, TX 75001</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Link href="#" aria-label="LinkedIn"><Linkedin /></Link>
                </Button>
                <Button variant="outline" size="icon" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Link href="#" aria-label="Twitter"><Twitter /></Link>
                </Button>
                <Button variant="outline" size="icon" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Link href="#" aria-label="GitHub"><Github /></Link>
                </Button>
              </div>
            </div>
            
            <div>
               <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
               <p>Monday - Friday: 9:00 AM - 6:00 PM (CST)</p>
               <p>Saturday - Sunday: Closed</p>
            </div>

            {/* Placeholder for Google Map embed */}
            {/* <div className="aspect-video bg-muted rounded-lg flex items-center justify-center text-muted-foreground shadow-inner">
              <MapPin className="h-10 w-10 mr-2"/> Google Map Placeholder
            </div> */}
            {/* Real Google Maps Embed */}
            <div className="aspect-video rounded-lg overflow-hidden shadow-inner">
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.1724116956307!2d96.15154427570495!3d19.832656527782458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c8b8ad686cdd77%3A0xc831d34b5a62741b!2sMyat%20Lay-3%20St%2C%20Myanmar%20(Burma)!5e0!3m2!1sen!2ssg!4v1748065794673!5m2!1sen!2ssg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.1724116956307!2d96.15154427570495!3d19.832656527782458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c8b8ad686cdd77%3A0xc831d34b5a62741b!2sMyat%20Lay-3%20St%2C%20Myanmar%20(Burma)!5e0!3m2!1sen!2ssg!4v1748065794673!5m2!1sen!2ssg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                aria-label="Google Maps location of our office"
              ></iframe>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </AnimatedSection>
  );
}
