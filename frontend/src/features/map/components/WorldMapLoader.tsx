"use client";

import dynamic from "next/dynamic";
import { Loading } from "@/components/ui/Loading";
import type { Earthquake } from "@/types/earthquake";
import type { Wildfire } from "@/types/wildfire";
import type { AirQuality } from "@/types/air-quality";
import type { ISS } from "@/types/iss";

type WorldMapLoaderProps = {
    markers?: Earthquake[];
    wildfires?: Wildfire[];
    airQuality?: AirQuality | null;
    iss?: ISS | null;
    focusISS?: boolean;
    className?: string;
    selectedEarthquake?: Earthquake | null;
    selectedWildfire?: Wildfire | null;
    layers: {
        earthquake: boolean;
        weather: boolean;
        airQuality: boolean;
        wildfire: boolean;
        iss: boolean;
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
  iss,
  focusISS,
}: WorldMapLoaderProps) {
  return <WorldMap 
            earthquakes={markers}
            wildfires={wildfires}
            weather={weather}
            airQuality={airQuality}
            iss={iss}
            focusISS={focusISS}
            className={className} 
            selectedEarthquake={selectedEarthquake}
            selectedWildfire={selectedWildfire}
            layers={layers}
          />;
}