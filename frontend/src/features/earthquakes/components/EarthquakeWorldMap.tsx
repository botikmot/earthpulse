"use client";

import { useEarthquakes } from "@/hooks/useEarthquakes";
import { Loading } from "@/components/ui/Loading";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import WorldMapLoader from "@/features/map/components/WorldMapLoader";
import { cn } from "@/lib/utils";
import type { Earthquake } from "@/types/earthquake";

type EarthquakeWorldMapProps = {
    className?: string;
    selectedEarthquake?: Earthquake | null;
};

export default function EarthquakeWorldMap({
    className,
    selectedEarthquake
}: EarthquakeWorldMapProps) {
    const {
        earthquakes,
        loading,
        error
    } = useEarthquakes();

    if (loading) {
        return <Loading text="Loading earthquakes data..." />;
    }

    if (error) {
        return (
            <ErrorMessage
                message={error}
            />
        );
    }

    return (
        <div
            className={cn(
                "w-full",
                className
            )}
        >
            <WorldMapLoader
                markers={earthquakes}
                selectedEarthquake={selectedEarthquake}
                className="h-full"
            />
        </div>
    );
}