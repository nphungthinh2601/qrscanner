'use client';

import { useLanguage } from '@/providers/language-provider';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ScreenshotsSection() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const screenshots = [
    { src: '/screenshot1.png', alt: t('screenshots.alt.home') },
    { src: '/screenshot2.png', alt: t('screenshots.alt.scanning') },
    { src: '/screenshot3.png', alt: t('screenshots.alt.generator') },
    { src: '/screenshot4.png', alt: t('screenshots.alt.customization') },
    { src: '/screenshot5.png', alt: t('screenshots.alt.history') },
    { src: '/screenshot6.png', alt: t('screenshots.alt.settings') },
    { src: '/screenshot7.png', alt: t('screenshots.alt.darkMode') },
  ];

  // Autoplay functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [autoplay, screenshots.length]);

  const nextSlide = () => {
    setAutoplay(false);
    setActiveIndex((prevIndex) =>
      prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setAutoplay(false);
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
    );
  };

  // Get visible screenshots for desktop carousel
  const getVisibleScreenshots = () => {
    const visibleCount = 3; // Number of screenshots visible at once
    const result = [];

    for (let i = 0; i < visibleCount; i++) {
      const index = (activeIndex + i) % screenshots.length;
      result.push({ ...screenshots[index], index });
    }

    return result;
  };

  const visibleScreenshots = getVisibleScreenshots();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id='screenshots' className='section-padding overflow-hidden'>
      <div className='container mx-auto container-padding'>
        <motion.div
          className='text-center mb-16'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            className='text-3xl md:text-4xl font-bold mb-4'
            variants={titleVariants}
          >
            {t('screenshots.title')}
          </motion.h2>
          <motion.p
            className='text-muted-foreground max-w-2xl mx-auto'
            variants={titleVariants}
          >
            {t('screenshots.subtitle')}
          </motion.p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className='md:hidden relative'>
          <motion.div
            className='overflow-hidden rounded-3xl shadow-xl'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className='relative w-full h-[500px]'
            >
              <motion.div
                className='absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 blur-xl'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <Image
                src={screenshots[activeIndex].src || '/placeholder.svg'}
                alt={screenshots[activeIndex].alt}
                fill
                className='object-contain'
              />
              <motion.div
                className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white'
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <p className='text-center font-medium'>
                  {screenshots[activeIndex].alt}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
          <div className='flex justify-center mt-4 gap-2'>
            {screenshots.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setAutoplay(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-primary w-6' : 'bg-muted'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
          <motion.button
            onClick={prevSlide}
            className='absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full shadow-md hover:bg-background transition-all'
            aria-label='Previous screenshot'
            whileHover={{ scale: 1.1, x: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className='h-6 w-6' />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className='absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full shadow-md hover:bg-background transition-all'
            aria-label='Next screenshot'
            whileHover={{ scale: 1.1, x: 3 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className='h-6 w-6' />
          </motion.button>
        </div>

        {/* Desktop Carousel */}
        <div className='hidden md:block relative'>
          <motion.div
            className='flex justify-center items-center gap-6'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {visibleScreenshots.map((screenshot, idx) => {
              // Calculate scale and z-index based on position
              const isCenter = idx === 1;
              const scale = isCenter ? 1 : 0.8;
              const zIndex = isCenter ? 10 : 5;
              const opacity = isCenter ? 1 : 0.7;

              return (
                <motion.div
                  key={screenshot.index}
                  className='relative rounded-3xl overflow-hidden shadow-xl'
                  initial={{ scale, opacity }}
                  animate={{ scale, opacity }}
                  transition={{ duration: 0.5 }}
                  style={{ zIndex }}
                  variants={imageVariants}
                  whileHover={isCenter ? { y: -10 } : { scale: 0.85 }}
                >
                  <motion.div
                    className='absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 blur-xl'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isCenter ? 1 : 0.5 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div
                    className={`relative ${
                      isCenter ? 'h-[600px] w-[300px]' : 'h-[500px] w-[250px]'
                    }`}
                  >
                    <Image
                      src={screenshot.src || '/placeholder.svg'}
                      alt={screenshot.alt}
                      fill
                      className='object-contain'
                    />
                  </div>
                  {isCenter && (
                    <motion.div
                      className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white'
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <p className='text-center font-medium'>
                        {screenshot.alt}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
          <div className='flex justify-center mt-8 gap-2'>
            {screenshots.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setAutoplay(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-primary w-6' : 'bg-muted'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
          <motion.button
            onClick={prevSlide}
            className='absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 p-3 rounded-full shadow-md hover:bg-background transition-all'
            aria-label='Previous screenshot'
            whileHover={{ scale: 1.1, x: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className='h-6 w-6' />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className='absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 p-3 rounded-full shadow-md hover:bg-background transition-all'
            aria-label='Next screenshot'
            whileHover={{ scale: 1.1, x: 3 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className='h-6 w-6' />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
