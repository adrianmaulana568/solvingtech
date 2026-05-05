import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Users, Rocket, Brain, Home, Plane, Send, CheckCircle2, FileText, MessageCircle, Code2, PartyPopper } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Careers() {
  const { t } = useLanguage();

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 text-white">
          <img 
            className="w-full h-full object-cover" 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
            alt="Team collaboration" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-900/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl px-6 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1.5 px-6 rounded-full bg-white/20 text-white border border-white/30 mb-8 text-xs font-black uppercase tracking-widest backdrop-blur-sm"
          >
            {t('career.badge')}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-none"
          >
            {t('career.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            {t('career.desc')}
          </motion.p>
        </div>
      </section>

      {/* No Vacancies Notice */}
      <section id="openings" className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="bg-white p-12 lg:p-24 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
               <Briefcase size={40} />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6 font-display italic">
               {t('career.no_vacancies')}
            </h2>
            <p className="text-slate-500 text-lg mb-12">
               {t('career.cta.notified')}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-md mx-auto">
               <input 
                 className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-blue-900/10 focus:border-blue-900 transition-all" 
                 placeholder="Email Address" 
                 type="email" 
               />
               <button className="whitespace-nowrap px-8 py-4 bg-blue-900 text-white rounded-2xl font-bold hover:bg-blue-800 transition-all active:scale-95 shadow-xl shadow-blue-900/20">
                  Notify Me
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-primary-brand font-black text-xs uppercase tracking-[0.2em] mb-4 block"
            >
              Step by Step
            </motion.span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">{t('career.process.title')}</h2>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">{t('career.process.desc')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: <FileText size={32} />, title: t('career.process.1'), desc: t('career.process.1.desc') },
              { icon: <MessageCircle size={32} />, title: t('career.process.2'), desc: t('career.process.2.desc') },
              { icon: <Code2 size={32} />, title: t('career.process.3'), desc: t('career.process.3.desc') },
              { icon: <PartyPopper size={32} />, title: t('career.process.4'), desc: t('career.process.4.desc') }
            ].map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center group"
              >
                <div className="w-24 h-24 bg-slate-50 text-slate-400 rounded-[2rem] flex items-center justify-center mb-8 shadow-sm group-hover:bg-primary-brand group-hover:text-white transition-all duration-500 group-hover:rotate-6 group-hover:shadow-xl group-hover:shadow-primary-brand/20">
                  {step.icon}
                </div>
                <div className="relative">
                  <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-5xl font-black text-slate-100 -z-0 group-hover:text-primary-brand/5 transition-colors">0{i+1}</span>
                  <h4 className="font-bold text-2xl mb-4 text-slate-900 relative z-10">{step.title}</h4>
                </div>
                <p className="text-on-surface-variant leading-relaxed opacity-80">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
