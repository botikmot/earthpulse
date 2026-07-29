"use client";

import { Badge } from "@/components/ui/badge";

import { PageContainer } from "@/components/layout/PageContainer";
import { PageHeader } from "@/components/layout/PageHeader";

import { EarthquakeStats } from "@/features/earthquakes/components/EarthquakeStats";
import { EarthquakeTable } from "@/features/earthquakes/components/EarthquakeTable";
import { useEarthquakes } from "@/hooks/useEarthquakes";
import { Loading } from "@/components/ui/Loading";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import { EarthquakeInsights } from "@/features/earthquakes/components/EarthquakeInsights";
import { EarthquakeSummaryBanner } from "@/features/earthquakes/components/EarthquakeSummaryBanner";

export default function EarthquakePage() {

    const {
        earthquakes,
        loading,
        refreshing,
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

            <PageHeader

                title="Earthquakes"

                description="Monitor the latest seismic activity around the world."

                badge={

                    <div className="flex items-center gap-3">

                        <Badge variant="destructive">

                            LIVE

                        </Badge>

                            {refreshing && (
                                <span className="text-xs text-muted-foreground flex items-center gap-2">
                                    <span className="animate-spin">
                                        🔄
                                    </span>
                                    Updating...
                                </span>
                            )}
                        </div>
                    }

            />

            <EarthquakeStats earthquakes={earthquakes} />

            <EarthquakeSummaryBanner earthquakes={earthquakes}/>

            <EarthquakeInsights earthquakes={earthquakes}/>

            <EarthquakeTable earthquakes={earthquakes} refetch={refetch}/>

            {/* <EarthquakeMapPreview /> */}

        </PageContainer>

    );

}