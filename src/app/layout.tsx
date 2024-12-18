import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Toaster } from "@/components/ui/toaster";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Stukadoor en Tegelzetter | NOAH Limburg",
	description:
		"Bent u op zoek naar een tegelzetter of stukadoor in Limburg? Noah Stukadoors biedt diensten voor stukadoorswerk en tegelzetten in Limburg en Brabant.",
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
				<Toaster />
			</body>
		</html>
	);
}
