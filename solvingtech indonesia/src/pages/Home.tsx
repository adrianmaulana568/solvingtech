import { motion } from 'motion/react';
import { Rocket, Eye, Cpu, Users, Lightbulb, Brain, CheckCircle, BadgeCheck, Share2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative pt-32 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-7 z-10"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-brand/10 text-primary-brand font-label-caps rounded-full mb-6">
            {t('hero.badge')}
          </span>
          <h1 className="text-h1 mb-8">
            {t('hero.title')}<span className="text-primary-brand">{t('hero.titleAccent')}</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mb-10">
            {t('hero.desc')}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="bg-primary-brand text-white px-8 py-4 rounded-xl font-display font-bold text-lg hover:shadow-xl transition-all active:scale-95 cursor-pointer text-center">
              {t('hero.ctaPrimary')}
            </Link>
            <Link to="/portfolio" className="border-2 border-primary-brand text-primary-brand px-8 py-4 rounded-xl font-display font-bold text-lg hover:bg-primary-brand/5 transition-all active:scale-95 cursor-pointer text-center">
              {t('hero.ctaSecondary')}
            </Link>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="md:col-span-5 relative"
        >
          <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden airy-shadow">
            <img 
              className="w-full h-full object-cover" 
              src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800" 
              alt="Futuristic digital art"
            />
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute -bottom-10 -left-10 glass-card p-8 rounded-2xl airy-shadow hidden lg:block max-w-[240px]"
          >
            <div className="flex items-center gap-3 mb-2 text-primary-brand">
              <Rocket className="w-10 h-10" />
              <span className="text-4xl font-bold font-display">150+</span>
            </div>
            <p className="text-label-caps text-on-surface-variant">{t('hero.statLabel')}</p>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-brand/5 to-transparent -z-10 pointer-events-none" />
    </section>
  );
};

const MissionPreview = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-label-caps text-primary-brand mb-4 block">{t('nav.services')}</span>
            <h2 className="text-h2 mb-8">{t('home.services.title')}</h2>
            <p className="text-body-lg text-on-surface-variant mb-12">
              {t('home.services.desc')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: t('services.web'), icon: <Cpu />, color: "bg-primary-brand/10 text-primary-brand", id: 'web' },
                { title: t('services.mobile'), icon: <Rocket />, color: "bg-primary-brand/10 text-primary-brand", id: 'mobile' },
                { title: t('services.product'), icon: <Brain />, color: "bg-primary-brand/10 text-primary-brand", id: 'product' },
                { title: t('services.graphic'), icon: <Share2 />, color: "bg-primary-brand/10 text-primary-brand", id: 'graphic' },
              ].map((s, i) => (
                <Link 
                  key={i} 
                  to={`/services#${s.id}`}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 bg-white hover:shadow-lg transition-all group"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${s.color} group-hover:bg-primary-brand group-hover:text-white`}>
                    {s.icon}
                  </div>
                  <span className="font-display font-bold text-slate-900">{s.title}</span>
                </Link>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative lg:pl-12"
          >
            <div className="aspect-square bg-slate-100 rounded-[3rem] overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover"
                alt="Working together"
              />
              <div className="absolute inset-0 bg-primary-brand/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-h2 mb-4">{t('home.process.title')}</h2>
          <p className="text-on-surface-variant text-body-lg max-w-2xl mx-auto">{t('home.process.desc')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { num: "01", title: t('home.process.1.title'), desc: t('home.process.1.desc') },
            { num: "02", title: t('home.process.2.title'), desc: t('home.process.2.desc') },
            { num: "03", title: t('home.process.3.title'), desc: t('home.process.3.desc') },
          ].map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative p-8 bg-white rounded-3xl airy-shadow border border-slate-100"
            >
              <span className="text-6xl font-black text-slate-50 absolute -top-4 -left-4 z-0 leading-none">{step.num}</span>
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                <p className="text-on-surface-variant leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const CTA = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary-brand rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-h2 text-white mb-8">Siap Membangun Masa Depan?</h2>
            <p className="text-white/80 text-body-lg max-w-2xl mx-auto mb-12">Bergabunglah dengan ratusan perusahaan yang telah mentransformasi bisnis mereka dengan SolvingTech.</p>
            <Link to="/contact" className="bg-white text-primary-brand px-10 py-5 rounded-2xl font-display font-bold text-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95 cursor-pointer inline-block">
              {t('contact.form.send')}
            </Link>
          </div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-brand/20 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="pb-24">
      <Hero />
      <MissionPreview />
      <Process />
      <CTA />
    </div>
  );
}
