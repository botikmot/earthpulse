import {
    Mountain,
    CloudSun,
    Flame,
    Wind,
    Satellite,
} from "lucide-react";

import { StatCard } from "@/components/common/StatCard";

type Props = {
    earthquakes: number;
    weather?: number;
    wildfires: number;
    airQuality?: number;
    issOnline: boolean;
};

export function LiveMapSummary({
    earthquakes,
    weather,
    wildfires,
    airQuality,
    issOnline,
}: Props) {

    return (

        <div className="grid gap-4 md:grid-cols-5 mb-6">

            <StatCard
                title="Earthquakes"
                value={earthquakes}
                subtitle="Visible"
                icon={Mountain}
                variant="earthquake"
            />

            <StatCard
                title="Weather"
                value={
                    weather
                        ? `${Math.round(weather)}°`
                        : "--"
                }
                subtitle="Current"
                icon={CloudSun}
                variant="weather"
            />

            <StatCard
                title="Wildfires"
                value={wildfires}
                subtitle="Active"
                icon={Flame}
                variant="wildfire"
            />

            <StatCard
                title="Air Quality"
                value={
                    airQuality ??
                    "--"
                }
                subtitle="AQI"
                icon={Wind}
                variant="air"
            />

            <StatCard
                title="ISS"
                value={
                    issOnline
                        ? "LIVE"
                        : "--"
                }
                subtitle="Tracking"
                icon={Satellite}
                variant="iss"
            />

        </div>

    );
}