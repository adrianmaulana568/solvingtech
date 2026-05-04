import { Link, useLocation } from 'react-router-dom';
import { Terminal, Globe, Mail, Share2, Menu, X, ChevronDown, Languages, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
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
      path: '#', 
      dropdown: [
        { name: t('services.web'), path: '/services#web' },
        { name: t('services.mobile'), path: '/services#mobile' },
        { name: t('services.product'), path: '/services#product' },
        { name: t('services.graphic'), path: '/services#graphic' },
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
            <div className="relative w-10 h-10">
              {/* Stylized Logo Symbol inspired by the image */}
              <div className="absolute inset-0 bg-primary-brand rounded-lg transform -skew-x-12 translate-x-1 -translate-y-1 opacity-20" />
              <div className="absolute inset-0 bg-primary-brand rounded-lg transform -skew-x-12 flex items-center justify-center">
                <span className="text-white font-black text-2xl italic tracking-tighter leading-none pr-1">S</span>
              </div>
            </div>
            <span className="text-2xl font-black tracking-tighter text-primary-brand hidden sm:block">SolvingTech</span>
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
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container text-on-surface text-xs font-semibold transition-all hover:bg-surface-container-high cursor-pointer"
          >
            <Languages size={14} />
            {language === 'id' ? 'Indonesia' : 'English'}
          </button>
          <Link to="/contact" className="hidden md:block bg-primary-brand text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:shadow-lg transition-all active:scale-95 cursor-pointer">
            {t('nav.contact')}
          </Link>
          <button 
            className="md:hidden p-2 text-on-surface"
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
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4 font-display font-medium">
              {navLinks.map((link) => (
                <div key={link.path}>
                  {link.dropdown ? (
                    <div className="space-y-3">
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{link.name}</p>
                      <div className="pl-4 flex flex-col gap-3">
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            onClick={() => setIsOpen(false)}
                            className="text-lg text-on-surface-variant"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg ${
                        location.pathname === link.path ? 'text-primary-brand font-bold' : 'text-on-surface-variant'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <hr className="border-slate-100" />
              <div className="flex justify-between items-center">
                 <button 
                  onClick={handleLanguageChange}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container text-on-surface text-xs font-semibold"
                >
                  <Languages size={14} />
                  {language === 'id' ? 'Indonesia' : 'English'}
                </button>
              </div>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="w-full bg-primary-brand text-white px-6 py-3 rounded-lg font-semibold text-center block">
              {t('nav.contact')}
            </Link>
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
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-8 py-16 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-xs">
          <div className="flex items-center gap-2 mb-4">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-primary-brand rounded-md transform -skew-x-12 translate-x-0.5 -translate-y-0.5 opacity-20" />
              <div className="absolute inset-0 bg-primary-brand rounded-md transform -skew-x-12 flex items-center justify-center">
                <span className="text-white font-black text-lg italic tracking-tighter leading-none pr-0.5">S</span>
              </div>
            </div>
            <span className="text-xl font-black tracking-tighter text-primary-brand">SolvingTech</span>
          </div>
          <p className="text-on-surface-variant text-sm mb-6">
            {t('footer.about')}
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-on-surface-variant hover:text-primary-brand hover:border-primary-brand transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-on-surface-variant hover:text-primary-brand hover:border-primary-brand transition-all">
              <Linkedin size={18} />
            </a>
            <a href="mailto:hello@solvingtech.id" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-on-surface-variant hover:text-primary-brand hover:border-primary-brand transition-all">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-24">
          <div>
            <h6 className="text-sm font-bold uppercase tracking-wider mb-6 text-on-surface">{t('nav.about')}</h6>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li><Link to="/about" className="hover:text-primary-brand transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/careers" className="hover:text-primary-brand transition-colors">{t('nav.careers')}</Link></li>
              <li><Link to="/contact" className="hover:text-primary-brand transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h6 className="text-sm font-bold uppercase tracking-wider mb-6 text-on-surface">{t('nav.services')}</h6>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li><Link to="/services#web" className="hover:text-primary-brand transition-colors">{t('services.web')}</Link></li>
              <li><Link to="/services#mobile" className="hover:text-primary-brand transition-colors">{t('services.mobile')}</Link></li>
              <li><Link to="/services#product" className="hover:text-primary-brand transition-colors">{t('services.product')}</Link></li>
              <li><Link to="/services#graphic" className="hover:text-primary-brand transition-colors">{t('services.graphic')}</Link></li>
            </ul>
          </div>
          <div>
            <h6 className="text-sm font-bold uppercase tracking-wider mb-6 text-on-surface">Legal</h6>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li><Link to="/privacy" className="hover:text-primary-brand transition-colors">Privacy</Link></li>
              <li><Link to="/terms" className="hover:text-primary-brand transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-on-surface-variant">
        <p>© 2024 SolvingTech. Forward-Thinking Precision.</p>
        <p>{t('footer.unit')}</p>
      </div>
    </footer>
  );
};

export default function Layout({ children }: { children: React.ReactNode }) {
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
