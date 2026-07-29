import { useCallback, useEffect } from "react";
import { useWeatherStore } from "@/stores/weather.store";
import { fetchWeather } from "@/services/weather.service";
import { useAutoRefresh } from "./useAutoRefresh";
import { CACHE } from "@/constants/cache";

type UseWeatherOptions = {
    latitude?: number;
    longitude?: number;
    enabled?: boolean;
};

export function useWeather({
    latitude,
    longitude,
    enabled = true,
}: UseWeatherOptions) {
    
    const {
        weather,
        loading,
        //refreshing,
        error,
        lastUpdated,
        setWeather,
        setLoading,
        setRefreshing,
        setError,
    } = useWeatherStore();

    const loadWeather = useCallback(
        async (force = false) => {

        if (
            !force &&
            weather &&
            lastUpdated &&
            Date.now() - lastUpdated < CACHE.WEATHER
            ) {
                return;
        }

        try {
            if (weather) {
                setRefreshing(true);
            } else {
                setLoading(true);
            }
            setError(null);

            if (
                latitude === undefined ||
                longitude === undefined
            ) {
                setError("Location unavailable.");
                return;
            }

            const data = await fetchWeather(
                latitude,
                longitude
            );
            setWeather(data);
        } catch {
            setError("Failed to load weather.");
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    },
    [
        latitude,
        longitude,
        weather,
        lastUpdated,
        setWeather,
        setLoading,
        setRefreshing,
        setError,
    ])

    const refreshWeather = useCallback(() => {
        console.log('updating..')
        void loadWeather(true);

    }, [loadWeather]);

    useEffect(() => {

        if (!enabled) return;
        void loadWeather();

    }, [
        enabled,
        loadWeather,
    ]);

    useAutoRefresh({
        enabled,
        interval: CACHE.WEATHER,
        callback: refreshWeather,
    });

    return {
        weather,
        loading,
        error,
        refetch: loadWeather,
    };
}