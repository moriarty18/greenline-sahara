import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { BatteryCharging, MapPin, Smartphone, Zap, Navigation, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  const { t, dir } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      } as any
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-background" dir={dir}>
      {/* Compact Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-white/10 h-14">
        <div className="container flex items-center justify-between h-full px-4">
          <div className="flex items-center gap-2">
            <img src="/images/logo-greenline.png" alt="Greenline Logo" className="h-8 w-auto object-contain" />
          </div>
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Main Content - Compact Single View Feel */}
      <main className="pt-14 pb-20">
        {/* Hero + Status Section */}
        <section className="relative h-[40vh] min-h-[300px] flex items-end pb-8 justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
            <img 
              src="/images/hero-1.jpg" 
              alt="Charging Station" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="container relative z-20 text-center px-4">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="space-y-3"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/50 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-primary font-bold text-xs uppercase tracking-wider">{t('status.available')}</span>
              </motion.div>

              <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl font-display font-black text-white leading-tight neon-text drop-shadow-lg">
                {t('hero.title')}
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-sm md:text-base text-gray-200 font-medium drop-shadow-md">
                {t('hero.subtitle')}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Compact Info Grid */}
        <div className="container px-4 -mt-6 relative z-30 space-y-4">
          {/* Action Buttons Row */}
          <div className="grid grid-cols-2 gap-3">
            <Button 
              size="lg" 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-12 rounded-xl shadow-lg shadow-primary/20"
              onClick={() => window.open('https://www.google.com/maps/place/Greenline,+Sahara+Centre+-+Al+Nahda+St+-+Al+Nahda+First+-+Al+Nahda+-+Dubai+-+%D0%9E%D0%90%D0%AD/@25.2977291,55.3733891,17z/data=!4m9!1m2!2m1!1sgreenline+charging+station+dubai!3m5!1s0x3e5f5dff80619c8d:0x985b807ae8b8f03d!8m2!3d25.2977291!4d55.3733891!16s%2Fg%2F11zkqsf9j5', '_blank')}
            >
              <Navigation className="me-2 h-5 w-5" />
              {t('hero.cta')}
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="w-full bg-card/50 backdrop-blur-md border-primary/30 text-white hover:bg-primary/10 font-bold h-12 rounded-xl"
              onClick={() => window.open('https://wa.me/971565471365', '_blank')}
            >
              <MessageCircle className="me-2 h-5 w-5 text-green-400" />
              WhatsApp
            </Button>
          </div>

          {/* Features Compact Cards */}
          <div className="grid grid-cols-3 gap-2">
            <CompactFeature 
              icon={<Zap className="w-5 h-5 text-primary" />}
              title="120 kW"
              desc="Power"
            />
            <CompactFeature 
              icon={<BatteryCharging className="w-5 h-5 text-primary" />}
              title="6 Units"
              desc="Chargers"
            />
            <CompactFeature 
              icon={<MapPin className="w-5 h-5 text-primary" />}
              title="B1"
              desc="Parking"
            />
          </div>

          {/* Location Map Card */}
          <Card className="bg-card/40 border-white/10 overflow-hidden rounded-xl">
            <CardContent className="p-0">
              <div className="relative h-48 w-full">
                <img 
                  src="/images/location-map.jpg" 
                  alt="Location Map" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
                  <div className="flex items-center gap-2 text-white">
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                    <div className="text-xs">
                      <div className="font-bold">Sahara Centre, Sharjah</div>
                      <div className="text-gray-300 truncate">Basement 1 Parking</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* App Download Compact */}
          <div className="bg-gradient-to-r from-card to-background border border-white/10 rounded-xl p-4 flex flex-col items-center text-center gap-3">
            <div className="flex items-center gap-2 mb-1">
              <Smartphone className="w-5 h-5 text-primary" />
              <h2 className="font-display font-bold text-white text-sm">{t('app.title')}</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-3 w-full">
              <a 
                href="https://apps.apple.com/ae/app/greenline-power/id6752994442" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-white text-black px-2 py-2 rounded-lg hover:bg-gray-100 transition-colors gap-2"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg" alt="Apple" className="w-4 h-4 invert" />
                <span className="text-xs font-bold">App Store</span>
              </a>
              
              <a 
                href="https://play.google.com/store/apps/details?id=ae.greenlinepg.cp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-white/10 border border-white/20 text-white px-2 py-2 rounded-lg hover:bg-white/20 transition-colors gap-2"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" alt="Google Play" className="w-4 h-4" />
                <span className="text-xs font-bold">Google Play</span>
              </a>
            </div>
          </div>

          {/* About Section - Added for Google Ads Content Requirements */}
          <div className="space-y-4 pt-4">
            <h2 className="text-xl font-display font-bold text-white">About Greenline Sahara</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Greenline Power Generation offers ultra-fast EV charging services at Sahara Centre, Sharjah. 
              Our station features 6 state-of-the-art DC fast chargers capable of delivering up to 120kW of power, 
              allowing you to charge your electric vehicle quickly while you shop or dine.
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Located conveniently in Basement 1 Parking, our chargers support all major EV models with CCS2 and CHAdeMO connectors. 
              Experience seamless charging with our mobile app, offering real-time availability, secure payments, and charging history.
            </p>
          </div>

          {/* FAQ Section - Added for Google Ads Content Requirements */}
          <div className="space-y-4 pt-4">
            <h2 className="text-xl font-display font-bold text-white">Frequently Asked Questions</h2>
            <div className="space-y-3">
              <div className="bg-card/20 p-3 rounded-lg border border-white/5">
                <h3 className="font-bold text-primary text-sm mb-1">Where is the station located?</h3>
                <p className="text-xs text-gray-300">We are located in Sahara Centre, Sharjah, in the Basement 1 Parking area near the main entrance.</p>
              </div>
              <div className="bg-card/20 p-3 rounded-lg border border-white/5">
                <h3 className="font-bold text-primary text-sm mb-1">How fast is the charging?</h3>
                <p className="text-xs text-gray-300">Our DC fast chargers provide up to 120kW of power, capable of charging most EVs from 20% to 80% in under 30 minutes.</p>
              </div>
              <div className="bg-card/20 p-3 rounded-lg border border-white/5">
                <h3 className="font-bold text-primary text-sm mb-1">How do I pay?</h3>
                <p className="text-xs text-gray-300">Download the Greenline App (iOS/Android) to scan the QR code on the charger and pay securely via credit card or Apple Pay.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer with Privacy Link */}
      <footer className="py-6 text-center text-xs text-gray-600 border-t border-white/5 bg-black/20 space-y-2">
        <p>© 2025 Greenline Power Generation. All rights reserved.</p>
        <div className="flex justify-center gap-4">
          <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <a href="https://greenlinepg.ae" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Corporate Website</a>
        </div>
      </footer>
    </div>
  );
}

function CompactFeature({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-card/30 border border-white/5 rounded-xl p-3 flex flex-col items-center text-center gap-1 backdrop-blur-sm">
      <div className="text-primary mb-1">{icon}</div>
      <div className="font-display font-bold text-white text-sm leading-none">{title}</div>
      <div className="text-[10px] text-gray-400 uppercase tracking-wide">{desc}</div>
    </div>
  );
}
