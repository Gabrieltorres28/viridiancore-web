"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { BrandLogo } from "./brand-logo"
import { ThemeToggle } from "./theme-toggle"

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#validacion", label: "Validación" },
  { href: "#que-hacemos", label: "Qué hacemos" },
  { href: "#enfoque", label: "Enfoque" },
  { href: "#sistemas-privados", label: "Productos" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled
          ? "md:backdrop-blur-md bg-background/70 border-b border-border/60"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 md:h-28 md:px-10">
        <Link
          href="#inicio"
          className="block w-[230px] shrink-0 md:w-[340px]"
          aria-label="Viridian Core — Inicio"
        >
          <BrandLogo priority />
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Navegación principal"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border/60 bg-card/30 text-foreground"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "md:hidden overflow-hidden border-b border-border/60 bg-background/95 md:backdrop-blur-xl transition-[max-height,opacity] duration-500",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav
          className="flex flex-col gap-1 px-6 pb-8 pt-4"
          aria-label="Navegación móvil"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-border/40 py-4 text-base text-foreground/85 transition-colors hover:text-foreground"
            >
              {link.label}
              <span className="text-xs text-viridian/70 font-mono">
                {String(NAV_LINKS.indexOf(link) + 1).padStart(2, "0")}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
