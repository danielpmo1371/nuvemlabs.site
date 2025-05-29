
import React from 'react';
import { 
  ArrowRight, 
  Database, 
  FileText, 
  Bot,
  Mail, 
  Workflow, 
  Cloud,
  Code,
  Smartphone,
  Gauge
} from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: "AI Application Development",
    description: "Custom AI applications tailored to your business needs, from chatbots to predictive analytics systems.",
  },
  {
    icon: <Code className="h-10 w-10 text-blue-500" />,
    title: "Accelerated Web Development",
    description: "Leverage AI-powered tools to build modern web applications faster and with improved quality compared to traditional development.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-green-500" />,
    title: "Mobile App Solutions",
    description: "Create cross-platform mobile applications with AI assistance, reducing development time while increasing quality and performance.",
  },
  {
    icon: <Gauge className="h-10 w-10 text-yellow-500" />,
    title: "Rapid Prototyping",
    description: "Transform ideas into functional prototypes in days rather than weeks, allowing for quick validation and iteration.",
  },
  {
    icon: <Database className="h-10 w-10 text-blue-500" />,
    title: "RAG Systems",
    description: "Retrieve and generate meaningful insights from your documents with advanced RAG (Retrieval Augmented Generation) systems.",
  },
  {
    icon: <FileText className="h-10 w-10 text-accent" />,
    title: "Document Knowledge Base",
    description: "Transform your documents into searchable, intelligent knowledge bases for improved information retrieval.",
  },
  {
    icon: <Cloud className="h-10 w-10 text-blue-400" />,
    title: "Azure AI Integration",
    description: "Seamless integration of Microsoft Azure AI services into your existing business infrastructure.",
  },
  {
    icon: <Workflow className="h-10 w-10 text-green-500" />,
    title: "Workflow Automation",
    description: "Streamline business processes with intelligent automation, reducing manual effort and increasing efficiency.",
  },
  {
    icon: <Mail className="h-10 w-10 text-yellow-500" />,
    title: "Email & Forms Automation",
    description: "Automate routine communications and form processing with AI-powered solutions.",
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Our <span className="gradient-text">Services</span></h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Transformative AI solutions that unlock new possibilities for your business.
            From development to implementation, we handle every aspect of your AI journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glass-card border-none interactive-card bg-white/5 hover:bg-white/10">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">{service.description}</p>
              </CardContent>
              <CardFooter>
                <a 
                  href="#contact" 
                  className="text-primary hover:text-primary/80 text-sm inline-flex items-center transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
