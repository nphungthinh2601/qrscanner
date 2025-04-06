"use client"

import { useLanguage } from "@/providers/language-provider"
import Image from "next/image"

export default function CompanySection() {
  const { t } = useLanguage()

  return (
    <section className="section-padding overflow-hidden">
      <div className="container mx-auto container-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("company.title")}</h2>
            <p className="text-muted-foreground mb-6">{t("company.description")}</p>
            <p className="mb-6">{t("company.mission")}</p>
            <p>{t("company.vision")}</p>
          </div>

          <div className="flex justify-center">
            <div>
              <div className="relative">
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 blur-xl -z-10" />
                <Image
                  src="/vndevlabs_4096-2304.png"
                  alt="VNDev Labs Company Logo"
                  width={400}
                  height={225}
                  className="rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

