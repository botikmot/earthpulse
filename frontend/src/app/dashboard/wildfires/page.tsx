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