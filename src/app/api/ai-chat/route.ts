import { NextRequest, NextResponse } from "next/server";
import { askLocalAssistant } from "@/lib/local-assistant";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const messages: { role: string; content: string }[] = body.messages || [];

    if (!messages.length) {
      return NextResponse.json(
        { error: "Messages array is required" },
        { status: 400 },
      );
    }

    // Use the last user message
    const lastUserMsg = [...messages].reverse().find((m) => m.role === "user");
    if (!lastUserMsg?.content?.trim()) {
      return NextResponse.json(
        { error: "No user message found" },
        { status: 400 },
      );
    }

    const result = await askLocalAssistant(lastUserMsg.content);
    return NextResponse.json({
      answer: result.answer,
      source: result.source,
      relatedTopics: result.relatedTopics,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 },
    );
  }
}
