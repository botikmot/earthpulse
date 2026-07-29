import { Card } from "@/components/ui/card";
import { useEarthquakes } from "@/hooks/useEarthquakes";
import WorldMapLoader from "./WorldMapLoader";
import { useWeather } from "@/hooks/useWeather";
import { useLocationStore } from "@/stores/location.store";
import { useLiveMapStore } from "@/stores/liveMap.store";

type Props = {
    selectedEarthquakeId?: string | null;
};

export function FullWorldMap({
    selectedEarthquakeId
}: Props) {

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

    const {
        earthquakes,
    } = useEarthquakes();

    const selectedEarthquake =
        earthquakes.find(

            earthquake =>
                earthquake.id ===
                selectedEarthquakeId

        ) ?? null;

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

        <Card className="overflow-hidden">

            <div className="h-[650px]">

                <WorldMapLoader
                    markers={earthquakes}
                    weather={weatherMarker}
                    selectedEarthquake={selectedEarthquake}
                    className="h-[650px]"
                    layers={layers}
                />

            </div>

        </Card>

    );

}