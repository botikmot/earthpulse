import type { LucideIcon } from "lucide-react";

type Props = {
    icon: LucideIcon;
    label: string;
    value: string;
};

export function WeatherMetric({
    icon: Icon,
    label,
    value,
}: Props) {

    return (

        <div className="rounded-xl border bg-card p-5 transition-all duration-300 hover:shadow-md">

            <div className="flex items-center gap-3">

                <div className="rounded-lg bg-sky-100 p-2 text-sky-600 dark:bg-sky-950 dark:text-sky-400">

                    <Icon className="h-5 w-5"/>

                </div>

                <div>

                    <p className="text-sm text-muted-foreground">

                        {label}

                    </p>

                    <h3 className="text-xl font-bold">

                        {value}

                    </h3>

                </div>

            </div>

        </div>

    );

}