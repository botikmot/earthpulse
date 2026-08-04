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
import { MAP_TILES } from "@/constants/map-tiles";
import { useMapStyleStore } from "@/stores/map-style.store";

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

const mapStyle = useMapStyleStore(
        (state) => state.style
    );

const currentTile = MAP_TILES[mapStyle];

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
        : null;

    const DEFAULT_CENTER: [number, number] = [
            12.8797,
            121.7740,
        ];
  
  return (
    <MapContainer
      center={center ?? DEFAULT_CENTER}
      zoom={zoom ?? 6}
      className={cn(
          "w-full",
          className
      )}
      scrollWheelZoom
      zoomControl={false}
      preferCanvas
    >

        <TileLayer
            attribution={currentTile.attribution}
            url={currentTile.url}
        />

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