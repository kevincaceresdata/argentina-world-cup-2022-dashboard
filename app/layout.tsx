import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Julián Álvarez — 2022 World Cup profile",
  description:
    "Player profile dashboard built on StatsBomb open data (event data + 360 freeze frames).",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
