import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ru' : 'en');
  };
  
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center space-x-2 bg-section-bg hover:bg-light-yellow transition-colors"
      data-testid="language-toggle"
    >
      <span className="text-sm font-medium">
        {language === 'en' ? 'EN' : 'RU'}
      </span>
      <Languages className="h-4 w-4 text-sage-green" />
    </Button>
  );
}
