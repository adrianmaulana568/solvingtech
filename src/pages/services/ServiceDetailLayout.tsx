import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../LanguageContext';

interface Package {
  name: string;
  price: string;
  desc: string;
  features: string[];
  highlight: boolean;
}

interface ServiceDetailProps {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  icon: React.ReactNode;
  features: string[];
  color: string;
  bg: string;
  packages?: Package[];
}

export default function ServiceDetailLayout({ 
  title, 
  description, 
  longDescription,
  icon, 
  features, 
  color, 
  bg, 
  packages 
}: ServiceDetailProps) {
  const { t } = useLanguage();
  const [expandedPkg, setExpandedPkg] = useState<number | null>(null);

  return (
    <div className="pt-32 pb-24 bg-gradient-to-b from-blue-50/20 via-white to-white">
      <section className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8 md:p-20 rounded-[3.5rem] border border-slate-100 airy-shadow group bg-white relative overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row gap-10 md:gap-16">
            <div className="flex-1 space-y-8 md:space-y-10">
              <div className={`w-16 h-16 md:w-24 md:h-24 rounded-[2rem] bg-gradient-to-br ${color} text-white flex items-center justify-center shadow-2xl`}>
                {React.cloneElement(icon as React.ReactElement, { size: 40 })}
              </div>
              <div>
                <h1 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 text-slate-900 leading-tight">{title}</h1>
                <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-8 md:mb-10 font-medium opacity-80">
                  {description}
                </p>
                {longDescription && (
                  <p className="text-base text-on-surface-variant leading-relaxed mb-8 opacity-70">
                    {longDescription}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary-brand/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="text-primary-brand" size={16} />
                    </div>
                    <span className="text-slate-700 font-bold text-base">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="pt-10">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-lg hover:bg-primary-brand transition-all active:scale-95 shadow-xl hover:shadow-primary-brand/20"
                >
                  {t('nav.contact')} <ArrowRight size={24} />
                </Link>
              </div>
            </div>

            <div className="flex-1 lg:max-w-md hidden lg:block">
              <div className={`aspect-square rounded-[3rem] overflow-hidden rotate-3 group-hover:rotate-0 transition-transform duration-1000 ${bg} relative`}>
                <div className="w-full h-full flex items-center justify-center opacity-30 transform group-hover:scale-110 transition-transform duration-1000">
                  {React.cloneElement(icon as React.ReactElement, { size: 120 })}
                </div>
                <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />
              </div>
            </div>
          </div>

          {packages && packages.length > 0 && (
            <div className="mt-24 pt-24 border-t border-slate-100 relative">
              <div className="mb-16 text-center px-4 relative z-10">
                <span className="inline-block px-4 py-1 bg-primary-brand text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-4">Investment</span>
                <h3 className="text-3xl md:text-5xl font-black mb-6">{t('career.form.position') === 'Applied Position' ? 'Service Packages' : 'Paket Layanan Eksklusif'}</h3>
                <p className="text-base md:text-xl text-on-surface-variant max-w-2xl mx-auto font-medium">Pilih paket yang paling sesuai dengan kebutuhan dan skala bisnis Anda saat ini.</p>
              </div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-primary-brand/5 blur-[120px] rounded-full -z-10" />

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-10 relative z-10">
                {packages.map((pkg, idx) => (
                  <div 
                    key={idx} 
                    className={`flex flex-col rounded-[2.5rem] overflow-hidden border transition-all duration-500 ${
                      pkg.highlight 
                        ? 'border-primary-brand bg-primary-brand text-white shadow-2xl shadow-primary-brand/20 z-10' 
                        : 'border-slate-100 bg-white text-slate-800 hover:border-primary-brand/30 hover:shadow-xl'
                    }`}
                  >
                    <div className={`p-8 text-center border-b ${pkg.highlight ? 'border-white/10' : 'border-slate-50'}`}>
                      <h4 className="text-2xl font-black mb-3">Paket {pkg.name}</h4>
                      <p className={`text-xs mb-8 leading-relaxed px-2 ${pkg.highlight ? 'text-white/80' : 'text-slate-500'}`}>{pkg.desc}</p>
                      <div className={`inline-block px-8 py-3 rounded-2xl font-black text-lg border-2 mb-4 ${pkg.highlight ? 'border-white text-white' : 'border-primary-brand text-primary-brand'}`}>
                        {pkg.price}
                      </div>
                      
                      <button 
                        onClick={() => setExpandedPkg(expandedPkg === idx ? null : idx)}
                        className={`w-full mt-4 flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest py-2 rounded-lg transition-colors ${
                          pkg.highlight ? 'hover:bg-white/10' : 'hover:bg-slate-50 text-primary-brand'
                        }`}
                      >
                        Detail Paket {expandedPkg === idx ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                      </button>
                    </div>

                    <AnimatePresence>
                      {expandedPkg === idx && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className={`overflow-hidden ${pkg.highlight ? 'bg-white text-slate-800' : 'bg-slate-50'}`}
                        >
                          <div className="p-8 space-y-4">
                            <ul className="space-y-4 mb-4">
                              {pkg.features.map((f, i) => (
                                <li key={i} className="flex items-start gap-4 text-sm leading-snug">
                                  <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${pkg.highlight ? 'bg-primary-brand' : 'bg-primary-brand/40'}`} />
                                  <span className="font-medium">{f}</span>
                                </li>
                              ))}
                            </ul>
                            <Link 
                              to="/contact"
                              className={`w-full py-5 rounded-2xl font-black text-center transition-all active:scale-95 flex items-center justify-center gap-3 shadow-lg ${
                                pkg.highlight 
                                  ? 'bg-primary-brand text-white hover:bg-primary-brand/90' 
                                  : 'bg-slate-900 text-white hover:bg-primary-brand'
                              }`}
                            >
                              <MessageSquare size={20} /> Book Now
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
              <p className="mt-12 text-center text-sm text-on-surface-variant italic font-medium">Perpanjangan mulai dari 500rb/tahun • Syarat & Ketentuan Berlaku</p>
            </div>
          )}
        </motion.div>
      </section>
    </div>
  );
}
