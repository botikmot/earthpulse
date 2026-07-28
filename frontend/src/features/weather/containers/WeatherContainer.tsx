"use client";

import { Loading } from "@/components/ui/Loading";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import { useWeather } from "@/hooks/useWeather";
import { WeatherStats } from "../components/WeatherStats";
import { WeatherSummaryBanner } from "../components/WeatherSummaryBanner";
import { WeatherForecastSection } from "../components/WeatherForecastSection";
import { WeatherInsights } from "../components/WeatherInsights";
import { WeatherSunCard } from "../components/WeatherSunCard";
import { useLocationStore } from "@/stores/location.store";
import { useWeatherStore } from "@/stores/weather.store";
import { formatRelativeTime } from "@/lib/date";

export function WeatherContainer() {

    const lastUpdated =
        useWeatherStore(
            (state) => state.lastUpdated
        );

    const location =
        useLocationStore(
            (state) => state.location
        );

    const locationLoading =
        useLocationStore(
            (state) => state.loading
        );

    const {
        weather,
        loading,
        error,
    } = useWeather({
        latitude: location?.latitude,
        longitude: location?.longitude,
        enabled: !!location,
    });

    
    if (locationLoading || loading) {
        return (
            <Loading
                text="Loading weather..."
            />
        );
    }

    if (error || !weather) {
        return (
            <ErrorMessage
                message={error ?? "Unable to load weather."}
            />
        );
    }

    

    return (

        <>
            <WeatherStats
                weather={weather}
            />

            <div className="mt-6">
                <div className="mb-3 flex items-center justify-end">
                    <p className="text-xs text-muted-foreground">
                        Updated{" "}
                        {lastUpdated
                            ? formatRelativeTime(lastUpdated)
                            : "—"}
                    </p>
                </div>

                <WeatherSummaryBanner
                    weather={weather}
                    location={location?.city ?? "Butuan"}
                />

            </div>

            <WeatherForecastSection
                forecast={weather.forecast}
            />

            <WeatherInsights weather={weather}/>
            <WeatherSunCard
                sunrise={weather.sunrise}
                sunset={weather.sunset}
            />

        </>

    );

}