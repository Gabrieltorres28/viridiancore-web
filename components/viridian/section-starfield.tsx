import { cn } from "@/lib/utils"

type StarSpec = {
  top?: string
  right?: string
  bottom?: string
  left?: string
  size: number
  opacity: number
  duration: number
  delay: number
}

type ShootingStarSpec = {
  top?: string
  right?: string
  bottom?: string
  left?: string
  length: number
  duration: number
  delay: number
  rotation: string
  travelX: string
  travelY: string
}

type StarfieldVariant = "projects" | "services" | "approach" | "cta"

type SectionStarfieldProps = {
  variant: StarfieldVariant
  className?: string
}

const STARFIELD_PRESETS: Record<
  StarfieldVariant,
  {
    stars: StarSpec[]
    shootingStars: ShootingStarSpec[]
    mobileStars?: StarSpec[]
    mobileShootingStars?: ShootingStarSpec[]
    maskClassName: string
  }
> = {
  projects: {
    maskClassName: "starfield-mask-projects",
    stars: [
      { top: "10%", left: "7%", size: 2, opacity: 0.42, duration: 6.2, delay: 0.4 },
      { top: "14%", left: "18%", size: 1.5, opacity: 0.36, duration: 5.5, delay: 1.2 },
      { top: "11%", right: "10%", size: 2.5, opacity: 0.5, duration: 6.8, delay: 2.1 },
      { top: "20%", right: "18%", size: 1.5, opacity: 0.34, duration: 5.8, delay: 1.5 },
      { top: "34%", left: "5%", size: 1.5, opacity: 0.28, duration: 5.2, delay: 0.7 },
      { top: "46%", right: "6%", size: 2, opacity: 0.38, duration: 6.1, delay: 2.8 },
      { bottom: "26%", left: "8%", size: 2.5, opacity: 0.4, duration: 7.1, delay: 1.8 },
      { bottom: "18%", left: "15%", size: 1.5, opacity: 0.3, duration: 5.7, delay: 0.9 },
      { bottom: "15%", right: "12%", size: 2, opacity: 0.35, duration: 6.5, delay: 2.6 },
      { bottom: "10%", right: "5%", size: 1.5, opacity: 0.24, duration: 5.1, delay: 3.2 },
      { top: "28%", left: "26%", size: 1.5, opacity: 0.22, duration: 4.8, delay: 1.1 },
      { top: "26%", right: "28%", size: 1.5, opacity: 0.22, duration: 5.4, delay: 2.4 },
    ],
    shootingStars: [
      {
        top: "16%",
        right: "20%",
        length: 140,
        duration: 10,
        delay: 2.5,
        rotation: "-18deg",
        travelX: "-10vw",
        travelY: "5vw",
      },
      {
        bottom: "24%",
        left: "9%",
        length: 108,
        duration: 13,
        delay: 7.8,
        rotation: "-14deg",
        travelX: "8vw",
        travelY: "3.6vw",
      },
    ],
    mobileStars: [
      { top: "8%", left: "10%", size: 2, opacity: 0.46, duration: 5.6, delay: 0.5 },
      { top: "12%", right: "12%", size: 2, opacity: 0.48, duration: 6.1, delay: 1.4 },
      { top: "24%", left: "8%", size: 1.5, opacity: 0.34, duration: 5.2, delay: 2.1 },
      { top: "32%", right: "8%", size: 1.5, opacity: 0.34, duration: 5.7, delay: 1.8 },
      { bottom: "28%", left: "10%", size: 2, opacity: 0.4, duration: 6.4, delay: 2.7 },
      { bottom: "18%", right: "10%", size: 2, opacity: 0.36, duration: 5.8, delay: 0.9 },
      { bottom: "10%", left: "22%", size: 1.5, opacity: 0.3, duration: 5.1, delay: 1.6 },
      { bottom: "8%", right: "18%", size: 1.5, opacity: 0.28, duration: 4.9, delay: 2.3 },
    ],
    mobileShootingStars: [
      {
        top: "18%",
        right: "16%",
        length: 86,
        duration: 9.5,
        delay: 2,
        rotation: "-16deg",
        travelX: "-9vw",
        travelY: "5vw",
      },
      {
        bottom: "24%",
        left: "12%",
        length: 74,
        duration: 10.5,
        delay: 5.2,
        rotation: "-12deg",
        travelX: "8vw",
        travelY: "4vw",
      },
    ],
  },
  services: {
    maskClassName: "starfield-mask-services",
    stars: [
      { top: "9%", left: "6%", size: 2, opacity: 0.38, duration: 5.8, delay: 0.8 },
      { top: "12%", left: "16%", size: 1.5, opacity: 0.32, duration: 5.2, delay: 1.7 },
      { top: "8%", right: "8%", size: 2.5, opacity: 0.46, duration: 6.4, delay: 2.6 },
      { top: "18%", right: "18%", size: 1.5, opacity: 0.3, duration: 5.4, delay: 0.6 },
      { top: "28%", left: "4%", size: 1.5, opacity: 0.22, duration: 4.9, delay: 2.1 },
      { top: "38%", right: "4%", size: 1.5, opacity: 0.24, duration: 5.7, delay: 1.2 },
      { bottom: "24%", left: "7%", size: 2, opacity: 0.35, duration: 6.8, delay: 2.8 },
      { bottom: "15%", left: "14%", size: 1.5, opacity: 0.24, duration: 5.1, delay: 0.4 },
      { bottom: "19%", right: "9%", size: 2.5, opacity: 0.38, duration: 6.2, delay: 2.4 },
      { bottom: "10%", right: "15%", size: 1.5, opacity: 0.28, duration: 5.3, delay: 1.9 },
      { top: "22%", left: "24%", size: 1.5, opacity: 0.18, duration: 5.6, delay: 0.9 },
      { top: "24%", right: "26%", size: 1.5, opacity: 0.18, duration: 4.9, delay: 2.7 },
    ],
    shootingStars: [
      {
        top: "12%",
        left: "62%",
        length: 128,
        duration: 11,
        delay: 4.1,
        rotation: "-20deg",
        travelX: "-8vw",
        travelY: "4vw",
      },
      {
        bottom: "18%",
        right: "16%",
        length: 116,
        duration: 12.5,
        delay: 8.4,
        rotation: "-16deg",
        travelX: "-8vw",
        travelY: "3.8vw",
      },
    ],
    mobileStars: [
      { top: "10%", left: "9%", size: 2, opacity: 0.42, duration: 5.4, delay: 0.8 },
      { top: "14%", right: "11%", size: 2, opacity: 0.44, duration: 5.9, delay: 1.7 },
      { top: "24%", left: "7%", size: 1.5, opacity: 0.3, duration: 5.1, delay: 2.5 },
      { top: "30%", right: "9%", size: 1.5, opacity: 0.28, duration: 5.6, delay: 1.1 },
      { bottom: "26%", left: "8%", size: 2, opacity: 0.36, duration: 6.1, delay: 2.8 },
      { bottom: "18%", right: "8%", size: 2, opacity: 0.38, duration: 5.7, delay: 1.4 },
      { bottom: "11%", left: "18%", size: 1.5, opacity: 0.28, duration: 5.2, delay: 0.6 },
      { bottom: "9%", right: "18%", size: 1.5, opacity: 0.26, duration: 4.8, delay: 2.2 },
    ],
    mobileShootingStars: [
      {
        top: "15%",
        right: "14%",
        length: 80,
        duration: 10,
        delay: 3,
        rotation: "-18deg",
        travelX: "-8vw",
        travelY: "4vw",
      },
      {
        bottom: "20%",
        left: "14%",
        length: 70,
        duration: 11,
        delay: 6,
        rotation: "-14deg",
        travelX: "7vw",
        travelY: "3.5vw",
      },
    ],
  },
  approach: {
    maskClassName: "starfield-mask-approach",
    stars: [
      { top: "10%", left: "7%", size: 2.5, opacity: 0.42, duration: 6.6, delay: 0.7 },
      { top: "16%", left: "18%", size: 1.5, opacity: 0.34, duration: 5.7, delay: 1.8 },
      { top: "12%", left: "34%", size: 1.5, opacity: 0.22, duration: 4.9, delay: 2.1 },
      { top: "14%", right: "7%", size: 2, opacity: 0.3, duration: 6.1, delay: 2.8 },
      { top: "24%", right: "14%", size: 1.5, opacity: 0.24, duration: 5.2, delay: 1.2 },
      { top: "40%", left: "6%", size: 1.5, opacity: 0.24, duration: 5.3, delay: 0.9 },
      { bottom: "26%", left: "8%", size: 2, opacity: 0.32, duration: 6.3, delay: 2.6 },
      { bottom: "16%", left: "18%", size: 1.5, opacity: 0.24, duration: 5.5, delay: 1.1 },
      { bottom: "22%", right: "8%", size: 2.5, opacity: 0.34, duration: 6.9, delay: 3.1 },
      { bottom: "12%", right: "16%", size: 1.5, opacity: 0.26, duration: 5.4, delay: 2.2 },
      { top: "54%", left: "44%", size: 1.5, opacity: 0.16, duration: 4.8, delay: 1.7 },
      { top: "64%", right: "34%", size: 1.5, opacity: 0.14, duration: 4.6, delay: 0.5 },
    ],
    shootingStars: [
      {
        top: "18%",
        left: "42%",
        length: 132,
        duration: 12,
        delay: 3.3,
        rotation: "-16deg",
        travelX: "9vw",
        travelY: "4vw",
      },
      {
        bottom: "20%",
        left: "12%",
        length: 118,
        duration: 13.5,
        delay: 7.1,
        rotation: "-13deg",
        travelX: "9vw",
        travelY: "3.8vw",
      },
    ],
    mobileStars: [
      { top: "9%", left: "8%", size: 2, opacity: 0.44, duration: 5.8, delay: 0.7 },
      { top: "15%", right: "10%", size: 2, opacity: 0.42, duration: 6, delay: 1.8 },
      { top: "26%", left: "9%", size: 1.5, opacity: 0.32, duration: 5.3, delay: 2.4 },
      { top: "38%", left: "12%", size: 1.5, opacity: 0.28, duration: 5.1, delay: 1.2 },
      { bottom: "29%", left: "10%", size: 2, opacity: 0.34, duration: 6.2, delay: 2.6 },
      { bottom: "18%", left: "18%", size: 1.5, opacity: 0.28, duration: 5.4, delay: 0.9 },
      { bottom: "26%", right: "9%", size: 2, opacity: 0.36, duration: 6.4, delay: 2.9 },
      { bottom: "14%", right: "14%", size: 1.5, opacity: 0.26, duration: 4.9, delay: 1.6 },
    ],
    mobileShootingStars: [
      {
        top: "17%",
        left: "18%",
        length: 78,
        duration: 9.8,
        delay: 2.3,
        rotation: "-15deg",
        travelX: "8vw",
        travelY: "4vw",
      },
      {
        bottom: "22%",
        right: "14%",
        length: 66,
        duration: 11.5,
        delay: 5.7,
        rotation: "-17deg",
        travelX: "-7vw",
        travelY: "3.8vw",
      },
    ],
  },
  cta: {
    maskClassName: "starfield-mask-cta",
    stars: [
      { top: "14%", left: "6%", size: 2, opacity: 0.38, duration: 6.1, delay: 0.6 },
      { top: "20%", left: "14%", size: 1.5, opacity: 0.28, duration: 5.4, delay: 1.7 },
      { top: "18%", right: "7%", size: 2.5, opacity: 0.46, duration: 6.9, delay: 2.2 },
      { top: "26%", right: "15%", size: 1.5, opacity: 0.3, duration: 5.5, delay: 0.9 },
      { bottom: "22%", left: "8%", size: 2, opacity: 0.3, duration: 5.9, delay: 2.8 },
      { bottom: "14%", left: "16%", size: 1.5, opacity: 0.24, duration: 5.1, delay: 1.1 },
      { bottom: "19%", right: "9%", size: 2, opacity: 0.34, duration: 6.2, delay: 2.4 },
      { bottom: "12%", right: "18%", size: 1.5, opacity: 0.26, duration: 5.7, delay: 0.4 },
      { top: "10%", left: "28%", size: 1.5, opacity: 0.18, duration: 4.7, delay: 1.9 },
      { top: "12%", right: "28%", size: 1.5, opacity: 0.18, duration: 5.2, delay: 2.9 },
    ],
    shootingStars: [
      {
        top: "22%",
        right: "24%",
        length: 118,
        duration: 10.5,
        delay: 5,
        rotation: "-18deg",
        travelX: "-7vw",
        travelY: "3.5vw",
      },
      {
        bottom: "20%",
        left: "10%",
        length: 104,
        duration: 12,
        delay: 8.2,
        rotation: "-15deg",
        travelX: "8vw",
        travelY: "3.5vw",
      },
    ],
    mobileStars: [
      { top: "16%", left: "9%", size: 2, opacity: 0.42, duration: 5.5, delay: 0.6 },
      { top: "18%", right: "10%", size: 2, opacity: 0.44, duration: 6.2, delay: 1.4 },
      { top: "30%", left: "8%", size: 1.5, opacity: 0.3, duration: 5.1, delay: 2.1 },
      { top: "34%", right: "9%", size: 1.5, opacity: 0.3, duration: 5.7, delay: 1.1 },
      { bottom: "24%", left: "10%", size: 2, opacity: 0.34, duration: 5.9, delay: 2.8 },
      { bottom: "16%", right: "10%", size: 2, opacity: 0.36, duration: 6.3, delay: 1.9 },
      { bottom: "10%", left: "20%", size: 1.5, opacity: 0.28, duration: 4.9, delay: 0.8 },
      { bottom: "9%", right: "20%", size: 1.5, opacity: 0.28, duration: 5.2, delay: 2.4 },
    ],
    mobileShootingStars: [
      {
        top: "20%",
        right: "16%",
        length: 76,
        duration: 9.5,
        delay: 2.6,
        rotation: "-18deg",
        travelX: "-7vw",
        travelY: "3.8vw",
      },
      {
        bottom: "18%",
        left: "16%",
        length: 64,
        duration: 10.8,
        delay: 6.2,
        rotation: "-14deg",
        travelX: "6.5vw",
        travelY: "3.2vw",
      },
    ],
  },
}

