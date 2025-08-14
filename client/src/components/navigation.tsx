import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Globe } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { LanguageToggle } from './language-toggle';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Navigation() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');
  
  const navItems = [
    { id: 'home', label: t('home') },
    { id: 'about', label: t('about') },
    { id: 'services', label: t('services') },
    { id: 'pricing', label: t('pricing') },
    { id: 'contact', label: t('contact') },
  ];
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };
  
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-bright-yellow rounded-lg flex items-center justify-center">
              <Globe className="h-5 w-5 text-dark-navy font-bold" />
            </div>
            <span className="font-bold text-xl text-dark-navy">
              {t('brandName')}
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors ${
                  activeSection === item.id
                    ? 'text-dark-navy font-semibold'
                    : 'text-secondary-gray hover:text-dark-navy'
                }`}
                data-testid={`nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Actions */}
          <div className="flex items-center space-x-4">
            <LanguageToggle />
            
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden" data-testid="mobile-menu-trigger">
                  <Menu className="h-5 w-5 text-dark-navy" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-left py-2 transition-colors ${
                        activeSection === item.id
                          ? 'text-dark-navy font-semibold'
                          : 'text-secondary-gray hover:text-dark-navy'
                      }`}
                      data-testid={`mobile-nav-${item.id}`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
