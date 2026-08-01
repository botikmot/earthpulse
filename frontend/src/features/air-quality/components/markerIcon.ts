import L from "leaflet";

function getColor(category: string) {

    switch (category) {

        case "GOOD":
            return "#22c55e";

        case "MODERATE":
            return "#eab308";

        case "UNHEALTHY_SENSITIVE":
            return "#fb923c";

        case "UNHEALTHY":
            return "#ef4444";

        case "VERY_UNHEALTHY":
            return "#9333ea";

        case "HAZARDOUS":
            return "#7f1d1d";

        default:
            return "#64748b";
    }

}

export function createAirQualityIcon(
    category: string,
    selected = false
) {

    const color = getColor(category);

    return L.divIcon({

        className: "",

        html: `
            <div
                class="
                    air-marker
                    ${selected ? "selected" : ""}
                "
                style="
                    background:${color};
                "
            ></div>
        `,

        iconSize: [18,18],
        iconAnchor: [9,9],

    });

}