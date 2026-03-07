import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { TopBar } from "./_components/top-bar";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Electro",
  description: "Worldwide Electronics Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body className={`antialiased bg-white text-[#333d47] overflow-x-hidden`}>
        <TooltipProvider>
          <TopBar />
          <main className="py-6">{children}</main>
        </TooltipProvider>
      </body>
    </html>
  );
}
