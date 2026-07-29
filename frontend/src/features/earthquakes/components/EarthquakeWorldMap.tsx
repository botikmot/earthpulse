"use client";

import { useEarthquakes } from "@/hooks/useEarthquakes";
import { Loading } from "@/components/ui/Loading";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import WorldMapLoader from "@/features/map/components/WorldMapLoader";
import { cn } from "@/lib/utils";
import type { Earthquake } from "@/types/earthquake";
import { useLocationStore } from "@/stores/location.store";
import { useLiveMapStore } from "@/stores/liveMap.store";
import { useWeather } from "@/hooks/useWeather";

type EarthquakeWorldMapProps = {
    className?: string;
    selectedEarthquake?: Earthquake | null;
};

export default function EarthquakeWorldMap({
    className,
    selectedEarthquake
}: EarthquakeWorldMapProps) {

    const location = useLocationStore((state) => state.location)
    
    const layers = useLiveMapStore(
        (state) => state.layers
    );

    const {
        weather,
    } = useWeather({
        latitude: location?.latitude,
        longitude: location?.longitude,
        enabled: !!location,
    });

    const weatherMarker =
            weather && location
                ? {
                    latitude: location.latitude,
                    longitude: location.longitude,
                    city: location.city,
                    temperature: weather.temperature,
                    weatherCode: weather.weatherCode,
                } : undefined;


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
                weather={weatherMarker}
                layers={layers}
            />
        </div>
    );
}