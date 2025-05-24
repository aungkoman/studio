import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

// const testimonials = [
//   {
//     quote: "Tech Software 100 transformed our operations with their custom software. Their team is knowledgeable, responsive, and truly understood our needs. Highly recommended!",
//     clientName: "Jane Doe",
//     clientCompany: "Innovatech Solutions",
//     clientRole: "CEO",
//     clientPhoto: "https://placehold.co/100x100/4681C3/FFFFFF",
//     dataAiHint: "professional woman",
//     rating: 5,
//   },
//   {
//     quote: "The mobile app developed by Soft100 has significantly boosted our customer engagement. Their attention to detail and UI/UX expertise is top-notch.",
//     clientName: "John Smith",
//     clientCompany: "ConnectApp Ltd.",
//     clientRole: "Marketing Director",
//     clientPhoto: "https://placehold.co/100x100/82CA9D/FFFFFF",
//     dataAiHint: "smiling man",
//     rating: 5,
//   },
//   {
//     quote: "Working with Tech Software 100 on our web platform was a fantastic experience. They delivered on time, within budget, and exceeded our expectations.",
//     clientName: "Alice Brown",
//     clientCompany: "WebWorks Co.",
//     clientRole: "Project Manager",
//     clientPhoto: "https://placehold.co/100x100/A0AEC0/FFFFFF",
//     dataAiHint: "business person",
//     rating: 4,
//   },
// ];
const testimonials = [
  {
    quote: "Tech Software 100 transformed our operations with their custom software. Their team is knowledgeable, responsive, and truly understood our needs. Highly recommended!",
    clientName: "Jane Doe",
    clientCompany: "Innovatech Solutions",
    clientRole: "CEO",
    clientPhoto: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    dataAiHint: "professional woman executive portrait",
    rating: 5,
  },
  {
    quote: "The mobile app developed by Soft100 has significantly boosted our customer engagement. Their attention to detail and UI/UX expertise is top-notch.",
    clientName: "John Smith",
    clientCompany: "ConnectApp Ltd.",
    clientRole: "Marketing Director",
    clientPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&fit=facearea",
    dataAiHint: "smiling business man portrait",
    rating: 5,
  },
  {
    quote: "Working with Tech Software 100 on our web platform was a fantastic experience. They delivered on time, within budget, and exceeded our expectations.",
    clientName: "Alice Brown",
    clientCompany: "WebWorks Co.",
    clientRole: "Project Manager",
    clientPhoto: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    dataAiHint: "professional woman smiling portrait",
    rating: 4,
  },
];
export default function TestimonialsSection() {
  return (
    <AnimatedSection id="testimonials" className="bg-secondary">
      <div className="section-container">
        <h2 className="section-title">Client Love & Testimonials</h2>
        <p className="text-center max-w-2xl mx-auto mb-12 text-lg">
          Hear what our clients have to say about their experience working with Tech Software 100.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection animationClassName="opacity-0 scale-90" once={true} as="div" key={index} style={{transitionDelay: `${index * 100}ms`}}>
              <Card className="h-full flex flex-col bg-card shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="flex-row items-center gap-4 pb-4">
                  <Image
                    src={testimonial.clientPhoto}
                    alt={testimonial.clientName}
                    width={60}
                    height={60}
                    className="rounded-full"
                    data-ai-hint={testimonial.dataAiHint}
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.clientName}</h3>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.clientRole}, {testimonial.clientCompany}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex mb-2">
                    {Array(testimonial.rating).fill(0).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                    {Array(5 - testimonial.rating).fill(0).map((_, i) => (
                       <Star key={i} className="h-4 w-4 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground/80 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
