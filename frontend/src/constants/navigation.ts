import type { NavigationItem } from "@/types/navigation";
import {
    LayoutDashboard,
    Globe,
    Mountain,
    CloudSun,
    Flame,
    Wind,
    Satellite,
    Settings,
} from "lucide-react";

export const navigationItems: NavigationItem[] = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Live Map",
    href: "/dashboard/map",
    icon: Globe,
  },
  {
    name: "Earthquakes",
    href: "/dashboard/earthquakes",
    icon: Mountain,
  },
  {
    name: "Weather",
    href: "/dashboard/weather",
    icon: CloudSun,
  },
  {
    name: "Wildfires",
    href: "/dashboard/wildfires",
    icon: Flame,
  },
  {
    name: "Air Quality",
    href: "/dashboard/air-quality",
    icon: Wind,
  },
  {
    name: "ISS Tracker",
    href: "/dashboard/iss",
    icon: Satellite,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];