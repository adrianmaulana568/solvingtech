import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { Terminal, Smartphone, Palette, ChevronRight, ArrowRight, Users, Briefcase, Zap, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background abstract shapes */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-400/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8"
            >
              <h1 className="text-4xl lg:text-7xl font-black text-blue-900 leading-[1.1] mb-8 tracking-tighter">
                {t('home.hero.title')}
              </h1>
              <p className="text-slate-500 text-lg lg:text-xl leading-relaxed max-w-xl mb-10 font-medium">
                {t('home.hero.desc')}
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-8 py-5 bg-blue-800 text-white font-bold rounded-2xl hover:bg-blue-900 transition-all shadow-xl shadow-blue-900/20 active:scale-95 text-lg"
                >
                  {t('home.hero.cta')}
                </Link>
                <Link 
                  to="/portfolio" 
                  className="inline-flex items-center justify-center px-8 py-5 bg-slate-100 text-slate-700 font-bold rounded-2xl hover:bg-slate-200 transition-all active:scale-95 text-lg"
                >
                  {t('nav.portfolio')}
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <div className="flex-1 relative w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000" 
                alt="Tech Illustration" 
                className="w-full h-auto drop-shadow-[0_40px_80px_rgba(37,99,235,0.15)] rounded-3xl"
                referrerPolicy="no-referrer"
              />
              
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 bg-white p-6 rounded-3xl shadow-2xl hidden lg:block"
              >
                <Zap className="text-blue-600 w-10 h-10" strokeWidth={2.5} />
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl hidden lg:block"
              >
                <Terminal className="text-blue-400 w-10 h-10" strokeWidth={2.5} />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 flex flex-col items-center gap-4 text-slate-400"
        >
          <div className="flex items-center gap-2">
             <div className="w-6 h-10 border-2 border-slate-200 rounded-full flex justify-center p-1">
                <motion.div 
                   animate={{ y: [0, 12, 0] }}
                   transition={{ duration: 1.5, repeat: Infinity }}
                   className="w-1 h-3 bg-slate-300 rounded-full"
                />
             </div>
             <span className="text-xs font-bold uppercase tracking-widest">Scroll Down</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => {
  const { t } = useLanguage();
  const stats = [
    { label: t('home.stats.members'), value: '20+', icon: <Users size={32} className="text-blue-200" /> },
    { label: t('home.stats.clients'), value: '31+', icon: <Briefcase size={32} className="text-blue-200" /> },
    { label: t('home.stats.projects'), value: '170+', icon: <Zap size={32} className="text-blue-200" /> },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black text-blue-900 mb-8 max-w-4xl mx-auto leading-none tracking-tighter"
        >
          {t('home.stats.title')}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-500 text-lg md:text-xl mb-24 max-w-2xl mx-auto font-medium"
        >
          {t('home.stats.desc')}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center group"
            >
              <div className="relative mb-8 bg-blue-50 w-24 h-24 rounded-[2rem] flex items-center justify-center transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-lg shadow-blue-900/5">
                {stat.icon}
              </div>
              <h3 className="text-6xl font-black text-blue-900 mb-2 tracking-tighter">
                <motion.span
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   viewport={{ once: true }}
                >
                   {stat.value}
                </motion.span>
              </h3>
              <p className="text-slate-400 font-black uppercase tracking-[0.2em] text-[10px]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesPreview = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const services = [
    { id: 'web', title: t('services.web'), desc: t('services.web.desc'), icon: <Terminal className="w-12 h-12 text-blue-400" /> },
    { id: 'mobile', title: t('services.mobile'), desc: t('services.mobile.desc'), icon: <Smartphone className="w-12 h-12 text-blue-400" /> },
    { id: 'product', title: t('services.product'), desc: t('services.product.desc'), icon: <Palette className="w-12 h-12 text-blue-400" /> },
    { id: 'graphic', title: t('services.graphic'), desc: t('services.graphic.desc'), icon: <Zap className="w-12 h-12 text-blue-400" /> },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/3 bg-blue-800 p-12 lg:p-20 rounded-[3rem] text-white flex flex-col justify-center shrink-0 shadow-2xl shadow-blue-800/30"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-white tracking-tight leading-tight">{t('home.services.title')}</h2>
          <p className="text-blue-100 text-lg mb-12 leading-relaxed font-medium">
            {t('home.services.desc')}
          </p>
          <div className="flex gap-4">
             <button 
               onClick={() => scroll('left')}
               className="w-12 h-12 rounded-full border border-blue-400/30 flex items-center justify-center hover:bg-white hover:text-blue-800 transition-all cursor-pointer"
             >
                <ChevronRight className="rotate-180" />
             </button>
             <button 
               onClick={() => scroll('right')}
               className="w-12 h-12 rounded-full bg-white text-blue-800 flex items-center justify-center hover:bg-blue-100 transition-all cursor-pointer"
             >
                <ChevronRight />
             </button>
          </div>
        </motion.div>

        <div 
          ref={scrollRef}
          className="lg:w-2/3 flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col items-start min-w-[320px] md:min-w-[380px] snap-start"
            >
              <div className="mb-10">{service.icon}</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">{service.title}</h3>
              <p className="text-slate-500 mb-auto leading-relaxed">
                {service.desc}
              </p>
              <Link to={`/services#${service.id}`} className="mt-8 text-blue-800 font-bold flex items-center gap-2 group">
                {t('home.services.view_details')}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonial = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-[4rem] overflow-hidden bg-slate-900 min-h-[500px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000" 
              alt="CEO" 
              className="w-full h-full object-cover opacity-40"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-blue-900/40" />
          </div>

          <div className="relative z-10 p-10 lg:p-24 max-w-4xl text-center lg:text-left mx-auto lg:mx-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-10 text-white/30 flex justify-center lg:justify-start"
            >
               <svg width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 lg:w-16 lg:h-16">
                  <path d="M12 36H20L24 28V12H8V28H16L12 36ZM32 36H40L44 28V12H28V28H36L32 36Z" fill="currentColor"/>
               </svg>
            </motion.div>
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl lg:text-5xl font-black text-white mb-10 leading-tight italic tracking-tight"
            >
              "{t('home.testimonial.quote')}"
            </motion.h3>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col"
            >
               <span className="text-2xl font-black text-white tracking-tight">{t('home.testimonial.name')}</span>
               <span className="text-blue-400 font-bold uppercase tracking-[0.3em] text-[10px] mt-2">{t('home.testimonial.role')}</span>
            </motion.div>
          </div>

          <div className="absolute bottom-1/2 right-12 translate-y-1/2 hidden lg:block">
             <div className="w-24 h-24 rounded-full border-2 border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-all">
                <Play className="text-white fill-white" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BottomCTA = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-50 rounded-[4rem] p-12 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative border border-slate-100">
           <motion.div 
             initial={{ opacity: 0, x: -40 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative z-10 max-w-xl text-center lg:text-left"
           >
              <h2 className="text-4xl lg:text-5xl font-black text-blue-900 mb-8 leading-tight">
                 {t('home.cta.title')}
              </h2>
              <p className="text-slate-400 text-lg mb-12 font-medium">
                 {t('home.cta.desc')}
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-10 py-5 bg-blue-800 text-white font-bold rounded-2xl hover:bg-blue-900 transition-all shadow-2xl shadow-blue-900/20 active:scale-95 text-lg"
              >
                {t('home.cta.button')}
              </Link>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, x: 40, rotate: 10 }}
             whileInView={{ opacity: 1, x: 0, rotate: 6 }}
             viewport={{ once: true }}
             className="relative z-10 lg:w-1/2 flex justify-center lg:justify-end"
           >
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="relative p-4 bg-white rounded-[2rem] shadow-2xl">
                   <img 
                      src="https://images.unsplash.com/photo-1522071823991-b1ae5e6a3048?auto=format&fit=crop&q=80&w=600" 
                      alt="Business Card Design" 
                      className="rounded-2xl w-full max-w-[300px]"
                      referrerPolicy="no-referrer"
                   />
                </div>
              </motion.div>
           </motion.div>

           <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-0" />
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="relative bg-white pb-12">
      <Hero />
      <Stats />
      <ServicesPreview />
      <Testimonial />
      <BottomCTA />
    </div>
  );
}
