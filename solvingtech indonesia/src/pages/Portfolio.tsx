import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const projects = [
  {
    id: 1,
    title: "Koperasi NAMASTRA",
    tags: ["Fintech", "Mobile App"],
    desc: "A comprehensive digital ecosystem for modern cooperatives, streamlining financial operations and increasing member engagement.",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "TechFlow Dashboard",
    tags: ["SaaS", "Web Platform"],
    desc: "An enterprise-grade automation platform that optimizes logistics through real-time data visualization.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    offset: true
  },
  {
    id: 3,
    title: "Healio Wellness",
    tags: ["HealthTech", "UI/UX"],
    desc: "A holistic health tracking application focused on user mental well-being.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Arcane AI Engine",
    tags: ["AI / ML", "Automation"],
    desc: "Cutting-edge machine learning integration for smarter creative workflows.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    offset: true
  }
];

export default function Portfolio() {
  const { t } = useLanguage();
  return (
    <div className="pt-32 pb-24 bg-gradient-to-b from-blue-50/30 via-white to-white">
      <section className="max-w-7xl mx-auto px-6 mb-12 md:mb-20">
        <div className="max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-label-caps text-primary-brand mb-4 block font-bold"
          >
            {t('port.badge')}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-none text-slate-900"
          >
            {t('port.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-500 max-w-2xl leading-relaxed font-medium"
          >
            {t('port.desc')}
          </motion.p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-16 relative">
        <div className="flex flex-wrap gap-3">
          {[t('port.cats.all'), t('port.cats.web'), t('port.cats.mobile'), t('port.cats.design'), t('port.cats.ai')].map((cat, i) => (
            <button 
              key={i} 
              className={`px-8 py-3 rounded-2xl font-bold text-sm transition-all cursor-pointer shadow-sm active:scale-95 ${i === 0 ? 'bg-primary-brand text-white shadow-primary-brand/20' : 'bg-white text-on-surface-variant hover:bg-slate-50 border border-slate-100'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        {/* Subtle background blob */}
        <div className="absolute top-1/2 -right-48 w-96 h-96 bg-primary-brand/5 rounded-full blur-[100px] -z-10" />
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-12 md:gap-y-24">
          {projects.map((p, i) => (
            <motion.div 
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 airy-shadow transition-all duration-500 flex flex-col ${p.offset ? 'md:translate-y-16' : ''}`}
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  src={p.img} 
                  alt={p.title} 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary-brand/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex gap-2 mb-6">
                  {p.tags.map((t, idx) => (
                    <span key={idx} className="px-4 py-1.5 bg-primary-brand/10 text-primary-brand text-[11px] font-black rounded-full uppercase tracking-widest">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-black mb-4 group-hover:text-primary-brand transition-colors">{p.title}</h3>
                <p className="text-on-surface-variant text-base leading-relaxed mb-8 flex-grow">
                  {p.desc}
                </p>
                <div className="mt-auto">
                  <button className="flex items-center gap-3 text-primary-brand font-black group/link cursor-pointer">
                    <span className="relative">
                      {t('port.item.cta')}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-brand transition-all group-hover/link:w-full" />
                    </span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover/link:translate-x-2" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-24 md:mt-48 relative z-10 pb-20">
        <div className="absolute -top-32 left-0 w-full h-64 bg-gradient-to-b from-white to-transparent -z-10" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary-brand rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden airy-shadow shadow-2xl shadow-primary-brand/30"
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight">{t('port.footer.title')}</h2>
            <p className="text-white/80 text-lg md:text-2xl mb-12 font-medium">
              {t('port.footer.desc')}
            </p>
            <button className="w-full sm:w-auto px-12 py-6 bg-white text-primary-brand rounded-2xl font-black text-xl shadow-2xl hover:scale-105 transition-all active:scale-95 cursor-pointer">{t('port.footer.cta')}</button>
          </div>
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-[100px] opacity-50 animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary-brand/20 rounded-full blur-[100px] opacity-50" />
        </motion.div>
      </section>
    </div>
  );
}
