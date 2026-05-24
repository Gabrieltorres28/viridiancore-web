"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function DaylightBackdrop() {
  const backdropRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const mobile = window.matchMedia("(max-width: 767px)")
    let frame = 0

    const update = () => {
      if (reduceMotion.matches || mobile.matches) return

      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        backdropRef.current?.style.setProperty(
          "--daylight-parallax",
          `${Math.min(window.scrollY * 0.035, 46)}px`,
        )
      })
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", update)
    }
  }, [])

  return (
    <div ref={backdropRef} className="daylight-backdrop" aria-hidden="true">
      <div className="daylight-sky" />
      <div className="daylight-image-layer">
        <Image
          src="/images/logo-fondo-claro.webp"
          alt=""
          fill
          sizes="100vw"
          className="daylight-image"
        />
      </div>
      <div className="daylight-image-wash" />
      <div className="daylight-terrain" />
      <div className="daylight-grid" />
      <div className="daylight-nodes" />
    </div>
  )
}
