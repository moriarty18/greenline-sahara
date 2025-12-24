import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";

export default function Contact() {
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

        <h1 className="text-3xl font-bold font-display">Contact Us</h1>
        <p className="text-gray-400 text-sm">We are here to help you.</p>

        <div className="grid gap-6 md:grid-cols-2 mt-8">
          <div className="bg-card/30 p-6 rounded-xl border border-white/10 space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-1" />
              <div>
                <h3 className="font-bold text-white">Address</h3>
                <p className="text-gray-300 text-sm mt-1">
                  Greenline Power Generation Equipment Trading LLC<br/>
                  Office No. 184, The European Business Centre<br/>
                  Dubai Investment Park, Dubai, UAE
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card/30 p-6 rounded-xl border border-white/10 space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <div>
                <h3 className="font-bold text-white">Phone</h3>
                <p className="text-gray-300 text-sm mt-1">+971 56 547 1365</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 pt-2">
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <h3 className="font-bold text-white">Email</h3>
                <p className="text-gray-300 text-sm mt-1">support@greenlinepg.ae</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
