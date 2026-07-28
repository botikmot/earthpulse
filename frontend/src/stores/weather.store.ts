import { create } from "zustand";
import type { Weather } from "@/types/weather";

type WeatherState = {
    weather: Weather | null;
    loading: boolean;
    error: string | null;

    lastUpdated: number | null;

    setWeather: (weather: Weather) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
};

export const useWeatherStore =
create<WeatherState>((set) => ({

    weather: null,
    loading: true,
    error: null,
    lastUpdated: null,

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