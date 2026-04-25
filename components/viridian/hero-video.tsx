"use client"

import { useEffect, useState } from "react"

type HeroVideoBackgroundProps = {
  desktopSrc: string
  mobileSrc: string
  mobilePosterSrc?: string
  breakpoint?: number
  className?: string
}

type ViewportTarget = "desktop" | "mobile" | null

function HeroVideoOverlays({ isMobile }: { isMobile: boolean }) {
  return (
    <>
      <div
        className="absolute inset-0 bg-background/18 md:bg-background/14"
        aria-hidden="true"
      />
      <div
        className="hero-video-glow absolute inset-0"
        aria-hidden="true"
      />
      <div
        className="hero-video-directional absolute inset-0"
        aria-hidden="true"
      />
      <div
        className="hero-video-center-shape absolute inset-0"
        aria-hidden="true"
      />
      <div
        className={`absolute inset-0 ${isMobile ? "hero-video-mobile-floor" : "hero-video-cinematic-floor"}`}
        aria-hidden="true"
      />
      <div
        className="hero-video-vignette absolute inset-0"
        aria-hidden="true"
      />
      <div
        className="hero-video-grain absolute inset-0"
        aria-hidden="true"
      />
    </>
  )
}

export function HeroVideoBackground({
  desktopSrc,
  mobileSrc,
  mobilePosterSrc,
  breakpoint = 768,
  className,
}: HeroVideoBackgroundProps) {
  const [viewportTarget, setViewportTarget] = useState<ViewportTarget>(null)
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${breakpoint}px)`)
    const updateTarget = () =>
      setViewportTarget(mediaQuery.matches ? "desktop" : "mobile")

    updateTarget()

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateTarget)
      return () => mediaQuery.removeEventListener("change", updateTarget)
    }

    mediaQuery.addListener(updateTarget)
    return () => mediaQuery.removeListener(updateTarget)
  }, [desktopSrc, mobileSrc, breakpoint])

  const activeSrc =
    viewportTarget === "desktop"
      ? desktopSrc
      : viewportTarget === "mobile"
        ? mobileSrc
        : null

  const isMobile = viewportTarget === "mobile"

  useEffect(() => {
    setVideoReady(false)
  }, [activeSrc])

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
      aria-hidden="true"
    >
      {mobilePosterSrc ? (
        <img
          src={mobilePosterSrc}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 md:hidden ${
            videoReady ? "opacity-0" : "opacity-100"
          }`}
          loading="eager"
          decoding="async"
        />
      ) : null}

      {activeSrc ? (
        <video
          key={activeSrc}
          src={activeSrc}
          className={`pointer-events-none absolute inset-0 h-full w-full select-none object-cover ${
            isMobile
              ? "scale-[1.01] brightness-[0.98] contrast-[1.1] saturate-[1.02]"
              : "scale-[1.035] brightness-[0.9] contrast-[1.1] saturate-[0.95]"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={isMobile ? mobilePosterSrc : undefined}
          onCanPlay={() => setVideoReady(true)}
          controls={false}
          controlsList="nodownload noplaybackrate nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          tabIndex={-1}
        />
      ) : null}

      <HeroVideoOverlays isMobile={isMobile} />
    </div>
  )
}
