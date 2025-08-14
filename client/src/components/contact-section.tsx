import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const contactFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(1, 'Company name is required'),
  message: z.string().min(10, 'Message must be at least 10 characters long'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      message: '',
    },
  });
  
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        toast({
          title: "Success",
          description: t('formSubmitSuccess'),
        });
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-20 bg-dark-navy text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              {t('contactTitle')}
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              {t('contactDescription')}
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-bright-yellow rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-dark-navy" />
                </div>
                <div>
                  <p className="font-semibold">{t('email')}</p>
                  <p className="text-gray-300">contact@rusmarketpro.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-bright-yellow rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-dark-navy" />
                </div>
                <div>
                  <p className="font-semibold">{t('phone')}</p>
                  <p className="text-gray-300">+7 (495) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-bright-yellow rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-dark-navy" />
                </div>
                <div>
                  <p className="font-semibold">{t('office')}</p>
                  <p className="text-gray-300">{t('moscowRussia')}</p>
                </div>
              </div>
            </div>


          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6">{t('sendMessage')}</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">{t('firstName')}</FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            placeholder={t('firstNamePlaceholder')}
                            className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-bright-yellow"
                            data-testid="input-first-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">{t('lastName')}</FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            placeholder={t('lastNamePlaceholder')}
                            className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-bright-yellow"
                            data-testid="input-last-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">{t('email')}</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          type="email"
                          placeholder={t('emailPlaceholder')}
                          className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-bright-yellow"
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">{t('company')}</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          placeholder={t('companyPlaceholder')}
                          className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-bright-yellow"
                          data-testid="input-company"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">{t('message')}</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field}
                          rows={4}
                          placeholder={t('messagePlaceholder')}
                          className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-bright-yellow resize-none"
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-bright-yellow text-dark-navy py-4 rounded-lg font-semibold hover:bg-light-yellow transition-colors disabled:opacity-50"
                  data-testid="button-send-message"
                >
                  {isSubmitting ? (
                    <span className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-dark-navy"></div>
                      <span>Sending...</span>
                    </span>
                  ) : (
                    <span className="flex items-center space-x-2">
                      <Send className="h-4 w-4" />
                      <span>{t('sendMessageBtn')}</span>
                    </span>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="border-t border-white/10 mt-20 pt-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-bright-yellow rounded-lg flex items-center justify-center">
                <Globe className="h-5 w-5 text-dark-navy font-bold" />
              </div>
              <span className="font-bold text-xl">{t('brandName')}</span>
            </div>
            
            <p className="text-gray-400 text-sm">
              {t('allRightsReserved')}
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
