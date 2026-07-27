import { Badge } from "@/components/ui/badge";

import { PageContainer } from "@/components/layout/PageContainer";
import { PageHeader } from "@/components/layout/PageHeader";

import { EarthquakeStats } from "@/features/earthquakes/components/EarthquakeStats";
import { EarthquakeTable } from "@/features/earthquakes/components/EarthquakeTable";
import { EarthquakeMapPreview } from "@/features/earthquakes/components/EarthquakeMapPreview";

export default function EarthquakePage() {

    return (

        <PageContainer>

            <PageHeader

                title="Earthquakes"

                description="Monitor the latest seismic activity around the world."

                badge={

                    <Badge variant="destructive">

                        LIVE

                    </Badge>

                }

            />

            <EarthquakeStats />

            <EarthquakeTable />

            <EarthquakeMapPreview />

        </PageContainer>

    );

}