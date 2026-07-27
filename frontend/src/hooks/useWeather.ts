import { useEffect, useState } from "react";
import type { Weather } from "@/types/weather";
import { fetchWeather } from "@/services/weather.service";

export function useWeather(latitude: number, longitude: number) {
    const [weather, setWeather] = useState<Weather | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        async function loadWeather() {

            try {
                setLoading(true);
                setError(null);
                const data = await fetchWeather(latitude, longitude);
                setWeather(data);
            } catch {
                setError("Failed to load weather.");
            } finally {
                setLoading(false);
            }
            
        }

        loadWeather();

    }, [latitude, longitude]);

    return {
        weather,
        loading,
        error,
    };
}