"use client";

import { useSearchParams } from "next/navigation";

import { PageContainer } from "@/components/layout/PageContainer";
import { PageHeader } from "@/components/layout/PageHeader";

import { FullWorldMap } from "../components/FullWorldMap";
import { LiveMapSummary } from "../components/LiveMapSummary";
import { LiveMapStatus } from "../components/LiveMapStatus";

import { useLocationStore } from "@/stores/location.store";
import { useWeather } from "@/hooks/useWeather";
import { useEarthquakes } from "@/hooks/useEarthquakes";
import { useWildfires } from "@/hooks/useWildfires";
import { useAirQuality } from "@/hooks/useAirQuality";
import { useISS } from "@/hooks/useISS";

export function LiveMapContainer() {

    const searchParams = useSearchParams();
    const selectedEarthquakeId = searchParams.get("earthquake");
    const selectedWildfireId = searchParams.get("wildfire");
    const focusISS = searchParams.get("iss") === "true";

    const location =
        useLocationStore(
            (state) => state.location
        );

    const { weather } =
        useWeather({
            latitude: location?.latitude,
            longitude: location?.longitude,
            enabled: !!location,
        });

    const { earthquakes } = useEarthquakes();

    const { wildfires } = useWildfires();

    const { airQuality } =
        useAirQuality({
            latitude: location?.latitude,
            longitude: location?.longitude,
            city: location?.city,
            country: location?.country,
            enabled: !!location,
        });

    const { iss } = useISS();

    const weatherMarker =
            weather && location
                ? {
                    latitude: location.latitude,
                    longitude: location.longitude,
                    city: location.city,
                    temperature: weather.temperature,
                    weatherCode: weather.weatherCode,
                } : undefined;

    return (

        <PageContainer>

            <PageHeader
                title="Live Earth Monitoring"
                description="Monitor earthquakes, weather, air quality, wildfires, and the International Space Station in real time."
                badge={
                    <div className="flex items-center gap-2 rounded-full bg-green-50 px-3 py-1">
                        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs font-semibold text-green-700">
                            LIVE
                        </span>
                    </div>
                }
            />

            <LiveMapStatus />

            <LiveMapSummary
                earthquakes={earthquakes.length}
                weather={weather?.temperature}
                wildfires={wildfires.length}
                airQuality={airQuality?.aqi}
                issOnline={!!iss}
            />

            <FullWorldMap
                selectedEarthquakeId={selectedEarthquakeId}
                selectedWildfireId={selectedWildfireId}
                focusISS={focusISS}
                earthquakes={earthquakes}
                weather={weatherMarker}
                wildfires={wildfires}
                airQuality={airQuality}
                iss={iss}
            />

        </PageContainer>

    );

}