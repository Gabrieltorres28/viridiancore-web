"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

export type Project = {
  index: string
  title: string
  type: string
  teaser: string
  description: string
  tech: string
  href: string
  logo: {
    src: string
    alt: string
  }
}

export function ProjectCard({ project }: { project: Project }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className="group perspective-1200 h-[520px] w-full md:h-[620px] lg:h-[660px]"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onFocusCapture={() => setFlipped(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setFlipped(false)
        }
      }}
    >
      <div
        className={cn(
          "relative h-full w-full rounded-lg transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] preserve-3d",
          flipped && "rotate-y-180",
        )}
      >
        {/* FRONT */}
        <div className="absolute inset-0 backface-hidden overflow-hidden rounded-lg border border-border/60 bg-card">
          {/* Subtle inner grid/pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:radial-gradient(color-mix(in_oklch,var(--viridian)_18%,transparent)_1px,transparent_1px)] [background-size:22px_22px]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-viridian/60 to-transparent"
            aria-hidden="true"
          />

          <div className="relative flex h-full flex-col justify-between p-7 md:p-8">
            <div className="flex items-start justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-viridian">
                {project.index}
              </span>
              <span className="rounded-full border border-border/70 bg-background/50 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-foreground/65">
                {project.type}
              </span>
            </div>

            <div>
              <h3 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                {project.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-foreground/65 md:text-base">
                {project.teaser}
              </p>
            </div>

            <div className="flex items-center justify-between text-xs text-foreground/50">
              <button
                type="button"
                onClick={() => setFlipped(true)}
                tabIndex={flipped ? -1 : 0}
                className="inline-flex items-center gap-2 rounded-md border border-border/70 bg-background/50 px-3 py-2 text-xs text-foreground/70 transition-colors hover:border-viridian/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-viridian"
                aria-label={`Ver detalles del proyecto ${project.title}`}
              >
                <span className="h-1 w-1 rounded-full bg-viridian" />
                Ver detalles
              </button>
              <ArrowUpRight className="h-4 w-4 text-foreground/40 transition-colors group-hover:text-viridian" />
            </div>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 rotate-y-180 backface-hidden overflow-hidden rounded-lg border border-viridian/25 bg-gradient-to-b from-card to-background">
          <div
            className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(80%_60%_at_50%_0%,color-mix(in_oklch,var(--viridian)_14%,transparent)_0%,transparent_60%)]"
            aria-hidden="true"
          />
          <div className="relative flex h-full flex-col justify-between gap-6 p-5 md:p-8">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-viridian">
                {project.index} — {project.type}
              </span>
              <h3 className="mt-3 text-xl font-medium tracking-tight text-foreground md:mt-4 md:text-3xl">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75 md:mt-5 md:text-base">
                {project.description}
              </p>
              <div className="mt-6 flex h-32 items-center justify-center px-2 md:h-36">
                <Image
                  src={project.logo.src}
                  alt={project.logo.alt}
                  width={280}
                  height={160}
                  className="h-full w-auto max-w-full object-contain drop-shadow-[0_18px_32px_rgba(0,0,0,0.28)]"
                  sizes="280px"
                />
              </div>
            </div>

            <div>
              <div className="mb-4 border-t border-border/60 pt-4 md:mb-5 md:pt-5">
                <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/50">
                  Stack · Notas
                </span>
                <p className="mt-2 text-sm text-foreground/80">
                  {project.tech}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={flipped ? 0 : -1}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-viridian px-4 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-viridian/90 hover:shadow-[0_0_28px_-8px_var(--viridian)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-viridian"
                >
                  Ver proyecto
                  <ArrowUpRight className="h-4 w-4 shrink-0" />
                </a>
                <button
                  type="button"
                  onClick={() => setFlipped(false)}
                  tabIndex={flipped ? 0 : -1}
                  className="inline-flex items-center justify-center rounded-md border border-border/70 bg-background/40 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-viridian/50 hover:text-viridian focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-viridian"
                >
                  Volver
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
