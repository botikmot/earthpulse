export type ISS = {
    latitude: number;
    longitude: number;
    footprint: number | null;
    altitude: number | null;
    velocity: number | null;

    visibility: "DAYLIGHT" | "ECLIPSED" | "UNKNOWN";

    timestamp: number;

    source: string;
    sourceUrl: string;
};