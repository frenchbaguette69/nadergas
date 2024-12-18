import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fs from "fs";
import path from "path";
import { TQuote } from "@/types";

// Helper functions
function measureText(text: string, font: any, fontSize: number): number {
	return font.widthOfTextAtSize(text, fontSize);
}

function wrapText(text: string, maxWidth: number, font: any, fontSize: number): string[] {
	const words = text.split(" ");
	const lines: string[] = [];
	let currentLine = "";

	for (let word of words) {
		const testLine = currentLine ? `${currentLine} ${word}` : word;
		const testWidth = measureText(testLine, font, fontSize);

		if (testWidth <= maxWidth) {
			currentLine = testLine;
		} else {
			if (currentLine) lines.push(currentLine);
			currentLine = word;
		}
	}

	if (currentLine) {
		lines.push(currentLine);
	}

	return lines;
}

function calculateCellHeight(
	text: string,
	maxWidth: number,
	font: any,
	fontSize: number,
	padding: number = 10
): number {
	const lines = wrapText(text, maxWidth - padding * 2, font, fontSize);
	const lineHeight = fontSize * 1.5;
	const contentHeight = lines.length * lineHeight;
	return Math.max(25, contentHeight + padding * 2); // minimum 25px height with padding
}

async function generateQuotePDF(quote: TQuote) {
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

	// Table configuration
	const TABLE_CONFIG = {
		startX: 50,
		columnWidths: [250, 80, 100, 70], // Adjusted widths for better content fit
		padding: 10,
		fontSize: 10,
		headerHeight: 30,
		lineHeight: 1.5,
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

	// Load logo
	let logoImage;
	try {
		const logoPath = path.join(process.cwd(), "src", "assets", "logonoah.png");
		const logoImageBytes = fs.readFileSync(logoPath);
		logoImage = await pdfDoc.embedPng(new Uint8Array(logoImageBytes));
	} catch (error) {
		console.warn("Logo not found, proceeding without logo");
	}

	// Header Section
	const headerY = height - 100;

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

	// Quote ID and Date
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

	// Salutation
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

	// Services Table
	const tableStartY = height - 400;
	const tableHeaders = ["Service", "Area", "Unit Price", "Total"];

	// Calculate row height based on service name
	const serviceNameHeight = calculateCellHeight(
		quote.service.title,
		TABLE_CONFIG.columnWidths[0],
		fontRegular,
		TABLE_CONFIG.fontSize,
		TABLE_CONFIG.padding
	);

	// Draw Table Headers
	tableHeaders.forEach((header, index) => {
		const x = TABLE_CONFIG.startX + TABLE_CONFIG.columnWidths.slice(0, index).reduce((a, b) => a + b, 0);

		page.drawRectangle({
			x,
			y: tableStartY,
			width: TABLE_CONFIG.columnWidths[index],
			height: TABLE_CONFIG.headerHeight,
			color: COLORS.BACKGROUND_LIGHT,
			borderColor: COLORS.LIGHT_GRAY,
			borderWidth: 1,
		});

		const textWidth = measureText(header, fontBold, TABLE_CONFIG.fontSize);
		const centerX = x + (TABLE_CONFIG.columnWidths[index] - textWidth) / 2;

		page.drawText(header, {
			x: centerX,
			y: tableStartY + (TABLE_CONFIG.headerHeight - TABLE_CONFIG.fontSize) / 2,
			size: TABLE_CONFIG.fontSize,
			font: fontBold,
			color: COLORS.DARK_GRAY,
		});
	});

	// Table Data
	const tableData = [
		[quote.service.title, `${quote.area} sq.m`, `€${quote.service.price.toFixed(2)}`, `€${quote.total.toFixed(2)}`],
	];

	tableData.forEach((row, rowIndex) => {
		row.forEach((cell, colIndex) => {
			const x = TABLE_CONFIG.startX + TABLE_CONFIG.columnWidths.slice(0, colIndex).reduce((a, b) => a + b, 0);
			const y = tableStartY - serviceNameHeight;

			// Draw cell background
			page.drawRectangle({
				x,
				y,
				width: TABLE_CONFIG.columnWidths[colIndex],
				height: serviceNameHeight,
				borderColor: COLORS.LIGHT_GRAY,
				borderWidth: 0.5,
			});

			if (colIndex === 0) {
				// Service name column with wrapping
				const lines = wrapText(
					cell.toString(),
					TABLE_CONFIG.columnWidths[colIndex] - TABLE_CONFIG.padding * 2,
					fontRegular,
					TABLE_CONFIG.fontSize
				);

				const lineHeight = TABLE_CONFIG.fontSize * TABLE_CONFIG.lineHeight;
				const totalTextHeight = lines.length * lineHeight;
				let startY = y + serviceNameHeight - TABLE_CONFIG.padding - TABLE_CONFIG.fontSize;

				// Center text block vertically if it's shorter than the cell
				if (totalTextHeight < serviceNameHeight - TABLE_CONFIG.padding * 2) {
					startY = y + (serviceNameHeight + totalTextHeight) / 2 - TABLE_CONFIG.fontSize;
				}

				lines.forEach((line, lineIndex) => {
					page.drawText(line, {
						x: x + TABLE_CONFIG.padding,
						y: startY - lineIndex * lineHeight,
						size: TABLE_CONFIG.fontSize,
						font: fontRegular,
						color: COLORS.DARK_GRAY,
					});
				});
			} else {
				// Other columns (center-aligned)
				const textWidth = measureText(cell.toString(), fontRegular, TABLE_CONFIG.fontSize);
				const centerX = x + (TABLE_CONFIG.columnWidths[colIndex] - textWidth) / 2;

				page.drawText(cell.toString(), {
					x: centerX,
					y: y + (serviceNameHeight - TABLE_CONFIG.fontSize) / 2,
					size: TABLE_CONFIG.fontSize,
					font: fontRegular,
					color: COLORS.DARK_GRAY,
				});
			}
		});
	});

	// Calculate new vertical position after table
	const newStartY = tableStartY - serviceNameHeight - 50;

	// User Contact Information
	const userContactInfo = `Customer Contact Details:

Name: ${quote.name}
Email: ${quote.email}
Phone: ${quote.phone || "N/A"}
Address: ${quote.address}`;

	drawMultilineText(page, userContactInfo, 50, newStartY, {
		font: fontRegular,
		size: 9,
		color: COLORS.DARK_GRAY,
		maxWidth: width / 2 - 100,
	});

	// Signature Area
	page.drawText("Customer Signature:", {
		x: 50,
		y: newStartY - 100,
		size: 10,
		font: fontBold,
		color: COLORS.DARK_GRAY,
	});

	page.drawLine({
		start: { x: 50, y: newStartY - 120 },
		end: { x: width - 50, y: newStartY - 120 },
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

	drawMultilineText(page, termsText, 50, newStartY - 170, {
		font: fontRegular,
		size: 8,
		color: COLORS.LIGHT_GRAY,
		maxWidth: width - 100,
	});

	// Save PDF
	const pdfBytes = await pdfDoc.save();

	// Create directory if it doesn't exist
	const outputDir = path.join(process.cwd(), "quotes");
	if (!fs.existsSync(outputDir)) {
		fs.mkdirSync(outputDir, { recursive: true });
	}

	// Save to file
	const outputPath = path.join(outputDir, `${quote.id}.pdf`);
	fs.writeFileSync(outputPath, pdfBytes);

	return {
		pdfBytes,
		filePath: outputPath,
	};
}

export default generateQuotePDF;
