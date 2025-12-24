import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Terms() {
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

        <h1 className="text-3xl font-bold font-display">Terms & Conditions</h1>
        <p className="text-gray-400 text-sm">Last updated: December 23, 2025</p>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-primary">1. Acceptance of Terms</h2>
          <p className="text-gray-300 leading-relaxed">
            By accessing and using the Greenline Power Generation charging services and website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-primary">2. Service Usage</h2>
          <p className="text-gray-300 leading-relaxed">
            Our charging stations are available for public use. Users must follow all safety instructions displayed at the station. We reserve the right to refuse service to anyone for any reason at any time.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-primary">3. Payments and Refunds</h2>
          <p className="text-gray-300 leading-relaxed">
            All charging sessions are billed based on the energy consumed (kWh) or time spent, as displayed on the charger or app. Payments are processed securely. Refunds are handled on a case-by-case basis for technical failures.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-primary">4. Liability</h2>
          <p className="text-gray-300 leading-relaxed">
            Greenline Power Generation is not liable for any damages to your vehicle resulting from misuse of the charging equipment or failure to follow instructions.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-primary">5. Contact Information</h2>
          <p className="text-gray-300 leading-relaxed">
            Greenline Power Generation Equipment Trading LLC<br/>
            Office No. 184, The European Business Centre<br/>
            Dubai Investment Park, Dubai, UAE<br/>
            Email: support@greenlinepg.ae
          </p>
        </section>
      </div>
    </div>
  );
}
