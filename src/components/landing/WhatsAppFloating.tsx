"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppFloating() {
  const handleClick = () => {
    // Analytics track would go here
    window.open("https://wa.me/5493512323695?text=Hola%20Animal%20Life,%20necesito%20realizar%20una%20consulta.", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="whatsapp-float group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute right-full mr-3 bg-white text-foreground px-3 py-1.5 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-primary/20">
        ¡Consultanos ahora!
      </span>
    </button>
  );
}