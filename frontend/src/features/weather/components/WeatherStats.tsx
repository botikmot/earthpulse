"use client";

import {
    Thermometer,
    Droplets,
    Wind,
    Eye,
} from "lucide-react";

import { StatCard } from "@/components/common/StatCard";

import type { Weather } from "@/types/weather";

import {
    getHumidityDescription,
    getWindDescription,
    getVisibilityDescription,
} from "@/utils/weather";

type Props = {
    weather: Weather;
};

export function WeatherStats({
    weather,
}: Props) {


    return (

        <div className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <StatCard
                title="Temperature"
                value={`${weather.temperature.toFixed(1)}°`}
                subtitle={`Feels like ${weather.feelsLike.toFixed(1)}°`}
                icon={Thermometer}
                variant="weather"
            />

            <StatCard
                title="Humidity"
                value={`${weather.humidity}%`}
                subtitle={getHumidityDescription(weather.humidity)}
                icon={Droplets}
                variant="weather"
            />

            <StatCard
                title="Wind Speed"
                value={`${weather.windSpeed.toFixed(1)} km/h`}
                subtitle={getWindDescription(weather.windSpeed)}
                icon={Wind}
                variant="weather"
            />

            <StatCard
                title="Visibility"
                value={`${(weather.visibility / 1000).toFixed(1)} km`}
                subtitle={getVisibilityDescription(weather.visibility)}
                icon={Eye}
                variant="weather"
            />

        </div>

    );

}