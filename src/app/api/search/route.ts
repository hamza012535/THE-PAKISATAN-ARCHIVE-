import { NextRequest, NextResponse } from "next/server";
import { duckduckgoSearch } from "@/lib/duckduckgo";
import { searchWikipedia } from "@/lib/wikipedia";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q");

  if (!query || query.trim().length < 2) {
    return NextResponse.json(
      { results: [], error: "Query too short" },
      { status: 400 },
    );
  }

  try {
    // Run Wikipedia search and DuckDuckGo in parallel
    const [wikiResults, ddg] = await Promise.all([
      searchWikipedia(query + " Pakistan"),
      duckduckgoSearch(query + " Pakistan"),
    ]);

    return NextResponse.json({
      wikipedia: wikiResults,
      duckduckgo: ddg,
      count: wikiResults.length,
    });
  } catch {
    return NextResponse.json(
      { results: [], error: "Search failed" },
      { status: 500 },
    );
  }
}
