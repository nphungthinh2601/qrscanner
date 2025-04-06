"use client"

import { useLanguage } from "@/providers/language-provider"
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

  return (
    <section id="features" className="section-padding bg-muted/50 overflow-hidden">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("features.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t("features.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-border relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full" />
              <div className="mb-4 text-primary relative">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 relative">{feature.title}</h3>
              <p className="text-muted-foreground relative">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

