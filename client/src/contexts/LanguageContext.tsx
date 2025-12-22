import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.location': 'Location',
    'nav.features': 'Features',
    'nav.app': 'Get App',
    'hero.title': 'Sahara Centre Charging Hub',
    'hero.subtitle': 'Now Operational | 120 kW Ultra-Fast Charging',
    'hero.cta': 'Get Directions',
    'status.available': 'Available Now',
    'features.title': 'Why Choose Greenline?',
    'features.speed': '120 kW Power',
    'features.speed.desc': 'Rapid charging while you shop',
    'features.points': '6 Fast Chargers',
    'features.points.desc': '12 Charging points available',
    'features.location': 'Premium Location',
    'features.location.desc': 'Easy access at Sahara Centre',
    'location.title': 'Find Us',
    'location.address': 'Sahara Centre - Al Nahda St - Al Nahda First - Sharjah - UAE',
    'location.floor': 'Basement 1 Parking',
    'app.title': 'Download Our App',
    'app.desc': 'Manage your charging sessions, pay seamlessly, and find stations.',
    'footer.rights': '© 2025 Greenline Power Generation. All rights reserved.',
    'meta.title': 'Greenline Charging Station - Sahara Centre',
    'meta.desc': 'Ultra-fast EV charging in Sharjah'
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.location': 'الموقع',
    'nav.features': 'المميزات',
    'nav.app': 'التطبيق',
    'hero.title': 'محطة شحن صحارى سنتر',
    'hero.subtitle': 'تعمل الآن | شحن فائق السرعة 120 كيلوواط',
    'hero.cta': 'احصل على الاتجاهات',
    'status.available': 'متاح الآن',
    'features.title': 'لماذا تختار جرين لاين؟',
    'features.speed': 'قوة 120 كيلوواط',
    'features.speed.desc': 'شحن سريع أثناء التسوق',
    'features.points': '6 شواحن سريعة',
    'features.points.desc': '12 نقطة شحن متاحة',
    'features.location': 'موقع مميز',
    'features.location.desc': 'سهولة الوصول في صحارى سنتر',
    'location.title': 'موقعنا',
    'location.address': 'صحارى سنتر - شارع النهضة - النهضة الأولى - الشارقة - الإمارات',
    'location.floor': 'مواقف الطابق السفلي 1',
    'app.title': 'حمل تطبيقنا',
    'app.desc': 'أدر جلسات الشحن الخاصة بك، ادفع بسلاسة، واعثر على المحطات.',
    'footer.rights': '© 2025 جرين لاين لتوليد الطاقة. جميع الحقوق محفوظة.',
    'meta.title': 'محطة شحن جرين لاين - صحارى سنتر',
    'meta.desc': 'شحن سيارات كهربائية فائق السرعة في الشارقة'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir: language === 'ar' ? 'rtl' : 'ltr' }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
