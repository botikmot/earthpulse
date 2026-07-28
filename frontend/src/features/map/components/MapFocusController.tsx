import { useEffect } from "react";
import { useMap } from "react-leaflet";
import type { Earthquake } from "@/types/earthquake";

type Props = {
    earthquake: Earthquake | null;
};

export function MapFocusController({
    earthquake,
}: Props) {

    const map = useMap();

    useEffect(() => {

        if (!earthquake) return;

        map.flyTo(
            earthquake.position,
            8,
            {
                animate: true,
                duration: 2,
            }
        );

    }, [earthquake, map]);

    return null;
}