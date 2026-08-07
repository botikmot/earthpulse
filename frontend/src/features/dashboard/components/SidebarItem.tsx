"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { NavigationItem } from "@/types/navigation";

type SidebarItemProps = {
    item: NavigationItem;
    onNavigate?: () => void;
};

export function SidebarItem({
    item,
    onNavigate,
}: SidebarItemProps) {

    const pathname = usePathname();

    const isActive = pathname === item.href;

    const Icon = item.icon;

    return (

        <Link
            href={item.href}
            onClick={onNavigate}
            className={`
                group flex items-center gap-3 rounded-lg px-3 py-2.5
                text-sm font-medium transition-all duration-200
                ${
                    isActive
                        ? "bg-gradient-to-r from-blue-600/30 via-green-500/30 to-transparent"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }
            `}
        >

            <Icon
                className={`
                    h-5 w-5 shrink-0 transition-colors duration-200
                    ${
                        isActive
                            ? "text-primary"
                            : "text-muted-foreground group-hover:text-foreground"
                    }
                `}
            />

            <span>
                {item.name}
            </span>

        </Link>

    );

}