export function SectionStarfield({
  variant,
  className,
}: SectionStarfieldProps) {
  const preset = STARFIELD_PRESETS[variant]

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        preset.maskClassName,
        className
      )}
      aria-hidden="true"
    >
      <div className="starfield-sky absolute inset-0" aria-hidden="true" />
      <div
        className="starfield-sky starfield-sky-fine absolute inset-0"
        aria-hidden="true"
      />
      <div
        className="starfield-sky starfield-sky-mobile-extra absolute inset-0 md:hidden"
        aria-hidden="true"
      />

      {preset.stars.map((star, index) => (
        <span
          key={`${variant}-star-${index}`}
          className="starfield-star absolute rounded-full bg-white"
          style={{
            top: star.top,
            right: star.right,
            bottom: star.bottom,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            ["--star-opacity" as string]: `${star.opacity}`,
            ["--star-duration" as string]: `${star.duration}s`,
            ["--star-delay" as string]: `${star.delay}s`,
          }}
        />
      ))}

      {preset.stars.slice(0, 4).map((star, index) => (
        <span
          key={`${variant}-bright-star-${index}`}
          className="starfield-bright-star absolute rounded-full bg-white"
          style={{
            top: star.top,
            right: star.right,
            bottom: star.bottom,
            left: star.left,
            width: `${star.size + 1}px`,
            height: `${star.size + 1}px`,
            ["--bright-star-delay" as string]: `${star.delay + 0.8}s`,
            ["--bright-star-duration" as string]: `${star.duration + 1.6}s`,
          }}
        />
      ))}

      {preset.shootingStars.map((trail, index) => (
        <span
          key={`${variant}-trail-${index}`}
          className="starfield-shooting-star absolute hidden md:block"
          style={{
            top: trail.top,
            right: trail.right,
            bottom: trail.bottom,
            left: trail.left,
            width: `${trail.length}px`,
            ["--trail-duration" as string]: `${trail.duration}s`,
            ["--trail-delay" as string]: `${trail.delay}s`,
            ["--trail-rotation" as string]: trail.rotation,
            ["--trail-x" as string]: trail.travelX,
            ["--trail-y" as string]: trail.travelY,
          }}
        />
      ))}

      {preset.mobileStars?.map((star, index) => (
        <span
          key={`${variant}-mobile-star-${index}`}
          className="starfield-star absolute md:hidden rounded-full bg-white"
          style={{
            top: star.top,
            right: star.right,
            bottom: star.bottom,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            ["--star-opacity" as string]: `${star.opacity}`,
            ["--star-duration" as string]: `${star.duration}s`,
            ["--star-delay" as string]: `${star.delay}s`,
          }}
        />
      ))}

      {preset.mobileStars?.slice(0, 5).map((star, index) => (
        <span
          key={`${variant}-mobile-bright-star-${index}`}
          className="starfield-bright-star absolute md:hidden rounded-full bg-white"
          style={{
            top: star.top,
            right: star.right,
            bottom: star.bottom,
            left: star.left,
            width: `${star.size + 1}px`,
            height: `${star.size + 1}px`,
            ["--bright-star-delay" as string]: `${star.delay + 0.5}s`,
            ["--bright-star-duration" as string]: `${star.duration + 1.2}s`,
          }}
        />
      ))}

      {preset.mobileShootingStars?.map((trail, index) => (
        <span
          key={`${variant}-mobile-trail-${index}`}
          className="starfield-shooting-star absolute md:hidden"
          style={{
            top: trail.top,
            right: trail.right,
            bottom: trail.bottom,
            left: trail.left,
            width: `${trail.length}px`,
            ["--trail-duration" as string]: `${trail.duration}s`,
            ["--trail-delay" as string]: `${trail.delay}s`,
            ["--trail-rotation" as string]: trail.rotation,
            ["--trail-x" as string]: trail.travelX,
            ["--trail-y" as string]: trail.travelY,
          }}
        />
      ))}
    </div>
  )
}
