import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { Earthquake } from "@/types/earthquake";
import { cn } from "@/lib/utils";
import { MapFocusController } from "./MapFocusController";
//import { MapClickController } from "./MapClickController";
import { EarthquakeMarker } from "./EarthquakeMarker";

type WorldMapProps = {
    markers: Earthquake[];
    height?: string;
    center?: [number, number];
    zoom?: number;
    className?: string;
    selectedEarthquake?: Earthquake | null;
    layer:
        | "earthquake"
        | "weather";
    onEarthquakeSelect?: (earthquake: Earthquake)=>void;
    onMapClick?:
        (
            latitude:number,
            longitude:number,
        )=>void;
};

export default function WorldMap({
  markers,
  center,
  className,
  zoom,
  selectedEarthquake,
}: WorldMapProps) {
  
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
        {/* <MapClickController onMapClick={loadWeather} /> */}

        {markers.map((earthquake) => (
          <EarthquakeMarker
              key={earthquake.id}
              earthquake={earthquake}
              selected={
                  earthquake.id === selectedEarthquake?.id
              }
          />
        ))}

    </MapContainer>
  );
}