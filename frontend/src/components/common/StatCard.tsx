import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

type StatCardProps = {
    title: string;
    value: ReactNode;
    subtitle?: string;
    trend?: ReactNode;
    icon: LucideIcon;
    variant:
        | "dashboard"
        | "weather"
        | "earthquake"
        | "wildfire"
        | "air"
        | "iss";
};

const variants = {
    dashboard: {
        icon: "bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400",
    },
    weather: {
        icon: "bg-sky-100 text-sky-600 dark:bg-sky-950 dark:text-sky-400",
    },
    earthquake: {
        icon: "bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400",
    },
    wildfire: {
        icon: "bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400",
    },
    air: {
        icon: "bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400",
    },
    iss: {
        icon: "bg-violet-100 text-violet-600 dark:bg-violet-950 dark:text-violet-400",
    },
};

export function StatCard({
    title,
    value,
    subtitle,
    trend,
    icon: Icon,
    variant,
}: StatCardProps) {

    const currentVariant = variants[variant];

    return (
        <div className="rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

            <div className="flex items-center justify-between">

                <div>

                    <p className="text-sm text-muted-foreground">
                        {title}
                    </p>

                    <div className="mt-2 text-3xl font-bold tracking-tight">
                        {value}
                    </div>

                    {subtitle && (

                        <p className="mt-1 text-xs text-muted-foreground">
                            {subtitle}
                        </p>

                    )}

                    {trend && (

                        <div className="mt-2">
                            {trend}
                        </div>

                    )}

                </div>

                <div
                    className={`rounded-xl p-3 ${currentVariant.icon}`}
                >
                    <Icon className="h-6 w-6" />
                </div>

            </div>

        </div>
    );

}