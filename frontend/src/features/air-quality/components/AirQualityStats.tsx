"use client";

import type { AirQuality } from "@/types/air-quality";

import {
    Wind,
    Cloud,
    Waves,
    Factory,
} from "lucide-react";

import { StatCard } from "@/components/common/StatCard";

type Props = {
    airQuality: AirQuality;
};

export function AirQualityStats({
    airQuality,
}: Props) {

    return (

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

            <StatCard
                title="PM2.5"
                value={
                    airQuality.pm25?.toFixed(1) ??
                    "-"
                }
                subtitle="μg/m³"
                icon={Wind}
                variant="air"
            />

            <StatCard
                title="PM10"
                value={
                    airQuality.pm10?.toFixed(1) ??
                    "-"
                }
                subtitle="μg/m³"
                icon={Cloud}
                variant="air"
            />

            <StatCard
                title="Ozone (O₃)"
                value={
                    airQuality.o3?.toFixed(1) ??
                    "-"
                }
                subtitle="μg/m³"
                icon={Waves}
                variant="air"
            />

            <StatCard
                title="Nitrogen Dioxide"
                value={
                    airQuality.no2?.toFixed(1) ??
                    "-"
                }
                subtitle="μg/m³"
                icon={Factory}
                variant="air"
            />

        </div>

    );

}