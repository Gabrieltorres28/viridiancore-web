import Image from "next/image"

const WHATSAPP_URL =
  "https://wa.me/543751471708?text=Hola%2C%20quiero%20consultar%20por%20un%20sistema%20de%20gesti%C3%B3n%20o%20software%20operativo%20para%20mi%20negocio."

export function FloatingWhatsapp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir chat de WhatsApp"
      className="group fixed bottom-5 right-5 z-50 inline-flex h-16 w-16 items-center justify-center transition-transform duration-300 hover:-translate-y-0.5 hover:scale-105 md:bottom-7 md:right-7 md:h-20 md:w-20"
    >
      <span
        className="absolute inset-1 rounded-full bg-viridian/20 opacity-45 blur-xl transition-opacity duration-300 group-hover:opacity-70"
        aria-hidden="true"
      />
      <Image
        src="/images/whatsaap-logo-crop.png"
        alt=""
        width={394}
        height={363}
        sizes="80px"
        className="relative h-14 w-14 object-contain drop-shadow-[0_14px_24px_rgba(0,0,0,0.55)] md:h-[72px] md:w-[72px]"
      />
    </a>
  )
}
