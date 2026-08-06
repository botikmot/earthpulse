export function formatTemperature(
    value: number,
    unit: "C" | "F"
) {
    if (unit === "F") {
        return `${((value * 9) / 5 + 32).toFixed(1)}°F`;
    }

    return `${value.toFixed(1)}°C`;
}

export function formatWindSpeed(
    value: number,
    unit: "km" | "mi"
) {
    if (unit === "mi") {
        return `${(value * 0.621371).toFixed(1)} mph`;
    }

    return `${value.toFixed(1)} km/h`;
}

export function formatDistance(
    meters: number,
    unit: "km" | "mi"
) {
    if (unit === "mi") {
        return `${(meters / 1609.34).toFixed(1)} mi`;
    }

    return `${(meters / 1000).toFixed(1)} km`;
}

export function formatDepth(
    km: number,
    unit: "km" | "mi"
) {
    if (unit === "mi") {
        return `${(km * 0.621371).toFixed(1)} mi`;
    }

    return `${km.toFixed(1)} km`;
}

export function formatVisibility(
    meters: number,
    unit: "km" | "mi"
) {

    if (unit === "mi") {

        return `${(meters / 1609.34).toFixed(1)} mi`;

    }

    return `${(meters / 1000).toFixed(1)} km`;

}