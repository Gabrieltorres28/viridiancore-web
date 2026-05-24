"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const LOADER_STORAGE_KEY = "viridian-initial-loader-seen"
const MAX_LOADER_MS = 720

export function InitialLoader() {
  const [visible, setVisible] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(LOADER_STORAGE_KEY) === "true") {
      setVisible(false)
      return
    }

    setMounted(true)
    let timer: number | undefined

    const frame = window.requestAnimationFrame(() => {
      timer = window.setTimeout(() => {
        sessionStorage.setItem(LOADER_STORAGE_KEY, "true")
        setVisible(false)
      }, MAX_LOADER_MS)
    })

    return () => {
      window.cancelAnimationFrame(frame)
      if (timer) window.clearTimeout(timer)
    }
  }, [])

  if (!mounted && !visible) return null

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] grid place-items-center bg-background transition-opacity duration-300 ease-out",
        visible ? "opacity-100" : "pointer-events-none opacity-0",
      )}
      aria-hidden={!visible}
    >
      <div className="relative flex w-[min(68vw,260px)] flex-col items-center gap-5">
        <Image
          src="/images/logo-oficial-header-crop.webp"
          alt="Viridian Core"
          width={1005}
          height={274}
          priority
          sizes="260px"
          className="h-auto w-full object-contain"
        />
        <span className="h-px w-28 overflow-hidden rounded-full bg-border">
          <span className="block h-full w-2/3 animate-[loader-line_720ms_ease-out_forwards] rounded-full bg-viridian" />
        </span>
      </div>
    </div>
  )
}
