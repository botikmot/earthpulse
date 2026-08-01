import {create} from "zustand";
import type { AirQuality } from "@/types/air-quality";

import {CACHE} from "@/constants/cache";

type AirQualityState = {
    airQuality:
    AirQuality | null;
    loading:boolean;
    refreshing:boolean;
    error:string|null;
    lastUpdated:number|null;
    cacheDuration:number;

    setAirQuality: (data:AirQuality) => void;
    setLoading: (loading:boolean) => void;
    setRefreshing: (refreshing:boolean) => void;
    setError: (error:string|null) => void;
};

export const useAirQualityStore = create<AirQualityState>((set)=>({
    airQuality: null,
    loading: true,
    refreshing: false,
    error: null,
    lastUpdated: null,
    cacheDuration: CACHE.AIR_QUALITY,

    setAirQuality: (data) =>
        set({
            airQuality:data,
            lastUpdated:
            Date.now()
        }),

    setLoading: (loading) =>
        set({
            loading
        }),

    setRefreshing: (refreshing) =>
        set({
            refreshing
        }),

    setError: (error) =>
        set({
            error
        }),

}));