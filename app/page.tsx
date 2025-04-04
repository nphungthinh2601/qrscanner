import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import ScreenshotsSection from "@/components/screenshots-section"
import TeamSection from "@/components/team-section"
import CompanySection from "@/components/company-section"
import ReviewsSection from "@/components/reviews-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ScreenshotsSection />
        <TeamSection />
        <CompanySection />
        <ReviewsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

