'use client';

import { useLanguage } from '@/providers/language-provider';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CompanySection() {
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

  const leftItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: i * 0.1,
      },
    }),
  };

  return (
    <section className='section-padding overflow-hidden'>
      <div className='container mx-auto container-padding'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              className='text-3xl md:text-4xl font-bold mb-6'
              variants={leftItemVariants}
            >
              {t('company.title')}
            </motion.h2>
            <motion.p
              className='text-muted-foreground mb-6'
              custom={0}
              variants={textVariants}
            >
              {t('company.description')}
            </motion.p>
            <motion.p className='mb-6' custom={1} variants={textVariants}>
              {t('company.mission')}
            </motion.p>
            <motion.p custom={2} variants={textVariants}>
              {t('company.vision')}
            </motion.p>
          </motion.div>

          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={containerVariants}
            className='flex justify-center'
          >
            <motion.div
              variants={rightItemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              <motion.div
                className='relative'
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                }}
              >
                <motion.div
                  className='absolute -inset-4 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 blur-xl -z-10'
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                  }}
                />
                <Image
                  src='/vndevlabs_4096-2304.png'
                  alt='VNDev Labs Company Logo'
                  width={400}
                  height={225}
                  className='rounded-xl shadow-xl'
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
