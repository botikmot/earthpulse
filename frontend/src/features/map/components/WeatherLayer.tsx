import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { getWeatherIcon } from "@/utils/weatherIcon";

type WeatherLayerProps = {
    latitude: number;
    longitude: number;
    city: string;
    temperature: number;
    weatherCode: number;
};

export function WeatherLayer({
    latitude,
    longitude,
    city,
    temperature,
    weatherCode,
}: WeatherLayerProps) {

    const icon = new L.DivIcon({
        className: "weather-marker",

        html: `
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
                "
            >
                ${getWeatherIcon(weatherCode)}
                ${Math.round(temperature)}°
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
                <strong>{city}</strong>
                <br />
                {Math.round(temperature)}°C
            </Popup>
        </Marker>
    );
}