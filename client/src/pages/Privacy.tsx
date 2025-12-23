import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Privacy() {
  const { dir } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-12" dir={dir}>
      <div className="max-w-3xl mx-auto space-y-8">
        <Link href="/">
          <Button variant="ghost" className="mb-4 pl-0 hover:bg-transparent hover:text-primary">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-3xl font-bold font-display">Privacy Policy</h1>
        <p className="text-gray-400 text-sm">Last updated: December 23, 2025</p>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-primary">1. Introduction</h2>
          <p className="text-gray-300 leading-relaxed">
            Greenline Power Generation ("we," "our," or "us") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, and safeguard your information when you use our 
            EV charging services and mobile application.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-primary">2. Information We Collect</h2>
          <p className="text-gray-300 leading-relaxed">
            We may collect personal information such as your name, email address, phone number, and payment details 
            when you register for an account or use our charging stations. We also collect usage data regarding 
            your charging sessions.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-primary">3. How We Use Your Information</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>To provide and maintain our charging services.</li>
            <li>To process payments and billing.</li>
            <li>To communicate with you about your account and updates.</li>
            <li>To improve our services and customer support.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-primary">4. Data Security</h2>
          <p className="text-gray-300 leading-relaxed">
            We implement appropriate technical and organizational measures to protect your personal data against 
            unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-primary">5. Contact Us</h2>
          <p className="text-gray-300 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            Email: support@greenlinepg.ae
            <br />
            Phone: +971 56 547 1365
          </p>
        </section>
      </div>
    </div>
  );
}
