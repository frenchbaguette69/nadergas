import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import db from "@/server/db";
import { TQuote } from "@/types";
import { getQuoteEmailTemplate } from "@/lib/mailTemplates/quoteMail";

const resend = new Resend(process.env.RESEND_API_KEY);

type FormData = {
	name: string;
	phone: string;
	email: string;
	address: string;
	service: string;
	area: string;
};

export async function POST(request: Request) {
	try {
		const data: FormData = await request.json();
		const { name, phone, email, address, service, area } = data;

		if (!name || !email || !address || !service || !area) {
			return NextResponse.json({ message: "Vul alle velden in om het formulier in te dienen." }, { status: 400 });
		}

		const product = await db.product.findUnique({
			where: {
				id: service,
			},
		});

		if (!product) {
			return NextResponse.json({ message: "Service not found" }, { status: 404 });
		}

		const total = product.price * parseFloat(area);

		const quote = await db.quote.create({
			data: {
				name,
				phone,
				email,
				address,
				productId: product.id,
				area: parseFloat(area),
				total,
			},
			include: {
				service: true,
			},
		});

		const { pdfBytes } = await generateQuotePDF(quote);

		const pdf = Buffer.from(pdfBytes).toString("base64");

		// await sendEmail(quote, pdf);

		return NextResponse.json({ message: "Formulier succesvol ingediend", quote });
	} catch (error) {
		console.error("Fout bij het verwerken van het formulier:", error);

		// Stuur een foutantwoord terug
		return NextResponse.json(
			{
				message: "Er is een fout opgetreden bij het indienen van het formulier.",
			},
			{ status: 500 }
		);
	}
}

const sendEmail = async (quote: TQuote, pdf: string) => {
	const res = await resend.emails.send({
		from: process.env.FROM_ADDRESS ?? "onboarding@resend.dev",
		to: "arnob001.asa@gmail.com",
		subject: "New Quote Request",
		html: getQuoteEmailTemplate(quote),
		attachments: [
			{
				filename: `Quote-${quote.name}-${quote.id}.pdf`,
				content: pdf,
			},
		],
	});

	if (res.error) {
		console.error("Error sending email:", res.error);
		throw new Error("Error sending email");
	}
};

