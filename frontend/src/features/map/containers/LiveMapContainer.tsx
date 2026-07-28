"use client";

import { useState } from "react";
import WorldMap from "../components/WorldMap";
import { LayerSwitcher } from "../components/LayerSwitcher";
import { useEarthquakes } from "@/hooks/useEarthquakes";
import { useMapWeather } from "@/hooks/useMapWeather";
import type { Earthquake } from "@/types/earthquake";

export function LiveMapContainer() {
    const [layer, setLayer] = useState<"earthquake" | "weather">("earthquake");
    const [selectedEarthquake, setSelectedEarthquake] = useState<Earthquake | null>(null);
    const earthquakes = useEarthquakes();
    const weather = useMapWeather();

    return (

        <div className="space-y-6">

            <LayerSwitcher
                value={layer}
                onValueChange={(value)=>
                    setLayer(value as "earthquake" | "weather")
                }
            />

            <WorldMap
                layer={layer}
                markers={earthquakes.earthquakes}
                selectedEarthquake={selectedEarthquake}
                onEarthquakeSelect={setSelectedEarthquake}
                onMapClick={weather.loadWeather}
            />

        </div>

    );

}