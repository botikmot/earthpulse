"use client";

import { useWeather } from "@/hooks/useWeather";
import { Loading } from "@/components/ui/Loading";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import { WeatherCard } from "./WeatherCard";

type WeatherContainerProps = {
    latitude?: number;
    longitude?: number;
    city?: string;
}

export function WeatherCardContainer({
    latitude,
    longitude,
    city,
}: WeatherContainerProps) {

    const {
        weather,
        loading,
        error,
    } = useWeather({
        latitude,
        longitude,
    });

    if (loading) {
        return <Loading text="Loading weather data..." />;
    }

    if (error) {
        return (
            <ErrorMessage
                message={error}
            />
        )
    }

    if (!weather) {
        return null;
    }

    return (
        <WeatherCard weather={weather} city={city}/>
    );

}