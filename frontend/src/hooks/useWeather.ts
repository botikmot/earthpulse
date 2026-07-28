import { useEffect } from "react";
import { useWeatherStore } from "@/stores/weather.store";
import { fetchWeather } from "@/services/weather.service";

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
        error,
        lastUpdated,
        setWeather,
        setLoading,
        setError,
    } = useWeatherStore();

    const loadWeather = async () => {

        const TEN_MINUTES = 10 * 60 * 1000;

        if (
            weather &&
            lastUpdated &&
            Date.now() - lastUpdated < TEN_MINUTES
            ) {
                return;
        }

        try {
            setLoading(true);
            setError(null);

            if (
                latitude === undefined ||
                longitude === undefined
            ) {
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
        }
    }

    useEffect(() => {

        if (!enabled) return;

        void loadWeather();

    }, [latitude, longitude, enabled]);

    return {
        weather,
        loading,
        error,
        refetch: loadWeather,
    };
}