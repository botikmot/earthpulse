import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { Earthquake } from "@/types/earthquake";
import type { Wildfire } from "@/types/wildfire";
import type { AirQuality } from "@/types/air-quality";
import { cn } from "@/lib/utils";
import { MapFocusController } from "./MapFocusController";
import { EarthquakeLayer } from "./EarthquakeLayer";
import { LocationLayer } from "./LocationLayer";
import { WildfireLayer } from "@/features/wildfires/components/WildfireLayer";
import type { ISS } from "@/types/iss";
import { ISSLayer } from "@/features/iss/components/ISSLayer";

type WorldMapProps = {
    earthquakes?: Earthquake[];
    wildfires?: Wildfire[];
    airQuality?: AirQuality | null;
    iss?: ISS | null;
    focusISS?: boolean;
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
    selectedWildfire?: Wildfire | null;
    layers: {
        earthquake: boolean;
        weather: boolean;
        airQuality: boolean;
        wildfire: boolean;
        iss: boolean;
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
  wildfires,
  airQuality,
  weather,
  iss,
  focusISS,
  center,
  className,
  zoom,
  selectedEarthquake,
  selectedWildfire,
  layers,
}: WorldMapProps) {

const focusPosition =
    selectedEarthquake
        ? {
              latitude: selectedEarthquake.position[0],
              longitude: selectedEarthquake.position[1],
          }
        : selectedWildfire
        ? {
              latitude: selectedWildfire.latitude,
              longitude: selectedWildfire.longitude,
          }
        : focusISS && iss
        ? {
            latitude: iss.latitude,
            longitude: iss.longitude,
        }
        : weather
        ? {
              latitude: weather.latitude,
              longitude: weather.longitude,
          }
        : airQuality
        ? {
              latitude: airQuality.latitude,
              longitude: airQuality.longitude,
          }
        : null;
  
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
            position={focusPosition}
        />
        
        {layers.earthquake && earthquakes && (
            <EarthquakeLayer
                markers={earthquakes}
                selectedEarthquake={selectedEarthquake}
            />
        )}

        {layers.weather && weather && (
            <LocationLayer
                latitude={weather.latitude}
                longitude={weather.longitude}
                city={weather.city}
                temperature={weather.temperature}
                weatherCode={weather.weatherCode}
                airQuality={airQuality}
            />
        )}

        {layers.wildfire && wildfires && (
            <WildfireLayer
                markers={wildfires}
                selectedWildfire={selectedWildfire}
            />
        )}

        {layers.iss && iss && (
            <ISSLayer
                iss={iss}
            />
        )}

    </MapContainer>
  );
}