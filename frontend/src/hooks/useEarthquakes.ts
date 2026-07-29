//import type { Earthquake } from "@/types/earthquake";
import { useEffect, useCallback } from "react";
import { fetchEarthquakes } from "@/services/earthquake.service";
import { useEarthquakeStore } from "@/features/earthquakes/store/earthquake.store";
import { useAutoRefresh } from "./useAutoRefresh";
import { CACHE } from "@/constants/cache";

export function useEarthquakes() {

    const {
        earthquakes,
        loading,
        error,
        refreshing,
        lastUpdated,
        setEarthquakes,
        setLoading,
        setRefreshing,
        setError,
    } = useEarthquakeStore();

    const loadEarthquakes = useCallback(
        async (force = false) => {

            if (
                !force &&
                earthquakes.length > 0 &&
                lastUpdated &&
                Date.now() - lastUpdated < CACHE.EARTHQUAKES
            ) {
                return;
            }

            try {

                if (earthquakes.length > 0) {
                    setRefreshing(true);
                } else {
                    setLoading(true);
                }

                setError(null);

                const data =
                    await fetchEarthquakes();

                setEarthquakes(data);

            } catch {

                setError(
                    "Failed to load earthquakes."
                );

            } finally {

                setLoading(false);
                setRefreshing(false);

            }

        },
        [
            earthquakes.length,
            lastUpdated,
            setEarthquakes,
            setLoading,
            setRefreshing,
            setError,
        ]
    );

    const refreshEarthquakes =
        useCallback(() => {
            console.log('updating...')
            void loadEarthquakes(true);

        }, [loadEarthquakes]);

    useEffect(() => {

        void loadEarthquakes();

    }, [loadEarthquakes]);

    useAutoRefresh({
        enabled: true,
        interval: CACHE.EARTHQUAKES,
        callback: refreshEarthquakes,
    });

    return {
        earthquakes,
        loading,
        refreshing,
        error,
        lastUpdated,
        refetch: loadEarthquakes,
    };

}