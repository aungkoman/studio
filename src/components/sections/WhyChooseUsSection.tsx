import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Zap, Lightbulb, Target, Users } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const differentiators = [
  {
    icon: <Lightbulb className="h-8 w-8 text-accent" />,
    title: "Innovative Solutions",
    description: "We leverage the latest technologies to build future-proof solutions that solve real-world problems.",
  },
  {
    icon: <Target className="h-8 w-8 text-accent" />,
    title: "Client-Centric Approach",
    description: "Your success is our priority. We work closely with you to understand your vision and deliver exceptional results.",
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: "Experienced Team",
    description: "Our team of skilled developers, designers, and strategists are passionate about crafting high-quality software.",
  },
  {
    icon: <Zap className="h-8 w-8 text-accent" />,
    title: "Agile & Transparent",
    description: "We follow agile methodologies and maintain open communication throughout the development lifecycle.",
  }
];

const processSteps = [
  { name: "Discover", description: "Understanding your goals and requirements." },
  { name: "Design", description: "Crafting intuitive user experiences and robust architecture." },
  { name: "Develop", description: "Building your solution with precision and quality." },
  { name: "Deploy", description: "Launching your product and ensuring smooth operation." },
];

export default function WhyChooseUsSection() {
  return (
    <AnimatedSection id="why-choose-us" className="bg-secondary">
      <div className="section-container">
        <h2 className="section-title">Why Partner With Soft100?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {differentiators.map((item, index) => (
             <AnimatedSection animationClassName="opacity-0 translate-y-10" once={true} as="div" key={item.title} style={{transitionDelay: `${index * 100}ms`}}>
              <Card className="h-full text-center bg-card hover:shadow-lg transition-shadow">
                <CardHeader className="items-center">
                  <div className="p-3 bg-accent/10 rounded-full mb-3">
                   {item.icon}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-center mb-8">Our Streamlined Process</h3>
        <div className="relative max-w-3xl mx-auto">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <AnimatedSection animationClassName="opacity-0 scale-90" once={true} as="div" key={step.name} className="relative text-center" style={{transitionDelay: `${index * 150}ms`}}>
                <div className="relative z-10">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-2 shadow-md">
                    {index + 1}
                  </div>
                  <h4 className="font-semibold mb-1">{step.name}</h4>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg">
            <Link href="#contact">Ready to turn your idea into reality? Get in Touch!</Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
