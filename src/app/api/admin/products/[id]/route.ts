import type { Product } from "@prisma/client";
import { type NextRequest, NextResponse } from "next/server";

import db from "@/server/db";

export async function PUT(req: NextRequest, { params }: any) {
	const { id } = await params;

	if (!id || typeof id !== "string")
		return NextResponse.json({ success: false, message: "Invalid product ID" }, { status: 400 });

	const data = (await req.json()) as Product;

	if (!data.title || !data.price)
		return NextResponse.json({ success: false, message: "Please fill all the fields" }, { status: 400 });

	await db.product.update({
		where: { id },
		data,
	});

	return NextResponse.json({ success: true, data });
}

export const DELETE = async (request: NextRequest, { params }: any) => {
	const { id } = await params;

	if (!id || typeof id !== "string")
		return NextResponse.json({ success: false, message: "Invalid product ID" }, { status: 400 });

	const res = await db.product.delete({ where: { id } });

	if (!res) return NextResponse.json({ success: false, message: "Product not found" }, { status: 404 });

	return NextResponse.json({ success: true });
};
