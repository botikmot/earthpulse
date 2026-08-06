"use client";

import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";

import type { ISS } from "@/types/iss";

type Props = {
    iss: ISS;
};

export function ISSLayer({
    iss,
}: Props) {

    const icon = new L.DivIcon({
        className: "iss-marker",
        html: renderToStaticMarkup(
            <div className="iss-satellite text-xl">
                🛰️
            </div>
        )

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