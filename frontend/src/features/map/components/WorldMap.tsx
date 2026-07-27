"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { defaultMarkerIcon } from "./markerIcon";
import { EarthquakePopup } from "@/features/earthquakes/components/EarthquakePopup";
import type { Earthquake } from "@/types/earthquake";
import { cn } from "@/lib/utils";

type WorldMapProps = {
    markers: Earthquake[];
    height?: string;
    center?: [number, number];
    zoom?: number;
    className?: string;
};

export default function WorldMap({
  markers,
  className,
}: WorldMapProps) {
  
  return (
    <MapContainer
      center={[12.8797, 121.7740]}
      zoom={6}
      className={cn(
          "w-full",
          className
      )}
    >

        <TileLayer attribution="&copy; OpenStreetMap contributors" url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {markers.map((earthquake) => (
          <Marker
            key={earthquake.id}
            position={earthquake.position}
            icon={defaultMarkerIcon}
          >
            <EarthquakePopup earthquake={earthquake} />
          </Marker>
        ))}

    </MapContainer>
  );
}