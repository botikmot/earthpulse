import type { ReactNode } from "react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type DashboardStatCardProps = {
    title: string;
    value: string | number;
    icon: ReactNode;
    description: string;

    iconBackgroundClassName: string;
};

export function DashboardStatCard({
    title,
    value,
    icon,
    description,
    iconBackgroundClassName,
}: DashboardStatCardProps) {

    return (

        <Card className="rounded-2xl p-6 shadow-sm transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

            <div className="flex items-center justify-between">

                <div>

                    <p className="text-sm text-muted-foreground">
                        {title}
                    </p>

                    <h2 className="mt-2 text-4xl font-bold tracking-tight">
                        {value}
                    </h2>

                    <p className="mt-2 text-sm text-muted-foreground">
                        {description}
                    </p>

                </div>

                <div
                    className={cn(
                        "rounded-xl p-4",
                        iconBackgroundClassName
                    )}
                >
                    {icon}
                </div>

            </div>

        </Card>

    );

}