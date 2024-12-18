import { NextResponse } from "next/server";
import { Resend } from "resend";
import db from "@/server/db";
import { TQuote } from "@/types";
import { getQuoteEmailTemplate } from "@/lib/mailTemplates/quoteMail";
import { jwtSign } from "@/lib/jwt";
import generateQuotePDF from "@/lib/generateQuotePDF";

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
		const token = await jwtSign({ quoteId: quote.id, email: quote.email }, process.env.JWT_SECRET ?? "");
		const signingLink = `${process.env.SITE_URL}/quotes/sign?token=${token}`;

		await sendEmail(quote, pdf, signingLink);

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

const sendEmail = async (quote: TQuote, pdf: string, signingLink = "#") => {
	const res = await resend.emails.send({
		from: process.env.FROM_ADDRESS ?? "onboarding@resend.dev",
		to: "arnob001.asa@gmail.com",
		subject: "New Quote Request",
		html: getQuoteEmailTemplate(quote, signingLink),
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
