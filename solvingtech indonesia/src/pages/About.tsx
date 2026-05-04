import { motion } from 'motion/react';
import { Eye, Cpu, Users, Lightbulb, Brain, CheckCircle, BadgeCheck, Share2 } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Vision = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-h2 mb-4">{t('vision.title')}</h2>
          <p className="text-on-surface-variant text-body-lg max-w-2xl mx-auto">{t('vision.desc')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 bg-white p-12 rounded-[2.5rem] airy-shadow flex flex-col justify-between border border-slate-100"
          >
            <div>
              <div className="w-16 h-16 bg-primary-brand/10 flex items-center justify-center rounded-2xl mb-8">
                <span className="text-primary-brand"><Eye size={32} /></span>
              </div>
              <h3 className="text-h3 mb-6">{t('vision.cardTitle')}</h3>
              <p className="text-body-lg text-on-surface-variant leading-relaxed">
                {t('vision.cardDesc')}
              </p>
            </div>
            <div className="mt-12 h-48 w-full rounded-2xl overflow-hidden">
              <img 
                className="w-full h-full object-cover" 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
                alt="Office vision"
              />
            </div>
          </motion.div>

          <div className="md:col-span-5 flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary-brand p-12 rounded-[2.5rem] text-white flex-grow"
            >
              <h3 className="text-h3 mb-8 text-white">{t('vision.misiTitle')}</h3>
              <ul className="space-y-6">
                {[
                  t('misi.1'),
                  t('misi.2'),
                  t('misi.3')
                ].map((misi, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-white/60 mt-1"><CheckCircle size={20} /></span>
                    <p className="text-body-md text-white/90">{misi}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2rem] border border-slate-100 flex items-center justify-between"
            >
              <div>
                <p className="text-label-caps text-on-surface-variant mb-1">{t('vision.quality')}</p>
                <p className="text-2xl font-bold font-display text-primary-brand">ISO 9001 Certified</p>
              </div>
              <span className="text-slate-300"><BadgeCheck size={48} /></span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Values = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="text-label-caps text-primary-brand mb-4 block">{t('values.badge')}</span>
            <h2 className="text-h2 leading-tight">{t('values.title')}</h2>
          </div>
          <p className="text-on-surface-variant text-body-lg max-w-md pb-2">{t('values.desc')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: <Cpu />, title: t('values.1.title'), desc: t('values.1.desc') },
            { icon: <Users />, title: t('values.2.title'), desc: t('values.2.desc') },
            { icon: <Lightbulb />, title: t('values.3.title'), desc: t('values.3.desc') },
            { icon: <Brain />, title: t('values.4.title'), desc: t('values.4.desc') }
          ].map((v, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-3xl border border-slate-100 hover:border-primary-brand/20 hover:bg-surface transition-all duration-500"
            >
              <div className="w-14 h-14 bg-surface-container-high rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary-brand transition-colors group-hover:text-white text-primary-brand">
                {v.icon}
              </div>
              <h4 className="text-h3 text-xl mb-4">{v.title}</h4>
              <p className="text-on-surface-variant text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-label-caps text-primary-brand mb-4 block">{t('team.badge')}</span>
          <h2 className="text-h2 mb-4">{t('team.title')}</h2>
          <p className="text-on-surface-variant text-body-lg max-w-2xl mx-auto">{t('team.desc')}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Adrian Wijaya", pos: "FOUNDER & CEO", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
            { name: "Sarah Tan", pos: "CHIEF TECHNOLOGY OFFICER", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" },
            { name: "Rizky Pratama", pos: "CREATIVE DIRECTOR", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
            { name: "Maya Hasan", pos: "OPERATIONS DIRECTOR", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" }
          ].map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 airy-shadow relative">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={m.img} alt={m.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-brand/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white transition-colors group/icon">
                    <Share2 className="text-white group-hover:text-primary-brand w-5 h-5" />
                  </button>
                </div>
              </div>
              <h5 className="font-display font-bold text-xl mb-1">{m.name}</h5>
              <p className="text-primary-brand text-label-caps text-[10px]">{m.pos}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function About() {
  const { t, language } = useLanguage();
  return (
    <div className="pt-20">
      <section className="bg-primary-brand text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-1 px-4 rounded-full bg-white/20 text-white border border-white/30 mb-6 text-label-caps"
          >
            {t('nav.about')}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-h1 mb-6 text-white"
          >
            {language === 'id' ? (
              <>Membangun Masa Depan <br/>Melalui Presisi.</>
            ) : (
              <>Architecting the Future <br/>Through Precision.</>
            )}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-body-lg text-white/80 max-w-3xl mx-auto"
          >
            {language === 'id' 
              ? 'Kami bukan sekedar agensi; kami adalah mitra strategis Anda dalam navigasi landscape digital yang terus berubah.'
              : 'We are more than just an agency; we are your strategic partner in navigating the ever-changing digital landscape.'}
          </motion.p>
        </div>
      </section>
      <Vision />
      <Values />
      <Team />
    </div>
  );
}
