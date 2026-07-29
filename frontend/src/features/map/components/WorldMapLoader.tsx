"use client";

import dynamic from "next/dynamic";
import { Loading } from "@/components/ui/Loading";
import type { Earthquake } from "@/types/earthquake";

type WorldMapLoaderProps = {
    markers?: Earthquake[];
    className?: string;
    selectedEarthquake?: Earthquake | null;
    layers: {
        earthquake: boolean;
        weather: boolean;
        volcano: boolean;
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
  layers,
  weather,
}: WorldMapLoaderProps) {
  return <WorldMap 
            earthquakes={markers}
            weather={weather}
            className={className} 
            selectedEarthquake={selectedEarthquake} 
            layers={layers}
          />;
}