import { create } from "zustand";

export type MapStyle =
    | "street"
    | "satellite"
    | "terrain"
    | "dark";

type MapStyleState = {
    style: MapStyle;

    setStyle: (style: MapStyle) => void;
};

export const useMapStyleStore =
create<MapStyleState>((set) => ({

    style: "satellite",

    setStyle: (style) =>
        set({
            style,
        }),

}));