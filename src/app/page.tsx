import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ServicesOverviewSection from '@/components/sections/ServicesOverviewSection';
import FeaturedProjectsSection from '@/components/sections/FeaturedProjectsSection';
import ClientLogosSection from '@/components/sections/ClientLogosSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import AboutUsSection from '@/components/sections/AboutUsSection';
import ServicesDetailSection from '@/components/sections/ServicesDetailSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import BlogSection from '@/components/sections/BlogSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesOverviewSection />
        <FeaturedProjectsSection />
        <ClientLogosSection />
        <WhyChooseUsSection />
        <AboutUsSection />
        <ServicesDetailSection />
        <PortfolioSection />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
