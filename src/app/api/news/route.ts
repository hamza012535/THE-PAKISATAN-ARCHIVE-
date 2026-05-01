import { NextRequest, NextResponse } from "next/server";
import { getPakistanNewsFromRSS } from "@/lib/rss-news";

export async function GET(request: NextRequest) {
  const limit = Math.min(
    parseInt(request.nextUrl.searchParams.get("pageSize") || "12"),
    20,
  );

  try {
    const articles = await getPakistanNewsFromRSS(limit);
    return NextResponse.json({ articles, count: articles.length });
  } catch {
    return NextResponse.json(
      { articles: [], error: "Failed to fetch news" },
      { status: 500 },
    );
  }
}
