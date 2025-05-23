import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

const clientLogos = [
  { name: "Client Alpha", src: "https://placehold.co/150x60/FFFFFF/4681C3?text=AlphaCo", dataAiHint: "company logo" },
  { name: "Client Beta", src: "https://placehold.co/150x60/FFFFFF/82CA9D?text=BetaInc", dataAiHint: "tech logo" },
  { name: "Client Gamma", src: "https://placehold.co/150x60/FFFFFF/A0AEC0?text=GammaSolutions", dataAiHint: "business logo" },
  { name: "Client Delta", src: "https://placehold.co/150x60/FFFFFF/4A5568?text=DeltaCorp", dataAiHint: "corporate logo" },
  { name: "Client Epsilon", src: "https://placehold.co/150x60/FFFFFF/F6E05E?text=EpsilonLLC", dataAiHint: "startup logo" },
  { name: "Client Zeta", src: "https://placehold.co/150x60/FFFFFF/ED8936?text=ZetaGlobal", dataAiHint: "global logo" },
];

export default function ClientLogosSection() {
  return (
    <AnimatedSection id="client-logos" className="bg-background">
      <div className="section-container">
        <h2 className="section-title">Trusted by Leading Businesses</h2>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {clientLogos.map((logo, index) => (
            <AnimatedSection animationClassName="opacity-0 scale-50" once={true} as="div" key={logo.name} className="flex justify-center" style={{transitionDelay: `${index * 50}ms`}}>
              <Image
                src={logo.src}
                alt={logo.name}
                width={150}
                height={60}
                className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                data-ai-hint={logo.dataAiHint}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
