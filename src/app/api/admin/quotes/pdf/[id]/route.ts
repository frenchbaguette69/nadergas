import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET(req: NextRequest, { params }: any) {
	const { id } = params;

	const filePath = path.join(process.cwd(), "quotes", `${id}.pdf`);

	// Check if the file exists
	if (!fs.existsSync(filePath)) {
		return new Response("File not found", { status: 404 });
	}

	// Read and serve the file
	const fileBuffer = fs.readFileSync(filePath);
	return new NextResponse(fileBuffer, {
		headers: {
			"Content-Type": "application/pdf",
			"Content-Disposition": `inline; filename="${id}.pdf"`,
		},
	});
}
