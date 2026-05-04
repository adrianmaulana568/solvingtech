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
    <div className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="max-w-3xl">
          <span className="text-label-caps text-primary-brand mb-4 block">{t('port.badge')}</span>
          <h1 className="text-h1 mb-6">{t('port.title')}</h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            {t('port.desc')}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap gap-3">
          {[t('port.cats.all'), t('port.cats.web'), t('port.cats.mobile'), t('port.cats.design'), t('port.cats.ai')].map((cat, i) => (
            <button 
              key={i} 
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all cursor-pointer ${i === 0 ? 'bg-primary-brand text-white' : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((p, i) => (
            <motion.div 
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group bg-white rounded-xl overflow-hidden border border-slate-100 airy-shadow transition-all duration-500 flex flex-col ${p.offset ? 'md:translate-y-12' : ''}`}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src={p.img} 
                  alt={p.title} 
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex gap-2 mb-4">
                  {p.tags.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 bg-primary-brand/10 text-primary-brand text-[10px] font-bold rounded-full uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-h3 mb-3">{p.title}</h3>
                <p className="text-on-surface-variant text-sm mb-6 flex-grow">
                  {p.desc}
                </p>
                <div className="mt-auto">
                  <button className="flex items-center text-primary-brand font-bold group/link cursor-pointer">
                    {t('port.item.cta')}
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-48">
        <div className="bg-primary-brand rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden airy-shadow">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-h2 text-white mb-6">{t('port.footer.title')}</h2>
            <p className="text-white/80 text-body-lg mb-10">
              {t('port.footer.desc')}
            </p>
            <button className="px-10 py-4 bg-white text-primary-brand rounded-full font-bold hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95 cursor-pointer">{t('port.footer.cta')}</button>
          </div>
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary-brand/20 rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-tertiary-container-brand/20 rounded-full blur-3xl opacity-50" />
        </div>
      </section>
    </div>
  );
}
