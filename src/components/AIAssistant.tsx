"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTED_QUESTIONS = [
  "When did Pakistan gain independence?",
  "Who was Muhammad Ali Jinnah?",
  "What is the significance of the Lahore Resolution?",
  "Tell me about Pakistan's nuclear program",
];

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "🇵🇰 Assalamu Alaikum! I'm your Pakistan History AI Assistant. Ask me anything about Pakistan's history, culture, politics, or famous personalities!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text?: string) => {
    const question = (text || input).trim();
    if (!question || loading) return;

    const userMessage: Message = { role: "user", content: question };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: data.answer || "Sorry, I could not process that.",
        },
      ]);
    } catch {
      setMessages([
        ...newMessages,
        { role: "assistant", content: "An error occurred. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-news-accent text-white rounded-full shadow-lg hover:bg-red-700 transition-all hover:scale-110 flex items-center justify-center text-2xl"
        aria-label="Open AI Assistant"
        title="Pakistan History AI Assistant"
      >
        {isOpen ? "✕" : "🤖"}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white border border-news-border shadow-2xl rounded-lg flex flex-col"
          style={{ maxHeight: "70vh" }}
        >
          {/* Header */}
          <div className="bg-news-dark text-white px-4 py-3 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">🤖</span>
              <div>
                <div className="font-bold text-sm">
                  Pakistan History Assistant
                </div>
                <div className="text-xs text-gray-300">
                  Free Local Knowledge Base
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white text-lg"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto p-4 space-y-3"
            style={{ minHeight: "200px" }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg px-3 py-2 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-news-accent text-white"
                      : "bg-gray-100 text-news-dark border border-gray-200"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 border border-gray-200 rounded-lg px-3 py-2">
                  <div className="flex gap-1">
                    <span
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <span
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <span
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <p className="text-xs text-news-gray mb-2 font-semibold">
                Suggested Questions:
              </p>
              <div className="flex flex-wrap gap-1">
                {SUGGESTED_QUESTIONS.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(q)}
                    className="text-xs bg-gray-50 border border-gray-200 rounded px-2 py-1 hover:bg-gray-100 hover:border-news-accent text-news-dark transition"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-3 border-t border-news-border">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && !e.shiftKey && sendMessage()
                }
                placeholder="Ask about Pakistan history..."
                className="flex-1 text-sm border border-news-border rounded px-3 py-2 outline-none focus:border-news-accent"
                disabled={loading}
              />
              <button
                onClick={() => sendMessage()}
                disabled={loading || !input.trim()}
                className="bg-news-accent text-white px-3 py-2 rounded hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition text-sm font-bold"
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
