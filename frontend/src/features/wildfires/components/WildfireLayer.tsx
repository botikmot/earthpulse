"use client";

import type { Wildfire } from "@/types/wildfire";
import { WildfireMarker } from "./WildfireMarker";
import MarkerClusterGroup from "react-leaflet-cluster";
import L from "leaflet";
import { useEffect, useRef } from "react";
import { FIRE_SVG } from "./markerIcon";

type WildfireLayerProps = {
    markers: Wildfire[];
    selectedWildfire?: Wildfire | null;
};

export function WildfireLayer({
    markers,
    selectedWildfire,
}: WildfireLayerProps) {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const clusterRef = useRef<any>(null);

    const markerRefs = useRef<Record<string, L.Marker>>({});

    useEffect(() => {

        if (!selectedWildfire) return;

        const marker =
            markerRefs.current[
                selectedWildfire.id
            ];

        if (!marker) return;

        clusterRef.current?.zoomToShowLayer(
            marker,
            () => {
                marker.openPopup();
            }
        );

    }, [selectedWildfire]);

    return (

        <MarkerClusterGroup
            chunkedLoading
            ref={clusterRef}
            iconCreateFunction={
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (cluster: any) => {

                const count = cluster.getChildCount();

                let background = "#fb923c"; // Orange (small cluster)

                if (count > 25)
                    background = "#f97316"; // Dark Orange

                if (count > 100)
                    background = "#dc2626"; // Red

                return L.divIcon({

                   html: `
                    <div
                        style="
                            display:flex;
                            align-items:center;
                            gap:4px;

                            font-weight:700;
                            font-size:14px;

                            color:#111827;

                            text-shadow:
                                0 1px 3px rgba(255,255,255,.9);

                            filter:
                                drop-shadow(0 2px 4px rgba(0,0,0,.35));
                        "
                    >
                        ${FIRE_SVG}
                        <span>${count}</span>
                    </div>
                    `,

                    className: "",

                    iconSize: [50, 50],

                });

            }}
        >
            {markers.map((wildfire) => (

                <WildfireMarker
                    key={wildfire.id}
                    wildfire={wildfire}
                    selected={
                        wildfire.id ===
                        selectedWildfire?.id
                    }
                    markerRef={(marker) => {
                        if (marker) {
                            markerRefs.current[
                                wildfire.id
                            ] = marker;
                        }
                    }}
                />
            ))}
        </MarkerClusterGroup>

    );

}