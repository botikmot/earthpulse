"use client";

import { useEffect, useRef } from "react";
import { Marker, Popup } from "react-leaflet";
import type L from "leaflet";

import type { Wildfire } from "@/types/wildfire";
import { WildfirePopup } from "./WildfirePopup";
import { createWildfireIcon } from "./markerIcon";

type Props = {
    wildfire: Wildfire;
    selected: boolean;
};

export function WildfireMarker({
    wildfire,
    selected,
}: Props) {

    const markerRef =
        useRef<L.Marker>(null);

    useEffect(() => {

        if (selected) {

            markerRef.current?.openPopup();

        }

    }, [selected]);

    return (

        <Marker

            ref={markerRef}

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