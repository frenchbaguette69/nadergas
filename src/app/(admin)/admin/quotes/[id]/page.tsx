import React from "react";
import db from "@/server/db";
import moment from "moment";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, CircleUserRound, Download, Trash } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PdfViewer from "@/components/PdfViewer";
import { MapPin, Phone, Mail } from "lucide-react";
import QuoteActions from "./actions";

type TParamsProps = {
	params: Promise<{ id: string }>;
};

const QuotePage = async ({ params }: TParamsProps) => {
	const { id } = await params;

	const quote = await db.quote.findUnique({
		where: { id: id },
		include: {
			service: true,
		},
	});

	if (!quote) {
		return <div>Quote not found</div>;
	}
	return (
		<div>
			<div className="mb-6 flex justify-between">
				<div className="flex items-end gap-4">
					<h4 className="p-0 text-2xl font-semibold">QT #{quote.id}</h4>
					<p className="text-sm text-gray-400">{moment(quote.createdAt).format("ddd, DD MMM YYYY hh:mm A")}</p>
					<Badge variant={quote.signed ? "default" : "destructive"}>{quote.signed ? "Signed" : "New"}</Badge>
				</div>
				<Link href="/admin/quotes">
					<Button variant="secondary">
						<ArrowLeft /> Back to Quotes
					</Button>
				</Link>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<Card>
					<PdfViewer url={`/api/admin/quotes/pdf/${quote.id}`} />
				</Card>
				{/* Quote Summary Card */}
				<div className="flex flex-col gap-6">
					<Card className="md:col-span-1">
						<CardContent className="mt-4">
							<div className="grid gap-4">
								{/* Customer Information */}
								<div>
									<h3 className="text-lg font-semibold mb-3 border-b pb-2">Service Information</h3>
									<div className="space-y-2">
										<div className="flex justify-between">
											<span className="text-muted-foreground">Service</span>
											<span className="font-medium">{quote.service.title}</span>
										</div>
										<div className="flex justify-between">
											<span className="text-muted-foreground">Area</span>
											<span className="font-medium">{quote.area} sq ft</span>
										</div>
										<div className="flex justify-between">
											<span className="text-muted-foreground">Unit Price</span>
											<span className="font-medium">${quote.service.price.toFixed(2)}</span>
										</div>
										<div className="flex justify-between">
											<span className="text-muted-foreground">Total Price</span>
											<span className="font-bold text-lg">${quote.total.toFixed(2)}</span>
										</div>
									</div>
								</div>

								{/* Service Details */}
							</div>
						</CardContent>
					</Card>
					<Card className="md:col-span-1">
						<CardContent className="mt-4">
							<div className="grid gap-4">
								{/* Customer Information */}
								<div>
									<h3 className="text-lg font-semibold mb-3 border-b pb-2">Customer Information</h3>
									<div className="space-y-2">
										<div className="flex items-center gap-3">
											<CircleUserRound className="h-5 w-5 text-muted-foreground" />
											<span>{quote.name || "N/A"}</span>
										</div>
										<div className="flex items-center gap-3">
											<Phone className="h-5 w-5 text-muted-foreground" />
											<span>{quote.phone || "N/A"}</span>
										</div>
										<div className="flex items-center gap-3">
											<Mail className="h-5 w-5 text-muted-foreground" />
											<a href={`mailto:${quote.email}`}>{quote.email}</a>
										</div>
										<div className="flex items-start gap-3">
											<MapPin className="h-5 w-5 text-muted-foreground mt-1" />
											<span>{quote.address}</span>
										</div>
									</div>
								</div>

								{/* Service Details */}
							</div>
						</CardContent>
					</Card>
					<QuoteActions quote={quote} />
				</div>
			</div>
		</div>
	);
};

export default QuotePage;
