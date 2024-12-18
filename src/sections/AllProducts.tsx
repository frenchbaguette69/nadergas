"use client";
import { Product } from "@prisma/client";
import React, { useState } from "react";

import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import ProductForm from "@/components/ProductForm";
import { PlusCircle } from "lucide-react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

type Props = {
	products: Product[];
};

const AllProducts = ({ products }: Props) => {
	const [open, setOpen] = useState(false);
	const router = useRouter();

	const handleDelete = async (productId: string) => {
		try {
			const res = await axios.delete(`/api/admin/products/${productId}`);

			if (res.data.success) {
				toast({
					title: "Product deleted",
					description: "Product has been deleted successfully",
				});

				router.refresh();
			} else {
				toast({
					title: "Error",
					description: res.data.message || "An error occurred while deleting the product",
				});
			}
		} catch (e: any) {
			console.error(e);
			toast({
				variant: "destructive",
				title: "Something went wrong",
				description: e?.message ?? "Server error",
			});
		}
	};

	return (
		<Table className="border">
			<TableCaption>A list of your products</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">ID</TableHead>
					<TableHead>Title</TableHead>
					<TableHead className="text-right">Price (per m²)</TableHead>
					<TableHead className="text-right">Actions</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{products.map((product) => (
					<TableRow key={product.id}>
						<TableCell>{product.id}</TableCell>
						<TableCell>{product.title}</TableCell>
						<TableCell className="text-right">{"€" + product.price}</TableCell>
						<TableCell className="text-right">
							<Dialog onOpenChange={setOpen} open={open}>
								<DialogTrigger>
									<span className="hover:underline">Edit </span>
								</DialogTrigger>
								<DialogContent>
									<DialogHeader>
										<DialogTitle>Create a new product</DialogTitle>
										<ProductForm setOpen={setOpen} product={product} />
									</DialogHeader>
								</DialogContent>
							</Dialog>{" "}
							/{" "}
							<AlertDialog>
								<AlertDialogTrigger>
									<span className="hover:underline">Delete </span>
								</AlertDialogTrigger>
								<AlertDialogContent>
									<AlertDialogHeader>
										<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
										<AlertDialogDescription>
											This action cannot be undone. This will permanently delete the product and remove all data from
											your servers.
										</AlertDialogDescription>
									</AlertDialogHeader>
									<AlertDialogFooter>
										<AlertDialogCancel>Cancel</AlertDialogCancel>
										<AlertDialogAction onClick={() => handleDelete(product.id)}>Continue</AlertDialogAction>
									</AlertDialogFooter>
								</AlertDialogContent>
							</AlertDialog>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
			<TableFooter>
				<TableRow>
					<TableCell>Total</TableCell>
					<TableCell></TableCell>
					<TableCell></TableCell>
					<TableCell className="text-right"></TableCell>
					<TableCell className="text-right"></TableCell>
					<TableCell className="text-right">{products.length}</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	);
};

export default AllProducts;
