import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, CheckCircle, Bot, Code, Smartphone, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';

const GetStarted = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    timeline: '',
    budget: '',
    description: ''
  });

  const projectTypes = [
    { id: 'ai-app', title: 'AI Application', icon: <Bot className="h-6 w-6" />, description: 'Custom AI applications and chatbots' },
    { id: 'web-app', title: 'Web Application', icon: <Code className="h-6 w-6" />, description: 'Modern web applications and websites' },
    { id: 'mobile-app', title: 'Mobile Application', icon: <Smartphone className="h-6 w-6" />, description: 'Cross-platform mobile applications' },
    { id: 'automation', title: 'Business Automation', icon: <Workflow className="h-6 w-6" />, description: 'Workflow and process automation' }
  ];

  const timelines = [
    { id: '1-2weeks', title: '1-2 weeks', description: 'Quick prototypes and MVP' },
    { id: '1-2months', title: '1-2 months', description: 'Standard projects' },
    { id: '3-6months', title: '3-6 months', description: 'Complex applications' },
    { id: 'ongoing', title: 'Ongoing', description: 'Long-term partnership' }
  ];

  const budgets = [
    { id: '5k-15k', title: '$5k - $15k', description: 'Small to medium projects' },
    { id: '15k-50k', title: '$15k - $50k', description: 'Medium to large projects' },
    { id: '50k+', title: '$50k+', description: 'Enterprise solutions' },
    { id: 'discuss', title: 'Let\'s discuss', description: 'Custom requirements' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return formData.name && formData.email && formData.company;
      case 2: return formData.projectType;
      case 3: return formData.timeline && formData.budget;
      case 4: return formData.description;
      default: return false;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/">
              <Button variant="outline" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl font-bold mb-4">Get Started with <span className="gradient-text">Nuvem Labs</span></h1>
            <p className="text-foreground/70">Tell us about your project and we'll create a custom solution for you.</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step <= currentStep ? 'bg-primary text-white' : 'bg-foreground/10 text-foreground/50'
                  }`}>
                    {step < currentStep ? <CheckCircle className="h-5 w-5" /> : step}
                  </div>
                  {step < 4 && (
                    <div className={`w-16 h-1 mx-2 ${
                      step < currentStep ? 'bg-primary' : 'bg-foreground/10'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="text-sm text-foreground/70 text-center">
              Step {currentStep} of 4: {
                currentStep === 1 ? 'Contact Information' :
                currentStep === 2 ? 'Project Type' :
                currentStep === 3 ? 'Timeline & Budget' :
                'Project Details'
              }
            </div>
          </div>

          <Card className="glass-card border-none bg-white/5">
            <CardContent className="p-8">
              {/* Step 1: Contact Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                    <p className="text-foreground/70 mb-6">Let's start with some basic information about you and your company.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground/70 mb-2">
                        Full Name *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        className="bg-foreground/5 border-foreground/10"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground/70 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your@email.com"
                        className="bg-foreground/5 border-foreground/10"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-2">
                      Company Name *
                    </label>
                    <Input
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Your company name"
                      className="bg-foreground/5 border-foreground/10"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Project Type */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">What type of project do you need?</h2>
                    <p className="text-foreground/70 mb-6">Select the category that best describes your project.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projectTypes.map((type) => (
                      <Card
                        key={type.id}
                        className={`cursor-pointer transition-all duration-200 ${
                          formData.projectType === type.id
                            ? 'border-primary bg-primary/10'
                            : 'border-foreground/10 hover:border-primary/50'
                        }`}
                        onClick={() => handleInputChange('projectType', type.id)}
                      >
                        <CardHeader className="pb-3">
                          <div className="flex items-center space-x-3">
                            <div className="text-primary">{type.icon}</div>
                            <CardTitle className="text-lg">{type.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-foreground/70 text-sm">{type.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Timeline & Budget */}
              {currentStep === 3 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Timeline & Budget</h2>
                    <p className="text-foreground/70 mb-6">Help us understand your timeline and budget expectations.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">When do you need this completed?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {timelines.map((timeline) => (
                        <Card
                          key={timeline.id}
                          className={`cursor-pointer transition-all duration-200 ${
                            formData.timeline === timeline.id
                              ? 'border-primary bg-primary/10'
                              : 'border-foreground/10 hover:border-primary/50'
                          }`}
                          onClick={() => handleInputChange('timeline', timeline.id)}
                        >
                          <CardContent className="p-4">
                            <div className="font-medium">{timeline.title}</div>
                            <div className="text-sm text-foreground/70">{timeline.description}</div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">What's your budget range?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {budgets.map((budget) => (
                        <Card
                          key={budget.id}
                          className={`cursor-pointer transition-all duration-200 ${
                            formData.budget === budget.id
                              ? 'border-primary bg-primary/10'
                              : 'border-foreground/10 hover:border-primary/50'
                          }`}
                          onClick={() => handleInputChange('budget', budget.id)}
                        >
                          <CardContent className="p-4">
                            <div className="font-medium">{budget.title}</div>
                            <div className="text-sm text-foreground/70">{budget.description}</div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Project Details */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Tell us about your project</h2>
                    <p className="text-foreground/70 mb-6">Provide as much detail as possible about your project requirements.</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-2">
                      Project Description *
                    </label>
                    <Textarea
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      placeholder="Describe your project, goals, specific requirements, and any technical details you can share..."
                      className="bg-foreground/5 border-foreground/10 min-h-[120px]"
                    />
                  </div>
                  
                  <div className="bg-foreground/5 rounded-lg p-6">
                    <h3 className="font-medium mb-3">What happens next?</h3>
                    <ul className="space-y-2 text-sm text-foreground/70">
                      <li>• We'll review your requirements within 24 hours</li>
                      <li>• Schedule a free consultation call to discuss your project</li>
                      <li>• Provide a detailed proposal with timeline and pricing</li>
                      <li>• Start development once you approve the proposal</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="border-foreground/20"
                >
                  Previous
                </Button>
                
                {currentStep < 4 ? (
                  <Button
                    onClick={nextStep}
                    disabled={!canProceed()}
                    className="bg-primary hover:bg-primary/90"
                  >
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    disabled={!canProceed()}
                    className="bg-primary hover:bg-primary/90"
                  >
                    Submit Request
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GetStarted; 