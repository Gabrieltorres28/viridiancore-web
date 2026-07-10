import { existsSync } from "node:fs"
import { join } from "node:path"
import Image from "next/image"
import { ArrowUpRight, Check, Download, Github, Linkedin, Mail } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { founder } from "@/data/founder"
import { SectionStarfield } from "./section-starfield"

const externalLinkProps = { target: "_blank", rel: "noopener noreferrer" } as const

export function FounderSection() {
  const imageSrc = existsSync(join(process.cwd(), "public", founder.image.src)) ? founder.image.src : founder.image.fallbackSrc

  return (
    <section id="founder" aria-labelledby="founder-title" className="relative scroll-mt-24 overflow-hidden border-t border-border/50 bg-background py-24 md:scroll-mt-28 md:py-36">
      <SectionStarfield variant="projects" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-lg border border-border/60 bg-card shadow-[0_0_48px_-36px_var(--viridian)] lg:mx-0">
              <Image src={imageSrc} alt={founder.image.alt} fill sizes="(max-width: 1024px) 90vw, 38vw" className="object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-transparent" aria-hidden="true" />
              <div className="absolute inset-x-5 bottom-5 rounded-md border border-border/60 bg-background/75 p-4 backdrop-blur-md">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-viridian">Founder / Full Stack</p>
                <p className="mt-2 text-sm font-medium text-foreground">{founder.name}</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-viridian">Sobre el fundador</span>
            <h2 id="founder-title" className="mt-4 text-balance text-3xl font-medium leading-[1.08] tracking-tight text-foreground md:text-5xl">
              El desarrollador detrás de <span className="text-viridian">Viridian Core</span>
            </h2>
            <div className="mt-7">
              <h3 className="text-xl font-medium tracking-tight text-foreground md:text-2xl">{founder.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-viridian md:text-base">{founder.role}</p>
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-foreground/70">
                {founder.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
            <div className="mt-10 border-t border-border/60 pt-8">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/55">Stack tecnológico</h3>
              <div className="mt-5 grid gap-6 sm:grid-cols-2">
                {founder.stack.map((group) => (
                  <div key={group.category}>
                    <h4 className="text-sm font-medium text-foreground/85">{group.category}</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((item) => <Badge key={item} variant="outline" className="border-border/60 bg-card/40 px-2.5 py-1 text-foreground/70">{item}</Badge>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 rounded-lg border border-border/60 bg-card/35 p-6">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-viridian">Experiencia destacada</h3>
              <ul className="mt-5 space-y-3">
                {founder.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-foreground/75">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-viridian/40 bg-viridian/10 text-viridian">
                      <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg"><a href={founder.links.linkedin} aria-label="Ver LinkedIn de Gabriel Agustín Torres" {...externalLinkProps}><Linkedin aria-hidden="true" />Ver LinkedIn<ArrowUpRight aria-hidden="true" /></a></Button>
              <Button asChild size="lg" variant="outline"><a href={founder.links.github} aria-label="Ver GitHub de Gabriel Agustín Torres" {...externalLinkProps}><Github aria-hidden="true" />Ver GitHub</a></Button>
              <Button asChild size="lg" variant="outline"><a href={founder.links.cv} aria-label="Descargar CV de Gabriel Agustín Torres" download><Download aria-hidden="true" />Descargar CV</a></Button>
              <Button asChild size="lg" variant="outline"><a href={founder.links.email} aria-label="Contactar por email a Gabriel Agustín Torres"><Mail aria-hidden="true" />Contactar</a></Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
