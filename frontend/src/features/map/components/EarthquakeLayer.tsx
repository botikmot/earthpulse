import type { Earthquake } from "@/types/earthquake";
import { EarthquakeMarker } from "./EarthquakeMarker";

type EarthquakeLayerProps = {
    markers: Earthquake[];
    selectedEarthquake?: Earthquake | null;
};

export function EarthquakeLayer({
    markers,
    selectedEarthquake,
}: EarthquakeLayerProps) {

    return (
        <>
            {markers.map((earthquake) => (
                <EarthquakeMarker
                    key={earthquake.id}
                    earthquake={earthquake}
                    selected={
                        earthquake.id === selectedEarthquake?.id
                    }
                />
            ))}
        </>
    );
}