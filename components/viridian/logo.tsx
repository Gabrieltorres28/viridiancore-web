import { cn } from "@/lib/utils"

type LogoProps = {
  className?: string
  /**
   * Size of the logo container in pixels. Applied to both width & height.
   */
  size?: number
}

/**
 * Viridian Core — Logo placeholder.
 *
 * This component reserves a clean square slot sized for a transparent logo
 * image that will be added later at `/public/images/logo.png`.
 *
 * To wire up the real logo, replace the inner placeholder mark below with a
 * next/image instance pointing to `/images/logo.png`.
 *
 * We intentionally do NOT render initials or a fake wordmark here.
 */
export function Logo({ className, size = 36 }: LogoProps) {
  return (
    <span
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden rounded-md border border-border/70 bg-card/50 md:backdrop-blur-sm",
        className,
      )}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {/* Subtle viridian corner ticks — purely decorative placeholder, no letters */}
      <span className="pointer-events-none absolute left-1 top-1 h-1.5 w-1.5 border-l border-t border-viridian/70" />
      <span className="pointer-events-none absolute right-1 top-1 h-1.5 w-1.5 border-r border-t border-viridian/70" />
      <span className="pointer-events-none absolute bottom-1 left-1 h-1.5 w-1.5 border-b border-l border-viridian/70" />
      <span className="pointer-events-none absolute bottom-1 right-1 h-1.5 w-1.5 border-b border-r border-viridian/70" />
      {/* Center micro mark */}
      <span className="h-1.5 w-1.5 rounded-full bg-viridian shadow-[0_0_10px_var(--viridian)]" />
    </span>
  )
}
