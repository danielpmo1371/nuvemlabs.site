
import React from 'react';
import { Cloud } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center text-xl font-bold tracking-tighter">
              <Cloud className="mr-2 h-5 w-5 text-primary" />
              <span className="text-foreground">nuvem</span>
              <span className="text-primary">labs</span>
            </a>
            <p className="mt-2 text-sm text-foreground/50">
              Innovative AI solutions for modern businesses
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <a href="#services" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#about" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
        
        <div className="h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-foreground/50">
          <p>&copy; {currentYear} Nuvem Labs. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
