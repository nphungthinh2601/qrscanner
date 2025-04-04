"use client"

import { useLanguage } from "@/providers/language-provider"
import { motion } from "framer-motion"
import Link from "next/link"

export default function CTASection() {
  const { t } = useLanguage()

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: i * 0.2,
      },
    }),
  }

  return (
    <section className="section-padding overflow-hidden">
      <div className="container mx-auto container-padding">
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Background elements */}
          <motion.div
            className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full"
            custom={0}
            variants={circleVariants}
            animate={{
              x: [0, 10, 0, -10, 0],
              y: [0, -10, 0, 10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -left-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full"
            custom={1}
            variants={circleVariants}
            animate={{
              x: [0, -10, 0, 10, 0],
              y: [0, 10, 0, -10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute left-1/2 top-0 w-40 h-40 bg-white/10 rounded-full"
            custom={2}
            variants={circleVariants}
            animate={{
              x: [0, 20, 0, -20, 0],
              y: [0, 20, 0, -20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />

          <div className="relative z-10">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" variants={itemVariants}>
              {t("cta.download")}
            </motion.h2>
            <motion.p className="max-w-2xl mx-auto mb-8 text-white/90" variants={itemVariants}>
              {t("cta.subtitle")}
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="https://play.google.com/store"
                  target="_blank"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-blue-600 font-medium shadow-lg hover:shadow-xl transition-all"
                >
                  {t("cta.googlePlay")}
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="https://apps.apple.com"
                  target="_blank"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-800 text-white font-medium shadow-lg hover:shadow-xl transition-all"
                >
                  {t("cta.appStore")}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

