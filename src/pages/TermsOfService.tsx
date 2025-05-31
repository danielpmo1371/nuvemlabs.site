import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/">
              <Button variant="outline" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-foreground/70">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
              <p className="text-foreground/80 leading-relaxed">
                By accessing and using Nuvem Labs' website and services, you accept and agree to be bound 
                by the terms and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Services Description</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Nuvem Labs provides AI-powered development services, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-foreground/80">
                <li>AI application development and implementation</li>
                <li>Web and mobile application development</li>
                <li>Business process automation</li>
                <li>AI integration and consulting services</li>
                <li>Technical support and maintenance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Client Obligations</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">Cooperation</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Clients agree to provide timely feedback, required information, and access necessary 
                    for project completion.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-2">Payment Terms</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Payment terms will be specified in individual project agreements. Late payments may 
                    result in project suspension and additional fees.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-2">Content and Data</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Clients are responsible for ensuring they have the right to use all content and data 
                    provided for projects and that such content does not violate any laws or third-party rights.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">Client-Owned Content</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Clients retain ownership of all original content, data, and intellectual property 
                    provided to Nuvem Labs for project work.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-2">Developed Solutions</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Unless otherwise specified in a written agreement, custom solutions developed 
                    specifically for clients become the property of the client upon full payment.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-2">Pre-existing Tools and Frameworks</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Nuvem Labs retains ownership of pre-existing tools, frameworks, and methodologies 
                    used in service delivery.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Confidentiality</h2>
              <p className="text-foreground/80 leading-relaxed">
                Nuvem Labs agrees to maintain the confidentiality of all client information and will 
                not disclose such information to third parties without explicit written consent, 
                except as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc list-inside space-y-1 text-foreground/80">
                <li>Nuvem Labs' liability is limited to the amount paid for services</li>
                <li>We are not liable for indirect, incidental, or consequential damages</li>
                <li>We do not guarantee uninterrupted or error-free services</li>
                <li>Clients are responsible for maintaining backups of their data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Warranties and Disclaimers</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">Service Warranty</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    We warrant that services will be performed in a professional manner in accordance 
                    with industry standards.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-2">Disclaimer</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Except as expressly stated, all services are provided "as is" without warranties 
                    of any kind, either express or implied.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Termination</h2>
              <p className="text-foreground/80 leading-relaxed">
                Either party may terminate services with written notice. Termination terms and 
                conditions will be specified in individual project agreements. Upon termination, 
                all deliverables completed and paid for will be provided to the client.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
              <p className="text-foreground/80 leading-relaxed">
                These terms are governed by the laws of New Zealand. Any disputes will be resolved 
                through negotiation or, if necessary, through the appropriate courts of New Zealand.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="text-foreground/80 leading-relaxed">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="mt-4 p-4 bg-foreground/5 rounded-lg">
                <p className="text-foreground/80">
                  <strong>Email:</strong> info@paiva.co.nz<br />
                  <strong>Subject:</strong> Terms of Service Inquiry
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
              <p className="text-foreground/80 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective 
                immediately upon posting. Continued use of our services constitutes acceptance of 
                modified terms.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 