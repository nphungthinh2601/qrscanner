'use client';

import { useLanguage } from '@/providers/language-provider';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TeamSection() {
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

  const statVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: i * 0.1,
      },
    }),
  };

  return (
    <section id='about' className='section-padding bg-muted/50 overflow-hidden'>
      <div className='container mx-auto container-padding'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={containerVariants}
            className='flex justify-center'
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              <motion.div
                className='relative'
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                }}
              >
                <motion.div
                  className='absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 blur-xl -z-10'
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
                  src='/vndevlabs_512-512.png'
                  alt='VNDev Labs Team Logo'
                  width={300}
                  height={300}
                  className='rounded-full shadow-xl'
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              className='text-3xl md:text-4xl font-bold mb-6'
              variants={rightItemVariants}
            >
              {t('team.title')}
            </motion.h2>
            <motion.p
              className='text-muted-foreground mb-6'
              variants={rightItemVariants}
            >
              {t('team.description')}
            </motion.p>
            <motion.p className='mb-6' variants={rightItemVariants}>
              Our team of experienced developers and designers is passionate
              about creating innovative mobile applications that solve
              real-world problems. With a focus on user experience and
              performance, we strive to deliver products that exceed
              expectations.
            </motion.p>
            <motion.div
              className='flex flex-wrap gap-4'
              variants={containerVariants}
            >
              <motion.div
                className='bg-background rounded-lg p-4 shadow-md border border-border relative overflow-hidden'
                custom={0}
                variants={statVariants}
                whileHover={{
                  y: -5,
                  boxShadow:
                    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  className='absolute -right-6 -top-6 w-20 h-20 bg-primary/5 rounded-full'
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
                <motion.p
                  className='font-semibold relative z-10'
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  10+
                </motion.p>
                <motion.p
                  className='text-sm text-muted-foreground relative z-10'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  {t('team.experience')}
                </motion.p>
              </motion.div>
              <motion.div
                className='bg-background rounded-lg p-4 shadow-md border border-border relative overflow-hidden'
                custom={1}
                variants={statVariants}
                whileHover={{
                  y: -5,
                  boxShadow:
                    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  className='absolute -right-6 -top-6 w-20 h-20 bg-primary/5 rounded-full'
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                />
                <motion.p
                  className='font-semibold relative z-10'
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  50+
                </motion.p>
                <motion.p
                  className='text-sm text-muted-foreground relative z-10'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  {t('team.apps')}
                </motion.p>
              </motion.div>
              <motion.div
                className='bg-background rounded-lg p-4 shadow-md border border-border relative overflow-hidden'
                custom={2}
                variants={statVariants}
                whileHover={{
                  y: -5,
                  boxShadow:
                    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  className='absolute -right-6 -top-6 w-20 h-20 bg-primary/5 rounded-full'
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                />
                <motion.p
                  className='font-semibold relative z-10'
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  1M+
                </motion.p>
                <motion.p
                  className='text-sm text-muted-foreground relative z-10'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  {t('team.users')}
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
