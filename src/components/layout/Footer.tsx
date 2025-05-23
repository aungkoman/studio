import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="section-container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-center md:text-left">
            &copy; {currentYear} Tech Software 100 (Soft100). All rights reserved. <br />
            Turning Ideas into Reality.
          </p>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Twitter" className="text-secondary-foreground hover:text-primary transition-colors">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="text-secondary-foreground hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="GitHub" className="text-secondary-foreground hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-muted-foreground">
          <Link href="#" className="hover:underline">Privacy Policy</Link>
          <span className="mx-2">|</span>
          <Link href="#" className="hover:underline">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
