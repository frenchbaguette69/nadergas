import "@/app/globals.css";
import { type Metadata } from "next";
import { SidebarProvider } from "@/components/ui/sidebar";
import { NextAuthProvider } from "@/context/NextAuthProvider";
import { AppSidebar } from "@/components/app-sidebar";
import { Toaster } from "@/components/ui/toaster";
import AdminHeader from "@/sections/AdminHeader";
import Footer from "@/sections/Footer";

export const metadata: Metadata = {
	title: "Admin - Stukadoor en Tegelzetter | NOAH Limburg",
	description:
		"Bent u op zoek naar een tegelzetter of stukadoor in Limburg? Noah Stukadoors biedt diensten voor stukadoorswerk en tegelzetten in Limburg en Brabant.",
};

type Props = {
	children: React.ReactNode;
	session: any;
};

export default function RootLayout({ children, session }: Props) {
	return (
		<html lang="nl">
			<body>
				<NextAuthProvider session={session}>
					<SidebarProvider>
						<AppSidebar />
						<main className="w-full min-h-screen">
							<AdminHeader />
							<div className="lg:px-12 lg:py-8">{children}</div>
							<Toaster />
						</main>
					</SidebarProvider>
				</NextAuthProvider>
			</body>
		</html>
	);
}
