export function formatRelativeTime(
    timestamp: number
) {

    const diff =
        Date.now() - timestamp;

    const minutes =
        Math.floor(diff / 60000);

    if (minutes < 1) {
        return "Just now";
    }

    if (minutes === 1) {
        return "1 minute ago";
    }

    if (minutes < 60) {
        return `${minutes} minutes ago`;
    }

    const hours =
        Math.floor(minutes / 60);

    if (hours === 1) {
        return "1 hour ago";
    }

    return `${hours} hours ago`;

}