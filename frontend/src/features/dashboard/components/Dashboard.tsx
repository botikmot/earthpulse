"use client";

import { WeatherCardContainer } from "@/features/weather/components/WeatherCardContainer";
import { LatestEarthquakeContainer } from "@/features/earthquakes/components/LatestEarthquakeContainer";
import { PageContainer } from "@/components/layout/PageContainer";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { DashboardStats } from "./DashboardStats";
import { Globe2 } from "lucide-react";
import { MapLegend } from "@/features/map/components/MapLegend";
import { RecentActivityCard } from "./RecentActivityCard";
import EarthquakeWorldMap from "@/features/earthquakes/components/EarthquakeWorldMap";
import { useLocationStore } from "@/stores/location.store";

export function Dashboard() {

    const location =
            useLocationStore(
                (state) => state.location
            );

    return (

        <PageContainer>
            <PageHeader
                title="EarthPulse Dashboard"
                description="Monitor earthquakes, weather conditions,
                    wildfires, air quality, and other
                    Earth events from a single dashboard."
                badge={
                    <div className="flex items-center gap-2 rounded-full bg-green-50 px-3 py-1">
                        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs font-semibold text-green-700">
                            LIVE
                        </span>
                    </div>
                }
            />

            {/* <DashboardGreeting /> */}

            <DashboardStats />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <WeatherCardContainer
                    latitude={location?.latitude}
                    longitude={location?.longitude}
                />
                <LatestEarthquakeContainer />
            </div>

            <RecentActivityCard />

            <section className="mt-6">
                <SectionHeader
                    title="Interactive Earth Map"
                    description="Visualize earthquakes and weather conditions across the world."
                    icon={
                        <Globe2 className="h-6 w-6 text-primary" />
                    }
                />
                
                <MapLegend />

                <div className="mt-4">
                    <EarthquakeWorldMap className="h-[650px]"/>
                </div>
            </section>

        </PageContainer>

    );

}