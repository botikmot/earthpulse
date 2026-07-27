import type { Earthquake } from "@/types/earthquake"
import { formatEarthquakeTime } from "@/utils/earthquake"
import { BaseCard } from "@/components/ui/BaseCard"
import { EarthquakeDetailRow } from "./EarthquakeDetailRow"
import { EarthquakeHero } from "./EarthquakeHero"

type LatestEarthquakeCardProps = {
    earthquake: Earthquake;
}

export function LatestEarthquakeCard({
    earthquake
}: LatestEarthquakeCardProps) {

    return (
        <BaseCard
            title="Latest Earthquake"
            className="rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
        >
            <EarthquakeHero
                magnitude={earthquake.magnitude}
            />

            <div className="space-y-3">
                <EarthquakeDetailRow
                    label="Location"
                    value={earthquake.location}
                />

                <EarthquakeDetailRow
                    label="Depth"
                    value={`${earthquake.depth.toFixed(1)} km`}
                />

                <EarthquakeDetailRow
                    label="Time"
                    value={formatEarthquakeTime(
                        earthquake.time
                    )}
                />
            </div>
        </BaseCard>
    )

}