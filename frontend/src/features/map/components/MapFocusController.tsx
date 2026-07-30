import { useEffect } from "react";
import { useMap } from "react-leaflet";

type Position = {
    latitude: number;
    longitude: number;
};

type Props = {
    position: Position | null;
};

export function MapFocusController({
    position,
}: Props) {

    const map = useMap();

    useEffect(() => {

        if (!position) return;

        map.flyTo(
            [position.latitude, position.longitude],
            8,
            {
                animate: true,
                duration: 2,
            }
        );

    }, [position, map]);

    return null;
}