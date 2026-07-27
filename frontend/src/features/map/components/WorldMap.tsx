"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { defaultMarkerIcon } from "./markerIcon";
import { useEarthquakes } from "@/hooks/useEarthquakes";
import { Loading } from "@/components/ui/Loading";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import { EarthquakePopup } from "@/features/earthquakes/components/EarthquakePopup";

export default function WorldMap() {

  const {
    earthquakes,
    loading,
    error
  } = useEarthquakes();

  if (loading) {
      return <Loading text="Loading earthquakes data..." />;
  }

  if (error) {
    return (
        <ErrorMessage
            message={error}
        />
    );
}

  
  return (
    <MapContainer
        center={[12.8797, 121.7740]}
        zoom={6}
        className="h-[600px] w-full"
        >

        <TileLayer attribution="&copy; OpenStreetMap contributors" url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {earthquakes.map((earthquake) => (
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