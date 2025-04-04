'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '@/providers/theme-provider';
import { useLanguage } from '@/providers/language-provider';
import { Moon, Sun, Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'zh', name: '中文' },
    { code: 'ja', name: '日本語' },
    { code: 'ko', name: '한국어' },
    { code: 'vi', name: 'Tiếng Việt' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-2'>
            <motion.div
              whileHover={{ rotate: 10 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Image
                src='/logo.png'
                alt='QR Scanner Logo'
                width={40}
                height={40}
                className='rounded-xl'
              />
            </motion.div>
            <span className='font-bold text-lg hidden sm:inline-block'>
              Quick QR Scanner
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            <Link
              href='/#features'
              className='text-sm font-medium hover:text-primary transition-colors'
            >
              {t('nav.features')}
            </Link>
            <Link
              href='/#screenshots'
              className='text-sm font-medium hover:text-primary transition-colors'
            >
              {t('nav.screenshots')}
            </Link>
            <Link
              href='/#about'
              className='text-sm font-medium hover:text-primary transition-colors'
            >
              {t('nav.about')}
            </Link>
            <Link
              href='/#reviews'
              className='text-sm font-medium hover:text-primary transition-colors'
            >
              {t('nav.reviews')}
            </Link>
          </nav>

          {/* Theme Toggle, Language Selector, and Mobile Menu Button */}
          <div className='flex items-center space-x-4'>
            {/* Theme Toggle */}
            <motion.button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className='p-2 rounded-full hover:bg-muted transition-colors'
              aria-label='Toggle theme'
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode='wait' initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'dark' ? (
                    <Sun className='h-5 w-5' />
                  ) : (
                    <Moon className='h-5 w-5' />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* Language Dropdown */}
            <div className='relative'>
              <motion.button
                className='p-2 rounded-full hover:bg-muted transition-colors flex items-center'
                aria-label='Select language'
                onClick={() =>
                  setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                }
                whileTap={{ scale: 0.9 }}
              >
                <Globe className='h-5 w-5' />
                <span className='ml-1 text-xs font-medium hidden sm:inline-block uppercase'>
                  {language}
                </span>
              </motion.button>
              {isLanguageDropdownOpen && (
                <motion.div
                  className='absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-background border border-border overflow-hidden'
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className='py-1'>
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code as any);
                          setIsLanguageDropdownOpen(false);
                        }}
                        className={`block px-4 py-2 text-sm w-full text-left hover:bg-muted ${
                          language === lang.code
                            ? 'text-primary font-medium'
                            : ''
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='p-2 rounded-full hover:bg-muted transition-colors md:hidden'
              aria-label='Toggle mobile menu'
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? (
                <X className='h-5 w-5' />
              ) : (
                <Menu className='h-5 w-5' />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='md:hidden bg-background border-t border-border'
          >
            <div className='container mx-auto px-4 py-4'>
              <nav className='flex flex-col space-y-4'>
                <Link
                  href='/#features'
                  className='text-sm font-medium hover:text-primary transition-colors'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('nav.features')}
                </Link>
                <Link
                  href='/#screenshots'
                  className='text-sm font-medium hover:text-primary transition-colors'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('nav.screenshots')}
                </Link>
                <Link
                  href='/#about'
                  className='text-sm font-medium hover:text-primary transition-colors'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('nav.about')}
                </Link>
                <Link
                  href='/#reviews'
                  className='text-sm font-medium hover:text-primary transition-colors'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('nav.reviews')}
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
