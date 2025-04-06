"use client"

import { useLanguage } from "@/providers/language-provider"
import Link from "next/link"
import { motion } from "framer-motion"

export default function CTASection() {
  const { t } = useLanguage()

  return (
    <section className="section-padding overflow-hidden">
      <div className="container mx-auto container-padding">
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
        >
          {/* Background elements */}
          <motion.div
            className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full"
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
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {t("cta.download")}
            </motion.h2>
            <motion.p
              className="max-w-2xl mx-auto mb-8 text-white/90"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t("cta.subtitle")}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.vndevlabs.qrscanner"
                  target="_blank"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-blue-600 font-medium shadow-lg hover:shadow-xl transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4" />
                    <rect width="10" height="7" x="12" y="13" rx="2" />
                  </svg>
                  Google Play
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="https://apps.apple.com"
                  target="_blank"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-800 text-white font-medium shadow-lg hover:shadow-xl transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-2"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  App Store
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

