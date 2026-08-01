"use client";

import dynamic from "next/dynamic";
import { Loading } from "@/components/ui/Loading";
import type { Earthquake } from "@/types/earthquake";
import type { Wildfire } from "@/types/wildfire";
import type { AirQuality } from "@/types/air-quality";

type WorldMapLoaderProps = {
    markers?: Earthquake[];
    wildfires?: Wildfire[];
    airQuality?: AirQuality | null;
    className?: string;
    selectedEarthquake?: Earthquake | null;
    selectedWildfire?: Wildfire | null;
    layers: {
        earthquake: boolean;
        weather: boolean;
        airQuality: boolean;
        wildfire: boolean;
    };
    weather?: {
        latitude: number;
        longitude: number;
        city: string;
        temperature: number;
        weatherCode: number;
    };
};

const WorldMap = dynamic(
  () => import("./WorldMap"),
  {
    ssr: false,
    loading: () => (
        <Loading text="Loading interactive map..." />
    )
  }
);

export default function WorldMapLoader({
  markers,
  className,
  selectedEarthquake,
  selectedWildfire,
  layers,
  weather,
  airQuality,
  wildfires,
}: WorldMapLoaderProps) {
  return <WorldMap 
            earthquakes={markers}
            wildfires={wildfires}
            weather={weather}
            airQuality={airQuality}
            className={className} 
            selectedEarthquake={selectedEarthquake}
            selectedWildfire={selectedWildfire}
            layers={layers}
          />;
}