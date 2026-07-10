export const founder = {
  name: "Gabriel Agustín Torres",
  role: "Analista de Sistemas · Desarrollador Full Stack · Fundador de Viridian Core",
  description: [
    "Diseño y desarrollo sistemas web orientados a resolver problemas operativos reales. A través de Viridian Core construyo plataformas de gestión, aplicaciones SaaS y herramientas internas utilizadas por negocios en producción.",
    "Trabajo de punta a punta: análisis de requerimientos, arquitectura, diseño de base de datos, frontend, backend, autenticación, despliegue y mejora continua.",
  ],
  image: { src: "/images/gabriel-torres.webp", fallbackSrc: "/placeholder-user.jpg", alt: "Gabriel Agustín Torres, fundador y desarrollador de Viridian Core" },
  stack: [
    { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"] },
    { category: "Backend", items: ["Node.js", "Express", "APIs REST", "Prisma ORM"] },
    { category: "Datos e infraestructura", items: ["PostgreSQL", "Supabase", "Vercel", "Git", "GitHub"] },
    { category: "Capacidades", items: ["SaaS", "PWA", "Autenticación", "RBAC", "Diseño responsive", "Modelado de datos", "Sistemas de gestión", "Automatización de procesos"] },
  ],
  highlights: [
    "Sistemas reales en producción",
    "Experiencia construyendo soluciones para distribuidoras, repartos y negocios",
    "Responsabilidad completa sobre arquitectura, desarrollo y despliegue",
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/gabriel-torres-4b652a284",
    github: "https://github.com/Gabrieltorres28",
    email: "mailto:agustinpiraywa@gmail.com",
    cv: "/CV/Gabriel_Agustin_Torres_CV.pdf",
  },
} as const
