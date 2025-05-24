import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Zap, Eye, Brain } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

// const teamMembers = [
//   {
//     photo: "https://placehold.co/300x300/D4E2F2/4681C3",
//     dataAiHint: "professional portrait",
//     name: "Yan Naing",
//     role: "CEO & Founder",
//     bio: "Visionary leader with a passion for technology and innovation.",
//   },
//   {
//     photo: "https://placehold.co/300x300/D4E2F2/82CA9D",
//     dataAiHint: "software developer",
//     name: "Su Myat",
//     role: "Lead Developer",
//     bio: "Expert architect of robust and scalable software solutions.",
//   },
//   {
//     photo: "https://placehold.co/300x300/D4E2F2/A0AEC0",
//     dataAiHint: "ux designer",
//     name: "Aung Ko",
//     role: "Head of Design",
//     bio: "Creative mind focused on user-centric and impactful design.",
//   },
// ];

const teamMembers = [
  {
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    dataAiHint: "professional portrait",
    name: "Yan Naing",
    role: "CEO & Founder",
    bio: "Visionary leader with a passion for technology and innovation.",
  },
  {
    photo: "https://plus.unsplash.com/premium_photo-1674055048374-522af7933695?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    dataAiHint: "software developer",
    name: "Su Myat",
    role: "Lead Developer",
    bio: "Expert architect of robust and scalable software solutions.",
  },
  {
    photo: "https://images.unsplash.com/photo-1598965858529-f2a14731855a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    dataAiHint: "ux designer",
    name: "Aung Ko",
    role: "Head of Design",
    bio: "Creative mind focused on user-centric and impactful design.",
  }
];

const coreValues = [
  { icon: <Brain className="h-6 w-6 text-primary" />, text: "Innovation" },
  { icon: <Users className="h-6 w-6 text-primary" />, text: "Collaboration" },
  { icon: <Zap className="h-6 w-6 text-primary" />, text: "Excellence" },
  { icon: <Eye className="h-6 w-6 text-primary" />, text: "Integrity" },
];

export default function AboutUsSection() {
  return (
    <AnimatedSection id="about" className="bg-background">
      <div className="section-container">
        <h2 className="section-title">Who We Are</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <AnimatedSection animationClassName="opacity-0 -translate-x-10" once={true} as="div">
            <Image
              src="https://pinepointtech.com/wp-content/uploads/2020/03/Website.jpg"
              alt="Tech Software 100 Team"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
              data-ai-hint="team working"
            />
          </AnimatedSection>
          <AnimatedSection animationClassName="opacity-0 translate-x-10" once={true} as="div">
            <h3 className="text-2xl font-semibold mb-4">Our Mission & Vision</h3>
            <p className="mb-4 text-lg">
              Our mission is to empower businesses by transforming their innovative ideas into tangible, high-impact digital realities. We strive to be a leading software house, recognized for our creativity, technical excellence, and commitment to client success.
            </p>
            <p className="text-lg">
              Our vision is a world where technology seamlessly enhances human potential, and we aim to be at the forefront of this transformation.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection animationClassName="opacity-0 translate-y-10" once={true} as="div" className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Our Story & Core Values</h3>
          <p className="max-w-3xl mx-auto text-center mb-8">
            Founded on the principle of "Turning Ideas into Reality", Tech Software 100 began with a small team of passionate technologists. Today, we've grown into a dynamic software house, driven by our core values:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {coreValues.map(value => (
              <div key={value.text} className="flex items-center gap-2 p-3 bg-card rounded-md shadow-sm">
                {value.icon}
                <span className="font-medium">{value.text}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Optional Team Section */}
        <AnimatedSection animationClassName="opacity-0 translate-y-10" once={true} as="div" className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Meet Our Leaders</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedSection animationClassName="opacity-0 scale-90" once={true} as="div" key={member.name} style={{transitionDelay: `${index * 100}ms`}}>
                <Card className="text-center h-full bg-card hover:shadow-xl transition-shadow">
                  <CardHeader className="items-center">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="rounded-full mb-4 shadow-md"
                      data-ai-hint={member.dataAiHint}
                    />
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <p className="text-sm text-primary font-medium">{member.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animationClassName="opacity-0 translate-y-10" once={true} as="div">
          <h3 className="text-2xl font-semibold text-center mb-4">Our Approach</h3>
          <p className="max-w-3xl mx-auto text-center">
            We believe in a collaborative and agile approach to software development. Our process is transparent, iterative, and focused on delivering value quickly. We combine technical expertise with creative problem-solving to build solutions that not only meet but exceed expectations.
          </p>
        </AnimatedSection>
      </div>
    </AnimatedSection>
  );
}
