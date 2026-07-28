import { Card } from "@/components/ui/card";
import { Cloud, CloudRain, CloudSnow, Sun } from "lucide-react";

type Props = {
    day: string;
    max: number;
    min: number;
    condition: string;
};

function getWeatherIcon(condition: string) {
    if (condition.toLowerCase().includes("rain")) {
        return <CloudRain className="h-8 w-8 text-blue-500" />;
    }

    if (condition.toLowerCase().includes("snow")) {
        return <CloudSnow className="h-8 w-8 text-cyan-500" />;
    }

    if (condition.toLowerCase().includes("cloud")) {
        return <Cloud className="h-8 w-8 text-slate-500" />;
    }

    return <Sun className="h-8 w-8 text-yellow-500" />;
}

export function ForecastCard({
    day,
    max,
    min,
    condition,
}: Props) {
    return (
        <Card className="p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

            <p className="text-sm font-semibold">
                {day}
            </p>

            <div className="my-4 flex justify-center">
                {getWeatherIcon(condition)}
            </div>

            <div className="space-y-1">

                <p className="text-xl font-bold">
                    {max.toFixed(0)}°
                </p>

                <p className="text-sm text-muted-foreground">
                    {min.toFixed(0)}°
                </p>

            </div>

            <p className="mt-3 text-xs text-muted-foreground">
                {condition}
            </p>

        </Card>
    );
}