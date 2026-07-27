import type { Earthquake } from "@/types/earthquake";
import { useEffect, useState } from "react";
import { fetchEarthquakes } from "@/services/earthquake.service";

export function useEarthquakes() {
    const [earthquakes, setEarthquakes] = useState<Earthquake[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadEarthquakes() {
            try {
                setLoading(true);
                setError(null);
                const data = await fetchEarthquakes();
                setEarthquakes(data);
            } catch {
                setError("Failed to load earthquakes.");
            } finally {
                setLoading(false);
            }
    
        }
            loadEarthquakes();

    }, []);

    return {
        earthquakes,
        loading,
        error,
    };

}