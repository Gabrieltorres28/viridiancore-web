import Image from "next/image"
import { cn } from "@/lib/utils"

type BrandLogoProps = {
  className?: string
  priority?: boolean
}

export function BrandLogo({ className, priority = false }: BrandLogoProps) {
  return (
    <span className={cn("relative block", className)}>
      <Image
        src="/images/logo-oficial-header-crop.webp"
        alt="Viridian Core"
        width={1005}
        height={274}
        priority={priority}
        sizes="(max-width: 767px) 230px, 340px"
        className="h-auto w-full select-none object-contain"
      />
    </span>
  )
}
