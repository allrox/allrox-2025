import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: "AllRox • Tecnologia para Negócios",
  description: "Soluções personalizadas em tecnologia, transformação digital, desenvolvimento de Sites, Landing Pages, Design de UX, UI, Squads Ágeis e Projetos Personalizados.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <meta property="twitter:image" content="./og-image.png"/>
    <meta property="twitter:card" content="./og-image.png"/>
    <meta property="twitter:title" content="AllRox • Tecnologia para Negócios"/>
    <meta property="twitter:description" content="Soluções personalizadas em tecnologia, transformação digital, desenvolvimento de Sites, Landing Pages, Design de UX, UI, Squads Ágeis e Projetos Personalizados."/>
    <meta property="og:image" content="./og-image.png"/>
    <meta property="og:site_name" content="AllRox"/>
    <meta property="og:title" content="Tecnologia para Negócios."/>
    <meta property="og:description" content="Soluções personalizadas em tecnologia, transformação digital, desenvolvimento de Sites, Landing Pages, Design de UX, UI, Squads Ágeis e Projetos Personalizados." />

      <body className="bg-darkBackground pb-14" role="main">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
