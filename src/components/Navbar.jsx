/*
 * @Author: Yuzhe Guo
 * @Date: 2025-07-27 01:18:52
 * @FilePath: /eco-NIN.github.io/src/components/Navbar.jsx
 * @Descripttion: 
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import i18n from '../i18n';

const Navbar = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass px-4 py-3"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-primary">
        关于我，也关于世界
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-primary transition-colors">{t('nav.home')}</Link>
          {/* <Link to="/homepage" className="hover:text-primary transition-colors">{t('nav.homepage')}</Link> */}
          {/* <Link to="/research" className="hover:text-primary transition-colors">{t('nav.research')}</Link> */}
          {/* <Link to="/projects" className="hover:text-primary transition-colors">{t('nav.projects')}</Link> */}
          <Link to="/life" className="hover:text-primary transition-colors">{t('nav.life')}</Link>
          {/* <Link to="/contact" className="hover:text-primary transition-colors">{t('nav.contact')}</Link> */}
          {/* <Link to="/cv" className="hover:text-primary transition-colors">{t('nav.cv')}</Link> */}
          <div className="flex items-center space-x-2 ml-4">
            <button
              onClick={() => changeLanguage('en')}
              className="px-2 py-1 text-sm rounded hover:bg-white/50"
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage('zh')}
              className="px-2 py-1 text-sm rounded hover:bg-white/50"
            >
              中
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-2 glass p-4"
        >
          <div className="flex flex-col space-y-3">
            <Link to="/" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>{t('nav.home')}</Link>
            <Link to="/research" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>{t('nav.research')}</Link>
            <Link to="/projects" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>{t('nav.projects')}</Link>
            <Link to="/life" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>{t('nav.life')}</Link>
            <Link to="/contact" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</Link>
            <Link to="/cv" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>{t('nav.cv')}</Link>
            <Link to="/homepage" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>{t('nav.homepage')}</Link>
            <div className="flex items-center space-x-2 mt-2">
              <button
                onClick={() => changeLanguage('en')}
                className="px-2 py-1 text-sm rounded hover:bg-white/50"
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage('zh')}
                className="px-2 py-1 text-sm rounded hover:bg-white/50"
              >
                中
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;