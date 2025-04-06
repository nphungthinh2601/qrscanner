"use client"

import { useLanguage } from "@/providers/language-provider"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <div className="flex-1">
            <div className="flex justify-center md:justify-start mb-6">
              <Image src="/logo.png" alt="QR Scanner Logo" width={120} height={120} className="rounded-2xl shadow-lg" />
            </div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="gradient-text">Quick QR</span> Scanner & Generator
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-center md:text-left text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {t("hero.tagline")}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.vndevlabs.qrscanner"
                  target="_blank"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-lg hover:shadow-xl transition-all"
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
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium shadow hover:shadow-md transition-all"
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

          {/* Right side - Phone mockup */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative w-[280px] h-[560px] md:w-[320px] md:h-[640px]">
              <motion.div
                className="absolute -z-10 w-full h-full rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 blur-xl"
                style={{ transform: "translateY(20px)" }}
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
              <Image
                src="/screenshot1.png"
                alt="QR Scanner App Screenshot"
                fill
                className="object-contain rounded-3xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

