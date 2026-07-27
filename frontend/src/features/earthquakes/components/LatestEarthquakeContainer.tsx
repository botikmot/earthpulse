"use client";

import { useEarthquakes } from "@/hooks/useEarthquakes";
import { Loading } from "@/components/ui/Loading";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import { LatestEarthquakeCard } from "./LatestEarthquakeCard";


export function LatestEarthquakeContainer() {
    const {
        earthquakes,
        loading,
        error,
    } = useEarthquakes();

    if (loading) {
        return <Loading text="Loading earthquakes data..." />;
    }

    if (error) {
        return (
            <ErrorMessage
                message={error}
            />
        );
    }

    const latestEarthquake = earthquakes[0];

    if (!latestEarthquake) {
        return (
            <ErrorMessage
                message="No earthquake data available."
            />
        );
    }

    return (
        <LatestEarthquakeCard earthquake={latestEarthquake} />
    )

}