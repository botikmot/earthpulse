import type { ISS } from "@/types/iss";

type ISSResponse = {
    latitude: number;
    longitude: number;
    altitude: number;
    velocity: number;
    visibility: string;
    timestamp: number;
    footprint: number;
};

function mapISSResponse(
    response: ISSResponse
): ISS {

    return {
        latitude: response.latitude,
        longitude: response.longitude,
        altitude: response.altitude,
        velocity: response.velocity,
        footprint: response.footprint,
        visibility:
            response.visibility === "daylight"
                ? "DAYLIGHT"
                : response.visibility === "eclipsed"
                ? "ECLIPSED"
                : "UNKNOWN",
        timestamp: response.timestamp,
        source: "Where The ISS At",
        sourceUrl:
            "https://wheretheiss.at/",
    };

}

export async function fetchISS(): Promise<ISS> {

    const response = await fetch(
        "https://api.wheretheiss.at/v1/satellites/25544"
    );

    if (!response.ok) {
        throw new Error(
            "Failed to fetch ISS."
        );
    }

    const data: ISSResponse = await response.json();
    
    return mapISSResponse(data);

}