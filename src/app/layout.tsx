import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ChatSidebar } from "@/components/ui/chat-sidebar";

export const metadata: Metadata = {
  title: "Notecord",
  description: "Chat notes app built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Parkinsans&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-parkinsans">
        <ClerkProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey="discord-theme"
          >
            <SidebarProvider>
              <ChatSidebar>{children}</ChatSidebar>
            </SidebarProvider>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}