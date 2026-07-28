import { create } from "zustand";
import type { Earthquake } from "@/types/earthquake";

type EarthquakeStore = {
    selectedEarthquake: Earthquake | null;

    setSelectedEarthquake: (
        earthquake: Earthquake | null
    ) => void;

    clearSelectedEarthquake: () => void;
};

export const useEarthquakeStore =
    create<EarthquakeStore>((set) => ({

        selectedEarthquake: null,

        setSelectedEarthquake: (earthquake) =>
            set({
                selectedEarthquake: earthquake,
            }),

        clearSelectedEarthquake: () =>
            set({
                selectedEarthquake: null,
            }),

    }));