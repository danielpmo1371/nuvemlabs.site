import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';

const PrivacyPolicy = () => {
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
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-foreground/70">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="text-foreground/80 leading-relaxed">
                Nuvem Labs ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you visit our website 
                or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">Personal Information</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    We may collect personal information that you voluntarily provide, including:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-foreground/80">
                    <li>Name and contact information</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Business information</li>
                    <li>Project requirements and specifications</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-2">Automatically Collected Information</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    We may automatically collect certain information about your device and usage patterns:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-foreground/80">
                    <li>IP address and location data</li>
                    <li>Browser type and version</li>
                    <li>Pages visited and time spent</li>
                    <li>Referring website</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-1 text-foreground/80">
                <li>To provide and maintain our services</li>
                <li>To communicate with you about projects and inquiries</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
              <p className="text-foreground/80 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share 
                your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-foreground/80">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>With trusted service providers who assist in our operations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p className="text-foreground/80 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. However, 
                no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-foreground/80">
                <li>Access and review your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your information</li>
                <li>Request data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="text-foreground/80 leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-foreground/5 rounded-lg">
                <p className="text-foreground/80">
                  <strong>Email:</strong> info@paiva.co.nz<br />
                  <strong>Subject:</strong> Privacy Policy Inquiry
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
              <p className="text-foreground/80 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 