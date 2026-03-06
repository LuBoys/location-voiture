import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans-pro",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Veloria Location | Location de voitures en France",
  description:
    "Veloria Location propose des véhicules premium, SUV et utilitaires partout en France avec une réservation rapide et transparente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${playfairDisplay.variable} ${plusJakartaSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
