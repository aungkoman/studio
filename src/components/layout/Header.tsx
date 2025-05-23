"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Code } from 'lucide-react'; // Using Code as a placeholder logo

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
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
            <Code className="h-8 w-8" />
            <span>Soft100</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2 lg:space-x-4">
            {navItems.map((item) => (
              <Button key={item.label} variant="ghost" asChild className="text-foreground hover:text-primary hover:bg-primary/10">
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
                      className="w-full justify-start text-lg text-foreground hover:text-primary hover:bg-primary/10"
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
