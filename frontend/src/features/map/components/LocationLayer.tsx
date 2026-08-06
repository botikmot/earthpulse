import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import type { AirQuality } from "@/types/air-quality";
import { LocationPopup } from "./LocationPopup";
import { renderToStaticMarkup } from "react-dom/server";
import { WeatherAnimation } from "@/features/weather/components/WeatherAnimation";

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
        html: renderToStaticMarkup(
            <WeatherAnimation
                weatherCode={weatherCode}
                variant="marker"
            />
        )
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