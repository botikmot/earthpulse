import type { Earthquake } from "@/types/earthquake";

import {
    Activity,
    TriangleAlert,
    MapPin,
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

    const average =
        total === 0
            ? 0
            : earthquakes.reduce(
                  (sum, earthquake) =>
                      sum + earthquake.magnitude,
                  0
              ) / total;

    const strongest =
        earthquakes.length > 0
            ? earthquakes.reduce(
                  (previous, current) =>
                      current.magnitude > previous.magnitude
                          ? current
                          : previous
              )
            : null;

    const shallowest =
        earthquakes.length > 0
            ? earthquakes.reduce(
                  (previous, current) =>
                      current.depth < previous.depth
                          ? current
                          : previous
              )
            : null;

    return (

        <div className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <StatCard
                title="Total Events"
                value={total}
                subtitle="Last 24 Hours"
                icon={Activity}
                variant="earthquake"
            />

            <StatCard
                title="Strongest Event"
                value={
                    strongest
                        ? `M${strongest.magnitude.toFixed(1)}`
                        : "--"
                }
                subtitle={
                    strongest ? (
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <MapPin className="h-3.5 w-3.5" />
                            {strongest.location}
                        </span>
                    ) : (
                        "No data"
                    )
                }
                icon={TriangleAlert}
                variant="earthquake"
            />

            <StatCard
                title="Shallowest"
                value={
                    shallowest
                        ? `${Math.round(shallowest.depth)} km`
                        : "--"
                }
                subtitle={
                    shallowest ? (
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <MapPin className="h-3.5 w-3.5" />
                            {shallowest.location}
                        </span>
                    ) : (
                        "No data"
                    )
                }
                icon={MapPin}
                variant="earthquake"
            />

            <StatCard
                title="Average Magnitude"
                value={`M${average.toFixed(1)}`}
                subtitle="Across all events"
                icon={Gauge}
                variant="earthquake"
            />

        </div>

    );

}