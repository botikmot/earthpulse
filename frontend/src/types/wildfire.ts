export type Wildfire = {
    id: string;
    title: string;
    description: string | null;
    latitude: number;
    longitude: number;
    area: number | null;
    areaUnit: string | null;
    date: string;
    source: string;
    sourceUrl: string;
    status: "ACTIVE" | "CLOSED";
    link: string;
};