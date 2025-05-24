
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Menu, Languages } from 'lucide-react'; // Added Languages icon
import { cn } from '@/lib/utils';

const navItemsEn = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact Us' },
];

const navItemsMy = [
  { href: '#home', label: 'ပင်မစာမျက်နှာ' },
  { href: '#about', label: 'ကျွန်ုပ်တို့အကြောင်း' },
  { href: '#services', label: 'ဝန်ဆောင်မှုများ' },
  { href: '#projects', label: 'ပရောဂျက်များ' },
  { href: '#testimonials', label: 'သက်သေခံချက်များ' },
  { href: '#blog', label: 'ဘလော့ဂ်' },
  { href: '#contact', label: 'ဆက်သွယ်ရန်' },
];

const companyLogoAltText = {
  en: "Soft100 Logo",
  my: "Soft100 လိုဂို"
};

const mobileMenuTitleText = {
  en: "Navigation Menu",
  my: "လမ်းညွှန်မီနူး"
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'my'>('en');
  const [activeSectionId, setActiveSectionId] = useState('');

  const navItems = currentLanguage === 'en' ? navItemsEn : navItemsMy;

  useEffect(() => {
    // Initialize activeSectionId with the first item's href if available
    if (navItems.length > 0 && !activeSectionId) {
      setActiveSectionId(navItems[0].href);
    }

    const headerElement = document.querySelector('header'); // Use a more general selector
    const headerHeight = headerElement ? headerElement.offsetHeight : 80;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      let currentActiveSectionId = '';
      const itemsToIterate = currentLanguage === 'en' ? navItemsEn : navItemsMy;

      for (let i = itemsToIterate.length - 1; i >= 0; i--) {
        const item = itemsToIterate[i];
        const elementId = item.href.substring(1);
        const sectionElement = document.getElementById(elementId);

        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop - headerHeight - 20; // Adjusted offset

          if (window.scrollY >= sectionTop) {
            currentActiveSectionId = item.href;
            break;
          }
        }
      }
      
      // Fallback to the first item if no section is determined to be active (e.g., at the very top or bottom)
      if (!currentActiveSectionId && itemsToIterate.length > 0) {
        // If scrolled to the very top, highlight 'Home'
        if (window.scrollY < headerHeight) {
            currentActiveSectionId = itemsToIterate[0].href;
        } else {
             // If scrolled past all sections (e.g. footer is tall), keep the last one active or default to first
             // This part can be tricky, for now, let's default to first if nothing else is found.
             currentActiveSectionId = activeSectionId || itemsToIterate[0].href;
        }
      }
      
      setActiveSectionId(currentActiveSectionId || (itemsToIterate.length > 0 ? itemsToIterate[0].href : ''));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentLanguage, activeSectionId]); // Re-run if language changes, or if activeSectionId needs re-init

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const toggleLanguage = () => {
    setCurrentLanguage(prevLang => prevLang === 'en' ? 'my' : 'en');
  };

  return (
    <header
      id="header-main" // Changed id to avoid conflict if #home is a section id
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="section-container py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
            <img src="/company-icon.png" alt={companyLogoAltText[currentLanguage]} className="h-8" />
            {/* Soft100 - Brand name, might not need translation or could be conditional */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2 items-center">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                asChild
                className={cn(
                  "text-foreground hover:text-primary hover:bg-primary/10 px-2 lg:px-3 py-1 text-sm",
                  activeSectionId === item.href && "text-primary font-semibold underline underline-offset-4 decoration-accent decoration-2"
                )}
              >
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
            <Button variant="ghost" size="icon" onClick={toggleLanguage} title={currentLanguage === 'en' ? "Switch to Myanmar" : "Switch to English"} className="ml-2">
              <Languages className="h-5 w-5" />
              <span className="sr-only">{currentLanguage === 'en' ? "Switch to Myanmar" : "Switch to English"}</span>
            </Button>
          </nav>

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleLanguage} title={currentLanguage === 'en' ? "Switch to Myanmar" : "Switch to English"} className="mr-2">
              <Languages className="h-5 w-5" />
              <span className="sr-only">{currentLanguage === 'en' ? "Switch to Myanmar" : "Switch to English"}</span>
            </Button>
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
                <SheetTitle className="sr-only">{mobileMenuTitleText[currentLanguage]}</SheetTitle>
                <div className="flex justify-between items-center mb-6">
                  <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary" onClick={closeMobileMenu}>
                    <img src="/company-icon.png" alt={companyLogoAltText[currentLanguage]} className="h-8" />
                     {/* Soft100 */}
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
