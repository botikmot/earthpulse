import type { Wildfire } from "@/types/wildfire";

type EonetResponse = {
    events: EonetEvent[];
};

type EonetEvent = {
    id: string;
    title: string;
    description: string | null;
    link: string;
    closed: string | null;

    categories: {
        id: string;
        title: string;
    }[];

    sources: {
        id: string;
        url: string;
    }[];

    geometry: {
        magnitudeValue: number;
        magnitudeUnit: string;
        date: string;
        type: string;
        coordinates: number[];
    }[];
};

function mapWildfires(
    response: EonetResponse
): Wildfire[] {

    return response.events.map((event) => {

        const latest =
            event.geometry.at(-1);

        return {
            id: event.id,
            title: event.title,
            description: event.description,
            latitude:
                latest?.coordinates[1] ?? 0,
            longitude:
                latest?.coordinates[0] ?? 0,
            area:
                latest?.magnitudeValue ?? null,
            areaUnit:
                latest?.magnitudeUnit ?? null,
            date:
                latest?.date ?? "",
            source:
                event.sources[0]?.id ?? "Unknown",
            sourceUrl:
                event.sources[0]?.url ?? "",
            status:
                event.closed
                    ? "CLOSED"
                    : "ACTIVE",
            link: event.sources[0]?.url ?? event.link,

        };

    });

}

export async function fetchWildfires(): Promise<Wildfire[]> {

    const DAYS = 30;
    const url = `https://eonet.gsfc.nasa.gov/api/v3/events?category=wildfires&status=open` + `&days=${DAYS}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error();
    }

    const data: EonetResponse = await response.json();

    return mapWildfires(data);

}