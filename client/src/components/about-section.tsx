import { Search, Users, Rocket } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

export function AboutSection() {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-navy mb-6">
            {t('aboutTitle')}
          </h2>
          <p className="text-lg text-secondary-gray">
            {t('aboutDescription')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-light-yellow rounded-full flex items-center justify-center mx-auto">
              <Search className="h-8 w-8 text-dark-navy" />
            </div>
            <h3 className="text-xl font-semibold text-dark-navy">
              {t('deepMarketIntelligence')}
            </h3>
            <p className="text-secondary-gray">
              {t('deepMarketDescription')}
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-light-yellow rounded-full flex items-center justify-center mx-auto">
              <Users className="h-8 w-8 text-dark-navy" />
            </div>
            <h3 className="text-xl font-semibold text-dark-navy">
              {t('localNetworkAccess')}
            </h3>
            <p className="text-secondary-gray">
              {t('localNetworkDescription')}
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-light-yellow rounded-full flex items-center justify-center mx-auto">
              <Rocket className="h-8 w-8 text-dark-navy" />
            </div>
            <h3 className="text-xl font-semibold text-dark-navy">
              {t('acceleratedEntry')}
            </h3>
            <p className="text-secondary-gray">
              {t('acceleratedEntryDescription')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
