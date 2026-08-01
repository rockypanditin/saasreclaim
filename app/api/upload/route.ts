import { NextResponse } from "next/server";
import { uploadToR2 } from "@/lib/cloudflare";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const fileName = `invoices/${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;

    const publicUrl = await uploadToR2(buffer, fileName);

    return NextResponse.json({
      success: true,
      url: publicUrl,
      fileName: file.name,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "File upload failed" },
      { status: 500 }
    );
  }
}
