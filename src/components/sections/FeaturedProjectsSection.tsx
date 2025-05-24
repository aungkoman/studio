import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

// const projects = [
//   {
//     thumbnail: "https://placehold.co/600x400/4681C3/FFFFFF",
//     dataAiHint: "web application",
//     name: "E-commerce Platform",
//     description: "A scalable e-commerce solution with advanced features.",
//     outcome: "Increased sales by 30% within 6 months.",
//   },
//   {
//     thumbnail: "https://placehold.co/600x400/82CA9D/FFFFFF",
//     dataAiHint: "mobile app",
//     name: "Project Management App",
//     description: "A mobile app for efficient team collaboration and task tracking.",
//     outcome: "Improved team productivity by 20%.",
//   },
//   {
//     thumbnail: "https://placehold.co/600x400/A0AEC0/FFFFFF",
//     dataAiHint: "data dashboard",
//     name: "Data Analytics Dashboard",
//     description: "An interactive dashboard for visualizing complex business data.",
//     outcome: "Enabled data-driven decision making.",
//   },
// ];

const projects = [
  {
    thumbnail: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    dataAiHint: "web application",
    name: "E-commerce Platform",
    description: "A scalable e-commerce solution with advanced features.",
    outcome: "Increased sales by 30% within 6 months.",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    dataAiHint: "mobile app",
    name: "Project Management App",
    description: "A mobile app for efficient team collaboration and task tracking.",
    outcome: "Improved team productivity by 20%.",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    dataAiHint: "data dashboard",
    name: "Data Analytics Dashboard",
    description: "An interactive dashboard for visualizing complex business data.",
    outcome: "Enabled data-driven decision making.",
  },
];


export default function FeaturedProjectsSection() {
  return (
    <AnimatedSection id="featured-projects" className="bg-secondary">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="text-center max-w-2xl mx-auto mb-12 text-lg">
          Discover some of our success stories and see how we've helped businesses like yours achieve their goals.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
             <AnimatedSection animationClassName="opacity-0 scale-90" once={true} as="div" key={project.name} style={{transitionDelay: `${index * 100}ms`}}>
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-2xl transition-shadow duration-300 bg-card">
                <CardHeader className="p-0">
                  <Image
                    src={project.thumbnail}
                    alt={project.name}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                    data-ai-hint={project.dataAiHint}
                  />
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <CardTitle className="text-xl mb-2">{project.name}</CardTitle>
                  <p className="text-muted-foreground text-sm mb-2">{project.description}</p>
                  <p className="text-sm font-semibold text-primary">{project.outcome}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="link" asChild className="p-0 text-primary hover:text-accent">
                    <Link href="#projects">View Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="#projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
