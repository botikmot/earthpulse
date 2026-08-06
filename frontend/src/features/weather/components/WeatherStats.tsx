"use client";

import {
    Thermometer,
    Droplets,
    Wind,
    Eye,
} from "lucide-react";

import { StatCard } from "@/components/common/StatCard";
import type { Weather } from "@/types/weather";
import { useSettingsStore } from "@/stores/settings.store";
import { 
    formatTemperature,
    formatWindSpeed,
    formatVisibility,
 } from "@/utils/unit";


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

    const {
        temperatureUnit,
        distanceUnit,
    } = useSettingsStore();

    return (

        <div className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <StatCard
                title="Temperature"
                value={formatTemperature(
                    weather.temperature,
                    temperatureUnit
                )}
                subtitle={`Feels like ${formatTemperature(weather.feelsLike, temperatureUnit)}`}
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
                value={formatWindSpeed(
                    weather.windSpeed,
                    distanceUnit
                )}
                subtitle={getWindDescription(weather.windSpeed)}
                icon={Wind}
                variant="weather"
            />

            <StatCard
                title="Visibility"
                value={formatVisibility(
                    weather.visibility,
                    distanceUnit
                )}
                subtitle={getVisibilityDescription(weather.visibility)}
                icon={Eye}
                variant="weather"
            />

        </div>

    );

}