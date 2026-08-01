"use client";

import type { AirQuality } from "@/types/air-quality";

import {
    Wind,
    CalendarClock,
    MapPin,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

type Props = {
    airQuality: AirQuality;
};

const CATEGORY_COLORS = {
    GOOD: "bg-green-500",
    MODERATE: "bg-yellow-500",
    UNHEALTHY_SENSITIVE: "bg-orange-400",
    UNHEALTHY: "bg-orange-600",
    VERY_UNHEALTHY: "bg-red-600",
    HAZARDOUS: "bg-purple-700",
};

const CATEGORY_LABELS = {
    GOOD: "Good",
    MODERATE: "Moderate",
    UNHEALTHY_SENSITIVE: "Unhealthy for Sensitive Groups",
    UNHEALTHY: "Unhealthy",
    VERY_UNHEALTHY: "Very Unhealthy",
    HAZARDOUS: "Hazardous",
};

export function AirQualityBanner({
    airQuality,
}: Props) {

    return (

        <div
            className="
                rounded-2xl
                border
                bg-card
                p-6
                shadow-sm
            "
        >

            <div className="flex items-start justify-between">
                <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <Wind className="h-6 w-6 text-sky-500" />
                        <h2 className="text-2xl font-bold">
                            Air Quality
                        </h2>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>
                            {airQuality.city},{" "}
                            {airQuality.country}
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="text-5xl font-bold">
                            {airQuality.aqi}
                        </div>

                        <Badge
                            className={
                                CATEGORY_COLORS[
                                    airQuality.category
                                ]
                            }
                        >
                            {
                                CATEGORY_LABELS[
                                    airQuality.category
                                ]
                            }
                        </Badge>

                    </div>

                </div>

                <div className="text-right space-y-2">
                    <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground">
                        <CalendarClock className="h-4 w-4" />
                        {new Date(
                            airQuality.updatedAt
                        ).toLocaleString()}

                    </div>

                    <div className="text-sm text-muted-foreground">
                        Source
                    </div>

                    <div className="font-medium">
                        {airQuality.source}
                    </div>
                </div>

            </div>
        </div>

    );

}