import type { Earthquake } from "@/types/earthquake";
import type { USGSResponse } from "@/types/usgs";

export async function fetchEarthquakes(): Promise<Earthquake[]> {

    try {

        const response = await fetch(
            "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch earthquakes.");
        }

        const data: USGSResponse = await response.json();
        
        return data.features.map((feature) => ({
                id: feature.id,
                location: feature.properties.place ?? "Unknown location",
                magnitude: feature.properties.mag ?? 0,
                depth: feature.geometry.coordinates[2] ?? 0,
                position: [
                    feature.geometry.coordinates[1],
                    feature.geometry.coordinates[0],
                ],
                time: feature.properties.time ?? 0
            })
        )
    } catch {
        throw new Error("Failed to fetch earthquakes.");
    }

}