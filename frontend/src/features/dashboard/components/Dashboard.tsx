"use client";

import { WeatherCardContainer } from "@/features/weather/components/WeatherCardContainer";
import { LatestEarthquakeContainer } from "@/features/earthquakes/components/LatestEarthquakeContainer";
import { PageContainer } from "@/components/layout/PageContainer";
import { PageHeader } from "@/components/layout/PageHeader";
import { DashboardStats } from "./DashboardStats";
import { RecentActivityCard } from "./RecentActivityCard";
import { useLocationStore } from "@/stores/location.store";
import { HeroSection } from "@/components/common/HeroSection";
import { PulseLine } from "@/components/effects/PulseLine";

export function Dashboard() {

    const location =
            useLocationStore(
                (state) => state.location
            );

    return (

        <PageContainer>
            <PageHeader
                title="Dashboard"
                description="Centralized monitoring of earthquakes, weather, wildfires, air quality, and ISS activity."
                badge={
                    <div className="flex items-center gap-2 rounded-full bg-green-50 px-3 py-1">
                        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs font-semibold text-green-700">
                            LIVE
                        </span>
                    </div>
                }
            />

            <HeroSection 
                background="from-blue-600/10 via-green-500/10 to-transparent"
                title="EarthPulse"
                subtitle="Real-Time Environmental Monitoring"
                description="Monitor earthquakes, weather, wildfires, air quality, and the International Space Station from one unified dashboard."
                animation={(
                    <PulseLine
                        className="
                            h-24
                            w-full
                            text-sky-500
                        "
                    />
                )}
            />

            <DashboardStats />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <WeatherCardContainer
                    latitude={location?.latitude}
                    longitude={location?.longitude}
                    city={location?.city}
                />
                <LatestEarthquakeContainer />
            </div>

            <RecentActivityCard />

        </PageContainer>

    );

}