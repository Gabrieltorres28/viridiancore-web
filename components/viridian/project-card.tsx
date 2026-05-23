"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight, Check, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

export type Project = {
  index: string
  title: string
  category: "system" | "institutional"
  type: string
  status: string
  badge: string
  description: string
  features: string[]
  tags?: string[]
  cta: string
  href: string
  featured?: boolean
  image?: {
    src: string
    alt: string
  }
  imageLight?: {
    src: string
    alt: string
  }
}

export function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  const [imageFailed, setImageFailed] = useState(false)
  const [lightImageFailed, setLightImageFailed] = useState(false)
  const hasImage = Boolean(project.image?.src) && !imageFailed
  const hasLightImage = Boolean(project.imageLight?.src) && !lightImageFailed
  const visualTags = project.tags?.length ? project.tags : [project.badge, project.status]

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-lg border border-border/60 bg-card/85 shadow-[0_24px_80px_-56px_rgba(0,0,0,0.9)] transition-all duration-300 hover:-translate-y-1 hover:border-viridian/45 hover:shadow-[0_32px_96px_-64px_var(--viridian)]",
        compact && "bg-card/70",
        project.featured && "lg:col-span-2",
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.26] [background-image:radial-gradient(color-mix(in_oklch,var(--viridian)_18%,transparent)_1px,transparent_1px)] [background-size:22px_22px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-viridian/60 to-transparent opacity-70"
        aria-hidden="true"
      />

      <div
        className={cn(
          "relative overflow-hidden border-b border-border/55 bg-background/55",
          compact ? "h-48" : project.featured ? "aspect-[2/1] min-h-64 md:aspect-[2/1]" : "h-56 md:h-64",
        )}
      >
        {hasImage ? (
          <>
            <Image
              src={project.image!.src}
              alt={project.image!.alt}
              fill
              sizes={project.featured ? "(min-width: 1280px) 1180px, (min-width: 1024px) 92vw, 100vw" : compact ? "(min-width: 1024px) 33vw, 100vw" : "(min-width: 1024px) 50vw, 100vw"}
              className={cn(
                "project-image-dark opacity-92 transition duration-500 group-hover:scale-[1.015] group-hover:opacity-100",
                project.featured ? "object-contain p-3 md:p-5" : "object-cover",
                hasLightImage && "project-image-dark-with-light",
              )}
              onError={() => setImageFailed(true)}
            />
            {hasLightImage ? (
              <Image
                src={project.imageLight!.src}
                alt={project.imageLight!.alt}
                fill
                sizes={project.featured ? "(min-width: 1280px) 1180px, (min-width: 1024px) 92vw, 100vw" : compact ? "(min-width: 1024px) 33vw, 100vw" : "(min-width: 1024px) 50vw, 100vw"}
                className={cn("project-image-light opacity-0 transition duration-500 group-hover:scale-[1.015]", project.featured ? "object-contain p-3 md:p-5" : "object-cover")}
                onError={() => setLightImageFailed(true)}
              />
            ) : null}
          </>
        ) : (
          <ProjectMockup title={project.title} type={project.type} compact={compact} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card/92 via-card/10 to-transparent" aria-hidden="true" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2 md:left-5 md:top-5">
          {visualTags.map((tag, index) => (
            <span
              key={tag}
              className={cn(
                "rounded-full border bg-background/70 px-3 py-1 text-[11px] uppercase tracking-[0.18em] backdrop-blur-md",
                index === 0
                  ? "border-viridian/35 font-medium text-viridian"
                  : "border-border/70 text-foreground/70",
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className={cn("relative flex flex-1 flex-col p-6", compact ? "md:p-6" : "md:p-7", project.featured && "md:p-8")}>
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-viridian">
            {project.index}
          </span>
          <span className="text-right text-xs uppercase tracking-[0.16em] text-foreground/45">
            {project.type}
          </span>
        </div>

        <h3 className={cn("mt-5 font-medium leading-tight tracking-tight text-foreground", compact ? "text-2xl" : project.featured ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl")}>
          {project.title}
        </h3>
        <p className={cn("mt-4 text-sm leading-relaxed text-foreground/68 md:text-base", project.featured && "max-w-3xl md:text-lg")}>
          {project.description}
        </p>

        <div className="mt-6 border-t border-border/55 pt-5">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/45">
            Funcionalidades principales
          </span>
          <ul className={cn("mt-4 grid gap-2.5 sm:grid-cols-2", project.featured && "lg:grid-cols-4")}>
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm leading-snug text-foreground/76">
                <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-viridian/35 bg-viridian/10 text-viridian">
                  <Check className="h-2.5 w-2.5" strokeWidth={3} />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-7 flex flex-1 items-end">
          <a
            href={project.href}
            target={project.href.startsWith("http") ? "_blank" : undefined}
            rel={project.href.startsWith("http") ? "noreferrer" : undefined}
            className="group/cta inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-viridian px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-viridian/90 hover:shadow-[0_0_28px_-8px_var(--viridian)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-viridian sm:w-auto"
          >
            {project.cta}
            {project.href.startsWith("http") ? (
              <ExternalLink className="h-4 w-4 shrink-0 transition-transform group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
            ) : (
              <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
            )}
          </a>
        </div>
      </div>
    </article>
  )
}

function ProjectMockup({ title, type, compact }: { title: string; type: string; compact: boolean }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-background">
      <div
        className="absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_0%,color-mix(in_oklch,var(--viridian)_24%,transparent)_0%,transparent_62%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_35%,rgba(255,255,255,0.03))]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 [background-image:linear-gradient(to_right,color-mix(in_oklch,var(--border)_70%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklch,var(--border)_70%,transparent)_1px,transparent_1px)] [background-size:42px_42px] opacity-45"
        aria-hidden="true"
      />
      <div className={cn("relative w-[82%] rounded-lg border border-border/70 bg-card/70 p-4 shadow-2xl backdrop-blur-sm", compact ? "max-w-sm" : "max-w-md")}>
        <div className="flex items-center justify-between border-b border-border/60 pb-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-viridian/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          </div>
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-foreground/45">
            Sistema real
          </span>
        </div>
        <div className="mt-4 grid gap-3">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-viridian">{type}</span>
            <p className="mt-2 text-base font-medium leading-tight text-foreground md:text-lg">{title}</p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <span className="h-16 rounded-md border border-border/60 bg-background/70" />
            <span className="h-16 rounded-md border border-border/60 bg-background/45" />
            <span className="h-16 rounded-md border border-border/60 bg-background/55" />
          </div>
          <div className="space-y-2">
            <span className="block h-2 rounded-full bg-foreground/20" />
            <span className="block h-2 w-4/5 rounded-full bg-foreground/12" />
            <span className="block h-2 w-2/3 rounded-full bg-viridian/25" />
          </div>
        </div>
      </div>
    </div>
  )
}
