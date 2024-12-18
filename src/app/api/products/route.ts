import { NextResponse } from "next/server";
import db from "@/server/db";

export const dynamic = "force-dynamic";

export async function GET() {
	const products = await db.product.findMany();

	return NextResponse.json({ products });
}
