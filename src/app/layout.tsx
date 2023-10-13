import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zaiko",
  description: "Zaiko es una aplicación para el control de su negocio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-co">
      <body>{children}</body>
    </html>
  );
}
