
import React from 'react';
import { Check, Cloud } from 'lucide-react';

const About = () => {
  const expertise = [
    "AI-accelerated web & mobile development",
    "Custom AI application development",
    "Azure AI services implementation",
    "GPT fine-tuning and optimization",
    "Document intelligence solutions", 
    "Workflow automation integration",
    "RAG systems architecture"
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-[400px] h-[400px] -top-20 -left-20 bg-primary/30 opacity-20 rounded-full blur-[120px]" />
        <div className="absolute w-[300px] h-[300px] -bottom-20 -right-20 bg-secondary/30 opacity-20 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-3 py-1 mb-4 bg-primary/5 backdrop-blur-sm border border-primary/10 rounded-full">
              <span className="text-sm font-medium text-foreground/80">About Nuvem Labs</span>
            </div>
            
            <h2 className="heading-lg mb-6">
              Expertise in <span className="gradient-text">AI-Powered</span> Development
            </h2>
            
            <p className="text-foreground/70 mb-6">
              Founded by forward-thinking technologists, Nuvem Labs leverages cutting-edge AI technologies to 
              accelerate software development, delivering powerful solutions that transform businesses. 
              Our approach combines AI-driven automation with expert engineering to create 
              solutions that would traditionally require much larger teams.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {expertise.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="rounded-full bg-primary/20 p-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="p-1 rounded-2xl bg-gradient-to-br from-primary/50 via-secondary/50 to-accent/50 animate-pulse-slow">
              <div className="rounded-xl overflow-hidden bg-background/80 backdrop-blur-sm p-6">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
                    <p className="text-foreground/70">
                      To provide accessible AI-powered development that delivers genuine business value, 
                      helping organizations build better solutions faster.
                    </p>
                  </div>
                  
                  <div className="h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Technology Focus</h3>
                    <div className="flex flex-wrap gap-2">
                      {["AI-Accelerated Development", "React", "React Native", "OpenAI", "Azure AI", "RAG Systems", "Langchain", "Vector Databases", "GPT Fine-tuning", "API Development", "Software Integration", ".NET Core", "Node.js", "Next.js"].map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-primary/10 rounded-full text-xs text-foreground/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
