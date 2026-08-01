"use client";

import { useEffect, useRef } from "react";
import { Marker, Popup } from "react-leaflet";
import type L from "leaflet";
import type { AirQuality } from "@/types/air-quality";
import { AirQualityPopup } from "./AirQualityPopup";
import { createAirQualityIcon } from "./markerIcon";

type Props = {
    airQuality: AirQuality;
    selected?: boolean;
};

export function AirQualityMarker({
    airQuality,
    selected = false,
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
                airQuality.latitude,
                airQuality.longitude,
            ]}
            icon={createAirQualityIcon(
                airQuality.category,
                selected
            )}
        >

            <Popup minWidth={280}>

                <AirQualityPopup
                    airQuality={airQuality}
                />

            </Popup>

        </Marker>

    );

}