import { NextRequest, NextResponse } from "next/server";
import db from "@/server/db";
import { jwtParse } from "@/lib/jwt";

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

		return NextResponse.json({ success: true, quote });
	} catch (err) {
		return NextResponse.json({ message: "Invalid token" }, { status: 400 });
	}
}
