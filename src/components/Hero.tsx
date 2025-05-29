
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 opacity-20 rounded-full blur-[120px]" />
        <div className="absolute w-[300px] h-[300px] top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 bg-purple-500 opacity-20 rounded-full blur-[100px]" />
        <div className="absolute w-[200px] h-[200px] bottom-1/4 right-1/4 bg-pink-500 opacity-20 rounded-full blur-[80px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 mb-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            <span className="text-sm font-medium text-foreground">Building the future with AI-accelerated development</span>
          </div>
          
          <h1 className="heading-xl mb-6">
            <span className="block text-foreground">Innovative</span>
            <span className="gradient-text">AI Solutions</span>
            <span className="block text-foreground">for Your Business</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto">
            Transform your business with cutting-edge AI applications, rapid web & mobile development, 
            and intelligent automation solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <span>Get Started</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-foreground/20 hover:bg-foreground/5 text-foreground">
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="glass-card p-1 md:p-2 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-primary/20 to-accent/20 animate-pulse-slow" />
            <div className="relative bg-background rounded-lg p-6 backdrop-blur-sm overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 text-center">
                {[
                  { title: 'AI Development', value: 'Expert' },
                  { title: 'App Development', value: 'Rapid' },
                  { title: 'Process Automation', value: 'Efficient' },
                  { title: 'Innovation', value: 'Continuous' },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center p-4">
                    <p className="text-xl sm:text-2xl font-bold gradient-text mb-2">{item.value}</p>
                    <p className="text-sm text-foreground/60">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
