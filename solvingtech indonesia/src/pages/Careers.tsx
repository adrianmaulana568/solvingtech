import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, MessageCircle, Code2, PartyPopper, MapPin, Users, Rocket, Brain, Home, Plane, Send, X, CheckCircle2, Upload } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Careers() {
  const { t } = useLanguage();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const roles = [
    { id: 'mobile', title: t('career.pos.mobile'), cat: "Engineering", loc: t('career.location'), color: "bg-primary-brand/10 text-primary-brand" },
    { id: 'software', title: t('career.pos.software'), cat: "Engineering", loc: t('career.location'), color: "bg-primary-brand/10 text-primary-brand" },
    { id: 'product', title: "Product Designer", cat: "Design", loc: t('career.location'), color: "bg-primary-brand/10 text-primary-brand" },
    { id: 'marketing', title: t('career.pos.marketing'), cat: "Marketing", loc: t('career.location'), color: "bg-primary-brand/10 text-primary-brand" }
  ];

  const handleApply = (title: string) => {
    setSelectedJob(title);
    setIsFormOpen(true);
    setIsSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsFormOpen(false);
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 text-white">
          <img 
            className="w-full h-full object-cover" 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
            alt="Team collaboration" 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-brand/90 via-primary-brand/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl px-6 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-1 px-4 rounded-full bg-white/20 text-white border border-white/30 mb-6 text-label-caps"
          >
            {t('career.badge')}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-h1 text-white mb-6"
          >
            {t('career.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-body-lg text-white/90 mb-10 max-w-2xl mx-auto"
          >
            {t('career.desc')}
          </motion.p>
          <motion.button 
            onClick={() => {
              const el = document.getElementById('openings');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="px-8 py-4 bg-white text-primary-brand rounded-xl font-bold text-lg shadow-xl hover:bg-slate-50 transition-all active:scale-95 cursor-pointer"
          >
            {t('career.cta')}
          </motion.button>
        </div>
      </section>

      {/* Stats Bento Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white rounded-3xl p-10 border border-slate-100 airy-shadow relative overflow-hidden group">
            <div className="relative z-10">
              <h2 className="text-h2 text-slate-900 mb-4">{t('career.culture.title')}</h2>
              <p className="text-on-surface-variant max-w-lg">
                {t('career.culture.desc')}
              </p>
            </div>
            <Users className="absolute -bottom-10 -right-10 w-48 h-48 text-primary-brand/5 group-hover:rotate-12 transition-transform duration-700" />
          </div>
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-primary-brand text-white rounded-3xl p-10 shadow-lg flex flex-col justify-between"
          >
            <Rocket className="w-10 h-10 mb-8 text-white" />
            <div>
              <div className="text-5xl font-extrabold mb-2 text-white">94%</div>
              <p className="text-white/70 text-sm italic">{t('career.stat.sat')}</p>
            </div>
          </motion.div>
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-secondary-brand text-white rounded-3xl p-10 shadow-lg flex flex-col justify-between"
          >
            <Brain className="w-10 h-10 mb-8 text-white" />
            <div>
              <div className="text-5xl font-extrabold mb-2 text-white">12+</div>
              <p className="text-white/70 text-sm italic">{t('career.stat.train')}</p>
            </div>
          </motion.div>
          <div className="md:col-span-2 bg-slate-900 text-white rounded-3xl p-10 shadow-2xl relative overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-h3 mb-4 text-white">{t('career.remote.title')}</h3>
                <p className="text-white/60">{t('career.remote.desc')}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-24 bg-white/10 rounded-2xl flex items-center justify-center">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <div className="h-24 bg-white/10 rounded-2xl flex items-center justify-center">
                  <Plane className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section id="openings" className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-h2 text-slate-900 mb-4">{t('career.openings.title')}</h2>
            <p className="text-on-surface-variant max-w-2xl">Find the role that fits your passion.</p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {roles.map((role, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ shadow: "0 20px 40px rgba(13, 27, 42, 0.05)" }}
                className="bg-white p-8 rounded-2xl border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300"
              >
                <div>
                  <div className="flex gap-3 mb-2 flex-wrap">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${role.color}`}>{role.cat}</span>
                    <span className="bg-primary-brand/5 text-primary-brand px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Full-time</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{role.title}</h3>
                  <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                    <MapPin size={16} /> {role.loc}
                  </div>
                </div>
                <button 
                  onClick={() => handleApply(role.title)}
                  className="px-8 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-primary-brand transition-colors active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFormOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900">{t('career.form.title')}</h3>
                  <button onClick={() => setIsFormOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                    <X size={24} />
                  </button>
                </div>

                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-12 text-center"
                  >
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h4 className="text-xl font-bold mb-2 text-slate-900">{t('career.form.success')}</h4>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">{t('career.form.name')}</label>
                      <input required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-brand/20 focus:border-primary-brand outline-none transition-all" type="text" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">{t('career.form.email')}</label>
                        <input required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-brand/20 focus:border-primary-brand outline-none transition-all" type="email" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">{t('career.form.phone')}</label>
                        <input required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-brand/20 focus:border-primary-brand outline-none transition-all" type="tel" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">{t('career.form.dob')}</label>
                        <input required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-brand/20 focus:border-primary-brand outline-none transition-all" type="date" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">{t('career.form.domicile')}</label>
                        <input required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-brand/20 focus:border-primary-brand outline-none transition-all" type="text" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">{t('career.form.education')}</label>
                        <select required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-brand/20 focus:border-primary-brand outline-none transition-all bg-white">
                          <option value="SMA/K">SMA/K</option>
                          <option value="D3">D3</option>
                          <option value="D4">D4</option>
                          <option value="S1">S1</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">{t('career.form.score')}</label>
                        <input required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-brand/20 focus:border-primary-brand outline-none transition-all" type="text" placeholder="Ex: 3.85 / 90.0" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">{t('career.form.school')}</label>
                      <input required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-brand/20 focus:border-primary-brand outline-none transition-all" type="text" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">{t('career.form.position')}</label>
                      <select 
                        required 
                        value={selectedJob}
                        onChange={(e) => setSelectedJob(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-brand/20 focus:border-primary-brand outline-none transition-all bg-white"
                      >
                        {roles.map(r => <option key={r.id} value={r.title}>{r.title}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">{t('career.form.cv')}</label>
                      <div className="relative group">
                        <input required type="file" accept=".pdf" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                        <div className="w-full px-4 py-4 border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center gap-3 group-hover:border-primary-brand/40 group-hover:bg-slate-50 transition-all">
                          <Upload className="text-slate-400 group-hover:text-primary-brand" size={20} />
                          <span className="text-slate-500 text-sm">Upload PDF File</span>
                        </div>
                      </div>
                    </div>
                    <button className="w-full py-4 bg-primary-brand text-white font-bold rounded-xl airy-shadow hover:opacity-90 transition-all active:scale-95 mt-4">
                      {t('career.form.submit')}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Hiring Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-h2 mb-4">{t('career.process.title')}</h2>
          <p className="text-on-surface-variant mb-20">{t('career.process.desc')}</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <FileText />, title: t('career.process.1'), desc: t('career.process.1.desc') },
              { icon: <MessageCircle />, title: t('career.process.2'), desc: t('career.process.2.desc') },
              { icon: <Code2 />, title: t('career.process.3'), desc: t('career.process.3.desc') },
              { icon: <PartyPopper />, title: t('career.process.4'), desc: t('career.process.4.desc') }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary-brand text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                  {step.icon}
                </div>
                <h4 className="font-bold text-lg mb-2">{i+1}. {step.title}</h4>
                <p className="text-on-surface-variant text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-brand py-24 text-center px-6">
        <h2 className="text-h2 text-white mb-6 text-white">{t('career.cta.title')}</h2>
        <p className="text-white/70 mb-10 max-w-xl mx-auto text-white/70">{t('career.cta.desc')}</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <div className="w-full flex">
            <input className="w-full px-6 py-4 rounded-l-xl bg-white border-0 outline-none" placeholder={t('career.cta.placeholder')} type="email" />
            <button className="bg-slate-900 text-white px-6 py-4 rounded-r-xl active:scale-95 transition-transform cursor-pointer">
              <Send size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
