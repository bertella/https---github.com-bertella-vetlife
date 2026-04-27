import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
// Importamos el componente oficial para Next.js
import { GoogleTagManager } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: 'Veterinaria Animal Life | Urgencias en Nuevo Poeta Lugones, Córdoba',
  description: 'Atención veterinaria profesional en Nuevo Poeta Lugones, Córdoba. Urgencias, castraciones, cirugías y peluquería canina. ¡Contactanos por WhatsApp!',
  keywords: [
    'veterinaria en Nuevo Poeta Lugones', 
    'veterinaria en Córdoba', 
    'urgencias veterinarias en Córdoba', 
    'castraciones Córdoba', 
    'cirugías mascotas Córdoba'
  ],
  openGraph: {
    title: 'Animal Life - Veterinaria en Nuevo Poeta Lugones',
    description: 'Atención profesional y cercana para tu mascota. Urgencias disponibles.',
    locale: 'es_AR',
    type: 'website',
    url: 'https://animallife.com.ar',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {/* Tu ID de GTM configurado correctamente */}
        <GoogleTagManager gtmId="GTM-T4LLRB99" />

        {children}
        <Toaster />
      </body>
    </html>
  );
}