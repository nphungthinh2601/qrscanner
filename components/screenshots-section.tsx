'use client';

import { useLanguage } from '@/providers/language-provider';
import { useState, useEffect } from 'react';
import Image from 'next/image';

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

  return (
    <section id='screenshots' className='section-padding overflow-hidden'>
      <div className='container mx-auto container-padding'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            {t('screenshots.title')}
          </h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            {t('screenshots.subtitle')}
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className='md:hidden relative'>
          <div className='overflow-hidden rounded-3xl shadow-xl'>
            <div className='relative w-full h-[500px]'>
              <div className='absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 blur-xl' />
              <Image
                src={screenshots[activeIndex].src || '/placeholder.svg'}
                alt=''
                fill
                className='object-contain'
              />
            </div>
          </div>
          <div className='flex justify-center mt-4 gap-2'>
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setAutoplay(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-primary w-6' : 'bg-muted'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Carousel */}
        <div className='hidden md:block relative'>
          <div className='flex justify-center items-center gap-6'>
            {visibleScreenshots.map((screenshot, idx) => {
              // Calculate scale and z-index based on position
              const isCenter = idx === 1;
              const scale = isCenter ? 1 : 0.8;
              const zIndex = isCenter ? 10 : 5;
              const opacity = isCenter ? 1 : 0.7;

              return (
                <div
                  key={screenshot.index}
                  className='relative rounded-3xl overflow-hidden shadow-xl'
                  style={{ zIndex, opacity, transform: `scale(${scale})` }}
                >
                  <div className='absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 blur-xl' />
                  <div
                    className={`relative ${
                      isCenter ? 'h-[600px] w-[300px]' : 'h-[500px] w-[250px]'
                    }`}
                  >
                    <Image
                      src={screenshot.src || '/placeholder.svg'}
                      alt=''
                      fill
                      className='object-contain'
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className='flex justify-center mt-8 gap-2'>
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setAutoplay(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-primary w-6' : 'bg-muted'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
