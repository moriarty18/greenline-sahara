import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-primary hover:text-primary hover:bg-primary/10 transition-colors"
    >
      <Globe className="w-4 h-4" />
      <span className="font-display font-bold">
        {language === 'en' ? 'العربية' : 'English'}
      </span>
    </Button>
  );
}
