import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from '@next/third-parties/google';

// 1. Definición de Metadatos (SEO optimizado para Córdoba)
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
    url: 'https://animallife.com.ar', // Cambialo por tu URL real
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
        {/* Optimizamos la carga de fuentes */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
        
        {/* Componentes Globales de UI */}
        <Toaster />

        {/* Google Analytics 4 
          Sustituye 'G-XXXXXXXXXX' por tu ID real. 
          Este componente reemplaza la necesidad de scripts manuales de GTM 
          si solo vas a usar Analytics.
        */}
        <GoogleAnalytics gaId="G-DZ9FW6PVHK" />
      </body>
    </html>
  );
}