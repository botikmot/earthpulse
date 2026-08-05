"use client";

import { Badge } from "@/components/ui/badge";

import { PageContainer } from "@/components/layout/PageContainer";
import { PageHeader } from "@/components/layout/PageHeader";

import { Loading } from "@/components/ui/Loading";
import { ErrorMessage } from "@/components/ui/ErrorMessage";

import { useWildfires } from "@/hooks/useWildfires";

import { WildfireStats } from "@/features/wildfires/components/WildfireStats";
import { WildfireSummaryBanner } from "@/features/wildfires/components/WildfireSummaryBanner";
import { WildfireInsights } from "@/features/wildfires/components/WildfireInsights";
import { WildfireTable } from "@/features/wildfires/components/WildfireTable";
import { HeroSection } from "@/components/common/HeroSection";
import { WildfireAnimation } from "@/components/effects/WildfireAnimation";

export default function WildfiresPage() {


    const {
        wildfires,
        loading,
        error,
        refetch,
    } = useWildfires();

    if (loading) {
        return (
            <Loading
                text="Loading wildfire data..."
            />
        );
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

                title="Wildfires"

                description="Monitor active wildfire events around the world."

                badge={

                    <Badge variant="destructive">

                        LIVE

                    </Badge>

                }

            />

            <HeroSection
                background="
                    from-red-100
                    via-orange-100
                    to-red-500
                    dark:from-red-950/30
                    dark:via-orange-950/20
                    dark:to-amber-950/20
                "
                title="Wildfire Monitoring"
                subtitle="Real-Time Wildfire Intelligence"
                description="
                    Monitor active wildfire incidents, affected regions,
                    burned areas, fire severity, and satellite-detected
                    hotspots across the globe.
                "
                animation={
                    <WildfireAnimation />
                }
                
            />

            <WildfireStats
                wildfires={wildfires}
            />

            <WildfireSummaryBanner
                wildfires={wildfires}
            />

            <WildfireInsights
                wildfires={wildfires}
            />

            <WildfireTable
                wildfires={wildfires}
                refetch={refetch}
            />

        </PageContainer>

    );

}