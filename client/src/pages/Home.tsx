import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { BatteryCharging, MapPin, Smartphone, Zap, Navigation } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const { t, dir } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
    <div className="min-h-screen flex flex-col overflow-x-hidden" dir={dir}>
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src="/images/icon-charge-neon.png" alt="Logo" className="w-8 h-8 object-contain" />
            <span className="font-display font-bold text-xl tracking-wider text-white">
              GREEN<span className="text-primary">LINE</span>
            </span>
          </div>
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background z-10" />
          <img 
            src="/images/hero-1.jpg" 
            alt="Charging Station" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container relative z-20 py-12">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-2xl mx-auto text-center space-y-8"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/50 backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-primary font-bold text-sm uppercase tracking-wider">{t('status.available')}</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-display font-black text-white leading-tight neon-text">
              {t('hero.title')}
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto">
              {t('hero.subtitle')}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg h-14 px-8 rounded-full shadow-[0_0_20px_rgba(0,255,0,0.3)] hover:shadow-[0_0_30px_rgba(0,255,0,0.5)] transition-all duration-300"
                onClick={() => window.open('https://www.google.com/maps/place/Greenline,+Sahara+Centre+-+Al+Nahda+St+-+Al+Nahda+First+-+Al+Nahda+-+Dubai+-+%D0%9E%D0%90%D0%AD/@25.2977291,55.3733891,17z/data=!4m9!1m2!2m1!1sgreenline+charging+station+dubai!3m5!1s0x3e5f5dff80619c8d:0x985b807ae8b8f03d!8m2!3d25.2977291!4d55.3733891!16s%2Fg%2F11zkqsf9j5', '_blank')}
              >
                <Navigation className="me-2 h-5 w-5" />
                {t('hero.cta')}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/cyberpunk-bg.jpg')] opacity-10 bg-cover bg-fixed" />
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              {t('features.title')}
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full neon-box" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Zap className="w-10 h-10 text-primary" />}
              title={t('features.speed')}
              desc={t('features.speed.desc')}
              delay={0.1}
            />
            <FeatureCard 
              icon={<BatteryCharging className="w-10 h-10 text-primary" />}
              title={t('features.points')}
              desc={t('features.points.desc')}
              delay={0.2}
            />
            <FeatureCard 
              icon={<MapPin className="w-10 h-10 text-primary" />}
              title={t('features.location')}
              desc={t('features.location.desc')}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-card/30 backdrop-blur-sm border-y border-white/5">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                {t('location.title')}
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Sahara Centre</h3>
                    <p className="text-gray-400">{t('location.address')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <Navigation className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{t('location.floor')}</h3>
                    <p className="text-gray-400">Basement 1</p>
                  </div>
                </div>
              </div>
              <Button 
                className="w-full sm:w-auto bg-white text-black hover:bg-gray-200 font-bold"
                onClick={() => window.open('https://www.google.com/maps/place/Greenline,+Sahara+Centre+-+Al+Nahda+St+-+Al+Nahda+First+-+Al+Nahda+-+Dubai+-+%D0%9E%D0%90%D0%AD/@25.2977291,55.3733891,17z/data=!4m9!1m2!2m1!1sgreenline+charging+station+dubai!3m5!1s0x3e5f5dff80619c8d:0x985b807ae8b8f03d!8m2!3d25.2977291!4d55.3733891!16s%2Fg%2F11zkqsf9j5', '_blank')}
              >
                Open in Google Maps
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl group"
            >
              <img 
                src="/images/location-map.jpg" 
                alt="Location Map" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <p className="text-white font-bold flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Sahara Centre, Sharjah
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-20 relative">
        <div className="container text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-card to-background border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 border border-primary/30">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                {t('app.title')}
              </h2>
              <p className="text-gray-400 max-w-lg mb-8 text-lg">
                {t('app.desc')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <a 
                  href="https://apps.apple.com/ae/app/greenline-power/id6752994442" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors gap-3 min-w-[200px]"
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg" alt="Apple" className="w-6 h-6 invert" />
                  <div className="text-start">
                    <div className="text-xs font-medium">Download on the</div>
                    <div className="text-lg font-bold leading-none">App Store</div>
                  </div>
                </a>
                
                <a 
                  href="https://play.google.com/store/apps/details?id=ae.greenlinepg.cp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-transparent border border-white/20 text-white px-6 py-3 rounded-xl hover:bg-white/5 transition-colors gap-3 min-w-[200px]"
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" alt="Google Play" className="w-6 h-6" />
                  <div className="text-start">
                    <div className="text-xs font-medium">GET IT ON</div>
                    <div className="text-lg font-bold leading-none">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 bg-black/50">
        <div className="container text-center">
          <p className="text-gray-500 text-sm">
            {t('footer.rights')}
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <Card className="bg-card/50 border-white/5 hover:border-primary/50 transition-colors duration-300 h-full backdrop-blur-sm group">
        <CardContent className="p-8 flex flex-col items-center text-center h-full">
          <div className="mb-6 p-4 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300 border border-primary/10 group-hover:border-primary/30">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-3 font-display">{title}</h3>
          <p className="text-gray-400">{desc}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
