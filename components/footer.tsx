"use client"

import { useLanguage } from "@/providers/language-provider"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 pt-16 pb-8">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Image src="/logo.png" alt="QR Scanner Logo" width={40} height={40} className="rounded-xl" />
              <span className="font-bold text-lg ml-2">Quick QR Scanner</span>
            </div>
            <motion.p
              className="text-muted-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {t("footer.description")}
            </motion.p>
            <div className="flex space-x-4">
              <motion.div whileHover={{ y: -3 }}>
                <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
                  <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -3 }}>
                <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                  <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -3 }}>
                <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                  <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -3 }}>
                <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h3
              className="font-semibold text-lg mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {t("footer.quickLinks")}
            </motion.h3>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 3 }}>
                <Link href="/#features" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.features")}
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 3 }}>
                <Link href="/#screenshots" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.screenshots")}
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 3 }}>
                <Link href="/#about" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.about")}
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 3 }}>
                <Link href="/#reviews" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.reviews")}
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 3 }}>
                <Link href="/policy" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.policy")}
                </Link>
              </motion.li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <motion.h3
              className="font-semibold text-lg mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {t("footer.contact")}
            </motion.h3>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 3 }} className="flex items-center text-muted-foreground">
                <Mail className="h-5 w-5 mr-2" />
                <Link href="mailto:quickqrscanapp@gmail.com" className="hover:text-primary transition-colors">
                  quickqrscanapp@gmail.com
                </Link>
              </motion.li>
            </ul>
          </div>

          {/* Download */}
          <div>
            <motion.h3
              className="font-semibold text-lg mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t("cta.download")}
            </motion.h3>
            <div className="space-y-2">
              <motion.div whileHover={{ y: -3 }}>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.vndevlabs.qrscanner"
                  target="_blank"
                  className="inline-flex items-center justify-center w-full px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium shadow hover:shadow-md transition-all"
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
              <motion.div whileHover={{ y: -3 }}>
                <Link
                  href="https://apps.apple.com"
                  target="_blank"
                  className="inline-flex items-center justify-center w-full px-4 py-2 rounded-lg bg-secondary text-secondary-foreground font-medium shadow hover:shadow-md transition-all"
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
            </div>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          className="border-t border-border pt-8 text-center text-muted-foreground text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center space-x-6 mb-4">
            <motion.div whileHover={{ y: -2 }}>
              <Link href="/policy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }}>
              <Link href="/policy" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }}>
              <a href="/app-ads.txt" className="hover:text-primary transition-colors">
                Advertising Info
              </a>
            </motion.div>
          </div>
          <p>
            &copy; {currentYear} VNDev Labs. {t("footer.rights")}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

