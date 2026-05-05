import { Link, useLocation } from 'react-router-dom';
import { Terminal, Globe, Mail, Share2, Menu, X, ChevronDown, Languages, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { useState, useEffect, useRef, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { 
      name: t('nav.services'), 
      path: '/services', 
      dropdown: [
        { name: t('services.web'), path: '/services/web-development' },
        { name: t('services.mobile'), path: '/services/mobile-development' },
        { name: t('services.product'), path: '/services/ui-ux-design' },
        { name: t('services.graphic'), path: '/services/branding-design' },
      ]
    },
    { name: t('nav.portfolio'), path: '/portfolio' },
    { name: t('nav.blog'), path: '/blog' },
    { name: t('nav.careers'), path: '/careers' },
  ];

  const handleLanguageChange = () => {
    setLanguage(language === 'id' ? 'en' : 'id');
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 active:scale-95 transition-transform group">
          <div className="flex items-center gap-3">
            <motion.div 
              whileHover={{ rotate: [-3, 3, -3, 0], scale: 1.05 }}
              className="relative flex items-center gap-2"
            >
              <div className="h-10 w-10 bg-primary-brand rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary-brand/20">
                <Terminal size={24} strokeWidth={3} />
              </div>
              <span className="text-2xl font-black tracking-tighter text-slate-900">
                Solving<span className="text-primary-brand">Tech</span>
              </span>
              
              <motion.div 
                animate={{ 
                  opacity: [0, 0.4, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-primary-brand/10 rounded-full -z-10 blur-2xl"
              />
            </motion.div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-display font-medium">
          {navLinks.map((link) => (
            <div key={link.path} className="relative">
              {link.dropdown ? (
                <div ref={dropdownRef} className="relative">
                  <button
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={`flex items-center gap-1 py-1 transition-colors hover:text-primary-brand cursor-pointer ${
                      location.pathname.startsWith('/services') ? 'text-primary-brand' : 'text-on-surface-variant'
                    }`}
                  >
                    {link.name}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        onMouseLeave={() => setIsServicesOpen(false)}
                        className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden"
                      >
                        <div className="p-2 space-y-1">
                          {link.dropdown.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              onClick={() => setIsServicesOpen(false)}
                              className="block px-4 py-3 text-sm text-on-surface-variant hover:bg-primary-brand hover:text-white rounded-lg transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  to={link.path}
                  className={`relative py-1 transition-colors hover:text-primary-brand ${
                    location.pathname === link.path ? 'text-primary-brand' : 'text-on-surface-variant'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div 
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-brand"
                    />
                  )}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={handleLanguageChange}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold transition-all hover:bg-slate-200 cursor-pointer active:scale-95"
          >
            <Languages size={14} />
            <span className="hidden xs:inline">{language === 'id' ? 'IDN' : 'ENG'}</span>
            <span className="xs:hidden">{language === 'id' ? 'ID' : 'EN'}</span>
          </button>
          
          <Link to="/contact" className="hidden md:block bg-primary-brand text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:shadow-lg transition-all active:scale-95 cursor-pointer">
            {t('nav.contact')}
          </Link>
          
          <button 
            className="md:hidden p-2 text-slate-900 bg-slate-100 rounded-lg active:scale-95 transition-transform"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-2 font-display font-medium">
              {navLinks.map((link) => (
                <div key={link.path}>
                  {link.dropdown ? (
                    <div className="space-y-1">
                      <button 
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className={`w-full flex items-center justify-between text-lg py-3 ${
                          location.pathname.startsWith('/services') ? 'text-primary-brand font-bold' : 'text-slate-900'
                        }`}
                      >
                        {link.name}
                        <ChevronDown size={20} className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden bg-slate-50 rounded-2xl"
                          >
                            <div className="p-4 flex flex-col gap-4">
                              {link.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.path}
                                  to={subItem.path}
                                  onClick={() => setIsOpen(false)}
                                  className="text-base text-slate-500 font-medium hover:text-primary-brand transition-colors"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block text-lg py-3 ${
                        location.pathname === link.path ? 'text-primary-brand font-bold' : 'text-slate-900'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-6">
                <Link to="/contact" onClick={() => setIsOpen(false)} className="w-full bg-primary-brand text-white px-6 py-4 rounded-2xl font-bold text-center block shadow-lg shadow-primary-brand/20">
                  {t('nav.contact')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-10 group">
              <motion.div 
                whileHover={{ rotate: [-2, 2, -2, 0], scale: 1.05 }}
                className="relative flex items-center gap-2"
              >
                <div className="h-12 w-12 bg-primary-brand rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary-brand/20">
                  <Terminal size={28} strokeWidth={3} />
                </div>
                <span className="text-3xl font-black tracking-tighter text-slate-900">
                  Solving<span className="text-primary-brand">Tech</span>
                </span>
                
                <motion.div 
                  animate={{ 
                    opacity: [0, 0.3, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-primary-brand/10 rounded-full -z-10 blur-3xl"
                />
              </motion.div>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              {t('footer.about')}
            </p>
            <div className="flex items-center gap-4 mt-8">
              {[
                { icon: <Instagram size={18} />, label: 'Instagram' },
                { icon: <Linkedin size={18} />, label: 'LinkedIn' },
                { icon: <Mail size={18} />, label: 'Email' }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-900 hover:text-white transition-all"
                >
                  <span className="sr-only">{social.label}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">{t('footer.office.hq')}</h4>
            <div className="space-y-4 text-sm text-slate-500">
              <p className="flex gap-3">
                <span className="font-bold text-slate-900 shrink-0">A</span>
                <span>{t('contact.address')}</span>
              </p>
              <p className="flex gap-3">
                <span className="font-bold text-slate-900 shrink-0">P</span>
                <span>(+62) 811-1234-5678</span>
              </p>
              <p className="flex gap-3">
                <span className="font-bold text-slate-900 shrink-0">E</span>
                <span>hi@solvingtech.id</span>
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/portfolio" className="hover:text-blue-900 transition-colors">{t('nav.portfolio')}</Link></li>
              <li><Link to="/about" className="hover:text-blue-900 transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/blog" className="hover:text-blue-900 transition-colors">{t('nav.blog')}</Link></li>
              <li><Link to="/careers" className="hover:text-blue-900 transition-colors">{t('nav.careers')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm italic">
            © 2026 - SolvingTech Digital Asia
          </p>
          <div className="flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-slate-300">
             <span>Innovation</span>
             <span>Precision</span>
             <span>Growth</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Layout({ children }: { children: ReactNode }) {
  const handleWA = () => {
    window.open('https://wa.me/6281234567890?text=Halo%20saya%20mau%20konsultasi', '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWA}
        className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-emerald-500 text-white rounded-full shadow-2xl flex items-center justify-center cursor-pointer hover:bg-emerald-600 transition-colors"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
          Konsultasi Sekarang
        </span>
      </motion.button>
    </div>
  );
}
