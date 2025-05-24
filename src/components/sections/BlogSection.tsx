import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

// const blogPosts = [
//   {
//     image: "https://placehold.co/600x400/4681C3/FFFFFF",
//     dataAiHint: "technology article",
//     title: "The Future of Web Development: Trends to Watch in 2024",
//     excerpt: "Explore the latest advancements and upcoming trends shaping the future of web development, from AI integration to serverless architectures.",
//     author: "Dr. Web Dev",
//     date: "October 26, 2023",
//     category: "Web Development",
//     link: "#",
//   },
//   {
//     image: "https://placehold.co/600x400/82CA9D/FFFFFF",
//     dataAiHint: "mobile technology",
//     title: "Crafting Seamless User Experiences in Mobile Apps",
//     excerpt: "A deep dive into the principles of UI/UX design for mobile applications that keep users engaged and satisfied.",
//     author: "UX Guru",
//     date: "October 15, 2023",
//     category: "Mobile Apps",
//     link: "#",
//   },
//   {
//     image: "https://placehold.co/600x400/A0AEC0/FFFFFF",
//     dataAiHint: "cloud computing",
//     title: "Maximizing Efficiency with Cloud-Native Solutions",
//     excerpt: "Discover how cloud-native architectures can transform your business, offering scalability, resilience, and cost-effectiveness.",
//     author: "Cloud Architect",
//     date: "September 28, 2023",
//     category: "Cloud Solutions",
//     link: "#",
//   },
// ];

const blogPosts = [
  {
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800&fit=cover",
    dataAiHint: "web development code screen",
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the latest advancements and upcoming trends shaping the future of web development, from AI integration to serverless architectures.",
    author: "Dr. Web Dev",
    date: "October 26, 2023",
    category: "Web Development",
    link: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800&fit=cover",
    dataAiHint: "mobile app ui design",
    title: "Crafting Seamless User Experiences in Mobile Apps",
    excerpt: "A deep dive into the principles of UI/UX design for mobile applications that keep users engaged and satisfied.",
    author: "UX Guru",
    date: "October 15, 2023",
    category: "Mobile Apps",
    link: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800&fit=cover",
    dataAiHint: "cloud computing data center",
    title: "Maximizing Efficiency with Cloud-Native Solutions",
    excerpt: "Discover how cloud-native architectures can transform your business, offering scalability, resilience, and cost-effectiveness.",
    author: "Cloud Architect",
    date: "September 28, 2023",
    category: "Cloud Solutions",
    link: "#",
  }
];


export default function BlogSection() {
  return (
    <AnimatedSection id="blog" className="bg-background">
      <div className="section-container">
        <h2 className="section-title">From Our Blog</h2>
        <p className="text-center max-w-2xl mx-auto mb-12 text-lg">
          Stay updated with the latest industry insights, tech trends, and company news from the experts at Tech Software 100.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <AnimatedSection animationClassName="opacity-0 translate-y-10" once={true} as="div" key={post.title} style={{transitionDelay: `${index * 100}ms`}}>
              <Card className="overflow-hidden h-full flex flex-col bg-card hover:shadow-xl transition-shadow">
                <CardHeader className="p-0">
                  <Link href={post.link}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover"
                      data-ai-hint={post.dataAiHint}
                    />
                  </Link>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <Badge variant="secondary" className="mb-2">{post.category}</Badge>
                  <Link href={post.link}>
                    <CardTitle className="text-xl mb-2 hover:text-primary transition-colors">{post.title}</CardTitle>
                  </Link>
                  <CardDescription className="text-sm mb-3">{post.excerpt}</CardDescription>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <CalendarDays className="h-3.5 w-3.5 mr-1.5" />
                    <span>{post.date}</span>
                    <span className="mx-1.5">&bull;</span>
                    <span>By {post.author}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="link" asChild className="p-0 text-primary hover:text-accent">
                    <Link href={post.link}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Articles (Coming Soon)
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
