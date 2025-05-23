import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Globe, Smartphone, Palette } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Custom Software",
    description: "Tailored software solutions to meet your unique business needs and objectives.",
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Web Solutions",
    description: "Modern, responsive web applications that drive engagement and deliver results.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Mobile Apps",
    description: "Intuitive and high-performance mobile applications for iOS and Android.",
  },
  {
    icon: <Palette className="h-10 w-10 text-primary" />,
    title: "UI/UX Design",
    description: "User-centric design that enhances usability and creates delightful experiences.",
  },
];

export default function ServicesOverviewSection() {
  return (
    <AnimatedSection id="services-overview" className="bg-background">
      <div className="section-container">
        <h2 className="section-title">What We Do</h2>
        <p className="text-center max-w-2xl mx-auto mb-12 text-lg">
          We offer a range of services to transform your ideas into powerful digital realities. From concept to deployment, we are your trusted technology partner.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <AnimatedSection animationClassName="opacity-0 scale-90" once={true} as="div" key={service.title}>
              <Card className="h-full text-center hover:shadow-xl transition-shadow duration-300 bg-card">
                <CardHeader className="items-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="#services" className="text-primary hover:underline font-semibold">
            Explore All Services &rarr;
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
