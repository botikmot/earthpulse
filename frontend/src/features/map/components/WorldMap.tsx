import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { Earthquake } from "@/types/earthquake";
import { cn } from "@/lib/utils";
import { MapFocusController } from "./MapFocusController";
import { EarthquakeLayer } from "./EarthquakeLayer";
import { WeatherLayer } from "./WeatherLayer";

type WorldMapProps = {
    earthquakes?: Earthquake[];
    weather?: {
        latitude: number;
        longitude: number;
        city: string;
        temperature: number;
        weatherCode: number;
    };
    height?: string;
    center?: [number, number];
    zoom?: number;
    className?: string;
    selectedEarthquake?: Earthquake | null;
    layers: {
        earthquake: boolean;
        weather: boolean;
        volcano: boolean;
        wildfire: boolean;
    };
    onEarthquakeSelect?: (earthquake: Earthquake)=>void;
    onMapClick?:
        (
            latitude:number,
            longitude:number,
        )=>void;
};

export default function WorldMap({
  earthquakes,
  weather,
  center,
  className,
  zoom,
  selectedEarthquake,
  layers,
}: WorldMapProps) {
  
    console.log('layer:',layers);

  return (
    <MapContainer
      center={center ?? [12.8797, 121.7740]}
      zoom={zoom ?? 6}
      className={cn(
          "w-full",
          className
      )}
    >

        <TileLayer attribution="&copy; OpenStreetMap contributors" url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <MapFocusController
            earthquake={selectedEarthquake ?? null}
        />
        
        {layers.earthquake && earthquakes && (
            <EarthquakeLayer
                markers={earthquakes}
                selectedEarthquake={selectedEarthquake}
            />
        )}

        {layers.weather && weather && (
            <WeatherLayer
                latitude={weather.latitude}
                longitude={weather.longitude}
                city={weather.city}
                temperature={weather.temperature}
                weatherCode={weather.weatherCode}
            />
        )}

    </MapContainer>
  );
}