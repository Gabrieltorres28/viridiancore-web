import { Navbar } from "@/components/viridian/navbar"
import { Hero } from "@/components/viridian/hero"
import { Projects } from "@/components/viridian/projects"
import { Testimonials } from "@/components/viridian/testimonials"
import { Services } from "@/components/viridian/services"
import { Approach } from "@/components/viridian/approach"
import { PrivateSystems } from "@/components/viridian/private-systems"
import { FinalCta } from "@/components/viridian/final-cta"
import { Footer } from "@/components/viridian/footer"
import { DaylightBackdrop } from "@/components/viridian/daylight-backdrop"
import { FounderSection } from "@/components/viridian/founder-section"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <DaylightBackdrop />
      <Navbar />
      <Hero />
      <FounderSection />
      <Projects />
      <Testimonials />
      <Services />
      <Approach />
      <PrivateSystems />
      <FinalCta />
      <Footer />
    </main>
  )
}
