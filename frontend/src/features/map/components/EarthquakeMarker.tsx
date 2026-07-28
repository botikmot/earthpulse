"use client";

import { useEffect, useRef } from "react";
import { Marker } from "react-leaflet";
import type L from "leaflet";

import type { Earthquake } from "@/types/earthquake";
import { EarthquakePopup } from "@/features/earthquakes/components/EarthquakePopup";
import { createEarthquakeIcon } from "./markerIcon";

type Props = {
    earthquake: Earthquake;
    selected: boolean;
};

export function EarthquakeMarker({
    earthquake,
    selected,
}: Props) {

    const markerRef = useRef<L.Marker>(null);

    useEffect(() => {

        if (selected) {
            markerRef.current?.openPopup();
        }

    }, [selected]);

    return (

        <Marker
            ref={markerRef}
            position={earthquake.position}
            icon={createEarthquakeIcon(
                earthquake.magnitude,
                selected,
            )}
        >

            <EarthquakePopup
                earthquake={earthquake}
            />

        </Marker>

    );

}