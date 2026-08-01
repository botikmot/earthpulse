"use client";

import {
    CheckCircle2,
    AlertTriangle,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import type { AirQuality } from "@/types/air-quality";

type Props = {
    airQuality: AirQuality;
};

const WHO_LIMITS = {
    pm25: 15,
    pm10: 45,
    o3: 100,
    no2: 25,
    so2: 40,
    co: 4000,
};

function getStatus(
    value: number | null,
    limit: number
) {

    if (value === null) {
        return {
            label: "Unknown",
            good: false,
        };
    }

    return value <= limit
        ? {
            label: "Within Limit",
            good: true,
        }
        : {
            label: "Above Limit",
            good: false,
        };
}

export function AirQualityAnalysis({
    airQuality,
}: Props) {

    const pollutants = [
        {
            label: "PM2.5",
            value: airQuality.pm25,
            limit: WHO_LIMITS.pm25,
        },
        {
            label: "PM10",
            value: airQuality.pm10,
            limit: WHO_LIMITS.pm10,
        },
        {
            label: "Ozone (O₃)",
            value: airQuality.o3,
            limit: WHO_LIMITS.o3,
        },
        {
            label: "Nitrogen Dioxide",
            value: airQuality.no2,
            limit: WHO_LIMITS.no2,
        },
        {
            label: "Sulfur Dioxide",
            value: airQuality.so2,
            limit: WHO_LIMITS.so2,
        },
        {
            label: "Carbon Monoxide",
            value: airQuality.co,
            limit: WHO_LIMITS.co,
        },
    ];

    return (

        <Card className="p-6">

            <h3 className="font-semibold text-lg mb-6">
                Detailed Air Quality Analysis
            </h3>

            <div className="grid gap-4 md:grid-cols-2">

                {pollutants.map((item) => {

                    const status = getStatus(
                        item.value,
                        item.limit
                    );

                    return (

                        <div
                            key={item.label}
                            className="rounded-lg border p-4"
                        >

                            <div className="flex items-center justify-between">

                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        {item.label}
                                    </p>
                                    <p className="text-2xl font-bold mt-1">
                                        {item.value ?? "-"}
                                    </p>
                                </div>

                                {status.good ? (
                                    <CheckCircle2
                                        className="h-6 w-6 text-emerald-500"
                                    />
                                ) : (
                                    <AlertTriangle
                                        className="h-6 w-6 text-orange-500"
                                    />
                                )}

                            </div>

                            <div className="mt-4 space-y-1 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">
                                        WHO Limit
                                    </span>
                                    <span>
                                        {item.limit}
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">
                                        Status
                                    </span>
                                    <span
                                        className={
                                            status.good
                                                ? "text-emerald-600 font-medium"
                                                : "text-orange-600 font-medium"
                                        }
                                    >
                                        {status.label}
                                    </span>
                                </div>

                            </div>

                        </div>

                    );

                })}

            </div>

        </Card>

    );

}