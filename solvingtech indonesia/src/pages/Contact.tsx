import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Linkedin, MessageSquare, Send } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  
  const handleWA = () => {
    window.open('https://wa.me/6281234567890?text=Halo%20saya%20mau%20konsultasi', '_blank');
  };

  return (
    <div className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary-brand font-bold text-label-caps mb-4 block"
          >
            {t('nav.contact')}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-h1 mb-6"
          >
            {t('contact.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-body-lg text-on-surface-variant"
          >
            {t('contact.desc')}
          </motion.p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
        {/* Left Col: Info */}
        <div className="lg:col-span-5 space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-8">{t('contact.info.title')}</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary-brand/10 text-primary-brand rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Karawang Office</h4>
                  <p className="text-on-surface-variant text-sm">{t('contact.address')}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary-brand/10 text-primary-brand rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <a href="mailto:hello@solvingtech.id" className="text-on-surface-variant text-sm hover:text-primary-brand transition-colors">{t('contact.email')}</a>
                </div>
              </div>
              <div className="flex gap-4 cursor-pointer group" onClick={handleWA}>
                <div className="w-12 h-12 bg-primary-brand/10 text-primary-brand rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary-brand group-hover:text-white transition-colors">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">WhatsApp</h4>
                  <p className="text-on-surface-variant text-sm group-hover:text-primary-brand transition-colors">{t('contact.phone')}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">{t('contact.socials')}</h2>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center hover:bg-primary-brand hover:text-white transition-all">
                <Instagram size={24} />
              </a>
              <a href="#" className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center hover:bg-primary-brand hover:text-white transition-all">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] overflow-hidden h-64 airy-shadow border border-slate-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.92160352516!2d107.2882522!3d-6.3317778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6977bd08c3395b%3A0xe54d6935cc259695!2sGaluh%20Mas%20Karawang!5e0!3m2!1sid!2sid!4v1714830000000!5m2!1sid!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Col: Form */}
        <div className="lg:col-span-7 bg-white rounded-[2.5rem] p-8 md:p-12 airy-shadow border border-slate-100">
          <h2 className="text-2xl font-bold mb-8">{t('contact.form.title')}</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold ml-1">{t('contact.form.name')}</label>
                <input className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-primary-brand/20 focus:border-primary-brand outline-none transition-all" type="text" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold ml-1">{t('contact.form.email')}</label>
                <input className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-primary-brand/20 focus:border-primary-brand outline-none transition-all" type="email" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold ml-1">{t('contact.form.subject')}</label>
              <input className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-primary-brand/20 focus:border-primary-brand outline-none transition-all" type="text" placeholder="Project Inquiry" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold ml-1">{t('contact.form.message')}</label>
              <textarea className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-primary-brand/20 focus:border-primary-brand outline-none transition-all h-40 resize-none" placeholder="Tell us about your project..."></textarea>
            </div>
            <button className="w-full py-5 bg-primary-brand text-white font-bold rounded-xl airy-shadow hover:opacity-90 transition-all active:scale-95 flex items-center justify-center gap-3">
              {t('contact.form.send')} <Send size={20} />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
