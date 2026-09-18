import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollDepth from "@/components/ScrollDepth";
import ScrollReveal from "@/components/ScrollReveal";

const montserrat = localFont({
  src: "../public/fonts/Montserrat-Variable.ttf",
  weight: "100 900",
  variable: "--font-montserrat",
  display: "swap",
});

const inter = localFont({
  src: "../public/fonts/Inter-Variable.ttf",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Optry — Software y automatización con IA para tu negocio",
  description:
    "Optry reemplaza el caos operativo de tu negocio (hojas de cálculo, WhatsApp, memoria) con software a medida y automatización con IA, sin la fricción de una agencia grande. León, Guanajuato.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} ${inter.variable}`}>
        <ScrollDepth />
        <ScrollReveal />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
