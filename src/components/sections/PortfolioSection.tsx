import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink, Eye } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

// const projects = [
//   {
//     title: "Enterprise CRM System",
//     client: "Global Corp Inc.",
//     category: "Web App",
//     thumbnail: "https://placehold.co/800x600/4681C3/FFFFFF",
//     dataAiHint: "crm dashboard",
//     overview: "A comprehensive CRM system designed to streamline sales and customer relations for a large enterprise.",
//     challenge: "Needed a unified platform to manage a growing customer base and complex sales pipelines.",
//     solution: "Developed a custom, scalable web-based CRM with modules for contact management, sales automation, reporting, and analytics.",
//     features: ["Lead Management", "Sales Funnel Tracking", "Automated Reporting", "Third-party Integrations"],
//     tech: ["React", "Node.js", "PostgreSQL", "AWS"],
//     impact: "Reduced lead processing time by 40% and improved sales team efficiency by 25%.",
//     liveLink: "#"
//   },
//   {
//     title: "Healthcare Mobile App",
//     client: "MediConnect Solutions",
//     category: "Mobile App",
//     thumbnail: "https://placehold.co/800x600/82CA9D/FFFFFF",
//     dataAiHint: "health app interface",
//     overview: "A patient-centric mobile application for appointment scheduling, health record access, and telemedicine.",
//     challenge: "Improve patient access to healthcare services and streamline communication with providers.",
//     solution: "Built native iOS and Android apps with secure data handling, real-time chat, and video consultation features.",
//     features: ["Appointment Booking", "EHR Access", "Secure Messaging", "Video Calls", "Prescription Refills"],
//     tech: ["Swift", "Kotlin", "Firebase", "WebRTC"],
//     impact: "Increased patient engagement by 50% and reduced no-show rates for appointments.",
//     liveLink: "#"
//   },
//   {
//     title: "AI-Powered Analytics Platform",
//     client: "Data Insights Ltd.",
//     category: "Web App",
//     thumbnail: "https://placehold.co/800x600/A0AEC0/FFFFFF",
//     dataAiHint: "analytics graph",
//     overview: "A sophisticated platform using AI/ML to provide predictive analytics and business intelligence.",
//     challenge: "Extract actionable insights from vast amounts of unstructured data.",
//     solution: "Created a web platform with advanced data visualization tools, machine learning models for forecasting, and customizable dashboards.",
//     features: ["Predictive Modeling", "Anomaly Detection", "Interactive Dashboards", "Natural Language Processing"],
//     tech: ["Python (Django)", "TensorFlow", "D3.js", "Elasticsearch"],
//     impact: "Enabled clients to identify new market trends 2X faster and optimize operations.",
//     liveLink: "#"
//   }
// ];

const projects = [
  {
    title: "Enterprise CRM System",
    client: "Global Corp Inc.",
    category: "Web App",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    dataAiHint: "crm dashboard",
    overview: "A comprehensive CRM system designed to streamline sales and customer relations for a large enterprise.",
    challenge: "Needed a unified platform to manage a growing customer base and complex sales pipelines.",
    solution: "Developed a custom, scalable web-based CRM with modules for contact management, sales automation, reporting, and analytics.",
    features: ["Lead Management", "Sales Funnel Tracking", "Automated Reporting", "Third-party Integrations"],
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    impact: "Reduced lead processing time by 40% and improved sales team efficiency by 25%.",
    liveLink: "#"
  },
  {
    title: "Healthcare Mobile App",
    client: "MediConnect Solutions",
    category: "Mobile App",
    thumbnail: "https://images.pexels.com/photos/8386437/pexels-photo-8386437.jpeg?auto=compress&cs=tinysrgb&w=1600",
    dataAiHint: "health app interface",
    overview: "A patient-centric mobile application for appointment scheduling, health record access, and telemedicine.",
    challenge: "Improve patient access to healthcare services and streamline communication with providers.",
    solution: "Built native iOS and Android apps with secure data handling, real-time chat, and video consultation features.",
    features: ["Appointment Booking", "EHR Access", "Secure Messaging", "Video Calls", "Prescription Refills"],
    tech: ["Swift", "Kotlin", "Firebase", "WebRTC"],
    impact: "Increased patient engagement by 50% and reduced no-show rates for appointments.",
    liveLink: "#"
  },
  {
    title: "AI-Powered Analytics Platform",
    client: "Data Insights Ltd.",
    category: "Web App",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    dataAiHint: "analytics graph",
    overview: "A sophisticated platform using AI/ML to provide predictive analytics and business intelligence.",
    challenge: "Extract actionable insights from vast amounts of unstructured data.",
    solution: "Created a web platform with advanced data visualization tools, machine learning models for forecasting, and customizable dashboards.",
    features: ["Predictive Modeling", "Anomaly Detection", "Interactive Dashboards", "Natural Language Processing"],
    tech: ["Python (Django)", "TensorFlow", "D3.js", "Elasticsearch"],
    impact: "Enabled clients to identify new market trends 2X faster and optimize operations.",
    liveLink: "#"
  }
];
export default function PortfolioSection() {
  // TODO: Implement filtering/sorting if needed
  return (
    <AnimatedSection id="projects" className="bg-background">
      <div className="section-container">
        <h2 className="section-title">Our Portfolio</h2>
        <p className="text-center max-w-3xl mx-auto mb-12 text-lg">
          We're proud of the solutions we've delivered. Here's a glimpse into some of the projects that showcase our expertise and commitment to turning ideas into reality.
        </p>

        {/* TODO: Add filtering controls here if desired */}

        <div className="space-y-12">
          {projects.map((project, index) => (
            <AnimatedSection animationClassName="opacity-0 translate-y-10" once={true} as="div" key={project.title} style={{transitionDelay: `${index * 100}ms`}}>
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
                <div className="grid md:grid-cols-12 gap-0 md:gap-6">
                  <div className="md:col-span-5 lg:col-span-4">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-64 md:h-full object-cover"
                      data-ai-hint={project.dataAiHint}
                    />
                  </div>
                  <div className="md:col-span-7 lg:col-span-8 p-6">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-2xl mb-1">{project.title}</CardTitle>
                          <p className="text-sm text-primary font-medium">Client: {project.client}</p>
                        </div>
                        <Badge variant="secondary">{project.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0 mb-4">
                      <p className="text-sm text-muted-foreground mb-3">{project.overview}</p>
                      
                      <h4 className="font-semibold text-sm mb-1">The Challenge:</h4>
                      <p className="text-xs text-muted-foreground mb-2">{project.challenge}</p>
                      
                      <h4 className="font-semibold text-sm mb-1">Our Solution:</h4>
                      <p className="text-xs text-muted-foreground mb-3">{project.solution}</p>
                      
                      <h4 className="font-semibold text-sm mb-1">Key Features:</h4>
                      <ul className="list-disc list-inside text-xs text-muted-foreground mb-3">
                        {project.features.map(feature => <li key={feature}>{feature}</li>)}
                      </ul>
                      
                      <h4 className="font-semibold text-sm mb-1">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tech.map(t => <Badge key={t} variant="outline" className="text-xs">{t}</Badge>)}
                      </div>
                      
                      <h4 className="font-semibold text-sm mb-1">Results/Impact:</h4>
                      <p className="text-xs text-muted-foreground">{project.impact}</p>
                    </CardContent>
                    <CardFooter className="p-0">
                       {project.liveLink && project.liveLink !== "#" && (
                         <Button variant="outline" size="sm" asChild>
                           <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                             Live Project <ExternalLink className="ml-2 h-3 w-3" />
                           </Link>
                         </Button>
                       )}
                    </CardFooter>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
