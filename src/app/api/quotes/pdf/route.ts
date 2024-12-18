import fs from "fs";
import path from "path";
import db from "@/server/db";
import { jwtParse } from "@/lib/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	const token = req.nextUrl.searchParams.get("token");

	try {
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
		return new NextResponse(fileBuffer, {
			headers: {
				"Content-Type": "application/pdf",
				"Content-Disposition": `inline; filename="${quote.id}.pdf"`,
			},
		});
	} catch (err) {
		return NextResponse.json({ message: "Invalid token" }, { status: 400 });
	}
}
