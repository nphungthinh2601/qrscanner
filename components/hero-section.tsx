'use client';

import { useLanguage } from '@/providers/language-provider';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  const { t } = useLanguage();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: 0.5,
      },
    },
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: 'reverse' as const,
      ease: 'easeInOut',
    },
  };

  return (
    <section className='pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
          {/* Left side - Text content */}
          <motion.div
            className='flex-1'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
          >
            <motion.div
              className='flex justify-center md:justify-start mb-6'
              variants={itemVariants}
              whileHover={{
                rotate: [0, -5, 5, -5, 0],
                transition: { duration: 0.5 },
              }}
            >
              <Image
                src='/logo.png'
                alt='QR Scanner Logo'
                width={120}
                height={120}
                className='rounded-2xl shadow-lg'
              />
            </motion.div>
            <motion.h1
              className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center md:text-left'
              variants={itemVariants}
            >
              <span className='gradient-text'>Quick QR</span> Scanner &
              Generator
            </motion.h1>
            <motion.p
              className='text-xl md:text-2xl mb-8 text-center md:text-left text-muted-foreground'
              variants={itemVariants}
            >
              {t('hero.tagline')}
            </motion.p>
            <motion.div
              className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href='https://play.google.com/store'
                  target='_blank'
                  className='inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-lg hover:shadow-xl transition-all'
                >
                  {t('cta.googlePlay')}
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href='https://apps.apple.com'
                  target='_blank'
                  className='inline-flex items-center justify-center px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium shadow hover:shadow-md transition-all'
                >
                  {t('cta.appStore')}
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right side - Phone mockup */}
          <motion.div
            className='flex-1 flex justify-center'
            variants={imageVariants}
            initial='hidden'
            animate='visible'
            animate={floatingAnimation}
          >
            <div className='relative w-[280px] h-[560px] md:w-[320px] md:h-[640px]'>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='absolute -z-10 w-full h-full rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 blur-xl'
                style={{ transform: 'translateY(20px)' }}
              />
              <Image
                src='/screenshot1.png'
                alt='QR Scanner App Screenshot'
                fill
                className='object-contain rounded-3xl shadow-2xl'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
