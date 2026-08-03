"use client";

import { Badge } from "@/components/ui/badge";
import type { AirQuality } from "@/types/air-quality";
import { getWeatherIcon } from "@/utils/weatherIcon";
import { createElement } from "react";

type Props = {
    city: string;
    temperature: number;
    weatherCode: number;
    airQuality?: AirQuality | null;
};

const CATEGORY_COLORS = {
    GOOD: "bg-green-500",
    MODERATE: "bg-yellow-500",
    UNHEALTHY_SENSITIVE: "bg-orange-500",
    UNHEALTHY: "bg-red-500",
    VERY_UNHEALTHY: "bg-purple-500",
    HAZARDOUS: "bg-rose-900",
};

export function LocationPopup({
    city,
    temperature,
    weatherCode,
    airQuality,
}: Props) {


    const icon = getWeatherIcon(weatherCode);

    return (

        <div className="w-[280px] space-y-4">

            <div>
                <h3 className="font-semibold text-base">
                    {city}
                </h3>

                <p className="text-xs text-muted-foreground">
                    Current Location
                </p>
            </div>

            <div className="border-t pt-3">
                <div className="text-xs uppercase text-muted-foreground font-semibold mb-2">
                    Weather
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold">
                        {Math.round(temperature)}°
                    </span>

                    <div
                        className="
                            rounded-full
                            bg-sky-100
                            p-2
                            dark:bg-sky-950
                        "
                    >
                        {createElement(icon, {
                            className: `
                                h-8
                                w-8
                                text-sky-600
                                dark:text-sky-400
                            `,
                        })}
                    </div>
                </div>

            </div>

            {airQuality && (

                <div className="border-t pt-3 space-y-2">

                    <div className="text-xs uppercase text-muted-foreground font-semibold">
                        Air Quality
                    </div>

                    <div className="flex items-center justify-between">

                        <span className="text-3xl font-bold">
                            {airQuality.aqi}
                        </span>

                        <Badge
                            className={
                                CATEGORY_COLORS[
                                    airQuality.category
                                ]
                            }
                        >

                            {airQuality.category.replaceAll(
                                "_",
                                " "
                            )}

                        </Badge>

                    </div>

                    <div className="grid grid-cols-2 gap-2 text-sm">

                        <div>
                            PM2.5
                            <div className="font-semibold">
                                {airQuality.pm25 ?? "-"}
                            </div>

                        </div>

                        <div>
                            PM10
                            <div className="font-semibold">
                                {airQuality.pm10 ?? "-"}
                            </div>
                        </div>

                    </div>

                </div>

            )}

        </div>

    );

}