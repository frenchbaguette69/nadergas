import { NextRequest, NextResponse } from "next/server";
import { PDFDocument, rgb } from "pdf-lib";
import { Resend } from "resend";
import fs from "fs";
import path from "path";
import { jwtParse } from "@/lib/jwt";
import db from "@/server/db";
import { getSignedEmailTemplate } from "@/lib/mailTemplates/signedQuote";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
	try {
		const { token, signature } = await request.json();

		const data = await jwtParse(token!, process.env.JWT_SECRET!);

		const quote = await db.quote.findUnique({
			where: {
				id: data.quoteId as string,
			},
			include: {
				service: true,
			},
		});

		if (!quote) {
			return NextResponse.json({ message: "Quote not found" }, { status: 404 });
		}

		if (quote.signed) {
			return NextResponse.json({ message: "Document is already signed" }, { status: 400 });
		}

		const filePath = path.join(process.cwd(), "quotes", `${quote.id}.pdf`);

		// Check if the file exists
		if (!fs.existsSync(filePath)) {
			return new Response("File not found", { status: 404 });
		}

		// Read and serve the file
		const fileBuffer = fs.readFileSync(filePath);

		// Get the original PDF
		const originalPdfBytes = fileBuffer.toString("base64");

		// Load the PDF document
		const pdfDoc = await PDFDocument.load(originalPdfBytes);
		const pages = pdfDoc.getPages();
		const firstPage = pages[0];

		// Convert base64 signature to image
		const signatureImage = await pdfDoc.embedPng(signature.replace(/^data:image\/png;base64,/, ""));

		// Get page dimensions
		const { width, height } = firstPage.getSize();

		// Add signature to PDF
		// Adjust these coordinates based on your PDF layout
		const signatureWidth = 200;
		const signatureHeight = 50;
		const signatureX = 160; // Adjust based on your PDF
		const signatureY = 240; // Adjust based on your PDF

		firstPage.drawImage(signatureImage, {
			x: signatureX,
			y: signatureY,
			width: signatureWidth,
			height: signatureHeight,
		});

		// Add signature date
		firstPage.drawText(new Date().toLocaleDateString(), {
			x: signatureX,
			y: signatureY - 10,
			size: 12,
			color: rgb(0, 0, 0),
		});

		// Save the modified PDF
		const modifiedPdfBytes = await pdfDoc.save();

		// Upload signed PDF to storage
		fs.writeFileSync(filePath, modifiedPdfBytes);

		// Update quote in database
		await db.quote.update({
			where: { id: quote.id },
			data: {
				signed: true,
			},
		});

		const res = await resend.emails.send({
			from: process.env.FROM_ADDRESS ?? "onboarding@resend.dev",
			to: "arnob001.asa@gmail.com",
			subject: "New Quote Request",
			html: getSignedEmailTemplate({
				name: quote.name,
				quoteId: quote.id,
				service: quote.service.title,
				total: quote.total,
			}),
			attachments: [
				{
					filename: `Quote-${quote.name}-${quote.id}.pdf`,
					content: Buffer.from(modifiedPdfBytes),
				},
			],
		});

		if (res.error) {
			console.error("Error sending email:", res.error);
		}

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error("Signing error:", error);
		return NextResponse.json({ error: "Failed to sign document" }, { status: 500 });
	}
}
