import {
    Mountain,
    CloudSun,
    Flame,
    Wind,
} from "lucide-react";

import { StatCard } from "@/components/common/StatCard";
import { useDashboardStats } from "@/hooks/useDashboardStats";

export function DashboardStats() {

    const {
        earthquakesCount,
        weatherAlerts,
        wildfiresCount,
        airQualityIndex,
    } = useDashboardStats();

    return (

        <section className="mb-8">

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                <StatCard
                    title="Earthquakes"
                    value={earthquakesCount}
                    subtitle="Recorded Events"
                    icon={Mountain}
                    variant="earthquake"
                />

                <StatCard
                    title="Weather Alerts"
                    value={weatherAlerts}
                    subtitle="Active Alerts"
                    icon={CloudSun}
                    variant="weather"
                />

                <StatCard
                    title="Wildfires"
                    value={wildfiresCount}
                    subtitle="Active Fires"
                    icon={Flame}
                    variant="wildfire"
                />

                <StatCard
                    title="Air Quality"
                    value={airQualityIndex}
                    subtitle="Current AQI"
                    icon={Wind}
                    variant="air"
                />

            </div>

        </section>

    );

}