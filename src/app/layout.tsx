import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Noah Stukadoor en Tegelzetter Limburg",
  description: "Bent u op zoek naar een tegelzetter of stukadoor in Limburg? Noah Stukadoors biedt hoogwaardige diensten voor zowel stukadoorswerk als tegelzetten in Limburg en Brabant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="relative">
      <body className={twMerge(dmSans.className, "antialiased")}>
        {children}
      </body>
    </html>
  );
}
