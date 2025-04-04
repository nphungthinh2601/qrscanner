'use client';

import { useLanguage } from '@/providers/language-provider';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Image from 'next/image';

export default function ReviewsSection() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const reviews = [
    {
      name: 'Sarah Johnson',
      avatar: '/placeholder.svg?height=80&width=80',
      rating: 5,
      text: 'This QR scanner is incredibly fast and accurate! I love the customization options for generating my own QR codes. The dark mode is also very easy on the eyes.',
      location: 'United States',
      date: '2023-12-15',
    },
    {
      name: 'Michael Chen',
      avatar: '/placeholder.svg?height=80&width=80',
      rating: 5,
      text: "Best QR scanner I've used. The history feature is super helpful for keeping track of codes I've scanned. The interface is clean and intuitive.",
      location: 'Canada',
      date: '2023-11-28',
    },
    {
      name: 'Emily Rodriguez',
      avatar: '/placeholder.svg?height=80&width=80',
      rating: 4,
      text: "Very reliable app for both scanning and generating QR codes. I use it daily for my business and it hasn't let me down yet. Would recommend!",
      location: 'Mexico',
      date: '2024-01-05',
    },
    {
      name: 'David Kim',
      avatar: '/placeholder.svg?height=80&width=80',
      rating: 5,
      text: 'The multilingual support is fantastic! I can switch between languages easily, and the app works flawlessly in all of them. Great job!',
      location: 'South Korea',
      date: '2023-10-17',
    },
    {
      name: 'Lisa Patel',
      avatar: '/placeholder.svg?height=80&width=80',
      rating: 4,
      text: 'I appreciate how quickly this app scans codes, even in low light conditions. The haptic feedback is a nice touch too!',
      location: 'India',
      date: '2024-02-03',
    },
    {
      name: 'Jean Dupont',
      avatar: '/placeholder.svg?height=80&width=80',
      rating: 5,
      text: "J'utilise cette application tous les jours pour mon travail. La fonction de personnalisation des codes QR est exceptionnelle. Très satisfait !",
      location: 'France',
      date: '2023-12-22',
    },
    {
      name: 'Hans Müller',
      avatar: '/placeholder.svg?height=80&width=80',
      rating: 5,
      text: 'Die App ist sehr schnell und zuverlässig. Ich benutze sie für mein kleines Unternehmen und bin sehr zufrieden mit den Funktionen.',
      location: 'Germany',
      date: '2024-01-18',
    },
    {
      name: 'Yuki Tanaka',
      avatar: '/placeholder.svg?height=80&width=80',
      rating: 4,
      text: 'シンプルで使いやすいインターフェースです。QRコードの生成と読み取りが非常に速いです。ダークモードも気に入っています。',
      location: 'Japan',
      date: '2023-11-05',
    },
    {
      name: 'Carlos Oliveira',
      avatar: '/placeholder.svg?height=80&width=80',
      rating: 5,
      text: 'Excelente aplicativo! Uso para meu negócio e economiza muito tempo. A função de histórico é muito útil para acompanhar os códigos escaneados.',
      location: 'Brazil',
      date: '2024-02-15',
    },
    {
      name: 'Nguyen Van Minh',
      avatar: '/placeholder.svg?height=80&width=80',
      rating: 5,
      text: 'Ứng dụng tuyệt vời với giao diện đơn giản và dễ sử dụng. Tôi đặc biệt thích tính năng tùy chỉnh mã QR với màu sắc và logo.',
      location: 'Vietnam',
      date: '2023-12-30',
    },
  ];

  // Autoplay functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [autoplay, reviews.length]);

  const nextSlide = () => {
    setAutoplay(false);
    setActiveIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setAutoplay(false);
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  // Format date to readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id='reviews'
      className='section-padding bg-muted/50 overflow-hidden'
    >
      <div className='container mx-auto container-padding'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              {t('reviews.title')}
            </h2>
          </motion.div>
          <motion.p
            className='text-muted-foreground max-w-2xl mx-auto'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('reviews.subtitle')}
          </motion.p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className='md:hidden relative'>
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className='bg-background rounded-xl p-6 shadow-md border border-border'
          >
            <div className='absolute top-4 right-4 text-primary opacity-30'>
              <Quote className='h-8 w-8' />
            </div>
            <div className='flex items-center mb-4'>
              <Image
                src={reviews[activeIndex].avatar || '/placeholder.svg'}
                alt={reviews[activeIndex].name}
                width={50}
                height={50}
                className='rounded-full'
              />
              <div className='ml-4'>
                <p className='font-semibold'>{reviews[activeIndex].name}</p>
                <div className='flex items-center'>
                  <div className='flex mr-2'>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < reviews[activeIndex].rating
                            ? 'text-yellow-500 fill-yellow-500'
                            : 'text-muted'
                        }`}
                      />
                    ))}
                  </div>
                  <span className='text-xs text-muted-foreground'>
                    {reviews[activeIndex].location} •{' '}
                    {formatDate(reviews[activeIndex].date)}
                  </span>
                </div>
              </div>
            </div>
            <p className='text-muted-foreground'>{reviews[activeIndex].text}</p>
          </motion.div>
          <div className='flex justify-center mt-4 gap-2'>
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setAutoplay(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-primary w-6' : 'bg-muted'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
          <motion.button
            onClick={prevSlide}
            className='absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full shadow-md hover:bg-background transition-all'
            aria-label='Previous review'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className='h-6 w-6' />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className='absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full shadow-md hover:bg-background transition-all'
            aria-label='Next review'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className='h-6 w-6' />
          </motion.button>
        </div>

        {/* Desktop Carousel */}
        <div className='hidden md:block relative'>
          <motion.div
            className='overflow-hidden'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <motion.div
              className='flex transition-all duration-500 ease-in-out'
              style={{
                transform: `translateX(-${activeIndex * (100 / 3)}%)`,
                width: `${(reviews.length / 3) * 100}%`,
              }}
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className='w-1/3 px-3'
                  style={{ minWidth: `${100 / 3}%` }}
                >
                  <motion.div
                    className='bg-background rounded-xl p-6 shadow-md border border-border h-full relative overflow-hidden'
                    variants={itemVariants}
                    whileHover={{
                      y: -5,
                      boxShadow:
                        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                      transition: { duration: 0.2 },
                    }}
                  >
                    <motion.div
                      className='absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full'
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    />
                    <div className='absolute top-4 right-4 text-primary opacity-30'>
                      <Quote className='h-8 w-8' />
                    </div>
                    <div className='flex items-center mb-4 relative z-10'>
                      <Image
                        src={review.avatar || '/placeholder.svg'}
                        alt={review.name}
                        width={50}
                        height={50}
                        className='rounded-full'
                      />
                      <div className='ml-4'>
                        <p className='font-semibold'>{review.name}</p>
                        <div className='flex items-center'>
                          <div className='flex mr-2'>
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating
                                    ? 'text-yellow-500 fill-yellow-500'
                                    : 'text-muted'
                                }`}
                              />
                            ))}
                          </div>
                          <span className='text-xs text-muted-foreground'>
                            {review.location} • {formatDate(review.date)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className='text-muted-foreground relative z-10'>
                      {review.text}
                    </p>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </motion.div>
          <div className='flex justify-center mt-8 gap-2'>
            {Array.from({ length: Math.ceil(reviews.length / 3) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index * 3);
                    setAutoplay(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    Math.floor(activeIndex / 3) === index
                      ? 'bg-primary w-6'
                      : 'bg-muted'
                  }`}
                  aria-label={`Go to review group ${index + 1}`}
                />
              )
            )}
          </div>
        </div>

        {/* Add Review CTA */}
        <motion.div
          className='mt-12 text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className='mb-4 text-muted-foreground'>{t('reviews.cta.text')}</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href='#'
              className='inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-lg hover:shadow-xl transition-all'
            >
              {t('reviews.cta.button')}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
