import { Calendar, Home, Group, Search, Settings, Hash, Plus } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader,
    SidebarInput,
    SidebarFooter,
    SidebarSeparator,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
    {
        title: "Home",
        url: "#",
        icon: Home,
    },
    {
        title: "Groups",
        url: "#",
        icon: Group,
    },
    {
        title: "Calendar",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]

// Canais de texto fictícios
const textChannels = [
    { name: "general", url: "#general" },
    { name: "random", url: "#random" },
    { name: "help", url: "#help" },
    { name: "music", url: "#music" },
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarHeader>
                    <span className="font-bold text-lg items-center justify-center">Notecord</span>
                </SidebarHeader>
                <SidebarSeparator />
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>
                        TEXT CHANNELS
                        <Plus className="ml-auto size-4 cursor-pointer opacity-60 hover:opacity-100" />
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {textChannels.map((ch) => (
                                <SidebarMenuItem key={ch.name}>
                                    <SidebarMenuButton asChild>
                                        <a href={ch.url}>
                                            <Hash className="opacity-60" />
                                            <span className="truncate">{ch.name}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarFooter>
                    {/* Espaço para usuário ou ações futuras */}
                </SidebarFooter>
            </SidebarContent>
        </Sidebar>
    )
}