import { useCallback, useEffect } from "react";
import { fetchWildfires } from "@/services/wildfire.service";
import { useWildfireStore } from "@/stores/wildfire.store";
import { useAutoRefresh } from "./useAutoRefresh";
import { CACHE } from "@/constants/cache";

type UseWildfiresOptions = {
    enabled?: boolean;
};

export function useWildfires({
    enabled = true,
}: UseWildfiresOptions = {}) {

    const {
        wildfires,
        loading,
        error,
        lastUpdated,

        setWildfires,
        setLoading,
        setRefreshing,
        setError,
    } = useWildfireStore();

    const loadWildfires = useCallback(
        async (force = false) => {

            if (
                !force &&
                wildfires.length > 0 &&
                lastUpdated &&
                Date.now() - lastUpdated < CACHE.WILDFIRES
            ) {
                return;
            }

            try {

                if (wildfires.length > 0) {
                    setRefreshing(true);
                } else {
                    setLoading(true);
                }

                setError(null);

                const data =
                    await fetchWildfires();

                setWildfires(data);

            } catch {

                setError(
                    "Failed to load wildfires."
                );

            } finally {

                setLoading(false);
                setRefreshing(false);

            }

        },
        [
            wildfires,
            lastUpdated,

            setWildfires,
            setLoading,
            setRefreshing,
            setError,
        ]
    );

    const refreshWildfires = useCallback(() => {

        console.log(
            "AUTO REFRESH WILDFIRES:",
            new Date().toLocaleTimeString()
        );

        void loadWildfires(true);

    }, [loadWildfires]);

    useEffect(() => {

        if (!enabled) return;

        void loadWildfires();

    }, [
        enabled,
        loadWildfires,
    ]);

    useAutoRefresh({
        enabled,
        interval: CACHE.WILDFIRES,
        callback: refreshWildfires,
    });

    return {
        wildfires,
        loading,
        error,
        refetch: loadWildfires,
    };

}