export async function generateQuotePDF(quote: TQuote) {
	// Create a new PDF document
	const pdfDoc = await PDFDocument.create();
	const page = pdfDoc.addPage();
	const { width, height } = page.getSize();

	// Load fonts
	const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
	const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

	// Color Palette
	const COLORS = {
		DARK_GRAY: rgb(0.2, 0.2, 0.2),
		LIGHT_GRAY: rgb(0.7, 0.7, 0.7),
		PRIMARY_BLUE: rgb(0.1, 0.4, 0.7),
		BACKGROUND_LIGHT: rgb(0.98, 0.98, 0.98),
	};

	// Multiline text drawing function
	const drawMultilineText = (
		page: any,
		text: string,
		x: number,
		y: number,
		options: {
			font: any;
			size: number;
			color: any;
			maxWidth: number;
			lineHeight?: number;
		}
	) => {
		const lines = text.split("\n");
		const lineHeight = options.lineHeight || options.size * 1.2;

		lines.forEach((line, index) => {
			page.drawText(line, {
				x,
				y: y - index * lineHeight,
				size: options.size,
				font: options.font,
				color: options.color,
				maxWidth: options.maxWidth,
			});
		});
	};

	// Load logo (replace with your actual logo path)
	let logoImage;
	try {
		const logoPath = path.join(process.cwd(), "src", "assets", "logonoah.png");
		const logoImageBytes = fs.readFileSync(logoPath);
		logoImage = await pdfDoc.embedPng(new Uint8Array(logoImageBytes));
	} catch (error) {
		console.warn("Logo not found, proceeding without logo");
	}

	// Header Section - Aligned Logo and Quote Info
	const headerY = height - 100; // Adjusted to align logo and text

	// Logo on top left
	if (logoImage) {
		const logoDims = logoImage.scale(0.2);
		page.drawImage(logoImage, {
			x: 50,
			y: headerY,
			width: logoDims.width,
			height: logoDims.height,
		});
	}

	// Quote ID and Date on top right
	const formattedDate = new Date(quote.createdAt).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	page.drawText("QUOTATION", {
		x: width - 250,
		y: headerY + 40,
		size: 18,
		font: fontBold,
		color: COLORS.PRIMARY_BLUE,
	});

	page.drawText(`Quote ID: ${quote.id}`, {
		x: width - 250,
		y: headerY + 10,
		size: 10,
		font: fontRegular,
		color: COLORS.DARK_GRAY,
	});

	page.drawText(`Date: ${formattedDate}`, {
		x: width - 250,
		y: headerY - 5,
		size: 10,
		font: fontRegular,
		color: COLORS.DARK_GRAY,
	});

	// Salutation Paragraph
	const salutationText = `Dear ${quote.name},

We are pleased to present you with a detailed quotation for the service you've inquired about. 
After careful assessment of your requirements, we have prepared a comprehensive proposal 
that we believe meets your specific needs.

Please review the following details of our proposed service.`;

	drawMultilineText(page, salutationText, 50, height - 250, {
		font: fontRegular,
		size: 11,
		color: COLORS.DARK_GRAY,
		maxWidth: width - 100,
		lineHeight: 15,
	});

	// Services Table-like Section
	const tableStartY = height - 400;
	const tableHeaders = ["Service", "Area", "Unit Price", "Total"];
	const tableData = [
		[quote.service.title, `${quote.area} sq.m`, `€${quote.service.price.toFixed(2)}`, `€${quote.total.toFixed(2)}`],
	];

	// Table Header
	tableHeaders.forEach((header, index) => {
		page.drawRectangle({
			x: 50 + index * 100,
			y: tableStartY,
			width: 100,
			height: 25,
			color: COLORS.BACKGROUND_LIGHT,
			borderColor: COLORS.LIGHT_GRAY,
			borderWidth: 1,
		});

		page.drawText(header, {
			x: 55 + index * 100,
			y: tableStartY + 8,
			size: 10,
			font: fontBold,
			color: COLORS.DARK_GRAY,
		});
	});

	// Table Data
	tableData.forEach((row, rowIndex) => {
		row.forEach((cell, colIndex) => {
			page.drawRectangle({
				x: 50 + colIndex * 100,
				y: tableStartY - 25 - rowIndex * 25,
				width: 100,
				height: 25,
				borderColor: COLORS.LIGHT_GRAY,
				borderWidth: 0.5,
			});

			page.drawText(cell.toString(), {
				x: 55 + colIndex * 100,
				y: tableStartY - 25 - rowIndex * 25 + 8,
				size: 10,
				font: fontRegular,
				color: COLORS.DARK_GRAY,
			});
		});
	});

	// User Contact Information
	const userContactInfo = `Customer Contact Details:

Name: ${quote.name}
Email: ${quote.email}
Phone: ${quote.phone || "N/A"}
Address: ${quote.address}`;

	// Signature and Contact Section
	drawMultilineText(page, userContactInfo, 50, 250, {
		font: fontRegular,
		size: 9,
		color: COLORS.DARK_GRAY,
		maxWidth: width / 2 - 100,
	});

	// Signature Area
	page.drawText("Customer Signature:", {
		x: 50,
		y: 150,
		size: 10,
		font: fontBold,
		color: COLORS.DARK_GRAY,
	});

	page.drawLine({
		start: { x: 50, y: 130 },
		end: { x: width - 50, y: 130 },
		thickness: 0.5,
		color: COLORS.LIGHT_GRAY,
	});

	// Terms and Conditions
	const termsText = `
Terms and Conditions:
1. This quotation is valid for 30 days from the date of issue.
2. Prices are subject to change without prior notice.
3. A 50% deposit is required to commence work.
4. Final invoice will be based on actual services rendered.
5. Payment terms: Net 30 days from invoice date.`;

	drawMultilineText(page, termsText, 50, 80, {
		font: fontRegular,
		size: 8,
		color: COLORS.LIGHT_GRAY,
		maxWidth: width - 100,
	});

	// Save PDF
	const pdfBytes = await pdfDoc.save();

	// Optional: Save to file or return bytes
	const outputPath = path.join(process.cwd(), "quotes", `${quote.id}.pdf`);
	fs.mkdirSync(path.dirname(outputPath), { recursive: true });
	fs.writeFileSync(outputPath, pdfBytes);

	return {
		pdfBytes,
		filePath: outputPath,
	};
}
