import { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = 'Privacy Policy - Nuvem Labs';
  }, []);

  return (
    <div className="min-h-screen container mx-auto px-4 py-12 space-y-6">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="text-foreground/70">
        At Nuvem Labs we build AI-powered applications that help businesses move
        faster. Protecting your data is an important part of that mission.
      </p>

      <div className="space-y-4 text-foreground/70">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Information We Collect
          </h2>
          <p>
            We collect basic contact details when you reach out to us along with
            usage information from our website and services. This allows us to
            respond to inquiries and improve our offerings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">
            How We Use Your Data
          </h2>
          <p>
            The data we gather is used solely to communicate with you, maintain
            our services, and understand how visitors interact with our site. We
            never sell your information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Cookies and Analytics
          </h2>
          <p>
            Like most companies we use cookies and similar technologies to track
            anonymous usage statistics. You can disable cookies in your browser
            if you prefer not to share this information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Your Choices
          </h2>
          <p>
            If you would like to view, update, or delete the personal data we
            hold about you, simply contact us at
            <a href="mailto:info@nuvemlabs.co.nz" className="text-primary underline ml-1">info@nuvemlabs.co.nz</a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">Contact</h2>
          <p>
            Questions about this policy or our data practices? Email us and
            we&apos;ll be happy to help.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
