import { Card } from "@/components/ui/card";
import { useEarthquakes } from "@/hooks/useEarthquakes";
import WorldMapLoader from "./WorldMapLoader";
import { useWeather } from "@/hooks/useWeather";
import { useLocationStore } from "@/stores/location.store";
import { useLiveMapStore } from "@/stores/liveMap.store";
import { useWildfires } from "@/hooks/useWildfires";
import { useAirQuality } from "@/hooks/useAirQuality";
import { useISS } from "@/hooks/useISS";

type Props = {
    selectedEarthquakeId?: string | null;
    selectedWildfireId?: string | null;
    focusISS?: boolean;
};

export function FullWorldMap({
    selectedEarthquakeId,
    selectedWildfireId,
    focusISS,
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
        airQuality,
    } = useAirQuality({
        latitude: location?.latitude,
        longitude: location?.longitude,
        city: location?.city,
        country: location?.country,
        enabled: !!location,
    });

    const {
        earthquakes,
    } = useEarthquakes();

    const {
        wildfires,
    } = useWildfires();

    const {
        iss,
    } = useISS();

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