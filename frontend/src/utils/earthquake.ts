export function formatEarthquakeTime(
    time: number
) {
    const date = new Date(time);
    return date.toLocaleString();
}