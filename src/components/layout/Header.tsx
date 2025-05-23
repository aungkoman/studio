
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Code } from 'lucide-react'; // Using Code as a placeholder logo
import { cn } from '@/lib/utils';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact Us' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState(navItems.length > 0 ? navItems[0].href : '');

  useEffect(() => {
    const headerElement = document.getElementById('home'); // The header itself has id="home"
    const headerHeight = headerElement ? headerElement.offsetHeight : 80; // Fallback height

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      let currentActiveSectionId = '';
      // Iterate from bottom to top for correct highlighting
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const elementId = item.href.substring(1); // Remove '#'
        const sectionElement = document.getElementById(elementId);

        if (sectionElement) {
          // Adjust sectionTop by headerHeight and a small buffer (e.g., 10px)
          // This makes the link active when the section top is just below the sticky header
          const sectionTop = sectionElement.offsetTop - headerHeight - 10;
          
          if (window.scrollY >= sectionTop) {
            currentActiveSectionId = item.href;
            break; // Found the current section
          }
        }
      }
      
      // If scrolled to the very top, or no section is "active" yet by the logic above
      // (e.g., when above the first actual content section but below the header's fold)
      // default to the first nav item.
      if (window.scrollY < headerHeight && navItems.length > 0) {
        currentActiveSectionId = navItems[0].href;
      }
      
      // If no section is matched (e.g., scrolled past the last section a bit but not enough for footer logic)
      // and we have navItems, stick to the last known active or default to first if nothing.
      // This part might need refinement based on specific page end behavior.
      // For now, if nothing is found, keep the last active one or default to the first item.
      setActiveSectionId(currentActiveSectionId || (navItems.length > 0 ? navItems[0].href : ''));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array, navItems is stable within this component's scope

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header 
      id="home" // This ID is used by the 'Home' nav link and for calculating headerHeight
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="section-container py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
            <Code className="h-8 w-8" />
            <span>Soft100</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2 lg:space-x-4">
            {navItems.map((item) => (
              <Button 
                key={item.label} 
                variant="ghost" 
                asChild 
                className={cn(
                  "text-foreground hover:text-primary hover:bg-primary/10",
                  activeSectionId === item.href && "text-primary font-semibold underline underline-offset-4 decoration-accent decoration-2"
                )}
              >
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
          </nav>

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
                <div className="flex justify-between items-center mb-6">
                  <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary" onClick={closeMobileMenu}>
                    <Code className="h-7 w-7" />
                    <span>Soft100</span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={closeMobileMenu}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col space-y-3">
                  {navItems.map((item) => (
                    <Button
                      key={item.label}
                      variant="ghost"
                      asChild
                      className={cn(
                        "w-full justify-start text-lg text-foreground hover:text-primary hover:bg-primary/10",
                        activeSectionId === item.href && "text-primary font-semibold bg-primary/10"
                      )}
                      onClick={closeMobileMenu}
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </Button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
