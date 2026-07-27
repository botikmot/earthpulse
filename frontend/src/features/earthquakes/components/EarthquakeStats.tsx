import { Mountain, Activity, Globe2, Gauge } from "lucide-react";
import { StatCard } from "@/components/common/StatCard";

export function EarthquakeStats() {
    return (
        <section className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <StatCard
                title="Today's Earthquakes"
                value={127}
                icon={Activity}
                variant="earthquake"
            />

            <StatCard
                title="Strongest"
                value="M7.4"
                icon={Mountain}
                variant="earthquake"
            />

            <StatCard
                title="Average Magnitude"
                value="M3.8"
                icon={Gauge}
                variant="earthquake"
            />

            <StatCard
                title="Affected Countries"
                value={34}
                icon={Globe2}
                variant="earthquake"
            />

        </section>
    );
}