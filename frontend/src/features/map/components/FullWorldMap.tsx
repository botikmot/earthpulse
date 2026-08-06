import { Card } from "@/components/ui/card";
import WorldMapLoader from "./WorldMapLoader";
import type { Earthquake } from "@/types/earthquake";
import type { Wildfire } from "@/types/wildfire";
import type { AirQuality } from "@/types/air-quality";
import type { ISS } from "@/types/iss";
//import { useLiveMapStore } from "@/stores/liveMap.store";
import { useSettingsStore } from "@/stores/settings.store";
import { MapToolbar } from "./MapToolbar";

type Props = {
    earthquakes: Earthquake[];
    wildfires: Wildfire[];
    airQuality: AirQuality | null;
    weather?: {
        latitude:number;
        longitude:number;
        city:string;
        temperature:number;
        weatherCode:number;
    };
    iss: ISS | null;
    selectedEarthquakeId?: string | null;
    selectedWildfireId?: string | null;
    focusISS?: boolean;
};

export function FullWorldMap({
    earthquakes,
    wildfires,
    weather,
    airQuality,
    iss,
    selectedEarthquakeId,
    selectedWildfireId,
    focusISS,
}: Props) {

    const layers =
        useSettingsStore(
            (state) => state.mapLayers
        );

    const selectedEarthquake =
        earthquakes.find(
            earthquake =>
                earthquake.id ===
                selectedEarthquakeId
        ) ?? null;

    const selectedWildfire =
        wildfires.find(
            wildfire =>
                wildfire.id ===
                selectedWildfireId
        ) ?? null;

    return (

        <Card className="overflow-hidden">

            <div className="relative h-[650px]">

                <MapToolbar />

                <WorldMapLoader
                    markers={earthquakes}
                    weather={weather}
                    wildfires={wildfires}
                    airQuality={airQuality}
                    iss={iss}
                    selectedEarthquake={selectedEarthquake}
                    selectedWildfire={selectedWildfire}
                    focusISS={focusISS}
                    className="h-[650px]"
                    layers={layers}
                />

            </div>

        </Card>

    );

}