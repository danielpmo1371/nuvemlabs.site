
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Get in <span className="gradient-text">Touch</span></h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Ready to transform your business with AI? Let's discuss how our solutions
              can address your specific challenges.
            </p>
          </div>
          
          <div className="glass-card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="bg-gradient-to-br from-primary/20 to-blue-500/20 backdrop-blur-md lg:col-span-2 p-8 flex flex-col justify-center">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h3>
                  <p className="text-foreground/70 mb-8">
                    Fill out the form and we'll get back to you as soon as possible.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full bg-foreground/10 p-3">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-foreground/50">Email</p>
                        <p className="text-foreground">info@paiva.co.nz</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full bg-foreground/10 p-3">
                        <MessageSquare className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-foreground/50">Chat</p>
                        <p className="text-foreground">Live chat available during business hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-3 p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-1">
                        Name
                      </label>
                      <Input 
                        id="name" 
                        placeholder="Your name" 
                        className="bg-foreground/5 border-foreground/10 text-foreground placeholder:text-foreground/30 focus-visible:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-1">
                        Email
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your@email.com" 
                        className="bg-foreground/5 border-foreground/10 text-foreground placeholder:text-foreground/30 focus-visible:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground/70 mb-1">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="How can we help you?" 
                      className="bg-foreground/5 border-foreground/10 text-foreground placeholder:text-foreground/30 focus-visible:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-1">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project..." 
                      className="bg-foreground/5 border-foreground/10 text-foreground placeholder:text-foreground/30 focus-visible:ring-primary min-h-[120px]"
                    />
                  </div>
                  
                  <Button type="submit" className="bg-primary hover:bg-primary/90 text-white w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
