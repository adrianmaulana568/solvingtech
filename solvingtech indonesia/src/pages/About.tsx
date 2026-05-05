import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';

const AboutHero = () => {
  const { t } = useLanguage();
  return (
    <section className="pt-40 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-black text-blue-900 mb-8 tracking-tighter"
        >
          {t('about.company.title')}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-xl md:text-2xl text-slate-500 max-w-3xl leading-relaxed font-medium"
        >
          {t('about.company.desc')}
        </motion.p>
      </div>
    </section>
  );
};

const Introduction = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 overflow-hidden border-b border-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          <div className="flex-1 text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-bold text-blue-900 mb-10 leading-[1.1]"
            >
              {t('about.intro.title')}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 text-lg leading-relaxed max-w-xl"
            >
              {t('about.intro.desc')}
            </motion.p>
          </div>
          
          <div className="flex-1 relative">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl p-4 bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1522071823991-b1ae5e6a3048?auto=format&fit=crop&q=80&w=1000" 
                  alt="Team collaboration" 
                  className="rounded-[2.5rem] w-full aspect-square object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Float elements matching the design inspiration */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl -z-10" />
              </div>
              
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl -z-20" />
              <div className="absolute top-1/2 -left-20 w-32 h-32 bg-blue-100/50 rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CultureSection = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          <div className="flex-1 relative order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl p-4 bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000" 
                  alt="Team culture" 
                  className="rounded-[2.5rem] w-full aspect-square object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Decorative line/shape from image inspiration */}
              <div className="absolute -bottom-12 -left-12 w-full h-full border-2 border-blue-900 rounded-[3rem] -z-10 opacity-20" />
              <div className="absolute top-1/2 -right-10 w-24 h-24 bg-blue-200/40 rounded-full blur-2xl -z-10" />
            </motion.div>
          </div>

          <div className="flex-1 text-left order-1 lg:order-2">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-bold text-blue-900 mb-10 leading-[1.1]"
            >
              {t('about.culture.title')}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 text-lg leading-relaxed max-w-xl"
            >
              {t('about.culture.desc')}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

const MissionSection = () => {
  const { t } = useLanguage();
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 relative z-20">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 md:p-20 rounded-[4rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col items-start"
            >
              <h3 className="text-4xl font-bold text-blue-900 mb-12">{t('about.mission.title')}</h3>
              <ul className="space-y-6 w-full">
                {[1, 2, 3, 4, 5].map((i) => (
                  <li key={i} className="flex items-center gap-5 group">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-700 transition-transform group-hover:scale-150" />
                    <span className="text-slate-700 text-lg font-medium">{t(`about.mission.${i}`)}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* Background decorative dots/shapes */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-600/5 rounded-full blur-2xl -z-10" />
          </div>

          <div className="flex-1 relative hidden lg:block">
            <div className="relative w-full h-[600px]">
              {/* MacBook Mockup */}
              <motion.div 
                initial={{ opacity: 0, x: 100, rotate: 15 }}
                whileInView={{ opacity: 1, x: 0, rotate: -12 }}
                viewport={{ once: true }}
                className="absolute top-0 right-0 w-[500px] z-10"
              >
                <div className="p-2 bg-slate-900 rounded-[2.5rem] shadow-2xl">
                  <div className="aspect-[16/10] bg-gradient-to-br from-blue-400 to-blue-800 rounded-2xl" />
                </div>
              </motion.div>

              {/* iPad Mockup */}
              <motion.div 
                initial={{ opacity: 0, x: -100, rotate: -15 }}
                whileInView={{ opacity: 1, x: 0, rotate: -12 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-0 right-1/4 w-[450px]"
              >
                <div className="p-3 bg-slate-800 rounded-[3rem] shadow-2xl">
                  <div className="aspect-[4/3] bg-gradient-to-br from-blue-300 to-blue-500 rounded-2xl" />
                </div>
              </motion.div>

              {/* iPhone Mockup */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[220px] z-20"
              >
                <div className="p-4 bg-slate-900 rounded-[3.5rem] shadow-2xl border-2 border-slate-700">
                  <div className="aspect-[9/19] bg-gradient-to-b from-blue-400 to-blue-600 rounded-[2.5rem]" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mega blobs in background */}
      <div className="absolute -top-40 right-1/4 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute -bottom-40 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px] -z-10" />
    </section>
  );
};

export default function About() {
  const { t } = useLanguage();
  return (
    <div className="bg-white min-h-screen">
      <AboutHero />
      <hr className="max-w-7xl mx-auto border-slate-100" />
      <Introduction />
      <MissionSection />
      <CultureSection />
      
      {/* Newsletter or CTA space could go here if needed */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-[4rem] p-12 md:p-24 relative overflow-hidden"
          >
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tight">{t('about.cta.title')}</h2>
              <button className="px-12 py-5 bg-white text-blue-900 rounded-2xl font-black hover:bg-blue-50 transition-all active:scale-95 shadow-2xl text-lg">
                {t('about.cta.button')}
              </button>
            </div>
            
            {/* Background blobs for CTA */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

