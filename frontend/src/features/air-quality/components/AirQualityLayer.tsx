"use client";

import type { AirQuality } from "@/types/air-quality";
import { AirQualityMarker } from "./AirQualityMarker";

type Props = {
    airQuality: AirQuality;
};

export function AirQualityLayer({
    airQuality,
}: Props) {

    return (

        <AirQualityMarker
            airQuality={airQuality}
            selected
        />

    );

}