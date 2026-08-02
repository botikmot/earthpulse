import { create } from "zustand";

export type AppearanceMode =
    | "system"
    | "light"
    | "dark";

export type TemperatureUnit =
    | "C"
    | "F";

export type DistanceUnit =
    | "km"
    | "mi";

type MapLayers = {
    earthquake: boolean;
    weather: boolean;
    airQuality: boolean;
    wildfire: boolean;
    iss: boolean;
};

type SettingsState = {
    appearance: AppearanceMode;
    temperatureUnit: TemperatureUnit;
    distanceUnit: DistanceUnit;
    autoRefresh: boolean;
    defaultMapZoom: number;
    mapLayers: MapLayers;
    setAppearance: (
        appearance: AppearanceMode
    ) => void;

    setTemperatureUnit: (
        unit: TemperatureUnit
    ) => void;

    setDistanceUnit: (
        unit: DistanceUnit
    ) => void;

    setAutoRefresh: (
        enabled: boolean
    ) => void;

    setDefaultMapZoom: (
        zoom: number
    ) => void;

    toggleLayer: (
        layer: keyof MapLayers
    ) => void;

};

export const useSettingsStore =
create<SettingsState>((set) => ({
    appearance: "system",
    temperatureUnit: "C",
    distanceUnit: "km",
    autoRefresh: true,
    defaultMapZoom: 6,
    mapLayers: {
        earthquake: true,
        weather: true,
        airQuality: true,
        wildfire: true,
        iss: true,
    },

    setAppearance: (
        appearance
    ) =>
        set({
            appearance,
        }),

    setTemperatureUnit: (
        temperatureUnit
    ) =>
        set({
            temperatureUnit,
        }),

    setDistanceUnit: (
        distanceUnit
    ) =>
        set({
            distanceUnit,
        }),

    setAutoRefresh: (
        autoRefresh
    ) =>
        set({
            autoRefresh,
        }),

    setDefaultMapZoom: (
        defaultMapZoom
    ) =>
        set({
            defaultMapZoom,
        }),

    toggleLayer: (
        layer
    ) =>
        set((state) => ({
            mapLayers: {
                ...state.mapLayers,
                [layer]:
                    !state.mapLayers[layer],
            },
        })),

}));