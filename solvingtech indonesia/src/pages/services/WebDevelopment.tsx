import React from 'react';
import { Cpu } from 'lucide-react';
import ServiceDetailLayout from './ServiceDetailLayout';
import { useLanguage } from '../../LanguageContext';

export default function WebDevelopment() {
  const { t } = useLanguage();
  
  const packages = [
    { 
      name: "Silver", 
      price: "IDR 700K", 
      desc: "Cocok untuk bisnis baru yang butuh identitas online dasar.", 
      features: ["4 Menu Halaman Utama", "FREE Domain Web.id", "Hosting 500 MB (Cepat)", "Integrasi Media Sosial", "Sertifikat SSL Website", "Standard Contact Form", "Free Support 1 Bulan"],
      highlight: false
    },
    { 
      name: "Gold", 
      price: "IDR 1,6JT", 
      desc: "Terbaik untuk e-commerce, blog, atau profile bisnis lengkap.", 
      features: ["8 Menu Halaman", "Gratis Domain .com", "Hosting 3 GB (High Speed)", "Integrasi Media Sosial", "Template WP Premium", "Perpanjang Setiap Tahun", "Garansi Maintenance"],
      highlight: false
    },
    { 
      name: "Diamond", 
      price: "IDR 2JT", 
      desc: "Untuk skala menengah yang ingin meningkatkan kehadiran online.", 
      features: ["10 Menu Halaman", "Domain .com, .co.id", "Hosting 3 GB (Unlimited BW)", "Plugin Premium Berbayar", "Pemasangan Google Map", "Respon Server Cepat", "Prioritas Support"],
      highlight: false
    },
    { 
      name: "Platinum", 
      price: "IDR 3JT", 
      desc: "Fitur kompleks, desain kustom penuh, dan performa maksimal.", 
      features: ["15-20 Menu Halaman", "Custom Domain Apapun", "Hosting 5 GB (Dedicated)", "WA & Phone Integration", "Video Panduan Pengguna", "Email Bisnis Profesional", "24/7 Priority Support"],
      highlight: false
    }
  ];

  return (
    <ServiceDetailLayout
      id="web"
      title={t('services.web')}
      description={t('services.web.desc')}
      icon={<Cpu />}
      features={t('services.web.features').split(', ')}
      color="from-primary-brand to-primary-container-brand shadow-primary-brand/20"
      bg="bg-primary-brand/5"
      packages={packages}
    />
  );
}
