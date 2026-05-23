"use client"

import { useEffect, useState, type CSSProperties } from "react"
import Image from "next/image"

export function DaylightBackdrop() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    let frame = 0

    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        setOffset(Math.min(window.scrollY * 0.035, 46))
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
    <div
      className="daylight-backdrop"
      style={{ "--daylight-parallax": `${offset}px` } as CSSProperties}
      aria-hidden="true"
    >
      <div className="daylight-sky" />
      <div className="daylight-image-layer">
        <Image
          src="/images/logo-fondo-claro.png"
          alt=""
          fill
          priority
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
