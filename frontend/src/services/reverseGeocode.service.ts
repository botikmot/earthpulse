export type UserAddress = {
    city: string;
    province: string;
    country: string;
};

export async function reverseGeocode(
    latitude: number,
    longitude: number
): Promise<UserAddress> {

    const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
        {
            headers: {
                Accept: "application/json",
            },
        }
    );

    if (!response.ok) {
        throw new Error("Unable to get location.");
    }

    const data = await response.json();

    const address = data.address;

    return {

        city:
            address.city ||
            address.town ||
            address.municipality ||
            address.village ||
            "Unknown",

        province:
            address.state || "",

        country:
            address.country || "",

    };
}