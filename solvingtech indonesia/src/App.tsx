/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import { motion, AnimatePresence } from 'motion/react';
import { LanguageProvider } from './LanguageContext';
import AnimatedTransition from './components/AnimatedTransition';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <Layout>
          <AnimatedTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              {/* Fallback to Home for demo purposes */}
              <Route path="*" element={<Home />} />
            </Routes>
          </AnimatedTransition>
        </Layout>
      </Router>
    </LanguageProvider>
  );
}
