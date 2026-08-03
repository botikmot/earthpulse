"use client";

import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/layout/PageHeader";
import { useSearchParams } from "next/navigation";
import { FullWorldMap } from "@/features/map/components/FullWorldMap";
import { LiveMapLegend } from "@/features/map/components/LiveMapLegend";
import { PageContainer } from "@/components/layout/PageContainer";

export default function LiveMapPage() {

    const searchParams = useSearchParams();
    const selectedEarthquakeId = searchParams.get("earthquake");
    const selectedWildfireId = searchParams.get("wildfire");
    const focusISS = searchParams.get("iss") === "true";

    return (

        <PageContainer>

            <PageHeader
                title="Live Earth Monitoring"
                description="Monitor earthquakes, weather, air quality, wildfires, and the International Space Station in real time."
                badge={
                    <div className="flex items-center gap-2 rounded-full bg-green-50 px-3 py-1">
                        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs font-semibold text-green-700">
                            LIVE
                        </span>
                    </div>
                }
            />

            <LiveMapLegend />

            <FullWorldMap 
                selectedEarthquakeId={selectedEarthquakeId}
                selectedWildfireId={selectedWildfireId}
                focusISS={focusISS}
            />
        
       </PageContainer>

    );

}