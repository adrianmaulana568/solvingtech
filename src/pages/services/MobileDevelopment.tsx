import React from 'react';
import { Rocket } from 'lucide-react';
import ServiceDetailLayout from './ServiceDetailLayout';
import { useLanguage } from '../../LanguageContext';

export default function MobileDevelopment() {
  const { t } = useLanguage();
  
  return (
    <ServiceDetailLayout
      id="mobile"
      title={t('services.mobile')}
      description={t('services.mobile.desc')}
      icon={<Rocket />}
      features={t('services.mobile.features').split(', ')}
      color="from-primary-brand to-primary-container-brand shadow-primary-brand/20"
      bg="bg-primary-brand/5"
    />
  );
}
