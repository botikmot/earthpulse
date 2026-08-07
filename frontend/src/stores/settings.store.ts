import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CACHE } from "@/constants/cache";

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

type RefreshIntervals = {
    weather: number;
    earthquakes: number;
    wildfires: number;
    airQuality: number;
    iss: number;
};

type SettingsState = {
    appearance: AppearanceMode;
    temperatureUnit: TemperatureUnit;
    distanceUnit: DistanceUnit;
    refreshIntervals: RefreshIntervals;
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

    setRefreshInterval: (
        module: keyof RefreshIntervals,
        value: number
    ) => void;

    setDefaultMapZoom: (
        zoom: number
    ) => void;

    toggleLayer: (
        layer: keyof MapLayers
    ) => void;

};

export const useSettingsStore =
create<SettingsState>()(
    persist(
        (set) => ({
    appearance: "dark",
    temperatureUnit: "C",
    distanceUnit: "km",
    refreshIntervals: {
        weather: CACHE.WEATHER,
        earthquakes: CACHE.EARTHQUAKES,
        wildfires: CACHE.WILDFIRES,
        airQuality: CACHE.AIR_QUALITY,
        iss: CACHE.ISS,
    },
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

    setRefreshInterval: (
        module,
        value
    ) =>
        set((state) => ({
            refreshIntervals: {
                ...state.refreshIntervals,
                [module]: value,
            },
        })),

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

    }),
        {
            name: "earthpulse-settings",
        }
    )
);