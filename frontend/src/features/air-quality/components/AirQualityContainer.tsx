"use client";

import { useAirQuality } from "@/hooks/useAirQuality";
import { Loading } from "@/components/ui/Loading";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import { AirQualityBanner } from "./AirQualityBanner";
import { useLocationStore } from "@/stores/location.store";
import { AirQualityStats } from "./AirQualityStats";
import { AirQualityHighlights } from "./AirQualityHighlights";
import { AirQualityAnalysis } from "./AirQualityAnalysis";

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
            <AirQualityBanner
                airQuality={airQuality}
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