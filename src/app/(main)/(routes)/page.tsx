import React from 'react';
import { UserButton } from '@clerk/nextjs';
import { ModeToggle } from '@/components/mode-toggle';
import { Hash, Paperclip } from "lucide-react";

export default function Home() {
  // Canal selecionado fictício
  const selectedChannel = {
    name: "general",
    topic: "Welcome to the general channel!",
  };

  return (
    <div className="flex flex-col h-full w-full">
      {/* Header do canal */}
      <div className="flex items-center gap-2 px-6 h-14 border-b border-border bg-background/80 backdrop-blur sticky top-0 z-10">
        <Hash className="opacity-60" />
        <span className="font-semibold text-lg">{selectedChannel.name}</span>
        <span className="ml-4 text-muted-foreground text-sm">{selectedChannel.topic}</span>
        <div className="ml-auto flex items-center gap-2">
          <ModeToggle />
          <UserButton afterSignOutUrl='/sign-in' />
        </div>
      </div>
      {/* Área do chat */}
      <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 w-full">
        {/* Mensagens fictícias */}
        <div className="flex flex-col gap-2 w-full">
          <div>
            <span className="font-bold text-primary">Alice</span>
            <span className="ml-2 text-muted-foreground text-xs">09:00</span>
            <div>Hello everyone!</div>
          </div>
          <div>
            <span className="font-bold text-primary">Bob</span>
            <span className="ml-2 text-muted-foreground text-xs">09:01</span>
            <div>Hi Alice! Welcome to the channel.</div>
          </div>
        </div>
      </div>
      {/* Input do chat */}
      <div className="border-t border-border p-4 bg-background sticky bottom-0 w-full">
        <div className="flex items-center gap-2">
          {/* Botão de enviar arquivos */}
          <button
            type="button"
            className="p-2 rounded-md hover:bg-muted transition-colors"
            title="Enviar arquivo"
          >
            <Paperclip className="w-5 h-5 opacity-70" />
          </button>
          <input
            type="text"
            placeholder={`Message #${selectedChannel.name}`}
            className="w-full rounded-md bg-muted px-4 py-2 outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>
    </div>
  );
}