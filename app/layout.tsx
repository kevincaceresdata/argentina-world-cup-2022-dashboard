import type { Metadata } from "next";
import { Anton, Archivo } from "next/font/google";
import "./globals.css";

const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const archivo = Archivo({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Julián Álvarez — 2022 World Cup profile",
  description:
    "Player profile built on StatsBomb open data: event data plus 360 freeze frames.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${archivo.variable}`}>{children}</body>
    </html>
  );
}
