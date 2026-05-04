import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Rocket, Brain, Share2, CheckCircle2, ArrowRight, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Link, useLocation } from 'react-router-dom';

export default function Services() {
  const { t } = useLanguage();
  const { hash } = useLocation();
  const [expandedPkg, setExpandedPkg] = useState<number | null>(null);

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  const services = [
    {
      id: 'web',
      icon: <Cpu size={32} />,
      title: t('services.web'),
      desc: t('services.web.desc'),
      features: t('services.web.features').split(', '),
      color: "from-primary-brand to-primary-container-brand shadow-primary-brand/20",
      bg: "bg-primary-brand/5"
    },
    {
      id: 'mobile',
      icon: <Rocket size={32} />,
      title: t('services.mobile'),
      desc: t('services.mobile.desc'),
      features: t('services.mobile.features').split(', '),
      color: "from-primary-brand to-primary-container-brand shadow-primary-brand/20",
      bg: "bg-primary-brand/5"
    },
    {
      id: 'product',
      icon: <Brain size={32} />,
      title: t('services.product'),
      desc: t('services.product.desc'),
      features: t('services.product.features').split(', '),
      color: "from-primary-brand to-primary-container-brand shadow-primary-brand/20",
      bg: "bg-primary-brand/5"
    },
    {
      id: 'graphic',
      icon: <Share2 size={32} />,
      title: t('services.graphic'),
      desc: t('services.graphic.desc'),
      features: t('services.graphic.features').split(', '),
      color: "from-primary-brand to-primary-container-brand shadow-primary-brand/20",
      bg: "bg-primary-brand/5"
    }
  ];

  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-primary-brand font-bold text-label-caps mb-4 block"
        >
          {t('nav.services')}
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-h1 mb-6"
        >
          {t('home.services.title')}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-body-lg text-on-surface-variant max-w-3xl mx-auto"
        >
          {t('home.services.desc')}
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        {services.map((service, i) => (
          <motion.div 
            key={service.id}
            id={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.1 }}
            className={`p-8 md:p-16 rounded-[3rem] border border-slate-100 airy-shadow group hover:border-primary-brand/20 transition-all duration-500 bg-white`}
          >
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="flex-1 space-y-8">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center shadow-2xl`}>
                  {service.icon}
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">{service.title}</h2>
                  <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                    {service.desc}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="text-primary-brand shrink-0" size={20} />
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-6">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-primary-brand transition-all active:scale-95"
                  >
                    {t('nav.contact')} <ArrowRight size={20} />
                  </Link>
                </div>
              </div>

              <div className="flex-1 lg:max-w-md hidden md:block">
                <div className={`aspect-square rounded-[2rem] overflow-hidden rotate-2 group-hover:rotate-0 transition-transform duration-700 ${service.bg}`}>
                  <div className="w-full h-full flex items-center justify-center opacity-20">
                    {service.icon}
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Packages for Web Development - Full Width Now */}
            {service.id === 'web' && (
              <div className="mt-20 pt-20 border-t border-slate-100">
                <div className="mb-12 text-center">
                  <h3 className="text-3xl font-black mb-4">{t('career.form.position') === 'Applied Position' ? 'Service Packages' : 'Paket Layanan Eksklusif'}</h3>
                  <p className="text-on-surface-variant max-w-2xl mx-auto">Pilih paket yang paling sesuai dengan kebutuhan dan skala bisnis Anda saat ini.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                  {[
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
                  ].map((pkg, idx) => (
                      <div 
                        key={idx} 
                        className={`flex flex-col rounded-[2.5rem] overflow-hidden border transition-all duration-500 ${
                          pkg.highlight 
                            ? 'border-primary-brand bg-primary-brand text-white shadow-2xl shadow-primary-brand/20 z-10' 
                            : 'border-slate-100 bg-white text-slate-800 hover:border-primary-brand/30 hover:shadow-xl'
                        }`}
                      >
                        <div className={`p-8 text-center border-b ${pkg.highlight ? 'border-white/10' : 'border-slate-50'}`}>
                          <h4 className="text-2xl font-black mb-3">Paket {pkg.name}</h4>
                          <p className={`text-xs mb-8 leading-relaxed px-2 ${pkg.highlight ? 'text-white/80' : 'text-slate-500'}`}>{pkg.desc}</p>
                          <div className={`inline-block px-8 py-3 rounded-2xl font-black text-lg border-2 mb-4 ${pkg.highlight ? 'border-white text-white' : 'border-primary-brand text-primary-brand'}`}>
                            {pkg.price}
                          </div>
                          
                          <button 
                            onClick={() => setExpandedPkg(expandedPkg === idx ? null : idx)}
                            className={`w-full mt-4 flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest py-2 rounded-lg transition-colors ${
                              pkg.highlight ? 'hover:bg-white/10' : 'hover:bg-slate-50 text-primary-brand'
                            }`}
                          >
                            Detail Paket {expandedPkg === idx ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                          </button>
                        </div>

                        <AnimatePresence>
                          {expandedPkg === idx && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className={`overflow-hidden ${pkg.highlight ? 'bg-white text-slate-800' : 'bg-slate-50'}`}
                            >
                              <div className="p-8 space-y-4">
                                <ul className="space-y-4 mb-4">
                                  {pkg.features.map((f, i) => (
                                    <li key={i} className="flex items-start gap-4 text-sm leading-snug">
                                      <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${pkg.highlight ? 'bg-primary-brand' : 'bg-primary-brand/40'}`} />
                                      <span className="font-medium">{f}</span>
                                    </li>
                                  ))}
                                </ul>
                                <Link 
                                  to="/contact"
                                  className={`w-full py-5 rounded-2xl font-black text-center transition-all active:scale-95 flex items-center justify-center gap-3 shadow-lg ${
                                    pkg.highlight 
                                      ? 'bg-primary-brand text-white hover:bg-primary-brand/90' 
                                      : 'bg-slate-900 text-white hover:bg-primary-brand'
                                  }`}
                                >
                                  <MessageSquare size={20} /> Book Now
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                  ))}
                </div>
                <p className="mt-12 text-center text-sm text-on-surface-variant italic font-medium">Perpanjangan mulai dari 500rb/tahun • Syarat & Ketentuan Berlaku</p>
              </div>
            )}
          </motion.div>
        ))}
      </section>
    </div>
  );
}
