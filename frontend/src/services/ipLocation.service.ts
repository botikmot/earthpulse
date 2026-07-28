export type IPLocation = {
    latitude: number;
    longitude: number;
    city: string;
    province: string;
    country: string;
};

export async function getIPLocation(): Promise<IPLocation> {

    const response = await fetch(
        "https://ipwho.is/"
    );

    if (!response.ok) {
        throw new Error(
            "Unable to detect IP location."
        );
    }

    const data = await response.json();

    if (!data.success) {
        throw new Error(
            "Unable to detect IP location."
        );
    }

    return {
        latitude: data.latitude,
        longitude: data.longitude,
        city: data.city,
        province: data.region,
        country: data.country,
    };

}