import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PinGate from "./components/PinGate";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portal Paparan Strategis | Kota Sukabumi",
  description: "Pusat data integratif rencana pembangunan daerah, program unggulan, dan strategi komunikasi pimpinan Kota Sukabumi 2025-2029.",
  keywords: ["Sukabumi", "RPJMD", "Paparan Strategis", "Pemerintah Kota Sukabumi"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.className}>
      <body style={{ fontFamily: inter.style.fontFamily }} suppressHydrationWarning>
        <PinGate>{children}</PinGate>
      </body>
    </html>
  );
}

