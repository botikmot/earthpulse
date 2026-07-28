"use client";

import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/layout/PageHeader";
import { useSearchParams } from "next/navigation";
import { FullWorldMap } from "@/features/map/components/FullWorldMap";
import { LiveMapLegend } from "@/features/map/components/LiveMapLegend";
import { LiveMapControls } from "@/features/map/components/LiveMapControls";
import { RecentMapEvents } from "@/features/map/components/RecentMapEvents";

export default function LiveMapPage() {

    const searchParams = useSearchParams();
    const selectedEarthquakeId = searchParams.get("earthquake");

    return (

        <div className="p-8 space-y-8">

            <PageHeader
                title="Live Map"
                description="Explore real-time earthquakes, weather, wildfires and environmental events."
                badge={
                    <Badge variant="destructive">
                        LIVE
                    </Badge>
                }
            />

            <LiveMapLegend />

            <FullWorldMap selectedEarthquakeId={selectedEarthquakeId}/>

            <LiveMapControls />

            <RecentMapEvents />

        </div>

    );

}