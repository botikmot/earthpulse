import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { getWeatherIcon } from "@/utils/weatherIcon";
import type { AirQuality } from "@/types/air-quality";
import { LocationPopup } from "./LocationPopup";
import { renderToStaticMarkup } from "react-dom/server";
import React from "react";

type LocationLayerProps = {
    latitude: number;
    longitude: number;
    city: string;
    temperature: number;
    weatherCode: number;
    airQuality?: AirQuality | null;
};

export function LocationLayer({
    latitude,
    longitude,
    city,
    temperature,
    weatherCode,
    airQuality,
}: LocationLayerProps) {

    console.log('weatherCode::',weatherCode)

    const icon = new L.DivIcon({
        className: "weather-marker",

        html: `
            <div class="weather-marker-wrapper">
                <div
                    style="
                        background:#2563eb;
                        color:#fff;
                        border-radius:9999px;
                        padding:6px 10px;
                        font-size:13px;
                        font-weight:700;
                        box-shadow:0 3px 10px rgba(0,0,0,.35);
                        white-space:nowrap;
                        border:2px solid white;
                        display:flex;
                        align-items:center;
                        gap:4px;
                    "
                >
                    ${renderToStaticMarkup(
                        React.createElement(getWeatherIcon(weatherCode), {
                            size: 18,
                            strokeWidth: 2.5,
                        })
                    )}
                    ${Math.round(temperature)}°
                </div>
            </div>
        `,

        iconSize: [70, 32],

        iconAnchor: [35, 16],
    });

    return (
        <Marker
            position={[latitude, longitude]}
            icon={icon}
        >
            <Popup>
                <LocationPopup
                    city={city}
                    temperature={temperature}
                    weatherCode={weatherCode}
                    airQuality={airQuality}
                />
            </Popup>
        </Marker>
    );
}