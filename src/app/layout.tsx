import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Veterinaria Animal Life | Urgencias en Nuevo Poeta Lugones, Córdoba',
  description: 'Atención veterinaria profesional en Nuevo Poeta Lugones, Córdoba. Urgencias, castraciones, cirugías y peluquería canina. ¡Contactanos por WhatsApp!',
  keywords: 'veterinaria en Nuevo Poeta Lugones, veterinaria en Córdoba, urgencias veterinarias en Córdoba, castraciones Córdoba, cirugías mascotas Córdoba',
  openGraph: {
    title: 'Animal Life - Veterinaria en Nuevo Poeta Lugones',
    description: 'Atención profesional y cercana para tu mascota. Urgencias disponibles.',
    locale: 'es_AR',
    type: 'website',
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        {/* Google Tag Manager - Placeholder */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-XXXXXX');` }} />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
        <Toaster />
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX" height="0" width="0" style="display:none;visibility:hidden"></iframe>` }} />
      </body>
    </html>
  );
}