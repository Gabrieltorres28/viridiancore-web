import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { FloatingWhatsapp } from "@/components/viridian/floating-whatsapp"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://viridiancore.com.ar"),
  title: "Viridian Core | Software, sitios web y sistemas de gestión",
  description:
    "Desarrollo de sitios web, sistemas de gestión y soluciones digitales para PyMEs, instituciones y municipios. Next.js, PostgreSQL, automatización y despliegue en producción.",
  applicationName: "Viridian Core",
  alternates: {
    canonical: "/",
    languages: {
      "es-AR": "/",
    },
  },
  keywords: [
    "Viridian Core",
    "sitios web institucionales",
    "sistemas de gestión",
    "software a medida",
    "PyMEs",
    "municipios",
    "instituciones",
    "desarrollo web",
    "digitalización de procesos",
    "Next.js",
    "PostgreSQL",
    "Vercel",
  ],
  authors: [{ name: "Viridian Core" }],
  creator: "Viridian Core",
  publisher: "Viridian Core",
  openGraph: {
    title: "Viridian Core | Software, sitios web y sistemas de gestión",
    description:
      "Desarrollo de sitios web, sistemas de gestión y soluciones digitales para PyMEs, instituciones y municipios.",
    url: "https://viridiancore.com.ar",
    siteName: "Viridian Core",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/logo-oficial-header-crop.png",
        width: 1005,
        height: 274,
        alt: "Viridian Core",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Viridian Core | Software, sitios web y sistemas de gestión",
    description:
      "Sitios web, sistemas de gestión y soluciones digitales para PyMEs, instituciones y municipios.",
    images: ["/images/logo-oficial-header-crop.png"],
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/eagle-icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/eagle-icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0b0c",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es-AR"
      className={`${geist.variable} ${geistMono.variable} dark bg-background`}
    >
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <FloatingWhatsapp />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
