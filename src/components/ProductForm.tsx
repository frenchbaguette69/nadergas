"use client";
import axios from "axios";
import { Button } from "@/components/ui/button";
import React from "react";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/hooks/use-toast";
import { Product } from "@prisma/client";
import { useRouter } from "next/navigation";

const formSchema = z.object({
	title: z.string().min(1),
	price: z.number().min(1),
});

type Props = {
	setOpen: (value: boolean) => void;
	product?: Product;
};

const ProductForm = ({ setOpen, product }: Props) => {
	const router = useRouter();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: product
			? {
					title: product.title!,
					price: product.price!,
			  }
			: {},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			if (product) await axios.put(`/api/admin/products/${product.id}`, values);
			else await axios.post("/api/admin/products", values);
			toast({
				title: `Product successfully ${product ? "updated" : "created"} `,
			});
			setOpen(false);
			router.refresh();
		} catch (err) {
			toast({
				title: "Something went wrong. Please try again later",
				variant: "destructive",
			});
			console.log(err);
		}
	}

	return (
		<div className="w-full">
			<div className="w-full">
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-6">
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Title </FormLabel>
									<FormControl>
										<Input placeholder="Spachtelputz (sierpleister)" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<div className="flex flex-col gap-6 lg:flex-row">
							<FormField
								control={form.control}
								name="price"
								render={({ field }) => (
									<FormItem className="w-full">
										<FormLabel>Price (per m²) </FormLabel>
										<FormControl>
											<Input
												{...field}
												type="number"
												placeholder="Estimated cost"
												onChange={(e) => {
													field.onChange(Number(e.target.value));
												}}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className="flex justify-end gap-2">
							<Button onClick={() => setOpen(false)} type="button" variant="outline">
								Cancel
							</Button>
							<Button type="submit">{product ? "Update" : "Create"}</Button>
						</div>
					</form>
				</Form>
			</div>
		</div>
	);
};

export default ProductForm;
