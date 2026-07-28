export function formatEarthquakeTime(
    time: number
) {
    const date = new Date(time);
    return date.toLocaleString();
}

export function getEarthquakeSeverity(
    magnitude: number
) {

    if (magnitude >= 7) {
        return {
            label: "Major",
            className:
                "bg-red-600 text-white",
        };
    }

    if (magnitude >= 6) {
        return {
            label: "Strong",
            className:
                "bg-orange-500 text-white",
        };
    }

    if (magnitude >= 5) {
        return {
            label: "Moderate",
            className:
                "bg-yellow-500 text-black",
        };
    }

    return {
        label: "Light",
        className:
            "bg-green-600 text-white",
    };

}