import {
    Mountain,
    CloudSun,
    Flame,
    Wind,
} from "lucide-react";

import { StatCard } from "@/components/common/StatCard";

export function DashboardStats() {

    return (

        <section className="mb-8">

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                <StatCard
                    title="Earthquakes"
                    value={126}
                    icon={Mountain}
                    variant="earthquake"
                />

                <StatCard
                    title="Weather Alerts"
                    value={8}
                    icon={CloudSun}
                    variant="weather"
                />

                <StatCard
                    title="Wildfires"
                    value={15}
                    icon={Flame}
                    variant="wildfire"
                />

                <StatCard
                    title="Air Quality"
                    value={12}
                    icon={Wind}
                    variant="air"
                />

            </div>

        </section>

    );

}