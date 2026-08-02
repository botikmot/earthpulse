"use client";

import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

import type { ISS } from "@/types/iss";

type Props = {
    iss: ISS;
};

export function ISSLayer({
    iss,
}: Props) {

    const icon = new L.DivIcon({
        className: "iss-marker",
        html: `
            <div
                style="
                    background:#7c3aed;
                    color:white;
                    border-radius:9999px;
                    padding:6px 10px;
                    font-size:13px;
                    font-weight:700;
                    border:2px solid white;
                    box-shadow:0 3px 10px rgba(0,0,0,.35);
                    white-space:nowrap;
                "
            >
                🛰 ISS
            </div>
        `,
        iconSize: [70, 34],
        iconAnchor: [35, 17],

    });

    return (

        <Marker
            position={[
                iss.latitude,
                iss.longitude,
            ]}
            icon={icon}
        >
            <Popup>
                <div className="space-y-2">
                    <h3 className="font-semibold">
                        International Space Station
                    </h3>

                    <div className="text-sm">
                        <p>
                            🚀 Speed
                            <strong>
                                {" "}
                                {Math.round(
                                    iss.velocity ?? 0
                                ).toLocaleString()} km/h
                            </strong>
                        </p>
                        <p>
                            📡 Altitude
                            <strong>
                                {" "}
                                {Math.round(
                                    iss.altitude ?? 0
                                )} km
                            </strong>
                        </p>
                        <p>
                            👀 Visibility
                            <strong>
                                {" "}
                                {iss.visibility}
                            </strong>
                        </p>
                    </div>
                </div>
            </Popup>
        </Marker>

    );

}