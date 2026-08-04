import { ReactNode } from "react";

type MetricHeroProps = {
    icon?: ReactNode;
    label: string;
    value: string;
    badge?: ReactNode;
    subtitle?: string;
    description?: string;
};

export function MetricHero({
    icon,
    label,
    value,
    badge,
    subtitle,
    description,
}: MetricHeroProps) {
    

    return (

        <div className="text-center">
            {icon && (
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-sky-100 to-cyan-100 shadow-sm">
                    <div className="text-5xl">
                        {icon}
                    </div>
                </div>
            )}

            <p className="text-base font-medium text-muted-foreground">
                {label}
            </p>

            <h2 className="mt-4 text-7xl font-bold tracking-tight">
                {value}
            </h2>

            {badge && (
                <div className="mt-4 flex justify-center">
                    {badge}
                </div>
            )}

            {subtitle && (
                <h3 className="mt-8 text-2xl font-semibold leading-snug">
                    {subtitle}
                </h3>
            )}

            {description && (
                <p className="mt-2 text-sm text-muted-foreground">
                    {description}
                </p>
            )}

        </div>

    );

}