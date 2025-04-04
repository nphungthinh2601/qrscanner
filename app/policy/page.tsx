"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import { useLanguage } from "@/providers/language-provider"

export default function PolicyPage() {
  const { t } = useLanguage()

  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl md:text-4xl font-bold mb-8">{t("policy.title")}</h1>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">{t("policy.privacy.title")}</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>{t("policy.privacy.updated")}</p>
                <p>
                  VNDev Labs ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy
                  explains how your personal information is collected, used, and disclosed by VNDev Labs.
                </p>
                <p>
                  This Privacy Policy applies to our website and our mobile application Quick QR Scanner & Generator
                  (the "App").
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">Information We Collect</h3>
                <p>
                  We collect information that you provide directly to us. For example, we collect information when you
                  create an account, subscribe to our newsletter, respond to a survey, fill out a form, or communicate
                  with us.
                </p>
                <p>
                  The types of information we may collect include your name, email address, postal address, phone
                  number, and any other information you choose to provide.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">How We Use Your Information</h3>
                <p>We use the information we collect to provide, maintain, and improve our services, such as to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Process and complete transactions, and send you related information, including purchase
                    confirmations and invoices
                  </li>
                  <li>Send you technical notices, updates, security alerts, and support and administrative messages</li>
                  <li>Respond to your comments, questions, and requests, and provide customer service</li>
                  <li>
                    Communicate with you about products, services, offers, promotions, and events, and provide other
                    news or information about us
                  </li>
                  <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t("policy.terms.title")}</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>{t("policy.terms.updated")}</p>
                <p>
                  Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Quick QR
                  Scanner & Generator mobile application (the "Service") operated by VNDev Labs ("us", "we", or "our").
                </p>
                <p>
                  Your access to and use of the Service is conditioned on your acceptance of and compliance with these
                  Terms. These Terms apply to all visitors, users, and others who access or use the Service.
                </p>
                <p>
                  By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part
                  of the terms, then you may not access the Service.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">Use License</h3>
                <p>
                  Permission is granted to temporarily download one copy of the materials (information or software) on
                  VNDev Labs's Service for personal, non-commercial transitory viewing only. This is the grant of a
                  license, not a transfer of title, and under this license, you may not:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>
                    Use the materials for any commercial purpose, or for any public display (commercial or
                    non-commercial)
                  </li>
                  <li>Attempt to decompile or reverse engineer any software contained on VNDev Labs's Service</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">Disclaimer</h3>
                <p>
                  The materials on VNDev Labs's Service are provided on an 'as is' basis. VNDev Labs makes no
                  warranties, expressed or implied, and hereby disclaims and negates all other warranties including,
                  without limitation, implied warranties or conditions of merchantability, fitness for a particular
                  purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}

