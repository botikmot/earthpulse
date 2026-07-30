import { create } from "zustand";
import type { Wildfire } from "@/types/wildfire";
import { CACHE } from "@/constants/cache";

type WildfireState = {
    wildfires: Wildfire[];

    loading: boolean;
    refreshing: boolean;
    error: string | null;

    lastUpdated: number | null;
    cacheDuration: number;

    setWildfires: (wildfires: Wildfire[]) => void;
    setLoading: (loading: boolean) => void;
    setRefreshing: (refreshing: boolean) => void;
    setError: (error: string | null) => void;
};

export const useWildfireStore =
create<WildfireState>((set) => ({

    wildfires: [],

    loading: true,
    refreshing: false,
    error: null,

    lastUpdated: null,
    cacheDuration: CACHE.WILDFIRES,

    setWildfires: (wildfires) =>
        set({
            wildfires,
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