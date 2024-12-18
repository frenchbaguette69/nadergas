import { type Product } from "@prisma/client";
import { type NextRequest, NextResponse } from "next/server";
import db from "@/server/db";

export async function POST(req: NextRequest) {
	const data = (await req.json()) as Product;

	if (!data.title || !data.price)
		return NextResponse.json({ success: false, message: "Please fill all the fields" }, { status: 400 });

	await db.product.create({ data });

	return NextResponse.json({ success: true, data });
}
