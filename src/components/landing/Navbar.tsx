"use client";

import { useState } from "react";
import { Menu, Heart, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", href: "#top" },
    { name: "Servicios", href: "#servicios" },
    { name: "Ubicación", href: "#ubicacion" },
    { name: "Contacto", href: "#faq" },
  ];

  const whatsappUrl = "https://wa.me/5493512323695?text=Hola%20Animal%20Life,%20necesito%20realizar%20una%20consulta.";

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header id="top" className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-lg text-white">
            <Heart className="w-6 h-6 fill-current" />
          </div>
          <span className="font-headline font-bold text-xl tracking-tight">Animal Life</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-primary transition-colors font-semibold"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="tel:03512323695" 
            className="hidden lg:flex items-center gap-2 text-sm font-bold text-primary"
          >
            <Phone className="w-4 h-4" />
            0351 232-3695
          </a>
          
          <Button asChild className="hidden sm:flex font-bold bg-accent hover:bg-accent/90 shadow-md">
            <a href={whatsappUrl} target="_blank">
              Solicitar Turno
            </a>
          </Button>

          {/* Mobile Menu Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Abrir menú">
                <Menu className="w-7 h-7" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l-primary/20">
              <SheetHeader className="text-left mb-8">
                <SheetTitle className="flex items-center gap-2 text-2xl font-black">
                   <Heart className="w-6 h-6 text-primary fill-current" />
                   Animal Life
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="text-xl font-bold p-2 hover:bg-secondary/50 rounded-lg transition-colors"
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="mt-6 pt-6 border-t border-border space-y-4">
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Atención Directa</p>
                  <a 
                    href="tel:03512323695" 
                    className="flex items-center gap-3 text-primary font-black text-lg p-2"
                  >
                    <Phone className="w-5 h-5" />
                    0351 232-3695
                  </a>
                  <Button asChild className="w-full font-black bg-[#25D366] hover:bg-[#128C7E] h-14 text-lg shadow-xl shadow-green-500/20">
                    <a href={whatsappUrl} target="_blank">
                      <MessageCircle className="mr-2 w-6 h-6" />
                      Chat WhatsApp
                    </a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
