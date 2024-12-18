"use client";
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

import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { TQuote } from "@/types";
import axios from "axios";
import { Download, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

type props = {
	quote: TQuote;
};

const QuoteActions = ({ quote }: props) => {
	const router = useRouter();

	const handleDownload = async () => {
		try {
			// Method 1: Using Axios
			const response = await axios.get(`/api/admin/quotes/pdf/${quote.id}`, {
				responseType: "blob", // Important: Set responseType to blob
			});

			// Create a blob from the response data
			const blob = new Blob([response.data], { type: "application/pdf" });

			// Create a URL for the blob
			const url = window.URL.createObjectURL(blob);

			// Create a temporary anchor element
			const link = document.createElement("a");
			link.href = url;
			link.setAttribute("download", `quote-${quote.id}.pdf`);

			// Append link to body, click it, and remove it
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);

			// Clean up the URL object
			window.URL.revokeObjectURL(url);
		} catch (error) {
			console.error("Error downloading PDF:", error);
		}
	};

	const handleDelete = async () => {
		try {
			await axios.delete(`/api/admin/quotes/${quote.id}`);

			router.push("/admin/quotes");
		} catch (error: any) {
			toast({
				title: "An error occurred",
				description: error.response?.data?.message || "Something went wrong",
			});
		}
	};
	return (
		<div className="flex gap-4">
			<Button onClick={handleDownload} className="w-full" size="lg" variant="secondary">
				<Download />
				Download PDF
			</Button>
			<AlertDialog>
				<AlertDialogTrigger className="w-full">
					<Button className="w-full" size="lg" variant="destructive">
						<Trash />
						Delete Quote
					</Button>
				</AlertDialogTrigger>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
						<AlertDialogDescription>
							This action cannot be undone. This will permanently delete the quote and remove all data from your
							servers.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel>Cancel</AlertDialogCancel>
						<AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	);
};

export default QuoteActions;
