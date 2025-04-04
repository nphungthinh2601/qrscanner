"use client"

import { useLanguage } from "@/providers/language-provider"
import { motion } from "framer-motion"
import { Scan, Palette, History, Moon, Vibrate, Globe, Layout } from "lucide-react"

export default function FeaturesSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: <Scan className="h-10 w-10" />,
      title: t("features.scan"),
      description: t("features.scan.description"),
    },
    {
      icon: <Palette className="h-10 w-10" />,
      title: t("features.customize"),
      description: t("features.customize.description"),
    },
    {
      icon: <History className="h-10 w-10" />,
      title: t("features.history"),
      description: t("features.history.description"),
    },
    {
      icon: <Moon className="h-10 w-10" />,
      title: t("features.theme"),
      description: t("features.theme.description"),
    },
    {
      icon: <Vibrate className="h-10 w-10" />,
      title: t("features.feedback"),
      description: t("features.feedback.description"),
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: t("features.language"),
      description: t("features.language.description"),
    },
    {
      icon: <Layout className="h-10 w-10" />,
      title: t("features.interface"),
      description: t("features.interface.description"),
    },
  ]

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
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: i * 0.1,
      },
    }),
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -45 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.2,
      },
    },
  }

  return (
    <section id="features" className="section-padding bg-muted/50 overflow-hidden">
      <div className="container mx-auto container-padding">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-4" variants={titleVariants}>
            {t("features.title")}
          </motion.h2>
          <motion.p className="text-muted-foreground max-w-2xl mx-auto" variants={titleVariants}>
            {t("features.subtitle")}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-border relative overflow-hidden"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              />
              <motion.div
                className="mb-4 text-primary relative"
                variants={iconVariants}
                whileHover={{
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 },
                }}
              >
                {feature.icon}
              </motion.div>
              <motion.h3
                className="text-xl font-semibold mb-2 relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
              >
                {feature.title}
              </motion.h3>
              <motion.p
                className="text-muted-foreground relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

