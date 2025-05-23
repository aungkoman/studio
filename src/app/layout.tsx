import type {Metadata} from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import AppProviders from '@/components/AppProviders'; // For potential future providers

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

// Note: Geist Mono is not used in this version based on proposal's font choice.
// If needed, uncomment and add to className.
// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

export const metadata: Metadata = {
  title: 'Soft100: Turning Ideas into Reality',
  description: 'Turning Ideas into Reality. Tech Software 100 is a creative software house dedicated to building innovative digital solutions that bring your vision to life.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} font-sans antialiased`}>
        <AppProviders>
          {children}
          <Toaster />
        </AppProviders>
      </body>
    </html>
  );
}
