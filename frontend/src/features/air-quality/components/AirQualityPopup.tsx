"use client";

import type { AirQuality } from "@/types/air-quality";

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

export function AirQualityPopup({
    airQuality,
}: Props) {

    return (

        <div className="space-y-4 min-w-[260px]">

            <div>

                <h3 className="font-semibold text-lg">
                    {airQuality.city}
                </h3>

                <p className="text-sm text-muted-foreground">
                    {airQuality.country}
                </p>

            </div>

            <div className="flex items-center gap-2">

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
                    <strong className="block">
                        {airQuality.pm25 ?? "-"}
                    </strong>
                </div>

                <div>
                    PM10
                    <strong className="block">
                        {airQuality.pm10 ?? "-"}
                    </strong>
                </div>

                <div>
                    O₃
                    <strong className="block">
                        {airQuality.o3 ?? "-"}
                    </strong>
                </div>

                <div>
                    NO₂
                    <strong className="block">
                        {airQuality.no2 ?? "-"}
                    </strong>
                </div>

                <div>
                    SO₂
                    <strong className="block">
                        {airQuality.so2 ?? "-"}
                    </strong>
                </div>

                <div>
                    CO
                    <strong className="block">
                        {airQuality.co ?? "-"}
                    </strong>
                </div>

            </div>

        </div>

    );

}