"use client"; // Zorgt ervoor dat dit component client-side wordt gerenderd

import React from "react";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logonoah.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { signOut } from "next-auth/react";

export const AdminHeader = () => {
	return (
		<header className="sticky top-0 backdrop-blur-sm z-20">
			<div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
				<p className="text-white/60 hidden md:block">Op zoek naar stukadoor, of tegelzetter?</p>
				<div className="inline-flex gap-1 items-center">
					<p>neem contact op: +31 6 45036627</p>
					<ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
				</div>
			</div>
			<div className="">
				<div className="container mx-auto px-4">
					<div className="flex items-center justify-between py-4">
						<Link href="/">
							{/* Link naar de homepage */}
							<Image src={Logo} alt="Noah Stukadoors Logo" height={120} width={240} />
						</Link>

						{/* Mobiel menu voor kleine schermen */}
						<Sheet>
							<SheetTrigger asChild>
								<MenuIcon className="h-6 w-6 md:hidden cursor-pointer" />
							</SheetTrigger>
							<SheetContent side="left" className="p-4">
								<nav className="flex flex-col gap-4">
									<button
										onClick={() => signOut()}
										className="bg-destructive text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight"
									>
										Log out
									</button>
								</nav>
							</SheetContent>
						</Sheet>

						{/* Desktop menu voor grotere schermen */}
						<nav className="hidden md:flex gap-6 text-black items-center">
							<button
								onClick={() => signOut()}
								className="bg-destructive text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight"
							>
								Log out
							</button>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};
