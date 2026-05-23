"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isLight = mounted && resolvedTheme === "light"

  return (
    <button
      type="button"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className="group inline-flex h-10 w-10 items-center justify-center rounded-md border border-border/70 bg-card/55 text-foreground shadow-[0_12px_32px_-24px_rgba(0,0,0,0.65)] backdrop-blur-md transition-all hover:border-viridian/45 hover:text-viridian focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-viridian"
      aria-label={isLight ? "Activar modo oscuro" : "Activar modo claro"}
      title={isLight ? "Modo noche" : "Modo día"}
    >
      {isLight ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </button>
  )
}
