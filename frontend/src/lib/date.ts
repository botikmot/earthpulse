export function formatLastUpdated(
    timestamp: number | null
) {

    if (!timestamp)
        return "Never";

    const diff =
        Date.now() - timestamp;

    const seconds =
        Math.floor(diff / 1000);

    if (seconds < 60)
        return "Just now";

    const minutes =
        Math.floor(seconds / 60);

    if (minutes < 60)
        return `${minutes} min${minutes > 1 ? "s" : ""} ago`;

    const hours =
        Math.floor(minutes / 60);

    if (hours < 24)
        return `${hours} hour${hours > 1 ? "s" : ""} ago`;

    const days =
        Math.floor(hours / 24);

    return `${days} day${days > 1 ? "s" : ""} ago`;

}

export function getRelativeTime(dateString: string) {

    const now = Date.now();
    const then = new Date(dateString).getTime();

    const diff = Math.floor((now - then) / 1000);

    if (diff < 60) {
        return "Just now";
    }

    if (diff < 3600) {
        const mins = Math.floor(diff / 60);

        return `${mins} min${mins > 1 ? "s" : ""} ago`;
    }

    if (diff < 86400) {
        const hrs = Math.floor(diff / 3600);

        return `${hrs} hour${hrs > 1 ? "s" : ""} ago`;
    }

    const days = Math.floor(diff / 86400);

    return `${days} day${days > 1 ? "s" : ""} ago`;

}