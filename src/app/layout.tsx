import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "My chat app",
  description: "Chat app built with Next.js and React",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="pt-BR">
        <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Parkinsans&display=swap"
            rel="stylesheet"
          />
        </head>
        <body className="font-parkinsans">{children}</body>
      </html>
    </ClerkProvider>
  );
}
