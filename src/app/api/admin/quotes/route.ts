import db from "@/server/db";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(req: NextRequest) {
	const pageQuery = req.nextUrl.searchParams.get("page");
	const statusQuery = req.nextUrl.searchParams.get("status");
	const searchQuery = req.nextUrl.searchParams.get("search");

	const page = pageQuery ? parseInt(pageQuery) : 1;
	const limit = 10;
	const offset = (page - 1) * limit;

	const isSigned = statusQuery === "signed" ? true : statusQuery === "new" ? false : undefined;

	const total = await db.quote.count({
		where: {
			signed: isSigned,
			email: searchQuery ? searchQuery : undefined,
		},
	});

	if (offset > total) {
		return NextResponse.json({ success: false, message: "No more orders" }, { status: 404 });
	}

	const quotes = await db.quote.findMany({
		where: {
			signed: isSigned,
			email: searchQuery ? searchQuery : undefined,
		},
		take: limit,
		skip: offset,
		orderBy: {
			createdAt: "desc",
		},
		include: {
			service: true,
		},
	});

	const totalPages = Math.ceil(total / limit);

	return NextResponse.json({ success: true, quotes, page, totalPages }, { status: 200 });
}
