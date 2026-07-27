import { Popup } from "react-leaflet";
import type { Earthquake } from "@/types/earthquake";

type EarthquakePopupProps = {
    earthquake: Earthquake;
};

export function EarthquakePopup({
    earthquake
}: EarthquakePopupProps) {

    const {
        location,
        magnitude,
        depth,
    } = earthquake;

    return (
        <Popup>
            <strong>{location}</strong>

            <br />

            Magnitude: {magnitude}

            <br />

            Depth: {depth} km
        </Popup>
    )

}