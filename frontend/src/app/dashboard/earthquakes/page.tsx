"use client";

import { PageContainer } from "@/components/layout/PageContainer";

import { EarthquakeStats } from "@/features/earthquakes/components/EarthquakeStats";
import { EarthquakeTable } from "@/features/earthquakes/components/EarthquakeTable";
import { useEarthquakes } from "@/hooks/useEarthquakes";
import { Loading } from "@/components/ui/Loading";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import { EarthquakeSummaryBanner } from "@/features/earthquakes/components/EarthquakeSummaryBanner";
import { HeroSection } from "@/components/common/HeroSection";
import { SeismographCanvas } from "@/components/effects/SeismographCanvas";

export default function EarthquakePage() {

    const {
        earthquakes,
        loading,
        error,
        refetch,
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

    return (

        <PageContainer>

            <HeroSection 
                background="from-orange-50 via-amber-50 to-red-50 dark:from-orange-950/20 dark:via-red-950/10 dark:to-transparent"
                title="Earthquake Monitoring"
                subtitle="Real-Time Seismic Activity"
                description="Monitor earthquakes happening around the globe using live seismic data from the USGS Earthquake API.
                            View magnitudes, depths, locations, and recent seismic events as they happen."
                animation={(
                    <div className="flex items-center justify-center w-full">
                        <SeismographCanvas />
                    </div>
                )}
            />

            <EarthquakeStats earthquakes={earthquakes} />

            <EarthquakeSummaryBanner earthquakes={earthquakes}/>

            <EarthquakeTable earthquakes={earthquakes} refetch={refetch}/>

        </PageContainer>

    );

}