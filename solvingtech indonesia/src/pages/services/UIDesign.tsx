import React from 'react';
import { Brain } from 'lucide-react';
import ServiceDetailLayout from './ServiceDetailLayout';
import { useLanguage } from '../../LanguageContext';

export default function UIDesign() {
  const { t } = useLanguage();
  
  return (
    <ServiceDetailLayout
      id="product"
      title={t('services.product')}
      description={t('services.product.desc')}
      icon={<Brain />}
      features={t('services.product.features').split(', ')}
      color="from-primary-brand to-primary-container-brand shadow-primary-brand/20"
      bg="bg-primary-brand/5"
    />
  );
}
