import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { ServicesSection } from '@/components/services-section';
import { PricingSection } from '@/components/pricing-section';
import { ContactSection } from '@/components/contact-section';
import { LanguageProvider } from '@/hooks/use-language';

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PricingSection />
        <ContactSection />
      </div>
    </LanguageProvider>
  );
}
