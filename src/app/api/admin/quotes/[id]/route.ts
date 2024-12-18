import { type NextRequest, NextResponse } from "next/server";

import db from "@/server/db";

export const DELETE = async (request: NextRequest, { params }: any) => {
	const { id } = await params;

	if (!id || typeof id !== "string")
		return NextResponse.json({ success: false, message: "Invalid quote ID" }, { status: 400 });

	const res = await db.quote.delete({ where: { id } });

	if (!res) return NextResponse.json({ success: false, message: "Quote not found" }, { status: 404 });

	return NextResponse.json({ success: true });
};
