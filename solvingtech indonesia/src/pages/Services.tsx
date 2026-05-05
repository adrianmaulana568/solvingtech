import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Rocket, Brain, Share2, CheckCircle2, ArrowRight, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Link, useLocation } from 'react-router-dom';

export default function Services() {
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  const services = [
    {
      id: 'web',
      icon: <Cpu size={40} />,
      title: t('services.web'),
      desc: t('services.web.desc'),
      link: "/services/web-development",
      color: "from-blue-500 to-indigo-600",
      features: t('services.web.features').split(', ').slice(0, 3)
    },
    {
      id: 'mobile',
      icon: <Rocket size={40} />,
      title: t('services.mobile'),
      desc: t('services.mobile.desc'),
      link: "/services/mobile-development",
      color: "from-purple-500 to-pink-600",
      features: t('services.mobile.features').split(', ').slice(0, 3)
    },
    {
      id: 'product',
      icon: <Brain size={40} />,
      title: t('services.product'),
      desc: t('services.product.desc'),
      link: "/services/ui-ux-design",
      color: "from-orange-400 to-red-500",
      features: t('services.product.features').split(', ').slice(0, 3)
    },
    {
      id: 'graphic',
      icon: <Share2 size={40} />,
      title: t('services.graphic'),
      desc: t('services.graphic.desc'),
      link: "/services/branding-design",
      color: "from-teal-400 to-emerald-600",
      features: t('services.graphic.features').split(', ').slice(0, 3)
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-[#f8faff] min-h-screen">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 mb-24 text-center relative">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary-brand font-black text-label-caps mb-4 block tracking-widest uppercase"
        >
          {t('nav.services')}
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-6xl lg:text-8xl font-black mb-8 leading-tight text-slate-900 italic tracking-tighter"
        >
          {t('home.services.title')}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed"
        >
          {t('home.services.desc')}
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {services.map((service, i) => (
          <motion.div 
            key={service.id}
            id={service.id}
            className="scroll-mt-32"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Link 
              to={service.link}
              className="group block h-full p-10 md:p-14 rounded-[3.5rem] bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] hover:border-primary-brand/20 transition-all duration-700 relative overflow-hidden"
            >
              <div className="relative z-10 space-y-8">
                <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center shadow-2xl shadow-primary-brand/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  {service.icon}
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900 group-hover:text-primary-brand transition-colors">{service.title}</h2>
                  <p className="text-lg text-slate-500 leading-relaxed font-medium mb-6">
                    {service.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((f, idx) => (
                    <span key={idx} className="px-5 py-2 bg-slate-50 text-slate-600 text-[10px] font-black uppercase tracking-widest rounded-full border border-slate-100">
                      {f}
                    </span>
                  ))}
                </div>
                <div className="pt-6 flex items-center gap-3 text-primary-brand font-black group-hover:translate-x-2 transition-transform">
                  {t('home.services.view_details')} <ArrowRight size={20} />
                </div>
              </div>
              
              {/* Background Accent */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-50 rounded-full blur-3xl group-hover:bg-primary-brand/10 transition-colors -z-0" />
            </Link>
          </motion.div>
        ))}
      </section>

      {/* Trust Quote */}
      <section className="max-w-5xl mx-auto px-6 mt-40 text-center pb-32">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-16 md:p-24 rounded-[4rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 text-white relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(37,99,235,0.45)] border border-white/10"
        >
          <div className="relative z-10">
            <MessageSquare size={64} className="mx-auto mb-10 text-white/20" />
            <h3 className="text-3xl md:text-5xl font-black mb-10 italic leading-tight text-white tracking-tight">
              {t('services.quote')}
            </h3>
            <div className="w-24 h-2 bg-white/20 mx-auto rounded-full mb-10" />
            <p className="text-white/80 font-black uppercase tracking-[0.4em] text-xs">
              TEAM SOLVINGTECH
            </p>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[120px] rounded-full -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 blur-[120px] rounded-full -ml-48 -mb-48" />
        </motion.div>
      </section>
    </div>
  );
}
