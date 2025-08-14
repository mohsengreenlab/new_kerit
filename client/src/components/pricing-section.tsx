import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

export function PricingSection() {
  const { t } = useLanguage();
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
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
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-navy mb-6">
            {t('pricingTitle')}
          </h2>
          <p className="text-lg text-secondary-gray max-w-2xl mx-auto">
            {t('pricingDescription')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Package */}
          <div className="bg-section-bg rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold text-dark-navy mb-4">
              {t('marketExplorer')}
            </h3>
            <div className="mb-6">
              <span className="text-3xl font-bold text-dark-navy">
                {t('contactForQuote')}
              </span>
              <div className="text-bright-yellow font-semibold">
                {t('customQuote')}
              </div>
            </div>
            <ul className="text-secondary-gray space-y-3 mb-8 text-left">
              <li className="flex items-start space-x-2">
                <Check className="h-5 w-5 text-sage-green mt-0.5 flex-shrink-0" />
                <span>{t('basicMarketResearch')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="h-5 w-5 text-sage-green mt-0.5 flex-shrink-0" />
                <span>{t('industryOverviewReport')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="h-5 w-5 text-sage-green mt-0.5 flex-shrink-0" />
                <span>{t('initialConsultation')}</span>
              </li>
            </ul>
            <Button 
              variant="outline"
              className="w-full border-2 border-sage-green text-sage-green py-3 rounded-lg font-semibold hover:bg-sage-green hover:text-white transition-colors"
              onClick={scrollToContact}
              data-testid="button-starter-package"
            >
              {t('getStarted')}
            </Button>
          </div>

          {/* Professional Package */}
          <div className="bg-bright-yellow rounded-2xl p-8 text-center transform scale-105 shadow-xl relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-dark-navy text-white px-4 py-1 rounded-full text-sm font-semibold">
                {t('mostPopular')}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-dark-navy mb-4 mt-4">
              {t('marketLauncher')}
            </h3>
            <div className="mb-6">
              <span className="text-3xl font-bold text-dark-navy">
                {t('contactForQuote')}
              </span>
              <div className="text-dark-navy font-semibold">
                {t('customQuote')}
              </div>
            </div>
            <ul className="text-dark-navy space-y-3 mb-8 text-left">
              <li className="flex items-start space-x-2">
                <Check className="h-5 w-5 text-sage-green mt-0.5 flex-shrink-0" />
                <span>{t('comprehensiveMarketAnalysis')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="h-5 w-5 text-sage-green mt-0.5 flex-shrink-0" />
                <span>{t('leadGenerationSourcing')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="h-5 w-5 text-sage-green mt-0.5 flex-shrink-0" />
                <span>{t('websiteLocalization')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="h-5 w-5 text-sage-green mt-0.5 flex-shrink-0" />
                <span>{t('socialMediaSetup')}</span>
              </li>
            </ul>
            <Button 
              className="w-full bg-dark-navy text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
              onClick={scrollToContact}
              data-testid="button-professional-package"
            >
              {t('getStarted')}
            </Button>
          </div>

          {/* Enterprise Package */}
          <div className="bg-section-bg rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold text-dark-navy mb-4">
              {t('marketDominator')}
            </h3>
            <div className="mb-6">
              <span className="text-3xl font-bold text-dark-navy">
                {t('contactForQuote')}
              </span>
              <div className="text-bright-yellow font-semibold">
                {t('customQuote')}
              </div>
            </div>
            <ul className="text-secondary-gray space-y-3 mb-8 text-left">
              <li className="flex items-start space-x-2">
                <Check className="h-5 w-5 text-sage-green mt-0.5 flex-shrink-0" />
                <span>{t('fullMarketEntryStrategy')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="h-5 w-5 text-sage-green mt-0.5 flex-shrink-0" />
                <span>{t('dedicatedAccountManager')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="h-5 w-5 text-sage-green mt-0.5 flex-shrink-0" />
                <span>{t('ongoingSupportOptimization')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="h-5 w-5 text-sage-green mt-0.5 flex-shrink-0" />
                <span>{t('partnershipNetworkAccess')}</span>
              </li>
            </ul>
            <Button 
              variant="outline"
              className="w-full border-2 border-sage-green text-sage-green py-3 rounded-lg font-semibold hover:bg-sage-green hover:text-white transition-colors"
              onClick={scrollToContact}
              data-testid="button-enterprise-package"
            >
              {t('getStarted')}
            </Button>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-secondary-gray mb-4">
            {t('customPackagesNote')}
          </p>
          <Button 
            className="bg-bright-yellow text-dark-navy px-8 py-4 rounded-lg font-semibold hover:bg-light-yellow transition-colors"
            onClick={scrollToContact}
            data-testid="button-schedule-strategy-call"
          >
            {t('scheduleStrategyCall')}
          </Button>
        </div>
      </div>
    </section>
  );
}
