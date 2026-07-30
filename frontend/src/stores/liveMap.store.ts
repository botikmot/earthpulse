import { create } from "zustand";

type LiveMapLayers = {
    earthquake: boolean;
    weather: boolean;
    volcano: boolean;
    wildfire: boolean;
};

type LiveMapStore = {
    layers: LiveMapLayers;
    toggleLayer: (
        layer: keyof LiveMapLayers
    ) => void;
};

export const useLiveMapStore = create<LiveMapStore>((set) => ({

    layers: {
        earthquake: true,
        weather: true,
        volcano: false,
        wildfire: true,
    },

    toggleLayer: (layer) =>

        set((state) => ({

            layers: {
                ...state.layers,
                [layer]: !state.layers[layer],
            },

        })),

}));