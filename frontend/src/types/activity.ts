import type { LucideIcon } from "lucide-react";
export interface Activity {
    id: string;
    title: string;
    description: string;
    time: string;
    color:
        | "orange"
        | "blue"
        | "red"
        | "green";
    icon?: LucideIcon;
}