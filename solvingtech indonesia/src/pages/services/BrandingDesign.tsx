import React from 'react';
import { Share2 } from 'lucide-react';
import ServiceDetailLayout from './ServiceDetailLayout';
import { useLanguage } from '../../LanguageContext';

export default function BrandingDesign() {
  const { t } = useLanguage();
  
  return (
    <ServiceDetailLayout
      id="graphic"
      title={t('services.graphic')}
      description={t('services.graphic.desc')}
      icon={<Share2 />}
      features={t('services.graphic.features').split(', ')}
      color="from-primary-brand to-primary-container-brand shadow-primary-brand/20"
      bg="bg-primary-brand/5"
    />
  );
}
