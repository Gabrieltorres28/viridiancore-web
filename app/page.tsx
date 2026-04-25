import { Navbar } from "@/components/viridian/navbar"
import { Hero } from "@/components/viridian/hero"
import { Projects } from "@/components/viridian/projects"
import { Services } from "@/components/viridian/services"
import { Approach } from "@/components/viridian/approach"
import { PrivateSystems } from "@/components/viridian/private-systems"
import { FinalCta } from "@/components/viridian/final-cta"
import { Footer } from "@/components/viridian/footer"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <Approach />
      <PrivateSystems />
      <FinalCta />
      <Footer />
    </main>
  )
}
