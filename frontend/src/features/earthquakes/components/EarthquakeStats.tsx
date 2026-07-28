import type { Earthquake } from "@/types/earthquake";
import {
    Activity,
    TriangleAlert,
    Waves,
    Gauge,
} from "lucide-react";

import { StatCard } from "@/components/common/StatCard";

type Props = {
    earthquakes: Earthquake[];
};

export function EarthquakeStats({
    earthquakes,
}: Props) {

    const total = earthquakes.length;

    const strong =
        earthquakes.filter(
            (e) => e.magnitude >= 6
        ).length;

    const moderate =
        earthquakes.filter(
            (e) => e.magnitude >= 5
        ).length;

    const average =
        total === 0
            ? 0
            : earthquakes.reduce(
                (sum, e) => sum + e.magnitude,
                0
            ) / total;

    return (

        <div className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

             <StatCard
                title="Total Earthquakes"
                value={total}
                icon={Activity}
                variant="earthquake"
            />

            <StatCard
                title="Strong (M6+)"
                value={strong}
                icon={TriangleAlert}
                variant="earthquake"
            />

            <StatCard
                title="Moderate (M5+)"
                value={moderate}
                icon={Waves}
                variant="earthquake"
            />

            <StatCard
                title="Average Magnitude"
                value={`M${average.toFixed(1)}`}
                icon={Gauge}
                variant="earthquake"
            />

        </div>

    );
}