import { useEffect } from 'react';

const TermsOfService = () => {
  useEffect(() => {
    document.title = 'Terms of Service - Nuvem Labs';
  }, []);

  return (
    <div className="min-h-screen container mx-auto px-4 py-12 space-y-6">
      <h1 className="text-3xl font-bold">Terms of Service</h1>
      <p className="text-foreground/70">
        These terms outline the rules for using Nuvem Labs&apos; website and
        services. By accessing our site you agree to them.
      </p>

      <div className="space-y-4 text-foreground/70">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Using Our Services
          </h2>
          <p>
            We provide AI-driven development and automation solutions. You agree
            to use our services only for lawful purposes and in accordance with
            all applicable regulations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Intellectual Property
          </h2>
          <p>
            All content on this site including text, graphics and logos is the
            property of Nuvem Labs. You may not reproduce or distribute it
            without permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Limitation of Liability
          </h2>
          <p>
            We strive to keep our services reliable but we make no warranties.
            Nuvem Labs is not liable for any damages arising from the use of our
            site or services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Contact Us
          </h2>
          <p>
            If you have questions about these terms, reach us at
            <a href="mailto:info@nuvemlabs.co.nz" className="text-primary underline ml-1">info@nuvemlabs.co.nz</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
