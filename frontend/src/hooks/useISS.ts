import { useCallback, useEffect } from "react";
import { CACHE } from "@/constants/cache";
import { fetchISS } from "@/services/iss.service";
import { useISSStore } from "@/stores/iss.store";
import { useAutoRefresh } from "./useAutoRefresh";

export function useISS() {

    const {
        iss,
        loading,
        error,
        lastUpdated,
        setISS,
        setLoading,
        setRefreshing,
        setError,

    } = useISSStore();

    const loadISS = useCallback(

        async (force = false) => {

            if (
                !force &&
                iss &&
                lastUpdated &&
                Date.now() - lastUpdated < CACHE.ISS

            ) {
                return;
            }

            try {

                if (iss) {
                    setRefreshing(true);
                } else {
                    setLoading(true);
                }

                setError(null);
                const data = await fetchISS();
                setISS(data);

            } catch (error) {
                console.error(error);
                setError("Failed to load ISS location.");

            } finally {
                setLoading(false);
                setRefreshing(false);

            }

        },

        [
            iss,
            lastUpdated,
            setISS,
            setLoading,
            setRefreshing,
            setError,
        ]

    );

    const refreshISS = useCallback(() => {
        console.log(
            "AUTO REFRESH ISS:",
            new Date().toLocaleTimeString()
        );
        void loadISS(true);

    }, [loadISS]);

    useEffect(() => {

        void loadISS();

    }, [loadISS]);

    useAutoRefresh({
        enabled: true,
        interval: CACHE.ISS,
        callback: refreshISS,
    });

    return {
        iss,
        loading,
        error,
        refetch: loadISS,
    };

}