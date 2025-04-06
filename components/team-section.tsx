"use client"

import { useLanguage } from "@/providers/language-provider"
import Image from "next/image"

export default function TeamSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="section-padding bg-muted/50 overflow-hidden">
      <div className="container mx-auto container-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div>
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 blur-xl -z-10" />
                <Image
                  src="/vndevlabs_512-512.png"
                  alt="VNDev Labs Team Logo"
                  width={300}
                  height={300}
                  className="rounded-full shadow-xl"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("team.title")}</h2>
            <p className="text-muted-foreground mb-6">{t("team.description")}</p>
            <p className="mb-6">{t("team.longDescription")}</p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-background rounded-lg p-4 shadow-md border border-border relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-20 h-20 bg-primary/5 rounded-full" />
                <p className="font-semibold relative z-10">10+</p>
                <p className="text-sm text-muted-foreground relative z-10">{t("team.experience")}</p>
              </div>
              <div className="bg-background rounded-lg p-4 shadow-md border border-border relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-20 h-20 bg-primary/5 rounded-full" />
                <p className="font-semibold relative z-10">50+</p>
                <p className="text-sm text-muted-foreground relative z-10">{t("team.apps")}</p>
              </div>
              <div className="bg-background rounded-lg p-4 shadow-md border border-border relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-20 h-20 bg-primary/5 rounded-full" />
                <p className="font-semibold relative z-10">1M+</p>
                <p className="text-sm text-muted-foreground relative z-10">{t("team.users")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

