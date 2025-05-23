import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Code, Globe, Smartphone, Palette, Cloud, ShieldCheck, PenTool, MessageSquare } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Custom Software Development",
    description: "Bespoke software solutions crafted to your exact specifications, driving efficiency and growth.",
    benefits: ["Tailored to specific needs", "Scalable architecture", "Competitive advantage"],
    technologies: ["Python", "Java", "Node.js", "Ruby on Rails"],
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Web Application Development",
    description: "Robust and engaging web applications, from complex platforms to dynamic websites.",
    benefits: ["Cross-platform accessibility", "Enhanced user engagement", "Seamless integration"],
    technologies: ["React", "Angular", "Vue.js", "ASP.NET"],
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps for iOS and Android that captivate users.",
    benefits: ["Wider audience reach", "Improved customer experience", "Offline capabilities"],
    technologies: ["Swift", "Kotlin", "React Native", "Flutter"],
  },
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: "UI/UX Design",
    description: "Intuitive and visually stunning user interfaces that ensure a seamless user experience.",
    benefits: ["Increased user satisfaction", "Higher conversion rates", "Stronger brand identity"],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision"],
  },
  {
    icon: <Cloud className="h-8 w-8 text-primary" />,
    title: "Cloud Solutions & DevOps",
    description: "Scalable cloud infrastructure and streamlined DevOps practices for optimal performance.",
    benefits: ["Cost efficiency", "Enhanced scalability", "Faster time-to-market"],
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "QA & Testing",
    description: "Comprehensive quality assurance and testing services to ensure flawless software.",
    benefits: ["Reduced bugs and errors", "Improved software reliability", "Better user experience"],
    technologies: ["Selenium", "JUnit", "TestNG", "Postman"],
  },
  {
    icon: <PenTool className="h-8 w-8 text-primary" />,
    title: "Maintenance & Support",
    description: "Ongoing support and maintenance to keep your applications running smoothly and securely.",
    benefits: ["Minimized downtime", "Continuous improvement", "Long-term stability"],
    technologies: ["Monitoring tools", "Ticketing systems", "Proactive updates"],
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    title: "IT Consulting",
    description: "Expert IT consulting to help you navigate complex technological challenges and make informed decisions.",
    benefits: ["Strategic guidance", "Optimized IT infrastructure", "Future-proof solutions"],
    technologies: ["Strategic planning", "System analysis", "Roadmap development"],
  },
];

export default function ServicesDetailSection() {
  return (
    <AnimatedSection id="services" className="bg-secondary">
      <div className="section-container">
        <h2 className="section-title">Our Comprehensive Services</h2>
        <p className="text-center max-w-3xl mx-auto mb-12 text-lg">
          We provide a full spectrum of software development services designed to bring your digital ambitions to life. Explore how we can help you achieve your business objectives.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection animationClassName="opacity-0 translate-y-10" once={true} as="div" key={service.title} style={{transitionDelay: `${index * 100}ms`}}>
              <Card className="h-full flex flex-col bg-card hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    {service.icon}
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <h4 className="font-semibold mb-2 text-sm">Key Benefits:</h4>
                  <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1 mb-4">
                    {service.benefits.map(benefit => <li key={benefit}>{benefit}</li>)}
                  </ul>
                  <h4 className="font-semibold mb-1 text-sm">Technologies:</h4>
                  <p className="text-xs text-muted-foreground">{service.technologies.join(", ")}</p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button variant="outline" asChild className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Link href="#contact">Request a Quote</Link>
                  </Button>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
