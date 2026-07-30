import L from "leaflet";

export const FIRE_SVG = `
    <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M12 2C11 5 7 7 7 12C7 15.3137 9.686 18 13 18C16.314 18 19 15.314 19 12C19 8 16 6 14 3C13.5 2.5 13 2.2 12 2Z"
            fill="#F97316"
            stroke="#111827"
            stroke-width="1.5"
        />
        <path
            d="M12.5 9C12 10.5 10.5 11.5 10.5 13C10.5 14.381 11.619 15.5 13 15.5C14.381 15.5 15.5 14.381 15.5 13C15.5 11.5 14.5 10.5 13.5 9.5C13.2 9.2 13 9.1 12.5 9Z"
            fill="#FACC15"
        />
    </svg>
    `;

export function createWildfireIcon(
    selected: boolean
) {
    return L.divIcon({
        className: "",
        iconSize: [28, 28],
        iconAnchor: [14, 14],

        html: `
            <div class="wildfire-marker ${selected ? "selected" : ""}">
                ${FIRE_SVG}
            </div>
        `,
    });
}