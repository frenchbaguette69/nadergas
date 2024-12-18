"use client";
import PdfViewer from "@/components/PdfViewer";
import { toast } from "@/hooks/use-toast";
import Footer from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { SignatureSection } from "@/sections/Sign";
import { TQuote } from "@/types";
import axios from "axios";
import Image from "next/image";
import { redirect, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";

const SIGNATURE_POSITION = {
	x: 120,
	y: 520,
};

const Page = () => {
	return (
		<Suspense>
			<QuoteSignPage />
		</Suspense>
	);
};

const QuoteSignPage = () => {
	const [quote, setQuote] = useState<TQuote>();
	const [signatureData, setSignatureData] = useState("");
	const serachParams = useSearchParams();
	const token = serachParams.get("token");

	const fetchQuote = async () => {
		try {
			const res = await axios.get(`/api/quotes/get-by-token?token=${token}`);
			setQuote(res.data.quote);
		} catch (error: any) {
			toast({
				title: "Something went wrong",
				description: error.response.data.message || "",
				variant: "destructive",
			});
		}
	};

	useEffect(() => {
		if (!token) redirect("/");
		void fetchQuote();
	}, [token]);

	return (
		<div>
			<Header />
			{quote && (
				<main className="bg-gray-50 pt-6 pb-16">
					<div className="container mx-auto px-4">
						<div className="mb-6">
							<h1 className="text-2xl font-semibold text-gray-900">Sign Document</h1>
							<p className="text-gray-600">Please review the document and sign below</p>
						</div>
						<div className="flex gap-6 flex-col items-center lg:flex-row lg:items-start">
							<div className=" rounded-lg shadow-md">
								<div className="relative aspect-[3/4] w-full">
									<PdfViewer url={`/api/quotes/pdf?token=${token}`} />
									{signatureData && (
										<div
											className="absolute pointer-events-none"
											style={{
												top: SIGNATURE_POSITION.y,
												left: SIGNATURE_POSITION.x,
											}}
										>
											<Image
												width={300}
												height={100}
												src={signatureData}
												alt="Signature"
												className="w-full h-full object-contain"
											/>
										</div>
									)}
								</div>
							</div>
							<SignatureSection token={token!} onSignatureChange={setSignatureData} />
						</div>
					</div>
				</main>
			)}
			<Footer />
		</div>
	);
};

export default Page;
