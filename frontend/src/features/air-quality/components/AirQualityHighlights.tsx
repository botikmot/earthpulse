"use client";

import type { AirQuality } from "@/types/air-quality";

import {
    Wind,
    TriangleAlert,
    Activity,
    HeartPulse,
} from "lucide-react";

type Props = {
    airQuality: AirQuality;
};

function getPrimaryPollutant(
    airQuality: AirQuality
) {

    const pollutants = [
        {
            name: "PM2.5",
            value: airQuality.pm25 ?? 0,
        },
        {
            name: "PM10",
            value: airQuality.pm10 ?? 0,
        },
        {
            name: "O₃",
            value: airQuality.o3 ?? 0,
        },
        {
            name: "NO₂",
            value: airQuality.no2 ?? 0,
        },
        {
            name: "SO₂",
            value: airQuality.so2 ?? 0,
        },
        {
            name: "CO",
            value: airQuality.co ?? 0,
        },
    ];

    return pollutants.sort(
        (a, b) =>
            b.value - a.value
    )[0];

}

function getRecommendation(
    category: AirQuality["category"]
) {

    switch (category) {

        case "GOOD":
            return "Air quality is satisfactory.";

        case "MODERATE":
            return "Sensitive individuals should limit prolonged outdoor activities.";

        case "UNHEALTHY_SENSITIVE":
            return "Children and older adults should reduce outdoor exposure.";

        case "UNHEALTHY":
            return "Everyone should limit prolonged outdoor activities.";

        case "VERY_UNHEALTHY":
            return "Avoid outdoor activities if possible.";

        case "HAZARDOUS":
            return "Remain indoors and avoid outdoor exposure.";

    }

}

export function AirQualityHighlights({
    airQuality,
}: Props) {

    const primary =
        getPrimaryPollutant(
            airQuality
        );

    return (

        <div className="rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="font-semibold text-lg mb-4">
                🌫 Air Quality Highlights
            </h3>

            <div className="grid gap-4 md:grid-cols-2">
                <div className="flex gap-3">
                    <TriangleAlert className="h-5 w-5 text-orange-500 mt-1" />
                    <div>
                        <p className="text-sm text-muted-foreground">
                            AQI Category
                        </p>
                        <p className="font-semibold">
                            {airQuality.category.replaceAll(
                                "_",
                                " "
                            )}
                        </p>
                    </div>
                </div>

                <div className="flex gap-3">
                    <Wind className="h-5 w-5 text-sky-500 mt-1" />
                    <div>
                        <p className="text-sm text-muted-foreground">
                            Primary Pollutant
                        </p>
                        <p className="font-semibold">
                            {primary.name}
                        </p>
                    </div>
                </div>

                <div className="flex gap-3">
                    <Activity className="h-5 w-5 text-emerald-500 mt-1" />
                    <div>
                        <p className="text-sm text-muted-foreground">
                            AQI Index
                        </p>
                        <p className="font-semibold">
                            {airQuality.aqi}
                        </p>
                    </div>

                </div>

                <div className="flex gap-3">
                    <HeartPulse className="h-5 w-5 text-red-500 mt-1" />
                    <div>
                        <p className="text-sm text-muted-foreground">
                            Health Recommendation
                        </p>
                        <p className="font-semibold">
                            {
                                getRecommendation(
                                    airQuality.category
                                )
                            }
                        </p>
                    </div>
                </div>
            </div>

        </div>

    );

}