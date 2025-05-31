import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowLeft, 
  ArrowRight, 
  Bot, 
  Code, 
  Smartphone, 
  Database, 
  Cloud, 
  Workflow,
  CheckCircle,
  Clock,
  Users,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

const LearnMore = () => {
  const services = [
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: "AI Application Development",
      description: "Custom AI applications tailored to your business needs",
      features: [
        "Chatbots and virtual assistants",
        "Document processing and analysis",
        "Predictive analytics systems",
        "Computer vision applications",
        "Natural language processing tools"
      ],
      timeline: "2-8 weeks",
      ideal: "Businesses looking to automate customer service or data analysis"
    },
    {
      icon: <Code className="h-8 w-8 text-blue-500" />,
      title: "Accelerated Web Development",
      description: "Modern web applications built with AI-powered tools",
      features: [
        "React and Next.js applications",
        "Progressive Web Apps (PWAs)",
        "E-commerce platforms",
        "Content Management Systems",
        "API development and integration"
      ],
      timeline: "1-6 weeks",
      ideal: "Companies needing fast, high-quality web solutions"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-green-500" />,
      title: "Mobile App Solutions",
      description: "Cross-platform mobile applications with native performance",
      features: [
        "React Native development",
        "iOS and Android compatibility",
        "Offline functionality",
        "Push notifications",
        "App store deployment"
      ],
      timeline: "2-10 weeks",
      ideal: "Businesses wanting to reach customers on mobile devices"
    },
    {
      icon: <Database className="h-8 w-8 text-purple-500" />,
      title: "RAG Systems & Knowledge Bases",
      description: "Intelligent document processing and retrieval systems",
      features: [
        "Document ingestion and processing",
        "Semantic search capabilities",
        "Question-answering systems",
        "Knowledge base creation",
        "Integration with existing databases"
      ],
      timeline: "2-6 weeks",
      ideal: "Organizations with large document repositories"
    },
    {
      icon: <Cloud className="h-8 w-8 text-blue-400" />,
      title: "Azure AI Integration",
      description: "Seamless integration of Microsoft Azure AI services",
      features: [
        "Azure OpenAI Service setup",
        "Cognitive Services integration",
        "Azure Machine Learning",
        "Speech and vision services",
        "Cloud infrastructure optimization"
      ],
      timeline: "1-4 weeks",
      ideal: "Microsoft ecosystem users wanting AI capabilities"
    },
    {
      icon: <Workflow className="h-8 w-8 text-orange-500" />,
      title: "Business Process Automation",
      description: "Streamline workflows with intelligent automation",
      features: [
        "Email automation",
        "Form processing",
        "Data extraction and analysis",
        "Workflow orchestration",
        "Integration with existing tools"
      ],
      timeline: "1-8 weeks",
      ideal: "Companies with repetitive manual processes"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project plan with clear milestones.",
      duration: "1-3 days"
    },
    {
      step: "2",
      title: "Design & Architecture",
      description: "Create technical specifications and system architecture optimized for your needs.",
      duration: "2-5 days"
    },
    {
      step: "3",
      title: "AI-Accelerated Development",
      description: "Build your solution using cutting-edge AI tools for faster, higher-quality development.",
      duration: "1-8 weeks"
    },
    {
      step: "4",
      title: "Testing & Optimization",
      description: "Comprehensive testing and performance optimization to ensure reliability.",
      duration: "3-7 days"
    },
    {
      step: "5",
      title: "Deployment & Support",
      description: "Deploy to production and provide ongoing support and maintenance.",
      duration: "Ongoing"
    }
  ];

  const advantages = [
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Faster Development",
      description: "AI-powered tools allow us to deliver solutions 3-5x faster than traditional development"
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Higher Quality",
      description: "AI assistance helps us catch bugs early and implement best practices consistently"
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Expert Team",
      description: "Experienced developers who understand both AI and traditional software development"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "Proven Results",
      description: "Successfully delivered AI solutions for businesses across various industries"
    }
  ];

  const technologies = [
    "OpenAI GPT Models", "Microsoft Azure AI", "React & Next.js", "React Native", 
    "Node.js & .NET", "Python & FastAPI", "Vector Databases", "LangChain",
    "TailwindCSS", "TypeScript", "Docker", "Kubernetes"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <Link to="/">
              <Button variant="outline" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl font-bold mb-4">Learn More About <span className="gradient-text">Nuvem Labs</span></h1>
            <p className="text-xl text-foreground/70 max-w-3xl">
              Discover how our AI-powered development approach can transform your business with faster delivery, 
              higher quality, and innovative solutions.
            </p>
          </div>

          {/* Our Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Our Services</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="glass-card border-none bg-white/5">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      {service.icon}
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    <p className="text-foreground/70">{service.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">What's included:</h4>
                      <ul className="space-y-1 text-sm text-foreground/80">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-foreground/10">
                      <div>
                        <p className="text-sm text-foreground/60">Typical Timeline</p>
                        <p className="font-medium">{service.timeline}</p>
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60">Ideal for</p>
                        <p className="font-medium text-sm">{service.ideal}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Our Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Our Development Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {processSteps.map((step, index) => (
                <Card key={index} className="glass-card border-none bg-white/5 relative">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">{step.step}</span>
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-foreground/70 text-sm mb-3">{step.description}</p>
                    <div className="bg-foreground/5 rounded-lg p-2">
                      <p className="text-xs text-foreground/60">Duration</p>
                      <p className="font-medium text-sm">{step.duration}</p>
                    </div>
                  </CardContent>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-primary" />
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Why Choose Nuvem Labs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {advantages.map((advantage, index) => (
                <Card key={index} className="glass-card border-none bg-white/5 text-center">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      {advantage.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{advantage.title}</h3>
                    <p className="text-foreground/70 text-sm">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Technologies */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Technologies We Use</h2>
            <Card className="glass-card border-none bg-white/5">
              <CardContent className="p-8">
                <p className="text-foreground/70 mb-6">
                  We stay at the forefront of technology, using the latest AI tools and frameworks 
                  to deliver cutting-edge solutions.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {technologies.map((tech, index) => (
                    <div key={index} className="bg-foreground/5 rounded-lg p-3 text-center">
                      <span className="text-sm font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <Card className="glass-card border-none bg-gradient-to-br from-primary/20 to-blue-500/20">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
                  Let's discuss how we can help transform your business with AI-powered solutions. 
                  Get a free consultation and project estimate.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/get-started">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                      Start Your Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <a href="#contact">
                    <Button size="lg" variant="outline" className="border-foreground/20 hover:bg-foreground/5">
                      Contact Us
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LearnMore; 