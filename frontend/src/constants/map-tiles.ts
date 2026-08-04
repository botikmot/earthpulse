import type { MapStyle } from "@/stores/map-style.store";

export const MAP_TILES: Record<
    MapStyle,
    {
        url: string;
        attribution: string;
    }
> = {

    street: {

        url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",

        attribution:
            "&copy; OpenStreetMap contributors",

    },

    satellite: {

        url:
            "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",

        attribution:
            "Tiles © Esri",

    },

    terrain: {

        url:
            "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",

        attribution:
            "© OpenTopoMap",

    },

    dark: {

        url:
            "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",

        attribution:
            "© CARTO",

    },

};