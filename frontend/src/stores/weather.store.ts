import { create } from "zustand";
import type { Weather } from "@/types/weather";

type WeatherState = {
    weather: Weather | null;
    loading: boolean;
    error: string | null;

    lastUpdated: number | null;
    refreshing: boolean;

    setWeather: (weather: Weather) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
    setRefreshing: (refreshing:boolean) => void;
};

export const useWeatherStore =
create<WeatherState>((set) => ({

    weather: null,
    loading: true,
    error: null,
    lastUpdated: null,
    refreshing: false,

    setRefreshing: (refreshing) =>
        set({
            refreshing,
        }),

    setWeather: (weather) =>
        set({
            weather,
            lastUpdated: Date.now(),
        }),

    setLoading: (loading) =>
        set({ loading }),

    setError: (error) =>
        set({ error }),

}));