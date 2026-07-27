"use client";

import { useEarthquakes } from "@/hooks/useEarthquakes";
import { Loading } from "@/components/ui/Loading";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import WorldMapLoader from "@/features/map/components/WorldMapLoader";
import { cn } from "@/lib/utils";

type EarthquakeWorldMapProps = {
    className?: string;
};

export default function EarthquakeWorldMap({
    className,
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
                className="h-full"
            />
        </div>
    );
}