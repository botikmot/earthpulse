import { Card } from "@/components/ui/card";
import { createElement } from "react";
import { getWeatherIcon, getWeatherColor } from "@/utils/weatherIcon";
import { useSettingsStore } from "@/stores/settings.store";
import { formatTemperature } from "@/utils/unit";

type Props = {
    day: string;
    max: number;
    min: number;
    condition: string;
    weatherCode: number;
};


export function ForecastCard({
    day,
    max,
    min,
    condition,
    weatherCode,
}: Props) {

    const {
        temperatureUnit,
    } = useSettingsStore();

    const icon = getWeatherIcon(weatherCode);
    const color = getWeatherColor(weatherCode);

    return (
        <Card className="p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

            <p className="text-sm font-semibold">
                {day}
            </p>

            <div className="my-4 flex justify-center">
                {createElement(icon, {
                    className: `
                        h-10
                        w-10
                        ${color}
                        text-sky-600
                        dark:text-sky-400
                    `,
                })}
            </div>

            <div className="space-y-1">

                <p className="text-xl font-bold">
                    {formatTemperature(
                        max,
                        temperatureUnit
                    )}
                </p>

                <p className="text-sm text-muted-foreground">
                    {formatTemperature(
                        min,
                        temperatureUnit
                    )}
                </p>

            </div>

            <p className="mt-3 text-xs text-muted-foreground">
                {condition}
            </p>

        </Card>
    );
}