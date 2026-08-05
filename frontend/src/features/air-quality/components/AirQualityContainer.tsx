"use client";

import { useAirQuality } from "@/hooks/useAirQuality";
import { Loading } from "@/components/ui/Loading";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
//import { AirQualityBanner } from "./AirQualityBanner";
import { useLocationStore } from "@/stores/location.store";
import { AirQualityStats } from "./AirQualityStats";
import { AirQualityHighlights } from "./AirQualityHighlights";
import { AirQualityAnalysis } from "./AirQualityAnalysis";
import { HeroSection } from "@/components/common/HeroSection";
import { AirQualityAnimation } from "@/components/effects/AirQualityAnimation";

export function AirQualityContainer(){

    const location =
            useLocationStore(
                (state) => state.location
            );

    const locationLoading =
        useLocationStore(
            (state) => state.loading
        );

    const {
        airQuality,
        loading,
        error,
    } = useAirQuality({
        latitude: location?.latitude,
        longitude: location?.longitude,
        city: location?.city,
        country: location?.country
    });


    if (locationLoading || loading) {
        return (
            <Loading
                text="Loading air quality..."
            />
        );
    }

    if(error){
        return (
            <ErrorMessage
                message={error}
            />
        );
    }

    if(!airQuality){
        return null;
    }


    return (
        <div className="space-y-6">

            <HeroSection
                background="
                    from-emerald-50
                    via-teal-50
                    to-cyan-50
                    dark:from-emerald-950/30
                    dark:via-teal-950/20
                    dark:to-cyan-950/20
                "
                title="Air Quality Monitoring"
                subtitle="Real-Time Air Quality Intelligence"
                description="
                    Monitor air quality index, pollutants, visibility,
                    health recommendations, and atmospheric conditions
                    across the globe.
                "
                animation={<AirQualityAnimation />}
                value={airQuality.aqi}
                location={location ?? {city: 'Butuan', country: 'Philippines'}}
                status={airQuality.category}
            />
            <AirQualityStats
                airQuality={airQuality}
            />
            <AirQualityHighlights
                airQuality={airQuality}
            />
            <AirQualityAnalysis
                airQuality={airQuality}
            />
        </div>
    );

}