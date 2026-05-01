import { NextRequest, NextResponse } from "next/server";
import {
  searchWikimediaImages,
  getPakistanImages,
} from "@/lib/wikimedia-images";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q");
  const limit = Math.min(
    parseInt(request.nextUrl.searchParams.get("limit") || "8"),
    20,
  );

  try {
    const photos = query
      ? await searchWikimediaImages(query, limit)
      : await getPakistanImages(limit);

    return NextResponse.json({ photos, count: photos.length });
  } catch {
    return NextResponse.json(
      { photos: [], error: "Failed to fetch images" },
      { status: 500 },
    );
  }
}
