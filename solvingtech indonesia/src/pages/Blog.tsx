import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const posts = [
  {
    id: 1,
    cat: "AGILE DEVELOPMENT",
    title: "Navigating Complexity: A Guide for Agile Teams in 2024.",
    desc: "Practical strategies to maintain velocity without sacrificing quality in modern development ecosystems.",
    author: "Andi Pratama",
    date: "12 May 2024",
    img: "https://images.unsplash.com/photo-1522071823991-b99c22303091?auto=format&fit=crop&q=80&w=800",
    large: true
  },
  {
    id: 2,
    cat: "DESIGN",
    title: "Color Psychology in Modern UI.",
    desc: "Why choosing the right color palette can increase user conversion by up to 40%.",
    author: "Santi Wijaya",
    date: "10 May 2024",
    img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    cat: "ENGINEERING",
    title: "Optimizing Node.js for Global Scale.",
    desc: "Caching techniques and memory management for applications with millions of daily active users.",
    author: "Budi Hartono",
    date: "8 May 2024",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Blog() {
  const { t } = useLanguage();
  return (
    <div className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-brand/10 text-primary-brand text-label-caps">
              {t('blog.badge')}
            </span>
            <h1 className="text-h1">{t('blog.title')}</h1>
            <p className="text-body-lg text-on-surface-variant max-w-2xl">
              {t('blog.desc')}
            </p>
            <div className="flex items-center gap-6 pt-4">
              <button className="px-8 py-4 bg-primary-brand text-white font-bold rounded-lg airy-shadow hover:opacity-90 transition-all active:scale-95 cursor-pointer">
                {t('blog.cta')}
              </button>
              <span className="text-on-surface-variant font-medium text-sm">{t('blog.readTime')}</span>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="aspect-video rounded-xl overflow-hidden airy-shadow">
              <img 
                className="w-full h-full object-cover" 
                src="https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&q=80&w=800" 
                alt="AI brain core"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap items-center gap-4 border-b border-slate-200 pb-6">
          {[t('blog.cats.all'), "Engineering", "Design", "Insights", "Agile"].map((cat, i) => (
            <button 
              key={i} 
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all cursor-pointer ${i === 0 ? 'bg-primary-brand text-white' : 'border border-slate-200 text-on-surface-variant hover:border-primary-brand hover:text-primary-brand'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
        {posts.map((post) => (
          <motion.div 
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${post.large ? 'md:col-span-8' : 'md:col-span-4'} group cursor-pointer`}
          >
            <div className="bg-white rounded-xl overflow-hidden airy-shadow border border-slate-100 flex flex-col h-full">
              <div className={`overflow-hidden ${post.large ? 'h-64' : 'h-48'}`}>
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src={post.img} 
                  alt={post.title} 
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-primary-brand text-label-caps mb-4 block">{post.cat}</span>
                <h3 className={`font-bold mb-4 group-hover:text-primary-brand transition-colors ${post.large ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                  {post.title}
                </h3>
                <p className="text-on-surface-variant text-sm mb-6 flex-grow">{post.desc}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100 mt-auto">
                  <div className="w-8 h-8 rounded-full bg-slate-200" />
                  <div>
                    <p className="text-xs font-bold">{post.author}</p>
                    <p className="text-[10px] text-on-surface-variant">{post.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="bg-primary-brand rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-h2 text-white">{t('blog.newsletter.title')}</h2>
            <p className="text-white/80 text-lg">{t('blog.newsletter.desc')}</p>
            <form className="flex flex-col md:flex-row gap-4 mt-8" onSubmit={(e) => e.preventDefault()}>
              <input 
                className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white/50 outline-none transition-all" 
                placeholder={t('blog.newsletter.placeholder')} 
                type="email" 
              />
              <button className="px-8 py-4 bg-white text-primary-brand font-bold rounded-lg hover:bg-slate-50 transition-all active:scale-95 cursor-pointer">
                {t('blog.newsletter.cta')}
              </button>
            </form>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary-brand/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        </div>
      </section>
    </div>
  );
}
