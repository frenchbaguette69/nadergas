"use client";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import React, { useState } from "react";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import ProductForm from "@/components/ProductForm";

const AddProdcuts = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className="mb-5">
			<div className="flex justify-between items-center">
				<h1 className="text-xl font-semibold">Available Product Rates</h1>
				<Dialog onOpenChange={setOpen} open={open}>
					<DialogTrigger>
						<Button>
							<PlusCircle /> Create New
						</Button>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Create a new product</DialogTitle>
							<ProductForm setOpen={setOpen} />
						</DialogHeader>
					</DialogContent>
				</Dialog>
			</div>
		</div>
	);
};

export default AddProdcuts;
