import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";

export const metadata: Metadata = {
  title: "Pakistan Archive - Comprehensive History of Pakistan",
  description:
    "A comprehensive archive of Pakistan history, political events, famous personalities, and cultural heritage. Explore the complete story of Pakistan.",
  keywords:
    "Pakistan history, Pakistani politicians, Pakistan events, Pakistani personalities, history of Pakistan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <AIAssistant />
      </body>
    </html>
  );
}
