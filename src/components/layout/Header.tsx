
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'; // Added SheetTitle
import { Menu } from 'lucide-react';
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
    const headerElement = document.getElementById('home'); 
    const headerHeight = headerElement ? headerElement.offsetHeight : 80; 

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      let currentActiveSectionId = '';
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const elementId = item.href.substring(1); 
        const sectionElement = document.getElementById(elementId);

        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop - headerHeight - 10;
          
          if (window.scrollY >= sectionTop) {
            currentActiveSectionId = item.href;
            break; 
          }
        }
      }
      
      if (window.scrollY < headerHeight && navItems.length > 0) {
        currentActiveSectionId = navItems[0].href;
      }
      
      setActiveSectionId(currentActiveSectionId || (navItems.length > 0 ? navItems[0].href : ''));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []); 

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header 
      id="home" 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="section-container py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
            <img src="./company-icon.png" alt="Soft100 Logo" className="h-8" />
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
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle> {/* Added sr-only title */}
                <div className="flex justify-between items-center mb-6">
                  <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary" onClick={closeMobileMenu}>
                    <img src="./company-icon.png" alt="Soft100 Logo" className="h-8" />
                  </Link>
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
