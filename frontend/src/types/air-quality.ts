export type AirQuality = {
    id: string;
    city: string;
    country: string;
    latitude: number;
    longitude: number;
    aqi: number;
    category:
        | "GOOD"
        | "MODERATE"
        | "UNHEALTHY_SENSITIVE"
        | "UNHEALTHY"
        | "VERY_UNHEALTHY"
        | "HAZARDOUS";
    pm25: number | null;
    pm10: number | null;
    o3: number | null;
    no2: number | null;
    so2: number | null;
    co: number | null;
    updatedAt: string;
    source: string;
    sourceUrl: string;
};
