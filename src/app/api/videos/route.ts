import { NextRequest, NextResponse } from "next/server";
import { getAllTopics, getTopicsByCategory } from "@/lib/curated-videos";

export async function GET(request: NextRequest) {
  const category = request.nextUrl.searchParams.get("category");

  const topics = category ? getTopicsByCategory(category) : getAllTopics();
  return NextResponse.json({ topics, count: topics.length });
}
