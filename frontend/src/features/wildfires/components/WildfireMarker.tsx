"use client";

import { useEffect, useRef } from "react";
import { Marker } from "react-leaflet";
import type L from "leaflet";
import type { Wildfire } from "@/types/wildfire";
import { Popup } from "react-leaflet";
import { WildfirePopup } from "./WildfirePopup";
import { createWildfireIcon } from "./markerIcon";

type Props = {
    wildfire: Wildfire;
    selected: boolean;
    markerRef?: (marker: L.Marker | null) => void;
};

export function WildfireMarker({
    wildfire,
    selected,
    markerRef,
}: Props) {

    const internalMarkerRef =
        useRef<L.Marker>(null);

    useEffect(() => {

        if (selected) {

            internalMarkerRef.current?.openPopup();

        }

    }, [selected]);

    return (

        <Marker
            ref={(marker) => {
                internalMarkerRef.current = marker;
                markerRef?.(marker);
            }}
            position={[
                wildfire.latitude,
                wildfire.longitude,
            ]}
            icon={createWildfireIcon(selected)}
        >

            <Popup
                minWidth={280}
            >
                <WildfirePopup
                    wildfire={wildfire}
                />
            </Popup>

        </Marker>

    );

}