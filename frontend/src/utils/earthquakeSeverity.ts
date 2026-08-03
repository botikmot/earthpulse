import {
    Mountain,
    TriangleAlert,
    ShieldAlert,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export function getSeverityVariant(
    magnitude: number
) {
    if (magnitude >= 7) {
        return "destructive";
    }

    if (magnitude >= 5) {
        return "secondary";
    }

    return "outline";
}

export function getSeverityLabel(
    magnitude: number
) {

    if (magnitude >= 7)
        return "Major";

    if (magnitude >= 5)
        return "Strong";

    if (magnitude >= 3)
        return "Light";

    return "Minor";

}

export function getEarthquakeSeverityIcon(
    magnitude: number
): LucideIcon {

    if (magnitude >= 7) {
        return ShieldAlert;
    }

    if (magnitude >= 5) {
        return TriangleAlert;
    }

    return Mountain;

}