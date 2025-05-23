import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import { Lightbulb, Rocket } from "lucide-react";

export default function HeroSection() {
  return (
    <AnimatedSection
      as="div"
      className="relative bg-gradient-to-br from-primary via-primary/80 to-secondary text-primary-foreground min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden"
    >
      <Image
        src="https://placehold.co/1920x1080/D4E2F2/4681C3"
        alt="Abstract Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-20"
        data-ai-hint="abstract technology"
        priority
      />
      <div className="relative z-10 section-container text-center py-20 md:py-32">
        <AnimatedSection 
          as="div" 
          className="flex items-center justify-center space-x-1 sm:space-x-2 md:space-x-4 mb-6" 
          animationClassName="opacity-0 translate-y-10" // This is the container for H1 and icons
          style={{ transitionDelay: '0ms' }} // Container itself animates quickly or with no delay relative to parent
        >
          <AnimatedSection as="span" animationClassName="opacity-0 -translate-y-10" style={{ transitionDelay: '200ms' }}>
            <Lightbulb className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-accent" />
          </AnimatedSection>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            <AnimatedSection as="span" className="inline-block" animationClassName="opacity-0 scale-50" style={{ transitionDelay: '400ms' }}>Idea</AnimatedSection>
            {' '}
            <AnimatedSection as="span" className="inline-block" animationClassName="opacity-0 scale-50" style={{ transitionDelay: '600ms' }}>ကနေ</AnimatedSection>
            {' '}
            <AnimatedSection as="span" className="inline-block" animationClassName="opacity-0 scale-50" style={{ transitionDelay: '800ms' }}>Reality</AnimatedSection>
            {' '}
            <AnimatedSection as="span" className="inline-block" animationClassName="opacity-0 scale-50" style={{ transitionDelay: '1000ms' }}>ကို</AnimatedSection>
            {' '}
            <AnimatedSection as="span" className="inline-block" animationClassName="opacity-0 scale-50" style={{ transitionDelay: '1200ms' }}>ပြောင်းဖို့</AnimatedSection>
          </h1>

          <AnimatedSection as="span" animationClassName="opacity-0 translate-y-10" style={{ transitionDelay: '1400ms' }}>
            <Rocket className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-accent" />
          </AnimatedSection>
        </AnimatedSection>

        <AnimatedSection 
          as="p" 
          className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-primary-foreground/90" 
          animationClassName="opacity-0 translate-y-10" 
          style={{ transitionDelay: '1600ms' }}
        >
          We are a creative software house dedicated to building innovative digital solutions that bring your vision to life.
        </AnimatedSection>

        <AnimatedSection 
          as="div" 
          className="flex flex-col sm:flex-row gap-4 justify-center" 
          animationClassName="opacity-0 translate-y-10" 
          style={{ transitionDelay: '1800ms' }}
        >
          <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Link href="#contact">Discuss Your Project</Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Link href="#projects">See Our Work</Link>
          </Button>
        </AnimatedSection>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary-foreground/70"><path d="m6 9 6 6 6-6"/></svg>
      </div>
    </AnimatedSection>
  );
}
