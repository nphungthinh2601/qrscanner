'use client';

import { useLanguage } from '@/providers/language-provider';
import Link from 'next/link';
import Image from 'next/image';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-muted/50 pt-16 pb-8'>
      <div className='container mx-auto container-padding'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
          {/* Company Info */}
          <div>
            <div className='flex items-center mb-4'>
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
              <span className='font-bold text-lg ml-2'>Quick QR Scanner</span>
            </div>
            <p className='text-muted-foreground mb-4'>
              The ultimate QR code solution for scanning, generating, and
              customizing QR codes.
            </p>
            <div className='flex space-x-4'>
              <motion.div whileHover={{ y: -3 }}>
                <Link
                  href='https://facebook.com'
                  target='_blank'
                  aria-label='Facebook'
                >
                  <Facebook className='h-5 w-5 text-muted-foreground hover:text-primary transition-colors' />
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -3 }}>
                <Link
                  href='https://twitter.com'
                  target='_blank'
                  aria-label='Twitter'
                >
                  <Twitter className='h-5 w-5 text-muted-foreground hover:text-primary transition-colors' />
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -3 }}>
                <Link
                  href='https://instagram.com'
                  target='_blank'
                  aria-label='Instagram'
                >
                  <Instagram className='h-5 w-5 text-muted-foreground hover:text-primary transition-colors' />
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -3 }}>
                <Link
                  href='https://linkedin.com'
                  target='_blank'
                  aria-label='LinkedIn'
                >
                  <Linkedin className='h-5 w-5 text-muted-foreground hover:text-primary transition-colors' />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='font-semibold text-lg mb-4'>
              {t('footer.quickLinks')}
            </h3>
            <ul className='space-y-2'>
              <motion.li whileHover={{ x: 3 }}>
                <Link
                  href='/#features'
                  className='text-muted-foreground hover:text-primary transition-colors'
                >
                  {t('nav.features')}
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 3 }}>
                <Link
                  href='/#screenshots'
                  className='text-muted-foreground hover:text-primary transition-colors'
                >
                  {t('nav.screenshots')}
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 3 }}>
                <Link
                  href='/#about'
                  className='text-muted-foreground hover:text-primary transition-colors'
                >
                  {t('nav.about')}
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 3 }}>
                <Link
                  href='/#reviews'
                  className='text-muted-foreground hover:text-primary transition-colors'
                >
                  {t('nav.reviews')}
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 3 }}>
                <Link
                  href='/policy'
                  className='text-muted-foreground hover:text-primary transition-colors'
                >
                  {t('nav.policy')}
                </Link>
              </motion.li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className='font-semibold text-lg mb-4'>
              {t('footer.contact')}
            </h3>
            <ul className='space-y-2'>
              <motion.li
                whileHover={{ x: 3 }}
                className='flex items-center text-muted-foreground'
              >
                <Mail className='h-5 w-5 mr-2' />
                <Link
                  href='mailto:quickqrscanapp@gmail.com'
                  className='hover:text-primary transition-colors'
                >
                  quickqrscanapp@gmail.com
                </Link>
              </motion.li>
            </ul>
          </div>

          {/* Download */}
          <div>
            <h3 className='font-semibold text-lg mb-4'>{t('cta.download')}</h3>
            <div className='space-y-2'>
              <motion.div whileHover={{ y: -3 }}>
                <Link
                  href='https://play.google.com/store'
                  target='_blank'
                  className='inline-flex items-center justify-center w-full px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium shadow hover:shadow-md transition-all'
                >
                  {t('cta.googlePlay')}
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -3 }}>
                <Link
                  href='https://apps.apple.com'
                  target='_blank'
                  className='inline-flex items-center justify-center w-full px-4 py-2 rounded-lg bg-secondary text-secondary-foreground font-medium shadow hover:shadow-md transition-all'
                >
                  {t('cta.appStore')}
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='border-t border-border pt-8 text-center text-muted-foreground text-sm'>
          <div className='flex justify-center space-x-6 mb-4'>
            <Link
              href='/policy'
              className='hover:text-primary transition-colors'
            >
              Privacy Policy
            </Link>
            <Link
              href='/policy'
              className='hover:text-primary transition-colors'
            >
              Terms of Service
            </Link>
            <Link
              href='/app-ads.txt'
              className='hover:text-primary transition-colors'
            >
              Advertising Info
            </Link>
          </div>
          <p>
            &copy; {currentYear} VNDev Labs. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
