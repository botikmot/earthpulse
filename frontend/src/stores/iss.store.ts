import { create } from "zustand";
import type { ISS } from "@/types/iss";
import { CACHE } from "@/constants/cache";

type ISSState = {
    iss: ISS | null;
    loading: boolean;
    refreshing: boolean;
    error: string | null;
    lastUpdated: number | null;
    cacheDuration: number;
    setISS: (data: ISS) => void;
    setLoading: (loading: boolean) => void;
    setRefreshing: (refreshing: boolean) => void;
    setError: (error: string | null) => void;
};

export const useISSStore =
create<ISSState>((set) => ({
    iss: null,
    loading: true,
    refreshing: false,
    error: null,
    lastUpdated: null,
    cacheDuration: CACHE.ISS,
    setISS: (data) =>
        set({
            iss: data,
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