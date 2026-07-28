import L from "leaflet";

export function createEarthquakeIcon(
    magnitude: number,
    selected = false,
) {

    let color = "green";

    if (magnitude >= 7) {

        color = "red";

    } else if (magnitude >= 6) {

        color = "orange";

    } else if (magnitude >= 5) {

        color = "yellow";

    }

    return new L.DivIcon({

        className: "",

        html: `
            <div class="
                earthquake-marker
                ${color}
                ${selected ? "selected" : ""}
            "></div>
        `,

        iconSize: [18, 18],

        iconAnchor: [9, 9],

        popupAnchor: [0, -10],

    });

}