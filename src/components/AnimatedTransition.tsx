import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

export default function AnimatedTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const { language } = useLanguage();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const [isCovering, setIsCovering] = useState(false);
  const [pendingLocation, setPendingLocation] = useState<typeof location | null>(null);

  useEffect(() => {
    // Check for pathname change OR language change
    if (location.pathname !== displayLocation.pathname || language !== currentLanguage) {
      if (location.pathname !== displayLocation.pathname) {
        setPendingLocation(location);
      }
      setIsCovering(true);
    }
  }, [location, displayLocation.pathname, language, currentLanguage]);

  const handleAnimationComplete = () => {
    if (isCovering) {
      // If we had a pending route change, apply it
      if (pendingLocation) {
        setDisplayLocation(pendingLocation);
        setPendingLocation(null);
      }
      
      // Always sync the language state after covering is finished (before revealing)
      setCurrentLanguage(language);
      
      // Short delay to ensure the content swap is processed before revealing
      setTimeout(() => {
        setIsCovering(false);
      }, 50);
    }
  };

  return (
    <>
      {/* The actual page content */}
      <motion.div
        key={displayLocation.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>

      {/* The Overlay Animation */}
      <AnimatePresence>
        {isCovering && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onAnimationComplete={handleAnimationComplete}
            transition={{ 
              duration: 0.3, 
              ease: "easeInOut" 
            }}
            className="fixed inset-0 z-[9999] bg-primary-brand flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.1, y: -20 }}
              transition={{ duration: 0.25 }}
              className="flex items-center gap-4 text-white"
            >
              <div className="relative w-20 h-20">
                <div className="absolute inset-0 bg-white rounded-2xl transform -skew-x-12 translate-x-2 -translate-y-2 opacity-20" />
                <div className="absolute inset-0 bg-white rounded-2xl transform -skew-x-12 flex items-center justify-center">
                  <span className="text-primary-brand font-black text-5xl italic tracking-tighter leading-none pr-2">S</span>
                </div>
              </div>
              <span className="text-5xl font-black tracking-tighter text-white">SolvingTech</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

