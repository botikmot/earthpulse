import { create } from "zustand";
import type { Earthquake } from "@/types/earthquake";

type EarthquakeStore = {
    selectedEarthquake: Earthquake | null;

    earthquakes: Earthquake[];

    loading: boolean;
    refreshing: boolean;
    error: string | null;

    lastUpdated: number | null;

    setSelectedEarthquake: (
        earthquake: Earthquake | null
    ) => void;

    clearSelectedEarthquake: () => void;

    setEarthquakes: (
        earthquakes: Earthquake[]
    ) => void;

    setLoading: (
        loading: boolean
    ) => void;

    setRefreshing: (
        refreshing: boolean
    ) => void;

    setError: (
        error: string | null
    ) => void;
};

export const useEarthquakeStore =
    create<EarthquakeStore>((set) => ({

        selectedEarthquake: null,
        earthquakes: [],

        loading: true,
        refreshing: false,
        error: null,

        lastUpdated: null,

        setSelectedEarthquake: (earthquake) =>
            set({
                selectedEarthquake: earthquake,
            }),

        clearSelectedEarthquake: () =>
            set({
                selectedEarthquake: null,
            }),

        setEarthquakes: (earthquakes) =>
            set({
                    earthquakes,
                    lastUpdated: Date.now(),
                }),

        setLoading: (loading) =>
            set({
                loading,
            }),

        setRefreshing: (refreshing) =>
            set({
                refreshing,
            }),

        setError: (error) =>
            set({
                error,
            }),

    }));