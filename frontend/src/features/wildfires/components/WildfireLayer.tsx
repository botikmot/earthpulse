"use client";

import type { Wildfire } from "@/types/wildfire";
import { WildfireMarker } from "./WildfireMarker";

type WildfireLayerProps = {
    markers: Wildfire[];
    selectedWildfire?: Wildfire | null;
};

export function WildfireLayer({
    markers,
    selectedWildfire,
}: WildfireLayerProps) {

    return (
        <>
            {markers.map((wildfire) => (

                <WildfireMarker
                    key={wildfire.id}
                    wildfire={wildfire}
                    selected={
                        wildfire.id ===
                        selectedWildfire?.id
                    }
                />

            ))}
        </>
    );

}