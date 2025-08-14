import { Button } from '@/components/ui/button';
import { BarChart3, Target, Globe, Check } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

export function ServicesSection() {
  const { t } = useLanguage();
  
  return (
    <section id="services" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-navy mb-6">
            {t('servicesTitle')}
          </h2>
          <p className="text-lg text-secondary-gray max-w-2xl mx-auto">
            {t('servicesDescription')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Market Entry Support */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-light-yellow rounded-xl flex items-center justify-center mb-6">
              <BarChart3 className="h-6 w-6 text-dark-navy" />
            </div>
            <h3 className="text-xl font-semibold text-dark-navy mb-4">
              {t('marketEntrySupport')}
            </h3>
            <p className="text-secondary-gray mb-4">
              {t('marketEntrySupportDesc')}
            </p>
            <ul className="text-secondary-gray space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <Check className="h-4 w-4 text-sage-green mt-0.5 flex-shrink-0" />
                <span>{t('marketResearchAnalysis')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="h-4 w-4 text-sage-green mt-0.5 flex-shrink-0" />
                <span>{t('industryTrendsReports')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="h-4 w-4 text-sage-green mt-0.5 flex-shrink-0" />
                <span>{t('competitiveIntelligence')}</span>
              </li>
            </ul>
          </div>

          {/* Lead Generation */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-light-yellow rounded-xl flex items-center justify-center mb-6">
              <Target className="h-6 w-6 text-dark-navy" />
            </div>
            <h3 className="text-xl font-semibold text-dark-navy mb-4">
              {t('outreachLeadGeneration')}
            </h3>
            <p className="text-secondary-gray mb-4">
              {t('outreachLeadGenerationDesc')}
            </p>
            <ul className="text-secondary-gray space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <Check className="h-4 w-4 text-sage-green mt-0.5 flex-shrink-0" />
                <span>{t('leadSourcingListBuilding')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="h-4 w-4 text-sage-green mt-0.5 flex-shrink-0" />
                <span>{t('salesEnablement')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="h-4 w-4 text-sage-green mt-0.5 flex-shrink-0" />
                <span>{t('appointmentSetting')}</span>
              </li>
            </ul>
          </div>

          {/* Digital Presence */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-light-yellow rounded-xl flex items-center justify-center mb-6">
              <Globe className="h-6 w-6 text-dark-navy" />
            </div>
            <h3 className="text-xl font-semibold text-dark-navy mb-4">
              {t('digitalPresenceTrustBuilding')}
            </h3>
            <p className="text-secondary-gray mb-4">
              {t('digitalPresenceTrustBuildingDesc')}
            </p>
            <ul className="text-secondary-gray space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <Check className="h-4 w-4 text-sage-green mt-0.5 flex-shrink-0" />
                <span>{t('websiteLandingPageLocalization')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="h-4 w-4 text-sage-green mt-0.5 flex-shrink-0" />
                <span>{t('localSocialMediaSetup')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="h-4 w-4 text-sage-green mt-0.5 flex-shrink-0" />
                <span>{t('brandTrustDevelopment')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-bright-yellow text-dark-navy px-8 py-4 rounded-lg font-semibold hover:bg-light-yellow transition-colors" data-testid="button-view-all-services">
            {t('viewAllServices')}
          </Button>
        </div>
      </div>
    </section>
  );
}
