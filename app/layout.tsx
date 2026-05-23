import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { FloatingWhatsapp } from "@/components/viridian/floating-whatsapp"
import { ThemeProvider } from "@/components/theme-provider"
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
  title: "Viridian Core | Sistemas de gestión y software operativo",
  description:
    "Desarrollo de sistemas de gestión para PyMEs, software operativo, sistemas para repartos y soluciones digitales para empresas, instituciones y municipios en Misiones.",
  applicationName: "Viridian Core",
  alternates: {
    canonical: "/",
    languages: {
      "es-AR": "/",
    },
  },
  keywords: [
    "Viridian Core",
    "sistemas de gestión para PyMEs",
    "software operativo",
    "sistemas para repartos",
    "desarrollo de sistemas en Misiones",
    "soluciones digitales para empresas",
    "software para instituciones",
    "presencia digital profesional",
    "software a medida",
    "PyMEs",
    "municipios",
    "instituciones",
    "automatización operativa",
    "digitalización de procesos",
    "Next.js",
    "PostgreSQL",
    "Vercel",
  ],
  authors: [{ name: "Viridian Core" }],
  creator: "Viridian Core",
  publisher: "Viridian Core",
  openGraph: {
    title: "Viridian Core | Sistemas de gestión y software operativo",
    description:
      "Sistemas de gestión, software operativo y soluciones digitales para PyMEs, instituciones y municipios.",
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
    title: "Viridian Core | Sistemas de gestión y software operativo",
    description:
      "Sistemas de gestión, software operativo y soluciones digitales para empresas e instituciones.",
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef8fb" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0b0c" },
  ],
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
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="viridian-theme"
        >
          {children}
          <FloatingWhatsapp />
          {process.env.NODE_ENV === "production" && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
