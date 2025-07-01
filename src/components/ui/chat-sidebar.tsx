import React from "react";
import { AppSidebar } from "@/components/ui/app-sidebar";

interface ChatSidebarProps {
  children: React.ReactNode;
}

export const ChatSidebar: React.FC<ChatSidebarProps> = ({ children }) => {
  return (
    <div className="flex h-screen w-screen">
      <AppSidebar />
      <main className="flex-1 flex flex-col bg-background w-full min-w-0">
        {children}
      </main>
    </div>
  );
};
