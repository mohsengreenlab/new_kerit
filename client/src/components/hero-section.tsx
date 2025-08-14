import { Button } from '@/components/ui/button';
import { TrendingUp } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

export function HeroSection() {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-white to-section-bg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-dark-navy leading-tight">
              <span className="block">{t('heroTitle')}</span>
              <span className="text-bright-yellow block">{t('heroTitleHighlight')}</span>
            </h1>
            
            <p className="text-xl text-secondary-gray leading-relaxed">
              {t('heroTagline')}
            </p>
            
            <p className="text-lg text-secondary-gray">
              {t('heroSubheading')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-bright-yellow text-dark-navy px-8 py-4 rounded-lg font-semibold hover:bg-light-yellow transition-colors"
                onClick={() => scrollToSection('contact')}
                data-testid="button-book-consultation"
              >
                {t('bookConsultation')}
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-sage-green text-sage-green px-8 py-4 rounded-lg font-semibold hover:bg-sage-green hover:text-white transition-colors"
                onClick={() => scrollToSection('contact')}
                data-testid="button-contact-us"
              >
                {t('contactUs')}
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
              alt="Professional business consultant analyzing market data"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-light-yellow rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-dark-navy" />
                </div>
                <div>
                  <p className="font-semibold text-dark-navy">{t('marketSuccess')}</p>
                  <p className="text-secondary-gray text-sm">{t('provenResults')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
