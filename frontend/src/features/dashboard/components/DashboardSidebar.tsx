"use client";

import { navigationItems } from "@/constants/navigation";
import { SidebarItem } from "./SidebarItem";

export default function DashboardSidebar() {
    
  return (
      <div className="flex h-full flex-col">

        <nav className="flex-1 px-3 py-6">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Main
          </p>
          <div className="space-y-1">
            {navigationItems.map((item) => (
                <SidebarItem
                    key={item.href}
                    item={item}
                />
            ))}
          </div>
        </nav>

        <div className="sticky bottom-0 border-t bg-background p-4">
          <p className="text-xs text-muted-foreground">
              EarthPulse v1.0.0
          </p>
        </div>

      </div>
  );
}