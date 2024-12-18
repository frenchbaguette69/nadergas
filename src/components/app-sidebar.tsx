"use client";
import { LogOut, PackageSearch, Quote } from "lucide-react";

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";
import Link from "next/link";

// Menu items.
const items = [
	{
		title: "Quotes",
		url: "/admin/quotes",
		icon: Quote,
	},
	{
		title: "Products",
		url: "/admin/products",
		icon: PackageSearch,
	},
];

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Application</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<Link href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
						<SidebarMenu></SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<Button
							onClick={() => signOut()}
							className="w-full border-destructive hover:bg-destructive text-destructive hover:text-white"
							variant="outline"
						>
							<LogOut /> Sign out
						</Button>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	);
}
